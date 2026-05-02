/**
 * Livery — Train Livery Themes
 *
 * Global colour themes inspired by iconic European train liveries.
 * Each theme overrides the semantic design tokens defined in tokens.css.
 *
 * Apply a theme by setting the `data-theme` attribute on any container
 * (or on `<html>` / `<body>` for a global switch):
 *
 *   <body data-theme="corail"> … </body>
 *   <div data-theme="orient-express"> … </div>
 *
 * Themes are also exported as plain JS objects for use in tooling.
 */

// ─── Trans-Europ-Express Grand Comfort ───────────────────────────────────────
// Crimson red upper body, warm cream lower body and interiors.
// Operated 1957–1988 across Western Europe's premier express routes.
export const themeTransEuropExpress = {
  name: 'Trans-Europ-Express Grand Comfort',
  id:   'tee-grand-comfort',

  // Primitives
  crimson50:  '#fdf2f3',
  crimson100: '#fbe0e2',
  crimson200: '#f6bcc0',
  crimson300: '#ef8c94',
  crimson400: '#e55663',
  crimson500: '#d42b3a',
  crimson600: '#b41c2b',   // ← signature TEE crimson
  crimson700: '#961724',
  crimson800: '#7d131e',
  crimson900: '#6b131d',

  cream50:    '#fdfaf3',
  cream100:   '#f8f0d8',
  cream200:   '#f2e6c4',   // ← signature TEE cream
  cream300:   '#e8d49a',
  cream400:   '#d9bc6a',

  // Semantic overrides
  bgPage:           '#fdfaf3',  // warm cream page background
  bgSurface:        '#ffffff',
  bgInverse:        '#96172400',  // deep crimson
  bgInverseValue:   '#96172a',

  textPrimary:      '#2d0c10',  // near-black with warm red tint
  textSecondary:    '#6b3038',
  textDisabled:     '#b8858c',
  textInverse:      '#fdf2f3',
  textLink:         '#b41c2b',
  textLinkHover:    '#7d131e',

  borderSubtle:     '#f2e6c4',
  borderDefault:    '#e8d49a',
  borderStrong:     '#b41c2b',

  brandPrimary:       '#b41c2b',
  brandPrimaryHover:  '#96172a',
  brandPrimaryActive: '#7d131e',

  colorSuccess: '#2f9e44',
  colorWarning: '#f59f00',
  colorDanger:  '#b41c2b',
  colorInfo:    '#1c7ed6',
}

// ─── Corail ───────────────────────────────────────────────────────────────────
// Light silver-grey body with signature coral-orange doors and ends.
// SNCF's workhorse passenger stock introduced in 1975, still in service today.
export const themeCorail = {
  name: 'Corail',
  id:   'corail',

  // Primitives
  coral50:    '#fff5f0',
  coral100:   '#ffe6d8',
  coral200:   '#ffc9a8',
  coral300:   '#ffa070',
  coral400:   '#f57036',
  coral500:   '#e0540f',   // ← signature Corail orange
  coral600:   '#c24508',
  coral700:   '#a13806',
  coral800:   '#852e06',
  coral900:   '#6e2707',

  silver50:   '#f4f5f6',
  silver100:  '#e8eaec',
  silver200:  '#cdd1d6',
  silver300:  '#b0b7be',   // ← signature Corail silver-grey
  silver400:  '#8c959e',
  silver500:  '#6a7480',
  silver600:  '#505a64',
  silver700:  '#3d4550',

  // Semantic overrides
  bgPage:           '#f4f5f6',  // silver-grey platform
  bgSurface:        '#ffffff',
  bgInverseValue:   '#3d4550',

  textPrimary:      '#1a1d20',
  textSecondary:    '#505a64',
  textDisabled:     '#b0b7be',
  textInverse:      '#ffffff',
  textLink:         '#c24508',
  textLinkHover:    '#a13806',

  borderSubtle:     '#e8eaec',
  borderDefault:    '#cdd1d6',
  borderStrong:     '#e0540f',

  brandPrimary:       '#e0540f',
  brandPrimaryHover:  '#c24508',
  brandPrimaryActive: '#a13806',

  colorSuccess: '#2f9e44',
  colorWarning: '#f59f00',
  colorDanger:  '#f03e3e',
  colorInfo:    '#1c7ed6',
}

// ─── Orient Express ───────────────────────────────────────────────────────────
// Deep midnight navy Wagon-Lits blue, burnished gold lettering and fittings.
// Compagnie Internationale des Wagons-Lits, in service since 1883.
export const themeOrientExpress = {
  name: 'Orient Express',
  id:   'orient-express',

  // Primitives
  navy50:    '#f0f3fa',
  navy100:   '#dce3f4',
  navy200:   '#b6c3e7',
  navy300:   '#8199d4',
  navy400:   '#4e6cbc',
  navy500:   '#2a4a99',
  navy600:   '#1c3680',   // ← Wagon-Lits midnight blue (lighter tone)
  navy700:   '#1a2e6e',
  navy800:   '#162559',
  navy900:   '#111d47',   // ← deep navy body
  navy950:   '#0c1430',

  gold50:    '#fdfbf0',
  gold100:   '#faf3d0',
  gold200:   '#f3e49a',
  gold300:   '#e9ce5e',
  gold400:   '#d9b432',
  gold500:   '#c5951f',   // ← burnished gold lettering
  gold600:   '#a67a14',
  gold700:   '#87620f',
  gold800:   '#6e4f0c',

  cream50:   '#fdfbf5',
  cream100:  '#f8f3e5',
  cream200:  '#f0e6cc',   // ← Wagon-Lits cream interior

  // Semantic overrides
  bgPage:           '#fdfbf5',  // aged cream parchment
  bgSurface:        '#ffffff',
  bgInverseValue:   '#111d47',

  textPrimary:      '#0c1430',
  textSecondary:    '#2a4a99',
  textDisabled:     '#8199d4',
  textInverse:      '#f0e6cc',
  textLink:         '#c5951f',
  textLinkHover:    '#a67a14',

  borderSubtle:     '#f0e6cc',
  borderDefault:    '#e9ce5e',
  borderStrong:     '#1c3680',

  brandPrimary:       '#1c3680',
  brandPrimaryHover:  '#162559',
  brandPrimaryActive: '#111d47',

  colorSuccess: '#2f9e44',
  colorWarning: '#c5951f',
  colorDanger:  '#f03e3e',
  colorInfo:    '#2a4a99',
}

// ─── TGV 001 (Orange Prototype) ───────────────────────────────────────────────
// Vivid tangerine orange body over dark anthracite bogies and underframe.
// The gas-turbine prototype completed its record-breaking runs in 1972.
export const themeTgv001 = {
  name: 'TGV 001',
  id:   'tgv-001',

  // Primitives
  orange50:    '#fff8f0',
  orange100:   '#ffecd8',
  orange200:   '#ffd1a0',
  orange300:   '#ffb05c',
  orange400:   '#f88a22',
  orange500:   '#e06800',   // ← signature TGV 001 orange
  orange600:   '#c05500',
  orange700:   '#9e4600',
  orange800:   '#823a00',
  orange900:   '#6b3000',

  anthracite50:    '#f3f4f6',
  anthracite100:   '#e5e7eb',
  anthracite200:   '#c8ccd2',
  anthracite300:   '#9ca3ac',
  anthracite400:   '#6e7880',
  anthracite500:   '#4e5862',
  anthracite600:   '#3a4350',
  anthracite700:   '#2c3542',   // ← deep anthracite bogies
  anthracite800:   '#1f2633',
  anthracite900:   '#151c28',

  // Semantic overrides
  bgPage:           '#f3f4f6',  // clean platform grey
  bgSurface:        '#ffffff',
  bgInverseValue:   '#2c3542',

  textPrimary:      '#151c28',
  textSecondary:    '#4e5862',
  textDisabled:     '#9ca3ac',
  textInverse:      '#ffffff',
  textLink:         '#c05500',
  textLinkHover:    '#9e4600',

  borderSubtle:     '#e5e7eb',
  borderDefault:    '#c8ccd2',
  borderStrong:     '#e06800',

  brandPrimary:       '#e06800',
  brandPrimaryHover:  '#c05500',
  brandPrimaryActive: '#9e4600',

  colorSuccess: '#2f9e44',
  colorWarning: '#f59f00',
  colorDanger:  '#f03e3e',
  colorInfo:    '#1c7ed6',
}

// ─── Theme map ────────────────────────────────────────────────────────────────

export const themes = {
  'tee-grand-comfort': themeTransEuropExpress,
  'corail':            themeCorail,
  'orient-express':    themeOrientExpress,
  'tgv-001':           themeTgv001,
}

export default themes
