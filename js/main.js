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
    renderSchedule(cfg.schedule);
    renderAttractions(cfg.attractions);
    renderSponsors(cfg.sponsors);
    renderFund(cfg.fund);
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
    document.title = event.eventName + " | " + event.communityName;
  }

  // ---------------- SCHEDULE ----------------
  function renderSchedule(schedule) {
    const container = document.getElementById("scheduleContainer");
    container.innerHTML = "";

    (schedule || []).forEach((day) => {
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
  function renderAttractions(attractions) {
    const container = document.getElementById("attractionsContainer");
    container.innerHTML = "";

    (attractions || []).forEach((a) => {
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

  // ---------------- SPONSORS ----------------
  function renderSponsors(sponsors) {
    const container = document.getElementById("sponsorsContainer");
    container.innerHTML = "";

    if (!sponsors || sponsors.length === 0) {
      container.innerHTML = '<p class="sponsors-empty">Sponsor details coming soon.</p>';
      return;
    }

    const tierOrder = ["Gold", "Silver", "Bronze"];
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

  // ---------------- FUND ----------------
  function renderFund(fund) {
    if (!fund) return;
    const symbol = fund.currencySymbol || "₹";
    const collected = Number(fund.collected) || 0;
    const target = Number(fund.target) || 0;
    const percent = target > 0 ? Math.min(100, Math.round((collected / target) * 100)) : 0;

    setText("fundCollected", symbol + collected.toLocaleString("en-IN"));
    setText("fundTarget", symbol + target.toLocaleString("en-IN"));
    setText("fundPercent", percent + "% of target reached");

    const fill = document.getElementById("fundProgressFill");
    // Animate on next tick so CSS transition applies
    requestAnimationFrame(() => {
      fill.style.width = percent + "%";
    });
  }

  // ---------------- CONTACT ----------------
  function renderContact(contact) {
    if (!contact) return;
    setText("contactCommittee", contact.committeeName);

    const emailEl = document.getElementById("contactEmail");
    emailEl.textContent = contact.email;
    emailEl.href = "mailto:" + contact.email;

    const phoneEl = document.getElementById("contactPhone");
    phoneEl.textContent = contact.phone;
    phoneEl.href = "tel:" + contact.phone.replace(/\s+/g, "");

    const waEl = document.getElementById("contactWhatsapp");
    waEl.href = contact.whatsappLink || "#";
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
