/* ═══════════════════════════════════════════════
   PEST CONTROL WEBSITE — SHARED JS
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile Navigation ──
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      hamburger.classList.toggle('is-open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Scroll Reveal Animations ──
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach((el, i) => {
    el.style.setProperty('--delay', i % 6);
    observer.observe(el);
  });

  // ── Chat Widget ──
  const chatBtn = document.querySelector('.chat-widget__btn');
  const chatPanel = document.querySelector('.chat-widget__panel');
  const chatClose = document.querySelector('.chat-widget__close');
  const chatInput = document.querySelector('.chat-widget__input input');
  const chatSend = document.querySelector('.chat-widget__input button');
  const chatMessages = document.querySelector('.chat-widget__messages');

  if (chatBtn && chatPanel) {
    chatBtn.addEventListener('click', () => {
      chatPanel.classList.toggle('open');
    });
    chatClose?.addEventListener('click', () => {
      chatPanel.classList.remove('open');
    });

    const botResponses = {
      'bed bug': "We offer thorough bed bug treatments with heat and targeted applications. Want to schedule an inspection?",
      'termite': "Termites can cause serious damage! We provide free termite inspections. Shall I help you book one?",
      'ant': "Ant infestations are very common. Our barrier treatments keep them out for good. Ready for a free quote?",
      'roach': "We use targeted gel baits and barrier sprays for cockroaches. Want to schedule service?",
      'mouse': "Our rodent control includes exclusion sealing and baiting. Let's get you a free inspection!",
      'rat': "Our rodent control includes exclusion sealing and baiting. Let's get you a free inspection!",
      'spider': "Most spiders are harmless but we can eliminate them! Would you like a free quote?",
      'mosquito': "Our mosquito abatement program treats breeding sites and applies barrier sprays. Want details?",
      'price': "We offer free inspections and competitive pricing! Fill out our quote form or call us directly.",
      'emergency': "We offer same-day emergency service! Please call us directly for fastest response.",
      'default': "Thanks for reaching out! Tell me about your pest issue and I'll point you in the right direction, or call us for immediate help."
    };

    function addBotMessage(text) {
      const msg = document.createElement('div');
      msg.className = 'bot-msg';
      msg.textContent = text;
      chatMessages.appendChild(msg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleChat() {
      const val = chatInput.value.trim().toLowerCase();
      if (!val) return;
      // Show user msg
      const userMsg = document.createElement('div');
      userMsg.className = 'bot-msg';
      userMsg.style.background = '#E8F5E9';
      userMsg.style.borderRadius = '12px 12px 2px 12px';
      userMsg.style.marginLeft = 'auto';
      userMsg.textContent = chatInput.value;
      chatMessages.appendChild(userMsg);
      chatInput.value = '';

      setTimeout(() => {
        let response = botResponses['default'];
        for (const [key, reply] of Object.entries(botResponses)) {
          if (key !== 'default' && val.includes(key)) {
            response = reply;
            break;
          }
        }
        addBotMessage(response);
      }, 600);
    }

    chatSend?.addEventListener('click', handleChat);
    chatInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleChat();
    });
  }

  // ── Pest Search / Identifier ──
  const pestSearchInput = document.querySelector('.pest-search input');
  const pestResults = document.querySelector('.pest-search__results');
  const pests = [
    { name: 'Ants', emoji: '🐜', link: '#ants' },
    { name: 'Termites', emoji: '🪵', link: '#termites' },
    { name: 'Cockroaches', emoji: '🪳', link: '#cockroaches' },
    { name: 'Bed Bugs', emoji: '🛏️', link: '#bedbugs' },
    { name: 'Spiders', emoji: '🕷️', link: '#spiders' },
    { name: 'Mice & Rats', emoji: '🐀', link: '#rodents' },
    { name: 'Mosquitoes', emoji: '🦟', link: '#mosquitoes' },
    { name: 'Wasps & Bees', emoji: '🐝', link: '#wasps' },
    { name: 'Fleas & Ticks', emoji: '🪲', link: '#fleas' },
    { name: 'Silverfish', emoji: '🐛', link: '#silverfish' },
    { name: 'Flies', emoji: '🪰', link: '#flies' },
    { name: 'Earwigs', emoji: '🐛', link: '#earwigs' },
    { name: 'Scorpions', emoji: '🦂', link: '#scorpions' },
    { name: 'Beetles', emoji: '🪲', link: '#beetles' },
    { name: 'Centipedes', emoji: '🐛', link: '#centipedes' },
  ];

  if (pestSearchInput && pestResults) {
    pestSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      if (query.length < 1) {
        pestResults.classList.remove('open');
        return;
      }
      const matches = pests.filter(p => p.name.toLowerCase().includes(query));
      if (matches.length) {
        pestResults.innerHTML = matches.map(p => `
          <a href="${p.link}">
            <span class="emoji">${p.emoji}</span>
            <span>${p.name}</span>
          </a>
        `).join('');
        pestResults.classList.add('open');
      } else {
        pestResults.innerHTML = '<div style="padding: 16px; color: #8A9585;">No pests found. Try another search.</div>';
        pestResults.classList.add('open');
      }
    });
    pestSearchInput.addEventListener('blur', () => {
      setTimeout(() => pestResults.classList.remove('open'), 200);
    });
  }

  // ── Form Validation ──
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = '✓ Submitted!';
      btn.style.background = '#4CAF50';
      setTimeout(() => {
        btn.textContent = origText;
        btn.style.background = '';
        form.reset();
      }, 2500);
    });
  });

  // ── Nav scroll style ──
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (nav) {
      nav.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.15)' : '';
    }
  });

  // ── Mark loaded ──
  document.body.classList.add('loaded');
});
