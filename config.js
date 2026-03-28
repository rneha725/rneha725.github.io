// ─────────────────────────────────────────────────────────────
//  config.js  —  Site-wide configuration
//
//  TO ADD A NEW CATEGORY:
//    1. Add an entry to CATEGORIES below (copy any existing one)
//    2. Create a folder:  notes/<your-key>/
//    3. Add notes inside that folder and register them in notes.js
// ─────────────────────────────────────────────────────────────

const SITE = {
  name:     'Neha.',
  subtitle: 'notes, thoughts & everything in between',
};

// Keys must be lowercase, no spaces (used as folder names too)
const CATEGORIES = {

  personal: {
    label:   'Personal',
    tagline: 'the bits that make me, me',
    color:   '#F07A5A',
  },

  finance: {
    label:   'Finance',
    tagline: 'keeping the numbers honest',
    color:   '#38C9C9',
  },

  professional: {
    label:   'Professional',
    tagline: 'where I spend my weekdays',
    color:   '#9D82F5',
  },

  hustles: {
    label:   'Side Hustles',
    tagline: 'what I build after hours',
    color:   '#F0C040',
  },

  // ── Example: add a new category ──────────────────────────
  // reading: {
  //   label:   'Reading',
  //   tagline: 'books that changed how I think',
  //   color:   '#60C060',
  // },

};
