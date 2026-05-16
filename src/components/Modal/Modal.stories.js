import { ref } from 'vue'
import Button from '../Button/Button.vue'
import Modal from './Modal.vue'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/Modal/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Dialog heading',
    },
    description: {
      control: 'text',
      description: 'Optional helper text shown under the heading',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Dialog width preset',
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'Allow Escape key to close the topmost modal',
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Allow backdrop click to close the topmost modal',
    },
    showClose: {
      control: 'boolean',
      description: 'Show top-right close button',
    },
  },
}

export const Playground = {
  args: {
    title: 'Engineering possession notice',
    description: 'Review the impact before continuing.',
    size: 'md',
    closeOnEsc: true,
    closeOnBackdrop: true,
    showClose: true,
  },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div style="min-height: 16rem; display: flex; align-items: center; justify-content: center;">
        <Button label="Open modal" @click="open = true" />

        <Modal
          v-bind="args"
          v-model="open"
        >
          <p style="margin: 0; color: var(--text-secondary)">
            The line between Haymarket and Linlithgow will close from 00:30 to 04:45.
            Replacement buses will operate between intermediate stations.
          </p>

          <template #footer>
            <div style="display:flex;justify-content:flex-end;gap:var(--space-3)">
              <Button variant="ghost" label="Close" @click="open = false" />
              <Button variant="filled" label="Acknowledge" @click="open = false" />
            </div>
          </template>
        </Modal>
      </div>
    `,
  }),
}

export const StackedModals = {
  name: 'Stacked modals',
  render: () => ({
    components: { Modal, Button },
    setup() {
      const firstOpen = ref(false)
      const secondOpen = ref(false)
      return { firstOpen, secondOpen }
    },
    template: `
      <div style="min-height: 16rem; display: flex; align-items: center; justify-content: center;">
        <Button label="Open primary modal" @click="firstOpen = true" />

        <Modal
          v-model="firstOpen"
          title="Primary modal"
          description="Open another modal on top of this one."
          size="lg"
        >
          <p style="margin: 0; color: var(--text-secondary)">
            This dialog remains open while a second dialog appears above it.
            Escape and backdrop interactions only close the topmost one.
          </p>

          <template #footer>
            <div style="display:flex;justify-content:space-between;gap:var(--space-3);width:100%">
              <Button variant="ghost" label="Close primary" @click="firstOpen = false" />
              <Button variant="outlined" label="Open secondary" @click="secondOpen = true" />
            </div>
          </template>
        </Modal>

        <Modal
          v-model="secondOpen"
          title="Secondary modal"
          description="Nested above the primary dialog"
          size="sm"
        >
          <p style="margin: 0; color: var(--text-secondary)">
            This window is stacked above the primary modal.
          </p>

          <template #footer>
            <div style="display:flex;justify-content:flex-end;gap:var(--space-3)">
              <Button variant="filled" label="Close secondary" @click="secondOpen = false" />
            </div>
          </template>
        </Modal>
      </div>
    `,
  }),
}
