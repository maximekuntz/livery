import LvDateTimeInput from './LvDateTimeInput.vue'

export default {
  title: 'Form/DateTimeInput',
  component: LvDateTimeInput,
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
    min:         { control: 'text' },
    max:         { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
**LvDateTimeInput** — Accessible combined date and time picker.

- \`modelValue\` is an ISO datetime string (\`YYYY-MM-DDTHH:MM\`) or \`null\`
- Single trigger opens a single panel: calendar on the left, time columns on the right
- Selecting a date sets the date part; time columns update the time part independently
- "Today" navigates to the current date; "Clear" resets the entire value
- \`min\` / \`max\` accept ISO date strings (\`YYYY-MM-DD\`) to constrain the calendar

**Accessibility**
- Trigger uses \`aria-expanded\` and \`aria-haspopup="dialog"\`
- Calendar grid cells have \`aria-selected\` and \`aria-current="date"\`
- Time columns use \`role="listbox"\` + \`aria-selected\`
- Error message uses \`role="alert"\`
        `,
      },
    },
  },
}

export const Default = {
  render: (args) => ({
    components: { LvDateTimeInput },
    data() { return { value: args.modelValue ?? null } },
    setup() { return { args } },
    template: `
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value ?? 'null' }}</code>
        </p>
      </div>
    `,
  }),
  args: {
    label: 'Scheduled departure',
    hint: 'Select the date and time of departure.',
    minuteStep: 5,
  },
}

export const WithValue = {
  name: 'With Value',
  render: (args) => ({
    components: { LvDateTimeInput },
    data() { return { value: '2026-05-12T07:30' } },
    setup() { return { args } },
    template: `
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value }}</code>
        </p>
      </div>
    `,
  }),
  args: { label: 'Scheduled departure', minuteStep: 5 },
}

export const WithMinMax = {
  name: 'Min / Max Constraints',
  render: (args) => ({
    components: { LvDateTimeInput },
    data() { return { value: null } },
    setup() { return { args } },
    template: `
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 0.5rem; font-size: var(--text-xs); color: var(--text-secondary);">
          Only dates within the next 14 days are selectable.
        </p>
      </div>
    `,
  }),
  args: {
    label: 'Service slot',
    min: new Date().toISOString().slice(0, 10),
    max: new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10),
    minuteStep: 15,
  },
}

export const OneMinuteStep = {
  name: '1-Minute Step',
  render: (args) => ({
    components: { LvDateTimeInput },
    data() { return { value: '2026-05-12T08:42' } },
    setup() { return { args } },
    template: `
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
      </div>
    `,
  }),
  args: { label: 'Exact departure time', minuteStep: 1 },
}

export const ErrorState = {
  name: 'Error State',
  render: (args) => ({
    components: { LvDateTimeInput },
    data() { return { value: null } },
    setup() { return { args } },
    template: `<div style="max-width: 320px;"><LvDateTimeInput v-bind="args" v-model="value" /></div>`,
  }),
  args: {
    label: 'Scheduled departure',
    error: 'A departure date and time is required.',
    required: true,
  },
}

export const Disabled = {
  render: (args) => ({
    components: { LvDateTimeInput },
    setup() { return { args } },
    template: `<div style="max-width: 320px;"><LvDateTimeInput v-bind="args" model-value="2026-05-12T07:30" /></div>`,
  }),
  args: { label: 'Scheduled departure', disabled: true },
}
