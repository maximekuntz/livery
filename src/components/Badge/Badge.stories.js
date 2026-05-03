import Badge from './Badge.vue'

export default {
  title: 'Components/Badge',
  component: Badge,
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
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">{{ args.default }}</Badge>',
  }),
}

export const AllVariants = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
        <Badge variant="default">Default</Badge>
        <Badge variant="success">Clear</Badge>
        <Badge variant="warning">Caution</Badge>
        <Badge variant="danger">Stop</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="inverse">Inverse</Badge>
      </div>
    `,
  }),
}

export const Pills = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
        <Badge variant="success" pill>On time</Badge>
        <Badge variant="warning" pill>Delayed</Badge>
        <Badge variant="danger" pill>Cancelled</Badge>
      </div>
    `,
  }),
}
