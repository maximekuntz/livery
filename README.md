# Livery

> Rail-inspired design system for Vue 3

Livery is a component library and design token system built around the visual language of railways — signal aspects, enamel signage, industrial typography, and the geometry of rolling stock.

---

## Principles

| Principle | Expression |
|-----------|-----------|
| **Signal clarity** | Every colour communicates intent. Red = stop, amber = caution, green = proceed, blue = information. |
| **Track geometry** | Sharp corners, ruled lines, restrained radii. Nothing decorative without purpose. |
| **Station legibility** | High-contrast type, generous spacing, uppercase labels with wide tracking. |
| **Accessible by default** | WCAG 2.2 AA across all components. Focus rings never suppressed. |

---

## Getting Started

```bash
npm install
npm run storybook   # component explorer at http://localhost:6006
npm run build       # build the library
```

---

## Project Structure

```
src/
├── tokens/
│   ├── index.js        # JS design token exports
│   └── tokens.css      # CSS custom properties
├── components/
│   ├── LvButton/
│   ├── LvBadge/
│   ├── LvCard/
│   └── LvDivider/
├── stories/
│   └── Tokens.stories.js
└── index.js            # library entry + Vue plugin
.storybook/
├── main.js
├── preview.js
└── manager.js
```

---

## Using the Library

### As a Vue plugin

```js
import { createApp } from 'vue'
import { Livery } from './src/index.js'
import './src/tokens/tokens.css'

createApp(App).use(Livery).mount('#app')
```

### Individual imports

```js
import { LvButton, LvBadge, LvCard } from './src/index.js'
```

---

## Components

| Component | Description |
|-----------|-------------|
| `LvButton` | Primary interactive element — filled, outlined, ghost, danger variants |
| `LvBadge` | Compact status indicator using signal aspect colours |
| `LvCard` | Surface container with header / body / footer slots |
| `LvDivider` | Track-line separator, horizontal or vertical |

---

## Design Tokens

All tokens available as CSS custom properties (`--color-blue-700`, `--space-4`, etc.) and as JS named exports.

Token namespaces: `color` · `typography` · `spacing` · `radius` · `shadow` · `duration` · `easing` · `semantic`" 
