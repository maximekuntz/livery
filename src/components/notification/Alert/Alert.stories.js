import { ref } from 'vue'
import Alert from './Alert.vue'

export default {
  title: 'Notification/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'danger'],
      table: { defaultValue: { summary: 'info' } },
    },
    title:       { control: 'text' },
    dismissible: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    variant: 'info',
    title: 'Service update',
    default: 'The 14:32 service to Bristol Temple Meads is running on time.',
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">{{ args.default }}</Alert>',
  }),
}

export const AllVariants = {
  render: () => ({
    components: { Alert },
    template: `
      <div style="display:flex;flex-direction:column;gap:var(--space-4);max-width:520px">
        <Alert variant="info"    title="Information">Track maintenance scheduled for Sunday 04:00–06:00.</Alert>
        <Alert variant="success" title="Booking confirmed">Your seat reservation for 1A23 has been confirmed.</Alert>
        <Alert variant="warning" title="Delay expected">The 16:15 service is running approximately 12 minutes late.</Alert>
        <Alert variant="danger"  title="Service cancelled">The 18:45 to Oxford has been cancelled due to a signal failure.</Alert>
      </div>
    `,
  }),
}

export const Dismissible = {
  render: () => ({
    components: { Alert },
    setup() {
      const visible = ref(true)
      return { visible }
    },
    template: `
      <div style="max-width:520px">
        <Alert
          v-if="visible"
          variant="warning"
          title="Disruption notice"
          dismissible
          @dismiss="visible = false"
        >
          Services on the Bristol line may be subject to short delays this afternoon.
        </Alert>
        <p v-else style="font-size:var(--text-sm);color:var(--text-secondary)">Alert dismissed.</p>
      </div>
    `,
  }),
}

export const NoTitle = {
  render: () => ({
    components: { Alert },
    template: `
      <Alert variant="info" style="max-width:520px">
        Passengers are reminded to carry valid tickets at all times.
      </Alert>
    `,
  }),
}
