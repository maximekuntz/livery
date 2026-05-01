import { ref } from 'vue'
import LvAlert from './LvAlert.vue'

export default {
  title: 'Notification/Alert',
  component: LvAlert,
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
    components: { LvAlert },
    setup: () => ({ args }),
    template: '<LvAlert v-bind="args">{{ args.default }}</LvAlert>',
  }),
}

export const AllVariants = {
  render: () => ({
    components: { LvAlert },
    template: `
      <div style="display:flex;flex-direction:column;gap:var(--space-4);max-width:520px">
        <LvAlert variant="info"    title="Information">Track maintenance scheduled for Sunday 04:00–06:00.</LvAlert>
        <LvAlert variant="success" title="Booking confirmed">Your seat reservation for 1A23 has been confirmed.</LvAlert>
        <LvAlert variant="warning" title="Delay expected">The 16:15 service is running approximately 12 minutes late.</LvAlert>
        <LvAlert variant="danger"  title="Service cancelled">The 18:45 to Oxford has been cancelled due to a signal failure.</LvAlert>
      </div>
    `,
  }),
}

export const Dismissible = {
  render: () => ({
    components: { LvAlert },
    setup() {
      const visible = ref(true)
      return { visible }
    },
    template: `
      <div style="max-width:520px">
        <LvAlert
          v-if="visible"
          variant="warning"
          title="Disruption notice"
          dismissible
          @dismiss="visible = false"
        >
          Services on the Bristol line may be subject to short delays this afternoon.
        </LvAlert>
        <p v-else style="font-size:var(--text-sm);color:var(--text-secondary)">Alert dismissed.</p>
      </div>
    `,
  }),
}

export const NoTitle = {
  render: () => ({
    components: { LvAlert },
    template: `
      <LvAlert variant="info" style="max-width:520px">
        Passengers are reminded to carry valid tickets at all times.
      </LvAlert>
    `,
  }),
}
