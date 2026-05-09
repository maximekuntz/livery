import TimeInput from './TimeInput.vue'

export default {
  title: 'Components/Inputs/Date and Time/TimeInput',
  component: TimeInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue:  { control: 'text' },
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    hint:        { control: 'text' },
    error:       { control: 'text' },
    disabled:    { control: 'boolean' },
    readonly:    { control: 'boolean' },
    required:    { control: 'boolean' },
    minuteStep:  { control: { type: 'number', min: 1, max: 30 } },
  },
  parameters: {
    docs: {
      description: {
        component: `
**TimeInput** — Accessible time picker with scrollable hour/minute columns.

- \`modelValue\` is an \`'HH:MM'\` string (24-hour) or \`null\`
- Two scrollable columns: hours (00–23) and minutes (configurable step)
- Selected time scrolls into view when the panel opens
- \`minuteStep\` controls the interval between minute options (default 5)

**Accessibility**
- Trigger uses \`aria-expanded\` and \`aria-haspopup="listbox"\`
- Each column has \`role="listbox"\` with options using \`aria-selected\`
- Error message uses \`role="alert"\`
        `,
      },
    },
  },
}

export const Default = {
  render: (args) => ({
    components: { TimeInput },
    data() { return { value: args.modelValue ?? null } },
    setup() { return { args } },
    template: `
      <div style="max-width: 200px; padding-bottom: 250px;">
        <TimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value ?? 'null' }}</code>
        </p>
      </div>
    `,
  }),
  args: {
    label: 'Departure time',
    hint: '24-hour format.',
    minuteStep: 5,
  },
}

export const WithValue = {
  name: 'With Value',
  render: (args) => ({
    components: { TimeInput },
    data() { return { value: '07:30' } },
    setup() { return { args } },
    template: `
      <div style="max-width: 200px; padding-bottom: 250px;">
        <TimeInput v-bind="args" v-model="value" />
      </div>
    `,
  }),
  args: { label: 'Departure time', minuteStep: 5 },
}

export const OneMinuteStep = {
  name: '1-Minute Step',
  render: (args) => ({
    components: { TimeInput },
    data() { return { value: '08:42' } },
    setup() { return { args } },
    template: `
      <div style="max-width: 200px; padding-bottom: 250px;">
        <TimeInput v-bind="args" v-model="value" />
      </div>
    `,
  }),
  args: { label: 'Exact departure time', minuteStep: 1 },
}

export const ErrorState = {
  name: 'Error State',
  render: (args) => ({
    components: { TimeInput },
    data() { return { value: null } },
    setup() { return { args } },
    template: `<div style="max-width: 200px;"><TimeInput v-bind="args" v-model="value" /></div>`,
  }),
  args: {
    label: 'Departure time',
    error: 'A departure time is required.',
    required: true,
  },
}

export const Disabled = {
  render: (args) => ({
    components: { TimeInput },
    setup() { return { args } },
    template: `<div style="max-width: 200px;"><TimeInput v-bind="args" model-value="07:30" /></div>`,
  }),
  args: { label: 'Departure time', disabled: true },
}
