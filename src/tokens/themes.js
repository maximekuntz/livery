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
  name: 'Trans-Europ-Express',
  id:   'tee',

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
// Silver-grey carriage body, dark slate window band, orange doors, green roof stripe.
// SNCF's workhorse passenger stock introduced in 1975, still in service today.
export const themeCorail = {
  name: 'Corail',
  id:   'corail',

  // Primitives — SNCF Corail livery colours
  orange50:    '#fff5f0',
  orange100:   '#fde0cc',
  orange200:   '#fac09a',
  orange300:   '#f59862',
  orange400:   '#ef7a3c',
  orange500:   '#e66422',   // ← signature Corail orange (doors)
  orange600:   '#c44d18',
  orange700:   '#a33e10',
  orange800:   '#83310d',
  orange900:   '#6a280a',

  silver50:    '#eef2f1',
  silver100:   '#dde5e2',
  silver200:   '#ced6d3',   // ← lower carriage body grey
  silver300:   '#b4c0bc',
  silver400:   '#9ab0ab',
  silver500:   '#7a9490',
  silver600:   '#5e7a76',

  slate50:     '#f0f2f4',
  slate100:    '#d8dde2',
  slate200:    '#b4bec7',
  slate300:    '#8a99a6',
  slate400:    '#617280',
  slate500:    '#404954',   // ← window-band slate
  slate600:    '#2e3540',
  slate700:    '#1a1d20',

  green50:     '#edf8f0',
  green100:    '#cfecd5',
  green200:    '#a0d9ab',
  green300:    '#6ac479',
  green400:    '#44b558',
  green500:    '#3aab50',   // ← green roof stripe
  green600:    '#2d8b3f',
  green700:    '#1f6e2f',

  // Semantic overrides
  bgPage:           '#ced6d3',   // silver-grey carriage body
  bgSurface:        '#ffffff',
  bgInverseValue:   '#404954',   // slate window band

  textPrimary:      '#1a1d20',
  textSecondary:    '#404954',
  textDisabled:     '#9daaa6',
  textInverse:      '#ffffff',
  textLink:         '#e66422',
  textLinkHover:    '#c44d18',

  borderSubtle:     '#dde5e2',
  borderDefault:    '#9ab0ab',
  borderStrong:     '#e66422',

  brandPrimary:       '#e66422',   // Corail orange — doors
  brandPrimaryHover:  '#c44d18',
  brandPrimaryActive: '#a33e10',

  colorSuccess: '#3aab50',   // green roof stripe
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
export const themeTgvSudEst = {
  name: 'TGV Sud Est',
  id:   'tgv-sud-est',

  // Primitives
  orange50:    '#fff8f0',
  orange100:   '#ffecd8',
  orange200:   '#ffd1a0',
  orange300:   '#ffb05c',
  orange400:   '#f88a22',
  orange500:   '#e06800',   // ← signature TGV Sud Est orange
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
  'tee':               themeTransEuropExpress,
  'corail':            themeCorail,
  'orient-express':    themeOrientExpress,
  'tgv-sud-est':       themeTgvSudEst,
}

export default themes
