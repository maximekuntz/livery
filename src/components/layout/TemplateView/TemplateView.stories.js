import TemplateView from './TemplateView.vue'
import PageHeader   from '../../PageHeader/PageHeader.vue'
import Button       from '../../Button/Button.vue'
import BaseBadge    from '../../BaseBadge/BaseBadge.vue'
import SectionHeader from '../../SectionHeader/SectionHeader.vue'

export default {
  title: 'Components/Layout/TemplateView',
  component: TemplateView,
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
**TemplateView** — Standard page-view layout shell.

Place this inside the content area of \`SidebarLayout\` or \`TopNavLayout\`
to give any page a consistent structure: header chrome, an optional toolbar,
a main content area, and an optional aside panel.

### Slots

| Slot | Purpose |
|---|---|
| \`header\` | Full-width header zone — compose \`PageHeader\` here |
| \`toolbar\` | Optional bar below the header: tabs, filters, bulk actions |
| \`default\` | Main scrollable page content |
| \`aside\` | Optional side panel alongside the main content |

### Composition

\`\`\`html
<SidebarLayout>
  <template #sidebar>…</template>

  <TemplateView>
    <template #header>
      <PageHeader eyebrow="Operations">Timetable</PageHeader>
    </template>
    <template #toolbar>
      <Button variant="ghost" size="sm" label="Filter" />
    </template>

    <!-- main content -->
  </TemplateView>
</SidebarLayout>
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
    components: { TemplateView, PageHeader, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 100vh; background: var(--bg-page);">
        <TemplateView v-bind="args">
          <template #header>
            <PageHeader eyebrow="Operations" subtitle="Live overview for the Northern Network.">
              Dashboard
            </PageHeader>
          </template>
          <FakeMetrics />
        </TemplateView>
      </div>
    `,
  }),
  args: { padding: true, maxWidth: 'none', stickyChrome: false },
  parameters: {
    docs: {
      description: {
        story: 'The standard page view: a `PageHeader` in the `#header` slot and content in the default slot. Nest this inside `SidebarLayout` or `TopNavLayout` to complete the application shell.',
      },
    },
  },
}

export const WithToolbar = {
  name: 'With Toolbar',
  render: (args) => ({
    components: { TemplateView, PageHeader, Button, BaseBadge, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 100vh; background: var(--bg-page);">
        <TemplateView v-bind="args">
          <template #header>
            <PageHeader eyebrow="Operations">Incidents</PageHeader>
          </template>
          <template #toolbar>
            <Button size="sm" variant="secondary" label="All" />
            <Button size="sm" variant="ghost" label="Active" />
            <Button size="sm" variant="ghost" label="Resolved" />
            <div style="margin-left: auto; display: flex; gap: var(--space-2);">
              <Button size="sm" variant="primary" label="Report incident" />
            </div>
          </template>
          <FakeMetrics />
        </TemplateView>
      </div>
    `,
  }),
  args: { padding: true, maxWidth: 'none', stickyChrome: false },
  parameters: {
    docs: {
      description: {
        story: 'The `#toolbar` slot renders a secondary bar between the header and content — ideal for tab strips, filter chips, or bulk-action controls. Move per-page primary actions here when there are more than two of them, keeping `PageHeader`\'s `#actions` reserved for the single most important CTA.',
      },
    },
  },
}

export const WithAside = {
  name: 'With Aside',
  render: (args) => ({
    components: { TemplateView, PageHeader, SectionHeader, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 100vh; background: var(--bg-page);">
        <TemplateView v-bind="args">
          <template #header>
            <PageHeader eyebrow="Routes" subtitle="Select a route to see details.">
              Route Map
            </PageHeader>
          </template>

          <FakeMetrics />

          <template #aside>
            <SectionHeader>Route details</SectionHeader>
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
        </TemplateView>
      </div>
    `,
  }),
  args: { padding: true, maxWidth: 'none', asideWidth: '280px', asidePosition: 'right', stickyChrome: false },
  parameters: {
    docs: {
      description: {
        story: 'The `#aside` slot adds a side panel alongside the main content — perfect for detail panels, contextual metadata, or inspection views. The panel scrolls independently and is given an `aria-label` via the `asideLabel` prop. Use `SectionHeader` inside the aside to label grouped information.',
      },
    },
  },
}

export const AsideLeft = {
  name: 'Aside Left',
  render: (args) => ({
    components: { TemplateView, PageHeader, SectionHeader, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 100vh; background: var(--bg-page);">
        <TemplateView v-bind="args">
          <template #header>
            <PageHeader eyebrow="Network">Services</PageHeader>
          </template>

          <template #aside>
            <SectionHeader>Filters</SectionHeader>
            <p style="font-size: var(--text-sm); color: var(--text-secondary); margin: var(--space-3) 0 0;">
              Operator, line, date range…
            </p>
          </template>

          <FakeMetrics />
        </TemplateView>
      </div>
    `,
  }),
  args: { padding: true, maxWidth: 'none', asideWidth: '240px', asidePosition: 'left', stickyChrome: false },
  parameters: {
    docs: {
      description: {
        story: 'Set `asidePosition="left"` to place the aside panel on the left — typical for filter sidebars and navigation trees. The content column always gets the remaining space.',
      },
    },
  },
}

export const StickyChrome = {
  name: 'Sticky Chrome',
  render: (args) => ({
    components: { TemplateView, PageHeader, Button, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 300px; overflow-y: auto; background: var(--bg-page); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
        <TemplateView v-bind="args">
          <template #header>
            <PageHeader eyebrow="Operations" subtitle="Scroll down — the header stays pinned.">
              Sticky header demo
            </PageHeader>
          </template>
          <template #toolbar>
            <Button size="sm" variant="ghost" label="All" />
            <Button size="sm" variant="ghost" label="Active" />
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
        </TemplateView>
      </div>
    `,
  }),
  args: { padding: true, stickyChrome: true },
  parameters: {
    docs: {
      description: {
        story: 'Enable `stickyChrome` to pin the header and toolbar to the top of the scroll container. Use this for long lists or data tables where users need constant access to filters and the page title. The chrome uses `z-index: 100` to stay above scrolling content.',
      },
    },
  },
}

export const Constrained = {
  name: 'Constrained Width',
  render: (args) => ({
    components: { TemplateView, PageHeader, FakeMetrics },
    setup() { return { args } },
    template: `
      <div style="height: 100vh; background: var(--bg-page);">
        <TemplateView v-bind="args">
          <template #header>
            <PageHeader eyebrow="Settings" subtitle="Constrained to 768px, centred.">
              Account settings
            </PageHeader>
          </template>
          <FakeMetrics />
        </TemplateView>
      </div>
    `,
  }),
  args: { padding: true, maxWidth: '768px', stickyChrome: false },
  parameters: {
    docs: {
      description: {
        story: 'Set `maxWidth` to constrain and centre the entire view — header, toolbar, content, and aside — to a readable column width. Suitable for settings pages, forms, and documentation views where a full-width layout feels too sparse.',
      },
    },
  },
}
