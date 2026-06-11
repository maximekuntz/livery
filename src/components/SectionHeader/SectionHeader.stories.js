import SectionHeader from './SectionHeader.vue'
import Button from '../Button/Button.vue'
import { ICONS } from '../BaseIcon/BaseIcon.vue'

export default {
  title: 'Components/Layout/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [undefined, ...Object.keys(ICONS)],
      description: 'Optional icon shown before the title',
    },
    description: { control: 'text' },
    tag: {
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      table: { defaultValue: { summary: 'h2' } },
    },
    loading: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
**SectionHeader** — Standalone section label with an optional description and actions.

Use \`SectionHeader\` when you need a titled divider but do **not** need to wrap the
content below in a semantic \`<section>\` container. It is the lighter-weight alternative
to \`PageSection\` — a pure heading element with no body wrapper.

### When to use

| Situation | Component to reach for |
|---|---|
| Top of a page view | \`PageHeader\` |
| Named content block with grouped body content | \`PageSection\` |
| **Section label inside a panel, aside, or card** | **\`SectionHeader\`** ✓ |
| **Divider between content groups that share a parent container** | **\`SectionHeader\`** ✓ |
| Header inside a card, panel, or dialog | \`BaseHeader\` |

### \`SectionHeader\` vs \`PageSection\`

- **\`SectionHeader\`** — heading + optional description + optional actions. No body wrapper.
  Use when the content beneath it is already wrapped by another container, or when you simply
  need a visual divider without adding another DOM layer.
- **\`PageSection\`** — adds a \`<section aria-labelledby="…">\` wrapper around both the
  heading and the body content. Prefer it when the content group is a meaningful,
  independently navigable landmark.

### Key props

- **\`tag\`** — Heading element level. Maintain a logical outline: if the page \`<h1>\` is a
  \`PageHeader\`, this should be \`h2\` or lower. Inside a \`PageSection\` (h2), use \`h3\`.
- **\`icon\`** — Optional icon to the left of the title.
- **\`description\`** — Short sentence describing what the section contains.

### Slots

| Slot | Purpose |
|---|---|
| \`default\` | Section title text |
| \`actions\` | Buttons or icon buttons pinned to the right of the header |

### Accessibility

- Renders as a \`<div>\` (not a landmark); use it for visual hierarchy, not landmark navigation.
- For a screen-reader-navigable section landmark, use \`PageSection\` instead.
        `,
      },
    },
  },
}

export const Default = {
  render: () => ({
    components: { SectionHeader },
    template: '<SectionHeader>Service information</SectionHeader>',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Minimal usage — a compact uppercase heading that visually divides content. Suitable when the context is self-explanatory and no description or actions are needed.',
      },
    },
  },
}

export const WithDescription = {
  render: () => ({
    components: { SectionHeader },
    template: `
      <SectionHeader description="All scheduled services for the selected date and route.">
        Today's services
      </SectionHeader>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Add a `description` when the section title alone might not fully explain the scope of the content below — particularly useful in dashboards with multiple sections.',
      },
    },
  },
}

export const WithIcon = {
  render: () => ({
    components: { SectionHeader },
    template: `
      <SectionHeader
        icon="calendar"
        description="All scheduled services for the selected date and route."
      >
        Today's services
      </SectionHeader>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'An icon to the left of the title helps users scan a dense page quickly. Use it consistently — either all section headers on a page have icons, or none do.',
      },
    },
  },
}

export const WithActions = {
  render: () => ({
    components: { SectionHeader, Button },
    template: `
      <SectionHeader description="Manage the calling points for this service.">
        Calling points
        <template #actions>
          <Button variant="outlined" size="sm" label="Edit" />
        </template>
      </SectionHeader>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Use the `#actions` slot for section-scoped actions (e.g. editing that specific group of content). For page-level primary actions, use the `#actions` slot of `PageHeader` instead.',
      },
    },
  },
}

export const Loading = {
  render: () => ({
    components: { SectionHeader },
    template: `
      <SectionHeader
        icon="calendar"
        description="Fetching updated service data..."
        :loading="true"
      >
        Today's services
      </SectionHeader>
    `,
  }),
}
