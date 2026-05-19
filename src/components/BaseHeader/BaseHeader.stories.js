import BaseHeader from './BaseHeader.vue'
import Button from '../Button/Button.vue'

export default {
  title: 'Components/Layout/BaseHeader',
  component: BaseHeader,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    label: { control: 'text' },
    icon: { control: 'text' },
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: { defaultValue: { summary: 'h2' } },
    },
    noDivider: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
**BaseHeader** — Compact panel-level header with an optional brand-coloured label.

Use \`BaseHeader\` inside **cards, side panels, drawers, or modals** where you need a
structured title area that is subordinate to the main page heading.

### When to use

| Situation | Component to reach for |
|---|---|
| Top of a full page view | \`PageHeader\` |
| Top of a named content section with body content | \`PageSection\` |
| Standalone section divider without a body wrapper | \`SectionHeader\` |
| Header inside a card, panel, drawer, or dialog | **\`BaseHeader\`** ✓ |

### Key props

- **\`label\`** — Brand-coloured uppercase eyebrow text (e.g. the entity type: "Service", "Route").
  Draws the reader's eye before the title. Leave empty when the context is already clear.
- **\`title\`** — The primary heading text. Also accepts the default slot for richer markup.
- **\`subtitle\`** — A short supporting sentence below the title.
- **\`icon\`** — Optional icon shown to the left of the title, reinforcing the subject.
- **\`tag\`** — HTML heading element (\`h2\`–\`h6\`). Pick the level that maintains a
  correct document outline — for a card inside a \`PageSection\` (h2) you would use \`h3\`.
- **\`noDivider\`** — Remove the bottom divider when the header is inside a card or panel where a divider is not needed.

### Slots

| Slot | Purpose |
|---|---|
| \`default\` | Title content — overrides the \`title\` prop for rich markup |
| \`actions\` | Buttons or icon buttons pinned to the right of the header |

### Accessibility

- The header renders as a \`<header>\` landmark element with a bottom border divider.
- Always set \`tag\` to the correct level to avoid skipped heading ranks.
        `,
      },
    },
  },
}

export const Default = {
  args: {
    label: 'Service',
    title: 'Platform overview',
    subtitle: 'View and manage current platform allocations.',
    icon: 'calendar',
  },
  parameters: {
    docs: {
      description: {
        story: 'A card or panel header with a brand-coloured label, title, icon, and subtitle. The `label` acts as an eyebrow that identifies the entity type before the reader reaches the title.',
      },
    },
  },
}

export const WithActions = {
  render: () => ({
    components: { BaseHeader, Button },
    template: `
      <BaseHeader
        label="Operations"
        title="Calling points"
        subtitle="Manage the calling points for this service."
        icon="settings"
      >
        <template #actions>
          <Button variant="outlined" size="sm" label="Edit" />
          <Button variant="filled" size="sm" label="Add stop" />
        </template>
      </BaseHeader>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Add primary actions (edit, add, delete) via the `#actions` slot. Keep to a maximum of two buttons to avoid crowding the header.',
      },
    },
  },
}


export const WithoutDivider = {
  render: () => ({
    components: { BaseHeader, Button },
    template: `
      <BaseHeader
        label="Operations"
        title="Calling points"
        subtitle="Manage the calling points for this service."
        icon="settings"
        :noDivider="true"
      >
        <template #actions>
          <Button variant="outlined" size="sm" label="Edit" />
          <Button variant="filled" size="sm" label="Add stop" />
        </template>
      </BaseHeader>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'A header without a bottom divider. Useful for headers inside cards or panels where a divider is not needed.',
      },
    },
  },
}
