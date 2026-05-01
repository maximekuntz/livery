import LvBadge from './LvBadge.vue'

export default {
  title: 'Components/Badge',
  component: LvBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger', 'info', 'inverse'],
      description: 'Signal-aspect colour variant',
      table: { defaultValue: { summary: 'default' } },
    },
    pill: {
      control: 'boolean',
      description: 'Renders with fully rounded corners',
    },
  },
}

export const Default = {
  args: { variant: 'default', default: 'On time' },
  render: (args) => ({
    components: { LvBadge },
    setup: () => ({ args }),
    template: '<LvBadge v-bind="args">{{ args.default }}</LvBadge>',
  }),
}

export const AllVariants = {
  render: () => ({
    components: { LvBadge },
    template: `
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
        <LvBadge variant="default">Default</LvBadge>
        <LvBadge variant="success">Clear</LvBadge>
        <LvBadge variant="warning">Caution</LvBadge>
        <LvBadge variant="danger">Stop</LvBadge>
        <LvBadge variant="info">Info</LvBadge>
        <LvBadge variant="inverse">Inverse</LvBadge>
      </div>
    `,
  }),
}

export const Pills = {
  render: () => ({
    components: { LvBadge },
    template: `
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
        <LvBadge variant="success" pill>On time</LvBadge>
        <LvBadge variant="warning" pill>Delayed</LvBadge>
        <LvBadge variant="danger" pill>Cancelled</LvBadge>
      </div>
    `,
  }),
}
