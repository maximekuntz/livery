import DateInput from './DateInput.vue'

export default {
  title: 'Components/Inputs/Date and Time/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    hint:        { control: 'text' },
    error:       { control: 'text' },
    disabled:    { control: 'boolean' },
    readonly:    { control: 'boolean' },
    required:    { control: 'boolean' },
    min:         { control: 'text' },
    max:         { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
**DateInput** — Accessible date picker with a calendar dropdown.

- \`modelValue\` is an ISO date string (\`YYYY-MM-DD\`) or \`null\`
- Monday-first calendar grid with today and selected day highlighted
- \`min\` / \`max\` props disable out-of-range dates
- "Today" and "Clear" quick actions at the bottom of the panel
- Closes on outside click or Escape

**Accessibility**
- Trigger button uses \`aria-expanded\`, \`aria-haspopup="dialog"\`
- Grid cells have \`aria-selected\` and \`aria-current="date"\` for today
- Error message uses \`role="alert"\`
        `,
      },
    },
  },
}

export const Default = {
  render: (args) => ({
    components: { DateInput },
    data() { return { value: args.modelValue ?? null } },
    setup() { return { args } },
    template: `
      <div style="max-width: 280px; padding-bottom: 320px;">
        <DateInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value ?? 'null' }}</code>
        </p>
      </div>
    `,
  }),
  args: {
    label: 'Departure date',
    placeholder: 'Select date',
    hint: 'Choose a departure date for your service.',
  },
}

export const WithValue = {
  render: (args) => ({
    components: { DateInput },
    data() { return { value: '2026-05-12' } },
    setup() { return { args } },
    template: `
      <div style="max-width: 280px; padding-bottom: 320px;">
        <DateInput v-bind="args" v-model="value" />
      </div>
    `,
  }),
  args: { label: 'Departure date' },
}

export const WithMinMax = {
  name: 'Min / Max Constraints',
  render: (args) => ({
    components: { DateInput },
    data() { return { value: null } },
    setup() { return { args } },
    template: `
      <div style="max-width: 280px; padding-bottom: 320px;">
        <DateInput v-bind="args" v-model="value" />
        <p style="margin-top: 0.5rem; font-size: var(--text-xs); color: var(--text-secondary);">
          Only dates in the next 30 days are selectable.
        </p>
      </div>
    `,
  }),
  args: {
    label: 'Booking date',
    min: new Date().toISOString().slice(0, 10),
    max: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10),
  },
}

export const ErrorState = {
  render: (args) => ({
    components: { DateInput },
    data() { return { value: null } },
    setup() { return { args } },
    template: `<div style="max-width: 280px;"><DateInput v-bind="args" v-model="value" /></div>`,
  }),
  args: {
    label: 'Departure date',
    error: 'A departure date is required.',
    required: true,
  },
}

export const Disabled = {
  render: (args) => ({
    components: { DateInput },
    setup() { return { args } },
    template: `<div style="max-width: 280px;"><DateInput v-bind="args" model-value="2026-05-12" /></div>`,
  }),
  args: { label: 'Departure date', disabled: true },
}

export const Readonly = {
  render: (args) => ({
    components: { DateInput },
    setup() { return { args } },
    template: `<div style="max-width: 280px;"><DateInput v-bind="args" model-value="2026-05-12" /></div>`,
  }),
  args: { label: 'Departure date', readonly: true, hint: 'This field is read-only.' },
}
