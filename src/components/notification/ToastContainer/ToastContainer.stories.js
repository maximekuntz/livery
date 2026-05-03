import { ref } from 'vue'
import ToastContainer from './ToastContainer.vue'
import Button from '../../Button/Button.vue'
import { useToast } from '../useToast.js'

export default {
  title: 'Notification/ToastContainer',
  component: ToastContainer,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'],
      table: { defaultValue: { summary: 'bottom-right' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Mount once at the app root. Connect to \`useToast()\`:

\`\`\`vue
<!-- App.vue -->
<ToastContainer :toasts="toasts" @remove="remove" />

<script setup>
import { useToast } from 'livery'
const { toasts, remove } = useToast()
<\/script>
\`\`\`

Dispatch from any component:
\`\`\`js
const { add } = useToast()
add({ variant: 'success', title: 'Done', message: 'Booking confirmed.' })
\`\`\`
        `,
      },
    },
  },
}

export const Playground = {
  render: (args) => ({
    components: { ToastContainer, Button },
    setup() {
      const { toasts, add, remove } = useToast()
      const variants = ['info', 'success', 'warning', 'danger']
      const labels = {
        info:    { title: 'Information',       message: 'Track maintenance on Sunday 04:00–06:00.' },
        success: { title: 'Booking confirmed', message: 'Your seat on 1A23 has been reserved.' },
        warning: { title: 'Delay expected',    message: 'The 16:15 is running 12 minutes late.' },
        danger:  { title: 'Service cancelled', message: 'The 18:45 to Oxford has been cancelled.' },
      }
      function fire(variant) {
        add({ variant, ...labels[variant] })
      }
      return { args, toasts, remove, variants, fire }
    },
    template: `
      <div>
        <div style="display:flex;gap:var(--space-3);flex-wrap:wrap">
          <Button
            v-for="v in variants"
            :key="v"
            variant="outlined"
            size="sm"
            @click="fire(v)"
          >
            {{ v }}
          </Button>
        </div>
        <ToastContainer :toasts="toasts" :position="args.position" @remove="remove" />
      </div>
    `,
  }),
  args: { position: 'bottom-right' },
}
