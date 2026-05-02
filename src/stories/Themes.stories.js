import {
  themeTransEuropExpress,
  themeCorail,
  themeOrientExpress,
  themeTgv001,
} from '../tokens/themes.js'

export default {
  title: 'Design Tokens/Themes',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Global colour themes inspired by iconic European train liveries.

Each theme overrides the semantic design tokens (backgrounds, text, borders, brand colour)
and is applied via a \`data-theme\` attribute on any container element:

\`\`\`html
<!-- Apply theme to entire page -->
<body data-theme="corail"> … </body>

<!-- Or scope it to a single section -->
<div data-theme="orient-express"> … </div>
\`\`\`

After importing \`themes.css\`, the overrides are active:

\`\`\`js
import '@maximekuntz/livery/dist/livery.css'
import '@maximekuntz/livery/dist/themes.css'
\`\`\`

Theme IDs: \`tee-grand-comfort\` · \`corail\` · \`orient-express\` · \`tgv-001\`
        `,
      },
    },
  },
}

// ─── Shared sample card ───────────────────────────────────────────────────────

const SampleCard = {
  props: ['themeId', 'themeMeta'],
  template: `
    <div
      :data-theme="themeId"
      style="
        font-family: var(--font-sans);
        background: var(--bg-page);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        overflow: hidden;
        max-width: 420px;
      "
    >
      <!-- Header bar -->
      <div
        style="
          background: var(--brand-primary);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        "
      >
        <div style="
          width: 36px; height: 36px;
          border-radius: var(--radius-md);
          background: var(--text-inverse);
          opacity: 0.15;
        " />
        <div>
          <div style="font-weight: var(--font-bold); color: var(--text-inverse); font-size: var(--text-md);">
            {{ themeMeta.name }}
          </div>
          <div style="font-size: var(--text-xs); color: var(--text-inverse); opacity: 0.75; letter-spacing: var(--tracking-wide); text-transform: uppercase;">
            data-theme="{{ themeId }}"
          </div>
        </div>
      </div>

      <!-- Body -->
      <div style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem;">

        <!-- Text colours -->
        <div>
          <p style="font-size: var(--text-xs); font-weight: var(--font-semibold); letter-spacing: var(--tracking-widest); text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.5rem;">
            Typography
          </p>
          <p style="color: var(--text-primary); font-size: var(--text-md); margin-bottom: 0.25rem;">Primary text — clear aspect</p>
          <p style="color: var(--text-secondary); font-size: var(--text-sm); margin-bottom: 0.25rem;">Secondary text — platform annotation</p>
          <a href="#" style="color: var(--text-link); font-size: var(--text-sm); text-decoration: none;">Link — timetable reference ↗</a>
        </div>

        <!-- Brand swatches -->
        <div>
          <p style="font-size: var(--text-xs); font-weight: var(--font-semibold); letter-spacing: var(--tracking-widest); text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.5rem;">
            Brand
          </p>
          <div style="display: flex; gap: 0.5rem;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
              <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-md); background: var(--brand-primary);" />
              <span style="font-size: 0.6rem; color: var(--text-secondary);">primary</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
              <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-md); background: var(--brand-primary-hover);" />
              <span style="font-size: 0.6rem; color: var(--text-secondary);">hover</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
              <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-md); background: var(--brand-primary-active);" />
              <span style="font-size: 0.6rem; color: var(--text-secondary);">active</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
              <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-md); background: var(--bg-inverse);" />
              <span style="font-size: 0.6rem; color: var(--text-secondary);">inverse</span>
            </div>
          </div>
        </div>

        <!-- Feedback swatches -->
        <div>
          <p style="font-size: var(--text-xs); font-weight: var(--font-semibold); letter-spacing: var(--tracking-widest); text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.5rem;">
            Feedback
          </p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 0.375rem;">
              <div style="width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--color-success);" />
              <span style="font-size: var(--text-xs); color: var(--text-secondary);">success</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.375rem;">
              <div style="width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--color-warning);" />
              <span style="font-size: var(--text-xs); color: var(--text-secondary);">warning</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.375rem;">
              <div style="width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--color-danger);" />
              <span style="font-size: var(--text-xs); color: var(--text-secondary);">danger</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.375rem;">
              <div style="width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--color-info);" />
              <span style="font-size: var(--text-xs); color: var(--text-secondary);">info</span>
            </div>
          </div>
        </div>

        <!-- Button preview -->
        <div style="display: flex; gap: 0.75rem; align-items: center;">
          <button style="
            background: var(--brand-primary);
            color: var(--text-inverse);
            border: none;
            padding: 0.5rem 1.25rem;
            border-radius: var(--radius-md);
            font-family: var(--font-sans);
            font-size: var(--text-sm);
            font-weight: var(--font-semibold);
            cursor: pointer;
          ">Board train</button>
          <button style="
            background: transparent;
            color: var(--brand-primary);
            border: 1.5px solid var(--brand-primary);
            padding: 0.5rem 1.25rem;
            border-radius: var(--radius-md);
            font-family: var(--font-sans);
            font-size: var(--text-sm);
            font-weight: var(--font-semibold);
            cursor: pointer;
          ">Timetable</button>
        </div>
      </div>
    </div>
  `,
}

// ─── All themes at a glance ───────────────────────────────────────────────────

export const AllThemes = {
  name: 'All themes',
  render: () => ({
    components: { SampleCard },
    setup() {
      const themePairs = [
        { id: themeTransEuropExpress.id, meta: themeTransEuropExpress },
        { id: themeCorail.id,            meta: themeCorail },
        { id: themeOrientExpress.id,     meta: themeOrientExpress },
        { id: themeTgv001.id,            meta: themeTgv001 },
      ]
      return { themePairs }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1rem; font-family: var(--font-sans);">
        <SampleCard
          v-for="t in themePairs"
          :key="t.id"
          :themeId="t.id"
          :themeMeta="t.meta"
        />
      </div>
    `,
  }),
}

// ─── Individual theme stories ─────────────────────────────────────────────────

export const TransEuropExpress = {
  name: 'Trans-Europ-Express Grand Comfort',
  render: () => ({
    components: { SampleCard },
    setup() {
      return { id: themeTransEuropExpress.id, meta: themeTransEuropExpress }
    },
    template: `<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>`,
  }),
}

export const Corail = {
  name: 'Corail',
  render: () => ({
    components: { SampleCard },
    setup() {
      return { id: themeCorail.id, meta: themeCorail }
    },
    template: `<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>`,
  }),
}

export const OrientExpress = {
  name: 'Orient Express',
  render: () => ({
    components: { SampleCard },
    setup() {
      return { id: themeOrientExpress.id, meta: themeOrientExpress }
    },
    template: `<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>`,
  }),
}

export const Tgv001 = {
  name: 'TGV 001',
  render: () => ({
    components: { SampleCard },
    setup() {
      return { id: themeTgv001.id, meta: themeTgv001 }
    },
    template: `<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>`,
  }),
}
