# Livery

> Rail-inspired design system for Vue 3

Livery is a private component library and design token system built around the visual language of railways — signal aspects, enamel signage, industrial typography, and the geometry of rolling stock.

**Live component documentation → [maximekuntz.github.io/livery](https://maximekuntz.github.io/livery)**

---

## Principles

| Principle | Expression |
|-----------|-----------|
| **Signal clarity** | Every colour communicates intent. Red = stop, amber = caution, green = proceed, blue = information. |
| **Track geometry** | Sharp corners, ruled lines, restrained radii. Nothing decorative without purpose. |
| **Station legibility** | High-contrast type, generous spacing, uppercase labels with wide tracking. |
| **Accessible by default** | WCAG 2.2 AA across all components. Focus rings never suppressed. |

---

## Installation

Livery is distributed as a private package through [GitHub Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).

### 1. Authenticate with GitHub Packages

Create or edit `~/.npmrc` (global) **or** `.npmrc` at the root of your consuming project:

```
@maximekuntz:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

> Generate a token at **GitHub → Settings → Developer settings → Personal access tokens**.
> The token needs the `read:packages` scope.

### 2. Install the package

```bash
npm install @maximekuntz/livery
```

### 3. Import the CSS tokens

In your app entry file (e.g. `main.js`):

```js
import '@maximekuntz/livery/dist/livery.css'
```

---

## Usage

### Register all components globally (Vue plugin)

```js
// main.js
import { createApp } from 'vue'
import { Livery } from '@maximekuntz/livery'
import '@maximekuntz/livery/dist/livery.css'
import App from './App.vue'

createApp(App).use(Livery).mount('#app')
```

All `Lv*` components are then available in every template without an explicit import.

### Import individual components

```js
import { LvButton, LvCard, LvTextInput } from '@maximekuntz/livery'
```

### Use design tokens in CSS

After importing `livery.css`, all tokens are available as CSS custom properties:

```css
.my-element {
  color: var(--color-blue-700);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}
```

### Use design tokens in JS

```js
import { tokens } from '@maximekuntz/livery'

console.log(tokens.color.blue[700])
```

---

## Components

| Component | Description |
|-----------|-------------|
| `LvButton` | Primary interactive element — filled, outlined, ghost, danger variants |
| `LvBadge` | Compact status indicator using signal aspect colours |
| `LvCard` | Surface container with header / body / footer slots |
| `LvDivider` | Track-line separator, horizontal or vertical |
| `LvBaseIcon` | Thin wrapper around icon content |
| `LvClickableIcon` | Icon with an accessible click target |
| `LvTextInput` | Text field with label, hint, and error state |
| `LvBooleanInput` | Checkbox / toggle |
| `LvSelectInput` | Single-value dropdown |
| `LvMultiSelectInput` | Multi-value dropdown |
| `LvDateInput` | Date picker |
| `LvTimeInput` | Time picker |
| `LvDateTimeInput` | Combined date + time picker |
| `LvSectionHeader` | Titled section divider |
| `LvPageHeader` | Page-level title with optional actions slot |
| `LvTable` | Data table with sortable columns |
| `LvPagination` | Page navigation control |
| `LvAlert` | Inline contextual message |
| `LvToast` | Transient notification |
| `LvToastContainer` | Mount point for toast notifications |
| `LvSidebarLayout` | App shell with persistent sidebar |
| `LvTopNavLayout` | App shell with top navigation bar |
| `LvTemplateView` | Content area template |
| `LvNavItem` | Sidebar navigation link |
| `LvNavGroup` | Collapsible group of nav items |
| `LvTopNavItem` | Top-bar navigation link |

---

## Toasts (programmatic)

```js
import { useToast } from '@maximekuntz/livery'

const toast = useToast()
toast.success('Record saved')
toast.error('Something went wrong')
```

Mount `<LvToastContainer />` once near the root of your app.

---

## Design Tokens

All tokens are available as:
- **CSS custom properties** via `livery.css` (`--color-blue-700`, `--space-4`, …)
- **JS named exports** via `import { tokens } from '@maximekuntz/livery'`

Token namespaces: `color` · `typography` · `spacing` · `radius` · `shadow` · `duration` · `easing` · `semantic`

---

## Themes

Livery ships four global colour themes inspired by iconic European train liveries.
They override the semantic design tokens and are activated via a `data-theme` attribute:

```html
<!-- Apply a theme to the whole page -->
<body data-theme="corail"> … </body>

<!-- Or scope it to a single section -->
<div data-theme="orient-express"> … </div>
```

All theme CSS is bundled inside `livery.css` — no extra import required.

| Theme ID | Train | Palette |
|---|---|---|
| `tee-grand-comfort` | Trans-Europ-Express Grand Comfort | Crimson red & warm cream |
| `corail` | SNCF Corail | Coral-orange & silver-grey |
| `orient-express` | Orient Express / Wagon-Lits | Midnight navy & burnished gold |
| `tgv-001` | TGV 001 prototype | Tangerine orange & anthracite |

Theme objects are also available as JS exports for tooling:

```js
import { themes } from '@maximekuntz/livery'

console.log(themes.themeCorail.brandPrimary) // '#e0540f'
```

---

## Development

```bash
npm install
npm run storybook        # component explorer at http://localhost:6006
npm run build            # build the library to dist/
npm run test             # run unit tests
```

### Publishing a new version

1. Bump the version in `package.json`.
2. Create a GitHub Release — the [Publish workflow](.github/workflows/publish.yml) triggers automatically and pushes the new version to GitHub Packages.

---

## Project Structure

```
src/
├── tokens/
│   ├── index.js        # JS design token exports
│   ├── tokens.css      # CSS custom properties
│   └── themes.css      # Train livery theme overrides (tee-grand-comfort, corail, orient-express, tgv-001)
├── components/
│   ├── layout/         # shell & navigation components
│   ├── notification/   # alert, toast, toast container
│   └── Lv*/            # individual components
├── stories/
│   ├── Tokens.stories.js
│   └── Themes.stories.js
└── index.js            # library entry + Vue plugin
.storybook/
├── main.js
├── preview.js
└── manager.js
.github/
└── workflows/
    ├── publish.yml     # publish to GitHub Packages on release
    └── storybook.yml   # deploy Storybook to GitHub Pages
```
