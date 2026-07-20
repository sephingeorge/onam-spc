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
    communityName: "Sunrise Palm County",
    eventName: "Onam Celebrations 2026",
    eventTagline: "A community celebration of harvest, culture & togetherness",

    // PLACEHOLDER — human-readable date range shown in the hero section
    dateDisplay: "September 12–13, 2026",

    // PLACEHOLDER — venue text shown under the date
    venue: "Community Clubhouse Lawns, Sunrise Palm County",

    // Countdown target — ISO 8601 date-time string, local time.
    // Format: "YYYY-MM-DDTHH:MM:SS"
    // PLACEHOLDER — set this to the exact start date/time of your event
    countdownTarget: "2026-09-12T09:00:00",
  },

  // ---------------------------------------------------------------------
  // PROGRAM SCHEDULE
  // Add/remove/edit entries freely. Grouped by "day" label.
  // ---------------------------------------------------------------------
  schedule: [
    {
      day: "Day 1 — Saturday, Sep 12",
      items: [
        { time: "7:00 AM – 9:00 AM", title: "Pookalam Competition", description: "Flower rangoli competition — family & kids categories. Bring your own flowers or use community-provided stock." },
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
  // Short highlight cards — icon is any emoji or short text glyph.
  // ---------------------------------------------------------------------
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
  // FUND COLLECTION
  // Intentionally shows ONLY a total + target — no individual names/amounts.
  // ---------------------------------------------------------------------
  fund: {
    collected: 185000,   // PLACEHOLDER — total amount collected so far (INR)
    target: 300000,      // PLACEHOLDER — fundraising target (INR)
    currencySymbol: "₹",
  },

  // ---------------------------------------------------------------------
  // CONTACT
  // Use a generic committee email/phone — NOT a personal number.
  // ---------------------------------------------------------------------
  contact: {
    committeeName: "Onam Celebrations Organizing Committee",
    email: "onam.committee@onamatspc.in",     // PLACEHOLDER
    phone: "+91 98765 43210",                  // PLACEHOLDER — shared/committee number
    whatsappLink: "https://wa.me/919876543210", // PLACEHOLDER
  },
};
