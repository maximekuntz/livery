import PageSection from './PageSection.vue'
import Button from '../Button/Button.vue'
import Card from '../Card/Card.vue'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/PageSection',
  component: PageSection,
  tags: ['autodocs'],
  argTypes: {
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
}

export const Default = {
  args: {
    title: 'Live departures',
    description: 'Next services from Edinburgh Waverley.',
  },
  render: (args) => ({
    components: { PageSection, Card },
    setup: () => ({ args }),
    template: `
      <PageSection v-bind="args">
        <Card><p style="padding: var(--space-2) 0">09:42 · Inverness · On time</p></Card>
        <Card><p style="padding: var(--space-2) 0">10:05 · Glasgow Queen Street · Delayed 8 min</p></Card>
      </PageSection>
    `,
  }),
}

export const WithActions = {
  args: { title: 'Scheduled services' },
  render: (args) => ({
    components: { PageSection, Button, Card },
    setup: () => ({ args }),
    template: `
      <PageSection v-bind="args">
        <template #actions>
          <Button variant="outlined" size="sm">Export</Button>
          <Button size="sm">Add service</Button>
        </template>
        <Card><p style="padding: var(--space-2) 0">IC 225 · Edinburgh → London · 09:00</p></Card>
      </PageSection>
    `,
  }),
}

export const CustomHeader = {
  name: 'Custom header slot',
  render: () => ({
    components: { PageSection, Card },
    template: `
      <PageSection>
        <template #header>
          <p style="font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide); color: var(--text-secondary);">
            Platform 9 · Departing in 4 min
          </p>
        </template>
        <Card><p style="padding: var(--space-2) 0">The Flying Scotsman — London Kings Cross</p></Card>
      </PageSection>
    `,
  }),
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
}
