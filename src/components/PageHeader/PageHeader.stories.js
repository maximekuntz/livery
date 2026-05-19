import PageHeader from './PageHeader.vue'
import Button from '../Button/Button.vue'
import BaseBadge from '../BaseBadge/BaseBadge.vue'
import ClickableIcon from '../ClickableIcon/ClickableIcon.vue'
import { ICONS } from '../BaseIcon/BaseIcon.vue'

export default {
  title: 'Components/Layout/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [undefined, ...Object.keys(ICONS)],
      description: 'Optional icon shown before the title',
    },
    eyebrow:  { control: 'text' },
    subtitle: { control: 'text' },
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3'],
      table: { defaultValue: { summary: 'h1' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
**PageHeader** — Top-level page heading. There should be exactly one \`PageHeader\` per page view.

Place it inside \`TemplateView\`'s \`#header\` slot. It renders the page title as an \`<h1>\`
and provides structured zones for navigation context, status metadata, and primary actions.

### When to use

| Situation | Component to reach for |
|---|---|
| **Top of a page view** (one per page) | **\`PageHeader\`** ✓ |
| Header of a content section with body content | \`PageSection\` |
| Standalone section divider without a body wrapper | \`SectionHeader\` |
| Header inside a card, panel, drawer, or dialog | \`BaseHeader\` |

### Composition

\`\`\`html
<TemplateView>
  <template #header>
    <PageHeader eyebrow="GWR · Long-distance" subtitle="Browse scheduled services.">
      Services
    </PageHeader>
  </template>
  <!-- page content -->
</TemplateView>
\`\`\`

### Slots

| Slot | Purpose |
|---|---|
| \`default\` | Page title (rendered as the heading element) |
| \`breadcrumb\` | Navigational trail above the title (links → current page) |
| \`actions\` | Primary page-level CTAs, pinned to the right of the title row |
| \`meta\` | Status badges, tags, or labels below the title |

### Key props

- **\`eyebrow\`** — Small uppercase label above the title for operator, route, or category context (e.g. "GWR · Long-distance"). Replaces the \`breadcrumb\` slot in simpler views.
- **\`subtitle\`** — One-sentence description of what the page contains or enables. Capped at ~60 characters for readability.
- **\`icon\`** — Optional icon reinforcing the page subject. Use sparingly — omit when the title is already self-explanatory.
- **\`tag\`** — Heading element. Keep as \`h1\` (default) unless the header is intentionally placed inside an already-labelled section.

### Accessibility

- Renders as \`<header>\` with a bottom border. The heading is always visible to screen readers.
- Breadcrumb content is announced as part of the header landmark.
- \`meta\` badges should carry text content (not icon-only) for assistive technology.
        `,
      },
    },
  },
}

export const Default = {
  render: () => ({
    components: { PageHeader },
    template: '<PageHeader>Timetable</PageHeader>',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Minimal usage — just a title. Suitable when the surrounding layout (e.g. the sidebar nav item) already provides enough context.',
      },
    },
  },
}

export const WithEyebrowAndSubtitle = {
  render: () => ({
    components: { PageHeader },
    template: `
      <PageHeader
        icon="calendar"
        eyebrow="GWR · Long-distance"
        subtitle="Browse, filter, and export scheduled services across the Great Western main line."
      >
        Services
      </PageHeader>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Use `eyebrow` to surface the operator, route, or category — particularly useful in multi-tenant or multi-network products. `subtitle` gives users a one-line description of what they can do on this page.',
      },
    },
  },
}

export const WithActions = {
  render: () => ({
    components: { PageHeader, Button, ClickableIcon },
    template: `
      <PageHeader
        eyebrow="Platform management"
        subtitle="View and manage current platform allocations."
      >
        Platform overview
        <template #actions>
          <Button variant="outlined" size="md" label="Export" />
          <Button variant="filled"   size="md" label="Add service" />
        </template>
      </PageHeader>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Place primary page-level CTAs in the `#actions` slot. Keep to 1–2 actions — if you need more, consider moving secondary actions to a toolbar strip in `TemplateView`.',
      },
    },
  },
}

export const WithBreadcrumbAndMeta = {
  render: () => ({
    components: { PageHeader, Button, BaseBadge },
    template: `
      <PageHeader
        eyebrow="GWR · 1A23"
        subtitle="London Paddington → Bristol Temple Meads, calling at Reading, Didcot, Swindon, Bath Spa."
      >
        <template #breadcrumb>
          <a href="#" style="color:var(--text-link)">Services</a>
          <span>›</span>
          <span>1A23</span>
        </template>

        Service 1A23

        <template #actions>
          <Button variant="outlined" size="sm" label="Edit" />
          <Button variant="danger"   size="sm" label="Cancel service" />
        </template>
        <template #meta>
          <BaseBadge variant="success" pill label="On time" />
          <BaseBadge variant="default" label="Intercity 125" />
          <BaseBadge variant="info" label="First class available" />
        </template>
      </PageHeader>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Use `#breadcrumb` on detail pages (e.g. a specific service record) to let users navigate back to the list. The `#meta` slot is the right place for status badges, rolling-stock class labels, or other at-a-glance attributes.',
      },
    },
  },
}
