import { color, spacing } from '../tokens/index.js'

export default {
  title: 'Design Tokens/Overview',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Design tokens are the single source of truth for all visual decisions in Livery.
They are available as **JS exports** (\`import { tokens } from 'livery'\`) and
as **CSS custom properties** (loaded via \`tokens.css\`).

Named after railway concepts: *slate* for ballast and concrete,
*signal red / amber / green* for status, *steel blue* for brand and enamel signage.
        `,
      },
    },
  },
}

// Colour swatch story
export const Colours = {
  render: () => ({
    setup() {
      const palettes = {
        Slate:  Object.entries(color).filter(([k]) => k.startsWith('slate')),
        Red:    Object.entries(color).filter(([k]) => k.startsWith('red')),
        Amber:  Object.entries(color).filter(([k]) => k.startsWith('amber')),
        Green:  Object.entries(color).filter(([k]) => k.startsWith('green')),
        Blue:   Object.entries(color).filter(([k]) => k.startsWith('blue')),
      }
      return { palettes }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:2rem;font-family:var(--font-sans)">
        <div v-for="(swatches, name) in palettes" :key="name">
          <h3 style="font-size:var(--text-sm);font-weight:var(--font-semibold);letter-spacing:var(--tracking-widest);text-transform:uppercase;color:var(--text-secondary);margin-bottom:0.75rem">{{ name }}</h3>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
            <div
              v-for="[key, val] in swatches"
              :key="key"
              style="display:flex;flex-direction:column;align-items:center;gap:0.25rem"
            >
              <div :style="{ width:'3rem', height:'3rem', background: val, borderRadius:'var(--radius-md)', border:'1px solid var(--border-subtle)' }" />
              <span style="font-size:0.65rem;color:var(--text-secondary);text-align:center">{{ key }}</span>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

// Spacing scale story
export const Spacing = {
  render: () => ({
    setup() {
      const scale = Object.entries(spacing)
      return { scale }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:0.5rem;font-family:var(--font-sans)">
        <div
          v-for="[key, val] in scale"
          :key="key"
          style="display:flex;align-items:center;gap:1rem"
        >
          <span style="width:3rem;font-size:var(--text-xs);color:var(--text-secondary);text-align:right">{{ key }}</span>
          <div :style="{ width: val || '1px', height:'1.25rem', background:'var(--brand-primary)', borderRadius:'var(--radius-sm)', minWidth: key === '0' ? '1px' : undefined }" />
          <span style="font-size:var(--text-xs);color:var(--text-secondary)">{{ val }}</span>
        </div>
      </div>
    `,
  }),
}
