import { ref } from 'vue'
import LvTextInput from './LvTextInput.vue'
import LvBaseIcon from '../LvBaseIcon/LvBaseIcon.vue'

export default {
  title: 'Components/TextInput',
  component: LvTextInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      table: { defaultValue: { summary: 'text' } },
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    label: 'Station name',
    placeholder: 'e.g. London Paddington',
    hint: 'Enter the full station name.',
  },
  render: (args) => ({
    components: { LvTextInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<LvTextInput v-bind="args" v-model="value" />',
  }),
}

export const WithError = {
  args: {
    label: 'Departure time',
    modelValue: 'abc',
    error: 'Please enter a valid time in HH:MM format.',
  },
  render: (args) => ({
    components: { LvTextInput },
    setup: () => ({ args }),
    template: '<LvTextInput v-bind="args" />',
  }),
}

export const Password = {
  args: {
    label: 'Passcode',
    type: 'password',
    placeholder: '••••••••',
  },
  render: (args) => ({
    components: { LvTextInput },
    setup() { const v = ref(''); return { args, v } },
    template: '<LvTextInput v-bind="args" v-model="v" />',
  }),
}

export const WithLeadingIcon = {
  render: () => ({
    components: { LvTextInput, LvBaseIcon },
    setup() { const v = ref(''); return { v } },
    template: `
      <LvTextInput v-model="v" label="Search services" placeholder="Search…">
        <template #leading>
          <LvBaseIcon name="search" size="sm" />
        </template>
      </LvTextInput>
    `,
  }),
}

export const Disabled = {
  args: {
    label: 'Platform',
    modelValue: 'Platform 3',
    disabled: true,
  },
  render: (args) => ({
    components: { LvTextInput },
    setup: () => ({ args }),
    template: '<LvTextInput v-bind="args" />',
  }),
}
