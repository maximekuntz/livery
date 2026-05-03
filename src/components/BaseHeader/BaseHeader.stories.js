import BaseHeader from './BaseHeader.vue'
import Button from '../Button/Button.vue'

export default {
  title: 'Components/BaseHeader',
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
  },
}

export const Default = {
  args: {
    label: 'Service',
    title: 'Platform overview',
    subtitle: 'View and manage current platform allocations.',
    icon: 'calendar',
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
          <Button variant="outlined" size="sm">Edit</Button>
          <Button variant="filled" size="sm">Add stop</Button>
        </template>
      </BaseHeader>
    `,
  }),
}
