import { ref } from 'vue'
import Button from '../Button/Button.vue'
import ConfirmModal from './ConfirmModal.vue'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/Modal/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Dialog heading',
    },
    message: {
      control: 'text',
      description: 'Body text for the confirmation prompt',
    },
    confirmLabel: {
      control: 'text',
      description: 'Primary action label',
    },
    cancelLabel: {
      control: 'text',
      description: 'Secondary action label',
    },
    confirmVariant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost', 'danger'],
      description: 'Visual style of the confirm action',
    },
    autoCloseOnConfirm: {
      control: 'boolean',
      description: 'Close automatically after confirm event',
    },
    loading: {
      control: 'boolean',
      description: 'Display loading state on confirm action',
    },
  },
}

export const Default = {
  args: {
    title: 'Delete service profile?',
    message: 'This will remove all timetable mappings for this service profile and cannot be undone.',
    confirmLabel: 'Delete profile',
    cancelLabel: 'Keep profile',
    confirmVariant: 'danger',
    autoCloseOnConfirm: true,
    loading: false,
  },
  render: (args) => ({
    components: { ConfirmModal, Button },
    setup() {
      const open = ref(false)
      const status = ref('Awaiting action')

      function onConfirm() {
        status.value = 'Profile deleted'
      }

      function onCancel() {
        status.value = 'Deletion cancelled'
      }

      return { args, open, status, onConfirm, onCancel }
    },
    template: `
      <div style="min-height: 16rem; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--space-4)">
        <Button label="Open confirmation" @click="open = true" />
        <p style="margin: 0; font-size: var(--text-sm); color: var(--text-secondary)">Last action: {{ status }}</p>

        <ConfirmModal
          v-bind="args"
          v-model="open"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </div>
    `,
  }),
}

export const ManualCloseOnConfirm = {
  name: 'Manual close on confirm',
  args: {
    title: 'Release platform lock?',
    message: 'The lock can be re-enabled later, but trains may be rerouted in the meantime.',
    confirmLabel: 'Release lock',
    cancelLabel: 'Keep lock',
    confirmVariant: 'filled',
    autoCloseOnConfirm: false,
  },
  render: (args) => ({
    components: { ConfirmModal, Button },
    setup() {
      const open = ref(false)
      const processing = ref(false)

      function onConfirm() {
        processing.value = true
        setTimeout(() => {
          processing.value = false
          open.value = false
        }, 900)
      }

      return { args, open, processing, onConfirm }
    },
    template: `
      <div style="min-height: 16rem; display: flex; align-items: center; justify-content: center;">
        <Button label="Open manual-close confirm" @click="open = true" />

        <ConfirmModal
          v-bind="args"
          v-model="open"
          :loading="processing"
          @confirm="onConfirm"
        />
      </div>
    `,
  }),
}
