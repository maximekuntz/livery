import { ref } from 'vue'
import LvBooleanInput from './LvBooleanInput.vue'

export default {
  title: 'Components/BooleanInput',
  component: LvBooleanInput,
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
    components: { LvBooleanInput },
    setup() { const v = ref(false); return { v } },
    template: '<LvBooleanInput v-model="v" label="Accept terms and conditions" type="checkbox" />',
  }),
}

export const Toggle = {
  render: () => ({
    components: { LvBooleanInput },
    setup() { const v = ref(false); return { v } },
    template: '<LvBooleanInput v-model="v" label="Enable real-time tracking" type="toggle" />',
  }),
}

export const Radio = {
  render: () => ({
    components: { LvBooleanInput },
    setup() { const v = ref('first'); return { v } },
    template: `
      <div style="display:flex;flex-direction:column;gap:var(--space-3)">
        <LvBooleanInput v-model="v" type="radio" value="first"  label="First class" />
        <LvBooleanInput v-model="v" type="radio" value="second" label="Standard class" />
        <LvBooleanInput v-model="v" type="radio" value="any"    label="Any available" />
      </div>
    `,
  }),
}

export const WithError = {
  render: () => ({
    components: { LvBooleanInput },
    setup() { const v = ref(false); return { v } },
    template: '<LvBooleanInput v-model="v" label="I agree to the terms" error="You must accept to continue." />',
  }),
}

export const Indeterminate = {
  render: () => ({
    components: { LvBooleanInput },
    setup() { const v = ref(false); return { v } },
    template: '<LvBooleanInput v-model="v" label="Select all" :indeterminate="true" />',
  }),
}

export const AllTypes = {
  render: () => ({
    components: { LvBooleanInput },
    setup() {
      const cb = ref(true)
      const tg = ref(true)
      const rd = ref('a')
      return { cb, tg, rd }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:var(--space-5)">
        <LvBooleanInput v-model="cb" type="checkbox" label="Checkbox" />
        <LvBooleanInput v-model="tg" type="toggle"   label="Toggle" />
        <LvBooleanInput v-model="rd" type="radio" value="a" label="Radio option A" />
        <LvBooleanInput v-model="rd" type="radio" value="b" label="Radio option B" />
      </div>
    `,
  }),
}
