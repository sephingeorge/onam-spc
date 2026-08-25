/**
 * ============================================================================
 * ONAM CELEBRATION — YEARLY CONFIG FILE
 * ============================================================================
 * This is the ONLY file you should need to edit each year.
 * Everything below is PLACEHOLDER content — replace with your community's
 * real details. Keep the structure (keys/arrays) the same so the site
 * keeps working; just change the values.
 *
 * After editing, save the file and refresh index.html — no build step needed.
 * ============================================================================
 */

window.ONAM_CONFIG = {

  // ---------------------------------------------------------------------
  // EVENT BASICS
  // ---------------------------------------------------------------------
  event: {
    // PLACEHOLDER — replace with your actual community name
    communityName: "Sattva Park Cubix",
    eventName: "Onam Celebrations 2026",
    eventTagline: "A community celebration of harvest, culture & togetherness",

    // Short one-liner used for the page <meta name="description"> and
    // social share previews (WhatsApp/Facebook/Twitter). Keep it generic —
    // do NOT put the community/builder name here, since these tags are
    // public and get indexed/shared widely.
    // NOTE: social link-preview crawlers (WhatsApp, etc.) don't run
    // JavaScript, so this value must ALSO be kept in sync manually in the
    // static <head> meta tags in index.html — this field is not enough
    // on its own for link previews, only for the live browser tab.
    description: "Join us for our community Onam celebrations 2026 — festivities, food, and fun for everyone!",

    // PLACEHOLDER — human-readable date range shown in the hero section
    dateDisplay: "September 13, 2026",

    // PLACEHOLDER — venue text shown under the date
    venue: "Clubhouse Party Hall, Sattva Park Cubix",

    // Countdown target — ISO 8601 date-time string, local time.
    // Format: "YYYY-MM-DDTHH:MM:SS"
    // PLACEHOLDER — set this to the exact start date/time of your event
    countdownTarget: "2026-09-13T09:00:00",
  },

  // ---------------------------------------------------------------------
  // PROGRAM SCHEDULE
  // Set scheduleReady to false to show a polished "Coming Soon" placeholder
  // instead of the list below (e.g. while details are still being finalized).
  // Flip it to true once `schedule` is filled in with the real program —
  // no other changes needed, the site will switch views automatically.
  // ---------------------------------------------------------------------
  scheduleReady: true,
  scheduleComingSoonMessage: "Program details will be announced soon — stay tuned!",

  // Add/remove/edit entries freely. Grouped by "day" label. This data is
  // only shown once scheduleReady (above) is set to true.
  schedule: [
    {
      day: "Sunday, Sep 13",
      items: [
        { time: "9:30 AM", title: "Inauguration" },
        { time: "10:00 AM", title: "Panchari Melam & Onam Procession" },
        { time: "11:00 AM", title: "Thiruvathira Dance (outside clubhouse)" },
        { time: "11:20 AM", title: "Cultural Programs" },
        // NOTE: original time given was "12:30 AM", corrected to PM since
        // it follows the 11:20 AM slot — verify before publishing.
        { time: "12:30 PM", title: "Sadya & Games" },
      ],
    },
  ],

  // ---------------------------------------------------------------------
  // MAIN ATTRACTIONS
  // Set attractionsReady to false to show a polished "Coming Soon" placeholder
  // instead of the cards below. Flip it to true once `attractions` is filled
  // in with the real highlights — no other changes needed.
  // ---------------------------------------------------------------------
  attractionsReady: true,
  attractionsComingSoonMessage: "Exciting attractions will be revealed soon — stay tuned!",

  // Short highlight cards — icon is any emoji or short text glyph. This data
  // is only shown once attractionsReady (above) is set to true.
  attractions: [
    { icon: "🥁", title: "Panchari Melam & Onam Procession", description: "A vibrant traditional percussion ensemble leads the community procession to kick off the celebrations." },
    { icon: "💃", title: "Thiruvathira Dance", description: "Traditional Kerala group dance performed outside the clubhouse — a graceful highlight of the cultural evening." },
    { icon: "🎭", title: "Cultural Programs", description: "Performances, music, and skits by residents celebrating the spirit of Onam." },
    { icon: "🍛", title: "Onasadya (Grand Feast)", description: "A traditional vegetarian feast served on banana leaf, the heart of any Onam celebration." },
    { icon: "🏆", title: "Onam Games", description: "Fun games and friendly competition for residents of all ages." },
  ],

  // ---------------------------------------------------------------------
  // SPONSORS
  // tier: "Mega" | "Gold" | "Silver" (grouping is automatic, shown in that
  // order). No Bronze tier this year.
  // logo: path relative to site root, e.g. "assets/sponsors/logo1.png"
  // link: sponsor's website — PLACEHOLDER "#" until an actual URL is provided
  // ---------------------------------------------------------------------
  sponsors: [
    { name: "Bellanova", logo: "assets/sponsors/Gold.jpeg", tier: "Gold", link: "https://bellanovamoda.com/" },
    { name: "Pastry Mania", logo: "assets/sponsors/Silver_1.png", tier: "Silver", link: "https://www.instagram.com/pastrymania_devanahalli/" },
    { name: "El Nido", logo: "assets/sponsors/Silver_2.jpeg", tier: "Silver", link: "https://www.elnidoeduplay.com/" },
  ],

  // ---------------------------------------------------------------------
  // ONASADYA CONTRIBUTION
  // Per-person pricing for the Onasadya (feast) ONLY — this is not a
  // general community fund. Other event costs (decorations, cultural
  // programs, prizes, etc.) are covered via sponsorships/stalls and
  // community support. Collection tracking itself happens off-site in
  // a private Google Sheet — this site intentionally does NOT show any
  // collected total or progress bar.
  // ---------------------------------------------------------------------
  onasadya: {
    currencySymbol: "₹",
    priceAdult: 550,   // per-adult Onasadya price
    priceKid: 250,     // per-child Onasadya price

    note: "This contribution covers your Onasadya (feast) participation only.",
    transparencyNote: "Other event expenses — decorations, cultural programs, prizes, and more — are covered through sponsorships, stall contributions, and community support.",

    // PLACEHOLDER — registration process isn't finalized yet. Once it is,
    // update registrationLink (and text if needed) — e.g. point it at a
    // Google Form instead of the contact section.
    registrationLabel: "How to register",
    registrationLinkText: "Contact the Organizing Committee",
    registrationLink: "#contact",
  },

  // ---------------------------------------------------------------------
  // CONTACT
  // personName/phone/email are all optional — leave any as "" to hide it
  // on the site.
  // ---------------------------------------------------------------------
  contact: {
    committeeName: "Onam Celebrations Organizing Committee",
    personName: "Mahesh",
    phone: "+918870503804",
    email: "",
  },
};
