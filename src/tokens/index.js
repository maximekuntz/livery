/**
 * Livery Design Tokens
 * Rail-inspired palette — drawn from signal colours, track materials, and
 * industrial typography found in railway signage and rolling stock.
 */

// ─── Primitives ──────────────────────────────────────────────────────────────

export const color = {
  // Slate — track ballast, concrete platform
  slate50:  '#f8f9fa',
  slate100: '#f1f3f5',
  slate200: '#e9ecef',
  slate300: '#dee2e6',
  slate400: '#ced4da',
  slate500: '#adb5bd',
  slate600: '#6c757d',
  slate700: '#495057',
  slate800: '#343a40',
  slate900: '#212529',
  slate950: '#0d0f11',

  // Signal Red — stop board, danger
  red50:  '#fff5f5',
  red100: '#ffe3e3',
  red200: '#ffc9c9',
  red300: '#ffa8a8',
  red400: '#ff6b6b',
  red500: '#fa5252',
  red600: '#f03e3e',
  red700: '#c92a2a',
  red800: '#a61e1e',
  red900: '#7b1010',

  // Amber — caution, proceed with care
  amber50:  '#fff9db',
  amber100: '#fff3bf',
  amber200: '#ffec99',
  amber300: '#ffe066',
  amber400: '#ffd43b',
  amber500: '#fcc419',
  amber600: '#fab005',
  amber700: '#f59f00',
  amber800: '#e67700',
  amber900: '#d9480f',

  // Green — proceed, clear aspect
  green50:  '#ebfbee',
  green100: '#d3f9d8',
  green200: '#b2f2bb',
  green300: '#8ce99a',
  green400: '#69db7c',
  green500: '#51cf66',
  green600: '#40c057',
  green700: '#2f9e44',
  green800: '#2b8a3e',
  green900: '#1b5e20',

  // Steel Blue — enamel signs, livery stripe
  blue50:  '#e7f5ff',
  blue100: '#d0ebff',
  blue200: '#a5d8ff',
  blue300: '#74c0fc',
  blue400: '#4dabf7',
  blue500: '#339af0',
  blue600: '#228be6',
  blue700: '#1c7ed6',
  blue800: '#1971c2',
  blue900: '#1864ab',

  white: '#ffffff',
  black: '#000000',
}

export const typography = {
  // Geometric grotesque — echoes station signage
  fontFamilySans:  '"Inter", "Helvetica Neue", Arial, sans-serif',
  fontFamilyMono:  '"JetBrains Mono", "Fira Code", monospace',

  fontSizeXs:   '0.75rem',   // 12px
  fontSizeSm:   '0.875rem',  // 14px
  fontSizeMd:   '1rem',      // 16px
  fontSizeLg:   '1.125rem',  // 18px
  fontSizeXl:   '1.25rem',   // 20px
  fontSize2xl:  '1.5rem',    // 24px
  fontSize3xl:  '1.875rem',  // 30px
  fontSize4xl:  '2.25rem',   // 36px

  fontWeightRegular:  '400',
  fontWeightMedium:   '500',
  fontWeightSemibold: '600',
  fontWeightBold:     '700',

  lineHeightTight:  '1.25',
  lineHeightNormal: '1.5',
  lineHeightRelaxed:'1.75',

  letterSpacingTight: '-0.02em',
  letterSpacingNormal: '0',
  letterSpacingWide:   '0.04em',
  letterSpacingWidest: '0.12em', // station nameboards
}

export const spacing = {
  0:   '0',
  1:   '0.25rem',  // 4px
  2:   '0.5rem',   // 8px
  3:   '0.75rem',  // 12px
  4:   '1rem',     // 16px
  5:   '1.25rem',  // 20px
  6:   '1.5rem',   // 24px
  8:   '2rem',     // 32px
  10:  '2.5rem',   // 40px
  12:  '3rem',     // 48px
  16:  '4rem',     // 64px
  20:  '5rem',     // 80px
  24:  '6rem',     // 96px
}

export const radius = {
  none: '0',
  sm:   '0.125rem', // 2px — intentionally tight, industrial feel
  md:   '0.25rem',  // 4px
  lg:   '0.5rem',   // 8px
  xl:   '0.75rem',  // 12px
  full: '9999px',
}

export const shadow = {
  none: 'none',
  sm:   '0 1px 2px 0 rgb(0 0 0 / 0.08)',
  md:   '0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)',
  lg:   '0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)',
  xl:   '0 20px 25px -5px rgb(0 0 0 / 0.10), 0 8px 10px -6px rgb(0 0 0 / 0.10)',
}

export const duration = {
  instant: '0ms',
  fast:    '100ms',
  normal:  '200ms',
  slow:    '350ms',
}

export const easing = {
  linear:    'linear',
  easeIn:    'cubic-bezier(0.4, 0, 1, 1)',
  easeOut:   'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
}

// ─── Semantic aliases ─────────────────────────────────────────────────────────

export const semantic = {
  // Backgrounds
  bgPage:        color.slate50,
  bgSurface:     color.white,
  bgSurfaceRaised: color.white,
  bgOverlay:     color.slate900,
  bgInverse:     color.slate900,

  // Text
  textPrimary:   color.slate900,
  textSecondary: color.slate600,
  textDisabled:  color.slate400,
  textInverse:   color.white,
  textLink:      color.blue700,
  textLinkHover: color.blue900,

  // Border
  borderSubtle:  color.slate200,
  borderDefault: color.slate300,
  borderStrong:  color.slate500,

  // Brand / interactive
  brandPrimary:       color.blue700,
  brandPrimaryHover:  color.blue800,
  brandPrimaryActive: color.blue900,

  // Feedback
  colorSuccess: color.green700,
  colorWarning: color.amber700,
  colorDanger:  color.red600,
  colorInfo:    color.blue600,
}
