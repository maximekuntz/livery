import LvExpandableSection from './LvExpandableSection.vue'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/ExpandableSection',
  component: LvExpandableSection,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: 'Open on first render',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Prevent toggling',
      table: { defaultValue: { summary: 'false' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['bordered', 'ghost'],
      description: 'Visual treatment',
      table: { defaultValue: { summary: 'bordered' } },
    },
  },
}

export const Default = {
  args: { defaultOpen: false },
  render: (args) => ({
    components: { LvExpandableSection },
    setup: () => ({ args }),
    template: `
      <LvExpandableSection v-bind="args">
        <template #trigger>Service disruptions</template>
        The 08:32 service from Glasgow Queen Street is subject to a 12-minute
        delay due to a points failure at Cumbernauld Junction. Customers are
        advised to allow extra time for onward connections.
      </LvExpandableSection>
    `,
  }),
}

export const OpenByDefault = {
  args: { defaultOpen: true },
  render: (args) => ({
    components: { LvExpandableSection },
    setup: () => ({ args }),
    template: `
      <LvExpandableSection v-bind="args">
        <template #trigger>Accessibility information</template>
        Ramp assistance is available at all staffed stations. Please contact
        the on-board supervisor at least 10 minutes before your stop.
      </LvExpandableSection>
    `,
  }),
}

export const AccordionGroup = {
  name: 'Accordion group (multiple)',
  render: () => ({
    components: { LvExpandableSection },
    template: `
      <div>
        <LvExpandableSection defaultOpen>
          <template #trigger>Platform changes</template>
          The 11:15 to London Kings Cross now departs from platform 8.
        </LvExpandableSection>
        <LvExpandableSection>
          <template #trigger>Catering service</template>
          A trolley service is available throughout the journey.
          Hot meals may be pre-ordered via the app.
        </LvExpandableSection>
        <LvExpandableSection disabled>
          <template #trigger>First class upgrades (unavailable)</template>
          Upgrades are not currently available for this service.
        </LvExpandableSection>
      </div>
    `,
  }),
}

export const GhostVariant = {
  name: 'Ghost variant',
  render: () => ({
    components: { LvExpandableSection },
    template: `
      <div>
        <LvExpandableSection variant="ghost" defaultOpen>
          <template #trigger>Journey details</template>
          Departs Edinburgh 09:42 · Arrives Inverness 13:58 · 4h 16m
        </LvExpandableSection>
        <LvExpandableSection variant="ghost">
          <template #trigger>Fare conditions</template>
          This ticket is non-refundable and valid only on the booked service.
        </LvExpandableSection>
      </div>
    `,
  }),
}
