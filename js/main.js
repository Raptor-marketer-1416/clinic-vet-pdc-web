/* Clinic Vet PDC — main.js
   Vanilla, mínimo, defer-able. Sin frameworks. */

(() => {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ---------- Header scroll ---------- */
  const header = $('.site-header');
  if (header && !header.classList.contains('solid')) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile menu ---------- */
  const menuToggle = $('.menu-toggle');
  const mainNav = $('.main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close on link click (mobile)
    $$('a', mainNav).forEach(a => {
      a.addEventListener('click', () => {
        if (mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const reveals = $$('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ---------- Counters animados ---------- */
  const counters = $$('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animate = (el) => {
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      if (reduceMotion) {
        el.textContent = `${prefix}${target.toLocaleString('es-MX', { maximumFractionDigits: decimals })}${suffix}`;
        return;
      }
      const dur = 1600;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = target * eased;
        el.textContent = `${prefix}${value.toLocaleString('es-MX', { maximumFractionDigits: decimals })}${suffix}`;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const cIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { animate(e.target); cIO.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => cIO.observe(el));
  }

  /* ---------- Title fill effect (skill titulo-rellenable) ---------- */
  const fills = $$('[data-fill-title]');
  if (fills.length && 'IntersectionObserver' in window) {
    fills.forEach(el => {
      const text = el.textContent.trim();
      const words = text.split(/\s+/);
      el.innerHTML = words.map(w => `<span class="fill-word">${w}</span>`).join(' ');
      el.classList.add('fill-ready');
    });
    // estilos inline mínimos para el efecto
    const styleId = 'fill-style';
    if (!document.getElementById(styleId)) {
      const s = document.createElement('style');
      s.id = styleId;
      s.textContent = `
        [data-fill-title] .fill-word { color: rgba(31,41,55,0.25); transition: color .4s ease; display: inline-block; }
        [data-fill-title] .fill-word.lit { color: var(--c-primary-dark); }
      `;
      document.head.appendChild(s);
    }
    const handler = () => {
      fills.forEach(el => {
        const rect = el.getBoundingClientRect();
        const wordsEl = $$('.fill-word', el);
        const triggerStart = window.innerHeight * 0.85;
        const triggerEnd = window.innerHeight * 0.35;
        const range = triggerStart - triggerEnd;
        const progress = Math.max(0, Math.min(1, (triggerStart - rect.top) / range));
        const lit = Math.floor(progress * wordsEl.length);
        wordsEl.forEach((w, i) => w.classList.toggle('lit', i < lit));
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
  }

  /* ---------- Tabs (Pilar certificado) ---------- */
  $$('.tabs[role="tablist"]').forEach(tablist => {
    const buttons = $$('.tab-btn', tablist);
    const panels = $$('.tab-panel', tablist.parentElement);
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        buttons.forEach(b => b.setAttribute('aria-selected', b === btn ? 'true' : 'false'));
        panels.forEach(p => p.classList.toggle('active', p.id === target));
      });
    });
  });

  /* ---------- Botones de conversión (skill oficial Raptor Marketer) ---------- */
  const CONVERSION_CONFIG = {
    phone: '+529848036212',
    whatsapp: '529848036212',
    companyName: 'Clinic Vet PDC'
  };

  // ── WhatsApp ─────────────────────────────────────
  const waModal = $('#wa-modal');
  const waForm = $('#wa-form');
  const openWaBtns = $$('.open-wa-modal');
  const waCloseBtn = $('.wa-modal-close');

  const openWaModal = () => {
    if (!waModal) return;
    waModal.classList.add('active');
    waModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => $('#wa-name')?.focus(), 100);
  };
  const closeWaModal = () => {
    if (!waModal) return;
    waModal.classList.remove('active');
    waModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openWaBtns.forEach(btn => {
    btn.addEventListener('click', openWaModal);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openWaModal(); }
    });
  });
  waCloseBtn?.addEventListener('click', closeWaModal);
  waModal?.addEventListener('click', (e) => { if (e.target === waModal) closeWaModal(); });

  waForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#wa-name').value.trim();
    const service = $('#wa-service').value;
    if (!name || !service) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'whatsapp_click', lead_name: name, lead_service: service });
    window.dataLayer.push({
      event: 'user_data_capture',
      user_data: { address: { first_name: name } }
    });

    const message = `Hola, soy ${name}. Me interesa: ${service}.`;
    window.open(
      `https://wa.me/${CONVERSION_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank', 'noopener'
    );
    closeWaModal();
    waForm.reset();
  });

  // ── Llamada (intercepta TODOS los tel: del sitio) ─
  const callModal = $('#call-modal');
  const confirmCallBtn = $('#confirm-call-btn');
  const cancelCallBtn = $('#cancel-call-btn');
  const callTriggers = $$('.floating-call-btn, a[href^="tel:"]');

  const openCallModal = (e) => {
    if (!callModal) return;
    if (e) e.preventDefault();
    callModal.classList.add('active');
    callModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const closeCallModal = () => {
    if (!callModal) return;
    callModal.classList.remove('active');
    callModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  callTriggers.forEach(t => {
    t.addEventListener('click', openCallModal);
    t.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && t.classList.contains('floating-call-btn')) {
        e.preventDefault(); openCallModal(e);
      }
    });
  });
  cancelCallBtn?.addEventListener('click', closeCallModal);
  callModal?.addEventListener('click', (e) => { if (e.target === callModal) closeCallModal(); });

  confirmCallBtn?.addEventListener('click', () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'call_click', destination_number: CONVERSION_CONFIG.phone });
    window.location.href = 'tel:' + CONVERSION_CONFIG.phone;
    closeCallModal();
  });

  // ── Todos los links a WhatsApp del sitio fuerzan apertura del modal ─
  // Esto garantiza captura uniforme de nombre + servicio + evento whatsapp_click
  // para conversiones consistentes en Google Ads (sin importar desde qué CTA se origine)
  $$('a[href*="wa.me/"], a[href*="api.whatsapp.com"]').forEach(link => {
    // Excluir el botón "Ver todas en Google" o links externos no-conversión si los hubiera
    if (link.classList.contains('skip-modal')) return;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openWaModal();
    });
  });

  // ── Esc cierra cualquier modal abierto ─
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (waModal?.classList.contains('active')) closeWaModal();
      if (callModal?.classList.contains('active')) closeCallModal();
    }
  });

  /* ---------- Highlight current day in hours table ---------- */
  $$('.hours-table').forEach(t => {
    const today = new Date().getDay(); // 0 Sun .. 6 Sat
    const map = [6, 0, 1, 2, 3, 4, 5]; // align to rows starting Monday
    const idx = map[today];
    const rows = $$('tbody tr', t);
    if (rows[idx]) rows[idx].classList.add('today');
  });
})();
