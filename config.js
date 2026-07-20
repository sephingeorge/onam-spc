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
  scheduleReady: false,
  scheduleComingSoonMessage: "Program details will be announced soon — stay tuned!",

  // Add/remove/edit entries freely. Grouped by "day" label. This data is
  // only shown once scheduleReady (above) is set to true.
  schedule: [
    {
      day: "Day 1 — Sunday, Sep 13",
      items: [
        { time: "9:00 AM – 9:30 AM", title: "Pookalam Competition", description: "Flower rangoli competition — family & kids categories. Bring your own flowers or use community-provided stock." },
        { time: "9:30 AM – 10:30 AM", title: "Onam Kodi Distribution", description: "Traditional attire photo booth & Onakkodi (new clothes) blessing ceremony." },
        { time: "11:00 AM – 12:30 PM", title: "Tug of War & Kids' Games", description: "Fun games for all age groups — sack race, musical chairs, tug of war." },
        { time: "1:00 PM – 2:30 PM", title: "Onasadya (Grand Feast)", description: "Traditional 20+ dish sadya served on banana leaf. Multiple seating slots — check with volunteers." },
        { time: "5:00 PM – 6:00 PM", title: "Thiruvathira Practice Session", description: "Open practice session for the evening's group dance performance." },
      ],
    },
    {
      day: "Day 2 — Sunday, Sep 13",
      items: [
        { time: "6:00 PM – 6:30 PM", title: "Lighting of the Nilavilakku", description: "Traditional lamp-lighting ceremony to formally open cultural evening." },
        { time: "6:30 PM – 7:15 PM", title: "Thiruvathira Dance", description: "Group performance by community women's association." },
        { time: "7:15 PM – 8:00 PM", title: "Kids' Cultural Program", description: "Dance, song, and skit performances by children of the community." },
        { time: "8:00 PM – 8:30 PM", title: "Pulikali (Tiger Dance)", description: "Guest performance troupe — vibrant body-painted folk dance." },
        { time: "8:30 PM – 9:30 PM", title: "Prize Distribution & Vote of Thanks", description: "Winners of Pookalam & games felicitated; closing remarks by organizing committee." },
      ],
    },
  ],

  // ---------------------------------------------------------------------
  // MAIN ATTRACTIONS
  // Set attractionsReady to false to show a polished "Coming Soon" placeholder
  // instead of the cards below. Flip it to true once `attractions` is filled
  // in with the real highlights — no other changes needed.
  // ---------------------------------------------------------------------
  attractionsReady: false,
  attractionsComingSoonMessage: "Exciting attractions will be revealed soon — stay tuned!",

  // Short highlight cards — icon is any emoji or short text glyph. This data
  // is only shown once attractionsReady (above) is set to true.
  attractions: [
    { icon: "🌼", title: "Pookalam Competition", description: "Intricate flower-rangoli designs by families across the community — judged on creativity and tradition." },
    { icon: "🍛", title: "Grand Onasadya", description: "Authentic 20+ course vegetarian feast served on banana leaves, prepared by community volunteers." },
    { icon: "💃", title: "Thiruvathira & Folk Dances", description: "Traditional Kerala group dance performances by our residents, plus a guest Pulikali troupe." },
    { icon: "🎭", title: "Kids' Cultural Program", description: "Songs, dances, and skits performed by the children of our community." },
    { icon: "🏆", title: "Onam Games & Sports", description: "Tug of war, sack race, musical chairs and more — fun for every age group." },
    { icon: "🪔", title: "Traditional Attire Walk", description: "A festive showcase of Kerala's traditional Onam attire — Kasavu sarees and mundus." },
  ],

  // ---------------------------------------------------------------------
  // SPONSORS
  // tier: "Gold" | "Silver" | "Bronze" (grouping is automatic)
  // logo: path relative to site root, e.g. "assets/sponsors/logo1.png"
  // ---------------------------------------------------------------------
  sponsors: [
    // PLACEHOLDER sponsors — replace name/logo/link, or remove entirely if none yet
    { name: "Green Leaf Supermarket", logo: "assets/sponsors/placeholder-gold.svg", tier: "Gold", link: "#" },
    { name: "Kerala Spice Kitchen", logo: "assets/sponsors/placeholder-gold.svg", tier: "Gold", link: "#" },
    { name: "Palm County Pharmacy", logo: "assets/sponsors/placeholder-silver.svg", tier: "Silver", link: "#" },
    { name: "Sunrise Electricals", logo: "assets/sponsors/placeholder-silver.svg", tier: "Silver", link: "#" },
    { name: "City Bakers", logo: "assets/sponsors/placeholder-bronze.svg", tier: "Bronze", link: "#" },
    { name: "Fresh Flowers Co.", logo: "assets/sponsors/placeholder-bronze.svg", tier: "Bronze", link: "#" },
  ],

  // ---------------------------------------------------------------------
  // ONASADYA CONTRIBUTION
  // Per-person pricing for the Onasadya (feast) ONLY — this is not a
  // general community fund. Other event costs (decorations, cultural
  // programs, prizes, etc.) are covered via sponsorships/stalls, not
  // resident collections. Collection tracking itself happens off-site in
  // a private Google Sheet — this site intentionally does NOT show any
  // collected total or progress bar.
  // ---------------------------------------------------------------------
  onasadya: {
    currencySymbol: "₹",
    priceAdult: 449,   // PLACEHOLDER — per-adult Onasadya price
    priceKid: 249,     // PLACEHOLDER — per-child Onasadya price

    note: "This contribution covers your Onasadya (feast) participation only.",
    transparencyNote: "Other event expenses — decorations, cultural programs, prizes, and more — are covered through sponsorships and stall contributions, not resident collections.",

    // PLACEHOLDER — registration process isn't finalized yet. Once it is,
    // update registrationLink (and text if needed) — e.g. point it at a
    // Google Form instead of the contact section.
    registrationLabel: "How to register",
    registrationLinkText: "Contact the Organizing Committee",
    registrationLink: "#contact",
  },

  // ---------------------------------------------------------------------
  // CONTACT
  // Only an email address is shown on the site (no phone number) — use a
  // generic committee inbox, NOT a personal address.
  // ---------------------------------------------------------------------
  contact: {
    committeeName: "Onam Celebrations Organizing Committee",
    email: "onam.committee@onamatspc.in",     // PLACEHOLDER
  },
};
