import { ref } from 'vue'
import TextArea from './TextArea.vue'

export default {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
    minRows: { control: { type: 'number', min: 1 } },
  },
}

export const Default = {
  args: {
    label: 'Journey notes',
    placeholder: 'Describe your journey…',
    hint: 'Any details about delays, connections or observations.',
  },
  render: (args) => ({
    components: { TextArea },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<TextArea v-bind="args" v-model="value" />',
  }),
}

export const WithError = {
  args: {
    label: 'Incident description',
    modelValue: '',
    error: 'Description is required.',
    required: true,
  },
  render: (args) => ({
    components: { TextArea },
    setup: () => ({ args }),
    template: '<TextArea v-bind="args" />',
  }),
}

export const Prefilled = {
  args: {
    label: 'Announcement text',
    minRows: 4,
  },
  render: (args) => ({
    components: { TextArea },
    setup() {
      const value = ref(
        'The 09:42 service to Bristol Temple Meads is now boarding at Platform 3.\n' +
        'Passengers requiring assistance should make themselves known to platform staff.\n' +
        'This train calls at: Swindon, Chippenham, Bath Spa, and Bristol Temple Meads.'
      )
      return { args, value }
    },
    template: '<TextArea v-bind="args" v-model="value" />',
  }),
}

export const Disabled = {
  args: {
    label: 'Read-only memo',
    modelValue: 'This field cannot be edited.',
    disabled: true,
  },
  render: (args) => ({
    components: { TextArea },
    setup: () => ({ args }),
    template: '<TextArea v-bind="args" />',
  }),
}
