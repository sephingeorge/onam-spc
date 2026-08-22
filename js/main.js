/* ============================================================
   ONAM CELEBRATION SITE — MAIN SCRIPT
   Reads ONAM_CONFIG (config.js) and renders all dynamic content.
   No dependencies — vanilla JS.
   ============================================================ */

(function () {
  "use strict";

  const cfg = window.ONAM_CONFIG;
  if (!cfg) {
    console.error("ONAM_CONFIG not found — make sure config.js is loaded before main.js");
    return;
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHero(cfg.event);
    renderSchedule(cfg);
    renderAttractions(cfg);
    renderSponsors(cfg.sponsors);
    renderOnasadya(cfg.onasadya);
    renderContact(cfg.contact);
    initCountdown(cfg.event.countdownTarget);
    initNav();
    document.getElementById("footerYear").textContent = new Date().getFullYear();
  });

  // ---------------- HERO ----------------
  function renderHero(event) {
    setText("navBrand", event.eventName);
    setText("communityNameLabel", event.communityName);
    setText("eventNameLabel", event.eventName);
    setText("eventTaglineLabel", event.eventTagline);
    setText("eventDateLabel", "📅 " + event.dateDisplay);
    setText("eventVenueLabel", "📍 " + event.venue);
    setText("footerCommunityName", event.communityName);

    // Keep the live browser tab in sync with config.js. Note: this alone
    // does NOT fix social link previews (WhatsApp etc. don't run JS) — the
    // static tags in index.html's <head> are what those actually read.
    document.title = event.eventName;
    if (event.description) {
      const metaDescription = document.getElementById("metaDescription");
      if (metaDescription) metaDescription.setAttribute("content", event.description);
    }
  }

  // ---------------- SCHEDULE ----------------
  function renderSchedule(cfg) {
    const container = document.getElementById("scheduleContainer");
    container.innerHTML = "";

    const subtitle = document.getElementById("scheduleSubtitle");
    if (!cfg.scheduleReady) {
      if (subtitle) subtitle.hidden = true;
      container.appendChild(buildComingSoon(cfg.scheduleComingSoonMessage, "calendar"));
      return;
    }
    if (subtitle) subtitle.hidden = false;

    (cfg.schedule || []).forEach((day) => {
      const dayEl = document.createElement("div");
      dayEl.className = "schedule-day";

      const heading = document.createElement("h3");
      heading.textContent = day.day;
      dayEl.appendChild(heading);

      (day.items || []).forEach((item) => {
        const row = document.createElement("div");
        row.className = "schedule-item";
        row.innerHTML = `
          <div class="schedule-time">${escapeHtml(item.time)}</div>
          <div class="schedule-details">
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.description || "")}</p>
          </div>
        `;
        dayEl.appendChild(row);
      });

      container.appendChild(dayEl);
    });
  }

  // ---------------- ATTRACTIONS ----------------
  function renderAttractions(cfg) {
    const container = document.getElementById("attractionsContainer");
    container.innerHTML = "";

    const subtitle = document.getElementById("attractionsSubtitle");
    if (!cfg.attractionsReady) {
      if (subtitle) subtitle.hidden = true;
      container.appendChild(buildComingSoon(cfg.attractionsComingSoonMessage, "sparkle"));
      return;
    }
    if (subtitle) subtitle.hidden = false;

    (cfg.attractions || []).forEach((a) => {
      const card = document.createElement("div");
      card.className = "attraction-card";
      card.innerHTML = `
        <div class="attraction-icon">${escapeHtml(a.icon || "🎉")}</div>
        <h3>${escapeHtml(a.title)}</h3>
        <p>${escapeHtml(a.description || "")}</p>
      `;
      container.appendChild(card);
    });
  }

  // ---------------- COMING SOON ----------------
  const COMING_SOON_ICONS = {
    calendar: `
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" class="coming-soon-icon-svg" aria-hidden="true">
        <rect x="12" y="18" width="56" height="50" rx="8" fill="#fff8e7" stroke="#1f7a3f" stroke-width="3"/>
        <rect x="12" y="18" width="56" height="16" rx="8" fill="#8b1e1e" opacity="0.12"/>
        <line x1="12" y1="34" x2="68" y2="34" stroke="#8b1e1e" stroke-width="3"/>
        <line x1="26" y1="10" x2="26" y2="24" stroke="#145229" stroke-width="4" stroke-linecap="round"/>
        <line x1="54" y1="10" x2="54" y2="24" stroke="#145229" stroke-width="4" stroke-linecap="round"/>
        <circle cx="40" cy="51" r="9" fill="#f6c445"/>
        <text x="40" y="55" font-size="13" font-weight="700" text-anchor="middle" fill="#8b1e1e">?</text>
      </svg>`,
    sparkle: `
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" class="coming-soon-icon-svg" aria-hidden="true">
        <path d="M40 8 L46 34 L72 40 L46 46 L40 72 L34 46 L8 40 L34 34 Z" fill="#f6c445" stroke="#8b1e1e" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="63" cy="17" r="5" fill="#1f7a3f" opacity="0.85"/>
        <circle cx="15" cy="63" r="4" fill="#1f7a3f" opacity="0.65"/>
      </svg>`,
  };

  function buildComingSoon(message, icon) {
    const wrap = document.createElement("div");
    wrap.className = "coming-soon";
    wrap.innerHTML = `
      ${COMING_SOON_ICONS[icon] || COMING_SOON_ICONS.calendar}
      <span class="coming-soon-badge">Coming Soon</span>
      <p class="coming-soon-message">${escapeHtml(message || "Details will be announced soon — stay tuned!")}</p>
      <div class="coming-soon-dots"><span></span><span></span><span></span></div>
    `;
    return wrap;
  }

  // ---------------- SPONSORS ----------------
  function renderSponsors(sponsors) {
    const container = document.getElementById("sponsorsContainer");
    container.innerHTML = "";

    if (!sponsors || sponsors.length === 0) {
      container.innerHTML = '<p class="sponsors-empty">Sponsor details coming soon.</p>';
      return;
    }

    const tierOrder = ["Mega", "Gold", "Silver"];
    const grouped = {};
    sponsors.forEach((s) => {
      const tier = tierOrder.includes(s.tier) ? s.tier : "Other";
      grouped[tier] = grouped[tier] || [];
      grouped[tier].push(s);
    });

    [...tierOrder, "Other"].forEach((tier) => {
      if (!grouped[tier] || grouped[tier].length === 0) return;

      const tierEl = document.createElement("div");
      tierEl.className = "sponsor-tier " + tier.toLowerCase();

      const heading = document.createElement("h3");
      heading.textContent = tier + " Sponsors";
      tierEl.appendChild(heading);

      const logosEl = document.createElement("div");
      logosEl.className = "sponsor-logos";

      grouped[tier].forEach((s) => {
        const a = document.createElement("a");
        a.className = "sponsor-logo-card";
        a.href = s.link || "#";
        a.target = "_blank";
        a.rel = "noopener";
        a.title = s.name;
        a.innerHTML = `<img src="${escapeHtml(s.logo)}" alt="${escapeHtml(s.name)} logo" loading="lazy" />`;
        logosEl.appendChild(a);
      });

      tierEl.appendChild(logosEl);
      container.appendChild(tierEl);
    });
  }

  // ---------------- ONASADYA CONTRIBUTION ----------------
  function renderOnasadya(onasadya) {
    if (!onasadya) return;
    const symbol = onasadya.currencySymbol || "₹";

    setText("priceAdult", symbol + Number(onasadya.priceAdult || 0).toLocaleString("en-IN"));
    setText("priceKid", symbol + Number(onasadya.priceKid || 0).toLocaleString("en-IN"));
    setText("onasadyaNote", onasadya.note || "");
    setText("onasadyaTransparency", onasadya.transparencyNote || "");
    setText("onasadyaRegisterLabel", onasadya.registrationLabel || "");

    const registerBtn = document.getElementById("onasadyaRegisterBtn");
    registerBtn.textContent = onasadya.registrationLinkText || "Register";
    registerBtn.href = onasadya.registrationLink || "#contact";
  }

  // ---------------- CONTACT ----------------
  function renderContact(contact) {
    if (!contact) return;
    setText("contactCommittee", contact.committeeName);

    const emailEl = document.getElementById("contactEmail");
    emailEl.textContent = contact.email;
    emailEl.href = "mailto:" + contact.email;
  }

  // ---------------- COUNTDOWN ----------------
  function initCountdown(targetIso) {
    const target = new Date(targetIso).getTime();
    const countdownEl = document.getElementById("countdown");
    const messageEl = document.getElementById("countdownMessage");

    if (isNaN(target)) {
      console.error("Invalid countdownTarget in config.js:", targetIso);
      countdownEl.hidden = true;
      return;
    }

    function tick() {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        countdownEl.hidden = true;
        messageEl.hidden = false;
        messageEl.textContent = "🎉 The celebration has begun — Happy Onam!";
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setText("cdDays", pad(days));
      setText("cdHours", pad(hours));
      setText("cdMinutes", pad(minutes));
      setText("cdSeconds", pad(seconds));
    }

    tick();
    const timer = setInterval(tick, 1000);
  }

  // ---------------- NAV ----------------
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------------- HELPERS ----------------
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function pad(n) {
    return String(Math.max(0, n)).padStart(2, "0");
  }

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
