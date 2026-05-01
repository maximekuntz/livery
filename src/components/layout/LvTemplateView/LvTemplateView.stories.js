import LvTemplateView from './LvTemplateView.vue'
import LvPageHeader   from '../../LvPageHeader/LvPageHeader.vue'
import LvButton       from '../../LvButton/LvButton.vue'
import LvBadge        from '../../LvBadge/LvBadge.vue'
import LvSectionHeader from '../../LvSectionHeader/LvSectionHeader.vue'

export default {
  title: 'Layout/TemplateView',
  component: LvTemplateView,
  tags: ['autodocs'],
  argTypes: {
    padding:       { control: 'boolean' },
    maxWidth:      { control: 'text' },
    asideWidth:    { control: 'text' },
    stickyChrome:  { control: 'boolean' },
    asidePosition: { control: 'select', options: ['left', 'right'] },
    asideLabel:    { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**LvTemplateView** — Standard page-view layout shell.

Place this inside the content area of \`LvSidebarLayout\` or \`LvTopNavLayout\`
to give any page a consistent structure: header chrome, an optional toolbar,
a main content area, and an optional aside panel.

### Slots

| Slot | Purpose |
|---|---|
| \`header\` | Full-width header zone — compose \`LvPageHeader\` here |
| \`toolbar\` | Optional bar below the header: tabs, filters, bulk actions |
| \`default\` | Main scrollable page content |
| \`aside\` | Optional side panel alongside the main content |

### Composition

\`\`\`html
<LvSidebarLayout>
  <template #sidebar>…</template>

  <LvTemplateView>
    <template #header>
      <LvPageHeader eyebrow="Operations">Timetable</LvPageHeader>
    </template>
    <template #toolbar>
      <LvButton variant="ghost" size="sm">Filter</LvButton>
    </template>

    <!-- main content -->
  </LvTemplateView>
</LvSidebarLayout>
\`\`\`

**Accessibility**
- \`<main>\` receives \`tabindex="-1"\` for skip-link support
- \`<aside>\` has a configurable \`aria-label\` via the \`asideLabel\` prop
- Sticky chrome uses \`z-index: 100\` to stay above scrolling content
        `,
      },
    },
  },
}

/* ── Shared fixtures ── */

const FakeMetrics = {
  template: `
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: var(--space-4);">
      <div
        v-for="(item, i) in items"
        :key="i"
        style="
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
        "
      >
        <div style="font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide); color: var(--text-tertiary); margin-bottom: var(--space-2);">
          {{ item.label }}
        </div>
        <div style="font-size: var(--text-2xl); font-weight: 700; color: var(--text-primary);">
          {{ item.value }}
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      items: [
        { label: 'Services today',    value: '284' },
        { label: 'On time',           value: '91%' },
        { label: 'Active incidents',  value: '3' },
        { label: 'Passengers',        value: '48 k' },
      ],
    }
  },
}

/* ────────────────────────────────────────────────────────── */

export const Default = {
  name: 'Default',
  render: (args) => ({
    components: { LvTemplateView, LvPageHeader, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Operations" subtitle="Live overview for the Northern Network.">
              Dashboard
            </LvPageHeader>
          </template>
          <FakeMetrics />
        </LvTemplateView>
      </div>
    `,
  }),
  args: { padding: true, maxWidth: 'none', stickyChrome: false },
}

export const WithToolbar = {
  name: 'With Toolbar',
  render: (args) => ({
    components: { LvTemplateView, LvPageHeader, LvButton, LvBadge, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Operations">Incidents</LvPageHeader>
          </template>
          <template #toolbar>
            <LvButton size="sm" variant="secondary">All</LvButton>
            <LvButton size="sm" variant="ghost">Active <LvBadge variant="danger" size="sm" style="margin-left: 4px;">3</LvBadge></LvButton>
            <LvButton size="sm" variant="ghost">Resolved</LvButton>
            <div style="margin-left: auto; display: flex; gap: var(--space-2);">
              <LvButton size="sm" variant="primary">Report incident</LvButton>
            </div>
          </template>
          <FakeMetrics />
        </LvTemplateView>
      </div>
    `,
  }),
  args: { padding: true, maxWidth: 'none', stickyChrome: false },
}

export const WithAside = {
  name: 'With Aside',
  render: (args) => ({
    components: { LvTemplateView, LvPageHeader, LvSectionHeader, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Routes" subtitle="Select a route to see details.">
              Route Map
            </LvPageHeader>
          </template>

          <FakeMetrics />

          <template #aside>
            <LvSectionHeader>Route details</LvSectionHeader>
            <dl style="font-size: var(--text-sm); display: flex; flex-direction: column; gap: var(--space-3); margin: var(--space-4) 0 0;">
              <div>
                <dt style="color: var(--text-tertiary); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Route</dt>
                <dd style="color: var(--text-primary); font-weight: 600; margin: 0;">Northern Line</dd>
              </div>
              <div>
                <dt style="color: var(--text-tertiary); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Status</dt>
                <dd style="color: var(--text-primary); margin: 0;">Good service</dd>
              </div>
              <div>
                <dt style="color: var(--text-tertiary); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Next departure</dt>
                <dd style="color: var(--text-primary); margin: 0; font-family: var(--font-mono);">07:42</dd>
              </div>
            </dl>
          </template>
        </LvTemplateView>
      </div>
    `,
  }),
  args: { padding: true, maxWidth: 'none', asideWidth: '280px', asidePosition: 'right', stickyChrome: false },
}

export const AsideLeft = {
  name: 'Aside Left',
  render: (args) => ({
    components: { LvTemplateView, LvPageHeader, LvSectionHeader, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Network">Services</LvPageHeader>
          </template>

          <template #aside>
            <LvSectionHeader>Filters</LvSectionHeader>
            <p style="font-size: var(--text-sm); color: var(--text-secondary); margin: var(--space-3) 0 0;">
              Operator, line, date range…
            </p>
          </template>

          <FakeMetrics />
        </LvTemplateView>
      </div>
    `,
  }),
  args: { padding: true, maxWidth: 'none', asideWidth: '240px', asidePosition: 'left', stickyChrome: false },
}

export const StickyChrome = {
  name: 'Sticky Chrome',
  render: (args) => ({
    components: { LvTemplateView, LvPageHeader, LvButton, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 300px; overflow-y: auto; background: var(--bg-page); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Operations" subtitle="Scroll down — the header stays pinned.">
              Sticky header demo
            </LvPageHeader>
          </template>
          <template #toolbar>
            <LvButton size="sm" variant="ghost">All</LvButton>
            <LvButton size="sm" variant="ghost">Active</LvButton>
          </template>
          <div style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div
              v-for="n in 12"
              :key="n"
              style="
                background: var(--bg-surface);
                border: 1px solid var(--border-subtle);
                border-radius: var(--radius-md);
                padding: var(--space-4);
                color: var(--text-secondary);
                font-size: var(--text-sm);
              "
            >
              Row {{ n }} — scroll to see the header stick
            </div>
          </div>
        </LvTemplateView>
      </div>
    `,
  }),
  args: { padding: true, stickyChrome: true },
}

export const Constrained = {
  name: 'Constrained Width',
  render: (args) => ({
    components: { LvTemplateView, LvPageHeader, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Settings" subtitle="Constrained to 768px, centred.">
              Account settings
            </LvPageHeader>
          </template>
          <FakeMetrics />
        </LvTemplateView>
      </div>
    `,
  }),
  args: { padding: true, maxWidth: '768px', stickyChrome: false },
}
