import { ref } from 'vue'
import LvToast from './LvToast.vue'

export default {
  title: 'Notification/Toast',
  component: LvToast,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'danger'],
      table: { defaultValue: { summary: 'info' } },
    },
    title:    { control: 'text' },
    message:  { control: 'text' },
    duration: { control: 'number' },
  },
  parameters: {
    // Static preview — no progress bar animation in docs
    docs: {
      description: {
        component: 'Individual toast notification. Use `LvToastContainer` + `useToast()` for programmatic dispatch.',
      },
    },
  },
}

// Static previews — id and no duration so the bar doesn't animate in docs
export const Info = {
  args: { id: 1, variant: 'info', title: 'Information', message: 'Track maintenance scheduled for Sunday.', duration: 0 },
}

export const Success = {
  args: { id: 2, variant: 'success', title: 'Booking confirmed', message: 'Your seat on 1A23 has been reserved.', duration: 0 },
}

export const Warning = {
  args: { id: 3, variant: 'warning', title: 'Delay expected', message: 'The 16:15 is running 12 minutes late.', duration: 0 },
}

export const Danger = {
  args: { id: 4, variant: 'danger', title: 'Service cancelled', message: 'The 18:45 to Oxford has been cancelled.', duration: 0 },
}

export const AllVariants = {
  render: () => ({
    components: { LvToast },
    template: `
      <div style="display:flex;flex-direction:column;gap:var(--space-3);max-width:420px">
        <LvToast :id="1" variant="info"    title="Information"         message="Track maintenance scheduled for Sunday." :duration="0" @remove="() => {}" />
        <LvToast :id="2" variant="success" title="Booking confirmed"   message="Your seat on 1A23 has been reserved."   :duration="0" @remove="() => {}" />
        <LvToast :id="3" variant="warning" title="Delay expected"      message="The 16:15 is running 12 minutes late."  :duration="0" @remove="() => {}" />
        <LvToast :id="4" variant="danger"  title="Service cancelled"   message="The 18:45 to Oxford has been cancelled." :duration="0" @remove="() => {}" />
      </div>
    `,
  }),
}
