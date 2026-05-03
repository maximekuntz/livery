import { ref } from 'vue'
import BooleanInput from './BooleanInput.vue'

export default {
  title: 'Components/BooleanInput',
  component: BooleanInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['checkbox', 'toggle', 'radio'],
      table: { defaultValue: { summary: 'checkbox' } },
    },
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
}

export const Checkbox = {
  render: () => ({
    components: { BooleanInput },
    setup() { const v = ref(false); return { v } },
    template: '<BooleanInput v-model="v" label="Accept terms and conditions" type="checkbox" />',
  }),
}

export const Toggle = {
  render: () => ({
    components: { BooleanInput },
    setup() { const v = ref(false); return { v } },
    template: '<BooleanInput v-model="v" label="Enable real-time tracking" type="toggle" />',
  }),
}

export const Radio = {
  render: () => ({
    components: { BooleanInput },
    setup() { const v = ref('first'); return { v } },
    template: `
      <div style="display:flex;flex-direction:column;gap:var(--space-3)">
        <BooleanInput v-model="v" type="radio" value="first"  label="First class" />
        <BooleanInput v-model="v" type="radio" value="second" label="Standard class" />
        <BooleanInput v-model="v" type="radio" value="any"    label="Any available" />
      </div>
    `,
  }),
}

export const WithError = {
  render: () => ({
    components: { BooleanInput },
    setup() { const v = ref(false); return { v } },
    template: '<BooleanInput v-model="v" label="I agree to the terms" error="You must accept to continue." />',
  }),
}

export const Indeterminate = {
  render: () => ({
    components: { BooleanInput },
    setup() { const v = ref(false); return { v } },
    template: '<BooleanInput v-model="v" label="Select all" :indeterminate="true" />',
  }),
}

export const AllTypes = {
  render: () => ({
    components: { BooleanInput },
    setup() {
      const cb = ref(true)
      const tg = ref(true)
      const rd = ref('a')
      return { cb, tg, rd }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:var(--space-5)">
        <BooleanInput v-model="cb" type="checkbox" label="Checkbox" />
        <BooleanInput v-model="tg" type="toggle"   label="Toggle" />
        <BooleanInput v-model="rd" type="radio" value="a" label="Radio option A" />
        <BooleanInput v-model="rd" type="radio" value="b" label="Radio option B" />
      </div>
    `,
  }),
}
