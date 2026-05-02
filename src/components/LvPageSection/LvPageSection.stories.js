import LvPageSection from './LvPageSection.vue'
import LvButton from '../LvButton/LvButton.vue'
import LvCard from '../LvCard/LvCard.vue'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/PageSection',
  component: LvPageSection,
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
    components: { LvPageSection, LvCard },
    setup: () => ({ args }),
    template: `
      <LvPageSection v-bind="args">
        <LvCard><p style="padding: var(--space-2) 0">09:42 · Inverness · On time</p></LvCard>
        <LvCard><p style="padding: var(--space-2) 0">10:05 · Glasgow Queen Street · Delayed 8 min</p></LvCard>
      </LvPageSection>
    `,
  }),
}

export const WithActions = {
  args: { title: 'Scheduled services' },
  render: (args) => ({
    components: { LvPageSection, LvButton, LvCard },
    setup: () => ({ args }),
    template: `
      <LvPageSection v-bind="args">
        <template #actions>
          <LvButton variant="outlined" size="sm">Export</LvButton>
          <LvButton size="sm">Add service</LvButton>
        </template>
        <LvCard><p style="padding: var(--space-2) 0">IC 225 · Edinburgh → London · 09:00</p></LvCard>
      </LvPageSection>
    `,
  }),
}

export const CustomHeader = {
  name: 'Custom header slot',
  render: () => ({
    components: { LvPageSection, LvCard },
    template: `
      <LvPageSection>
        <template #header>
          <p style="font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide); color: var(--text-secondary);">
            Platform 9 · Departing in 4 min
          </p>
        </template>
        <LvCard><p style="padding: var(--space-2) 0">The Flying Scotsman — London Kings Cross</p></LvCard>
      </LvPageSection>
    `,
  }),
}

export const Compact = {
  args: { title: 'Notes', compact: true, noDivider: false },
  render: (args) => ({
    components: { LvPageSection },
    setup: () => ({ args }),
    template: `
      <LvPageSection v-bind="args">
        <p style="color: var(--text-secondary); font-size: var(--text-sm)">
          Speed restriction in place between Haymarket and Waverley until further notice.
        </p>
      </LvPageSection>
    `,
  }),
}
