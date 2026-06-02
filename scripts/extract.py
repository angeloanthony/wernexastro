#!/usr/bin/env python3
"""
Faithful HTML -> Astro migration extractor for Wernex Pest Control.
- Preserves: title, meta description, canonical, OG tags, JSON-LD schema, body content, URLs.
- Lifts shared nav/footer/widgets/scripts into BaseLayout (single source of truth).
- Each generated .astro page contains ONLY page-specific body content + head props.
Body copy is copied verbatim (no rewriting).
"""
import re, os, json, html

SRC = "/home/claude/wernex_src/wernex1"
OUT = "/home/claude/wernex-astro/src/pages"
os.makedirs(OUT, exist_ok=True)

def read(f):
    with open(os.path.join(SRC, f), encoding="utf-8") as fh:
        return fh.read()

def grab(pattern, s, flags=re.S, group=1, default=""):
    m = re.search(pattern, s, flags)
    return m.group(group).strip() if m else default

def unesc(v):
    # Source HTML attribute values are already entity-encoded (e.g. &amp;).
    # Astro re-encodes when rendering {value} into an attribute, so we decode
    # once here to avoid double-encoding (&amp; -> &amp;amp;).
    return html.unescape(v)

def extract_jsonld(s):
    # Capture the contents of the FIRST application/ld+json script verbatim,
    # then enforce WebP-only on any image URLs it references.
    m = re.search(r'<script type="application/ld\+json">(.*?)</script>', s, re.S)
    return normalize_webp(m.group(1).strip()) if m else None

def extract_body(s):
    # Body-specific content lives between the end of </nav> and the start of <footer class="footer">.
    # Some pages have the nav minified on one line; match the last </nav> before <footer>.
    after_nav = re.split(r'</nav>', s, maxsplit=1)
    rest = after_nav[1] if len(after_nav) > 1 else s
    body = re.split(r'<footer class="footer">', rest, maxsplit=1)[0]
    return normalize_webp(body.strip())

def normalize_webp(s):
    # Enforce WebP-only for CONTENT images. Favicons / apple-touch-icon / manifest
    # are intentionally left in their standard formats (ICO/PNG), but those live in
    # the layout head, not in page bodies, so body content is safely normalized here.
    return re.sub(r'(images/[^"\'\s]+?)\.(png|jpe?g|gif)\b', r'\1.webp', s)

def active_nav(s):
    # Determine which top nav link has class="active"
    m = re.search(r'<a href="([^"]+)"[^>]*class="active"', s)
    if not m:
        # check reverse order class then href
        m = re.search(r'class="active"[^>]*href="([^"]+)"', s)
    return m.group(1) if m else ""

def og_tags(s):
    tags = {}
    for prop in ["og:title","og:description","og:type","og:url","og:locale","og:site_name"]:
        m = re.search(r'<meta property="%s" content="([^"]*)"' % re.escape(prop), s)
        if m:
            tags[prop] = m.group(1)
    return tags

def astro_str(v):
    # Produce a safe single-quoted Astro/JS string literal.
    return "'" + v.replace("\\", "\\\\").replace("'", "\\'") + "'"

files = sorted(f for f in os.listdir(SRC) if f.endswith(".html"))
manifest = []

for f in files:
    s = read(f)
    title = grab(r'<title>(.*?)</title>', s)            # rendered via set:html -> keep encoded
    desc  = unesc(grab(r'<meta name="description" content="(.*?)">', s, flags=re.S))
    canonical = grab(r'<link rel="canonical" href="(.*?)">', s)
    og = {k: unesc(v) for k, v in og_tags(s).items()}   # rendered as attributes -> decode
    jsonld = extract_jsonld(s)
    body = extract_body(s)
    active = active_nav(s)

    # Map filename -> output astro filename (preserve .html URL exactly via file-based routing).
    # index.html -> index.astro (served at /). Others keep literal "name.html" via [name].html pattern:
    # Astro supports pages ending in .html by naming the file "name.html.astro".
    if f == "index.html":
        out_name = "index.astro"
        url_path = "/"
    else:
        base = f[:-5]  # strip .html
        # With build.format:'file', a page named "about.astro" emits "/about.html".
        # So the .astro filename must NOT include the .html (Astro adds it).
        out_name = base + ".astro"
        url_path = "/" + f

    # Build frontmatter
    fm = ["---", "import BaseLayout from '../layouts/BaseLayout.astro';", ""]
    fm.append("const title = " + astro_str(title) + ";")
    fm.append("const description = " + astro_str(desc) + ";")
    fm.append("const canonical = " + astro_str(canonical) + ";")
    fm.append("const active = " + astro_str(active) + ";")
    # OG overrides (only include keys that differ from defaults; pass all explicitly for fidelity)
    og_obj = "{ " + ", ".join("%s: %s" % (json.dumps(k), astro_str(v)) for k, v in og.items()) + " }"
    fm.append("const og = " + og_obj + ";")
    if jsonld:
        # Store JSON-LD as a raw string passed to layout, injected with set:html (verbatim).
        # Use a template literal; escape backticks and ${.
        esc = jsonld.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        fm.append("const schema = `" + esc + "`;")
    else:
        fm.append("const schema = null;")
    fm.append("---")
    frontmatter = "\n".join(fm)

    page = (
        frontmatter
        + "\n<BaseLayout title={title} description={description} canonical={canonical} og={og} schema={schema} active={active}>\n"
        + body
        + "\n</BaseLayout>\n"
    )

    with open(os.path.join(OUT, out_name), "w", encoding="utf-8") as fh:
        fh.write(page)

    manifest.append((f, out_name, url_path, title))

print("Converted %d pages:" % len(manifest))
for src, out, url, title in manifest:
    print("  %-48s -> %-44s  (%s)" % (src, out, url))
