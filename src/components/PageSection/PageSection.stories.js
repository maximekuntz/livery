import PageSection from './PageSection.vue'
import Button from '../Button/Button.vue'
import BaseCard from '../cards/BaseCard/BaseCard.vue'
import { ICONS } from '../BaseIcon/BaseIcon.vue'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/Layout/PageSection',
  component: PageSection,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [undefined, ...Object.keys(ICONS)],
      description: 'Optional icon shown before the title',
    },
    title: {
      control: 'text',
      description: 'Section heading text',
    },
    description: {
      control: 'text',
      description: 'Supporting text below the title',
    },
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4'],
      description: 'Heading element level',
      table: { defaultValue: { summary: 'h2' } },
    },
    noDivider: {
      control: 'boolean',
      description: 'Remove header divider line',
      table: { defaultValue: { summary: 'false' } },
    },
    compact: {
      control: 'boolean',
      description: 'Tighter vertical padding',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
**PageSection** — Semantic \`<section>\` container for a named, independently navigable content block.

Each \`PageSection\` wraps its heading and body content inside a \`<section aria-labelledby="…">\`,
which creates a navigable landmark for assistive technology. Use it to divide a page into
logically distinct top-level groups (e.g. "Live departures", "Scheduled services", "Notes").

### When to use

| Situation | Component to reach for |
|---|---|
| Top of a page view | \`PageHeader\` |
| **Major named content block with grouped body content** | **\`PageSection\`** ✓ |
| Lightweight section label without a body wrapper | \`SectionHeader\` |
| Header inside a card, panel, drawer, or dialog | \`BaseHeader\` |

### \`PageSection\` vs \`SectionHeader\`

- **\`PageSection\`** — creates a \`<section>\` DOM landmark with \`aria-labelledby\`. Body content
  is rendered inside a flex column with consistent vertical rhythm. Choose this when the
  content group is meaningful enough to appear as a page landmark.
- **\`SectionHeader\`** — heading only; no body wrapper. Choose this when the content beneath
  it is already inside another container (e.g. an aside panel) and you just need a visual divider.

### Layout modifiers

- **\`compact\`** — reduces vertical gap and title font size. Use for secondary or sidebar sections
  where the default spacing feels too heavy.
- **\`noDivider\`** — removes the bottom border from the header. Use when the surrounding layout
  (e.g. card background, column gap) already provides visual separation.

### Custom header slot

The \`#header\` slot replaces the entire built-in heading row, allowing fully custom header
layouts while preserving the \`<section>\` landmark wrapper and body slot.

### Slots

| Slot | Purpose |
|---|---|
| \`header\` | Replaces the entire header row for custom layouts |
| \`actions\` | Buttons pinned to the right of the heading row |
| \`default\` | Body content — stacked with consistent vertical spacing |

### Accessibility

- \`<section>\` is linked to its heading via \`aria-labelledby\`, satisfying WCAG 2.2 landmark labelling.
- Each instance generates a unique \`id\` automatically — no manual wiring needed.
- Heading level defaults to \`h2\`. If \`PageSection\` is nested inside another section, use \`h3\`.
        `,
      },
    },
  },
}

export const Default = {
  args: {
    icon: 'clock',
    title: 'Live departures',
    description: 'Next services from Edinburgh Waverley.',
  },
  render: (args) => ({
    components: { PageSection, BaseCard },
    setup: () => ({ args }),
    template: `
      <PageSection v-bind="args">
        <BaseCard>
          <p style="padding: var(--space-2) 0">
            09:42 · Inverness · On time
            </p>
        </BaseCard>
        <BaseCard>
          <p style="padding: var(--space-2) 0">
            10:05 · Glasgow Queen Street · Delayed 8 min
          </p>
        </BaseCard>
      </PageSection>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Standard usage — a titled, described section wrapping a list of cards. The `icon` and `description` provide additional context at a glance. Multiple `PageSection` blocks stacked on a page each become independently navigable landmarks for screen reader users.',
      },
    },
  },
}

export const WithActions = {
  args: { title: 'Scheduled services' },
  render: (args) => ({
    components: { PageSection, Button, BaseCard },
    setup: () => ({ args }),
    template: `
      <PageSection v-bind="args">
        <template #actions>
          <Button variant="outlined" size="sm" label="Export" />
          <Button size="sm" label="Add service" />
        </template>
        <BaseCard>
          <p style="padding: var(--space-2) 0">
            IC 225 · Edinburgh → London · 09:00
          </p>
        </BaseCard>
      </PageSection>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Section-scoped actions go in the `#actions` slot. They appear pinned to the right of the heading row. Reserve this for actions that apply to the whole section (e.g. exporting, adding an item) — not page-level actions, which belong in `PageHeader`.',
      },
    },
  },
}

export const CustomHeader = {
  name: 'Custom header slot',
  render: () => ({
    components: { PageSection, BaseCard },
    template: `
      <PageSection>
        <template #header>
          <p style="font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide); color: var(--text-secondary);">
            Platform 9 · Departing in 4 min
          </p>
        </template>
        <BaseCard>
          <p style="padding: var(--space-2) 0">
            The Flying Scotsman — London Kings Cross
          </p>
        </BaseCard>
      </PageSection>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Replace the entire header row with the `#header` slot when the built-in title / description / actions layout does not fit the design. The `<section>` landmark wrapper and body slot are preserved regardless.',
      },
    },
  },
}

export const Compact = {
  args: { title: 'Notes', compact: true, noDivider: false },
  render: (args) => ({
    components: { PageSection },
    setup: () => ({ args }),
    template: `
      <PageSection v-bind="args">
        <p style="color: var(--text-secondary); font-size: var(--text-sm)">
          Speed restriction in place between Haymarket and Waverley until further notice.
        </p>
      </PageSection>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Use `compact` for secondary or sidebar sections where the default spacing is too heavy — it reduces the vertical gap and makes the title slightly smaller. Pair with `noDivider` to strip the border if the surrounding layout already provides visual separation.',
      },
    },
  },
}
