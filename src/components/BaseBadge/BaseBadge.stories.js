import BaseBadge from './BaseBadge.vue'

export default {
  title: 'Components/BaseBadge',
  component: BaseBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger', 'info', 'inverse'],
      table: { defaultValue: { summary: 'default' } },
    },
    pill: { control: 'boolean' },
    icon: { control: 'text' },
    label: { control: 'text' },
  },
}

export const Default = {
  args: {
    variant: 'default',
    label: 'On time',
  },
}

export const WithIcon = {
  args: {
    variant: 'warning',
    icon: 'warning',
    label: 'Delayed',
    pill: true,
  },
}

export const AllVariants = {
  render: () => ({
    components: { BaseBadge },
    template: `
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
        <BaseBadge variant="default" icon="info" label="Default" />
        <BaseBadge variant="success" icon="check" label="Success" />
        <BaseBadge variant="warning" icon="warning" label="Warning" />
        <BaseBadge variant="danger" icon="x-circle" label="Danger" />
        <BaseBadge variant="info" icon="info" label="Info" />
        <BaseBadge variant="inverse" icon="settings" label="Inverse" />
      </div>
    `,
  }),
}
