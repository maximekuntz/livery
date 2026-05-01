import LvButton from './LvButton.vue'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/Button',
  component: LvButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost', 'danger'],
      description: 'Visual treatment of the button',
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size scale',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows spinner and prevents interaction',
    },
    tag: {
      control: 'text',
      description: 'HTML element to render (button, a, …)',
      table: { defaultValue: { summary: 'button' } },
    },
  },
}

/** Default filled button */
export const Filled = {
  args: {
    variant: 'filled',
    size: 'md',
    default: 'Depart',
  },
  render: (args) => ({
    components: { LvButton },
    setup: () => ({ args }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>',
  }),
}

export const Outlined = {
  args: { variant: 'outlined', default: 'View timetable' },
  render: (args) => ({
    components: { LvButton },
    setup: () => ({ args }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>',
  }),
}

export const Ghost = {
  args: { variant: 'ghost', default: 'Details' },
  render: (args) => ({
    components: { LvButton },
    setup: () => ({ args }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>',
  }),
}

export const Danger = {
  args: { variant: 'danger', default: 'Cancel service' },
  render: (args) => ({
    components: { LvButton },
    setup: () => ({ args }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>',
  }),
}

export const Loading = {
  args: { variant: 'filled', loading: true, default: 'Booking…' },
  render: (args) => ({
    components: { LvButton },
    setup: () => ({ args }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>',
  }),
}

export const Disabled = {
  args: { variant: 'filled', disabled: true, default: 'Unavailable' },
  render: (args) => ({
    components: { LvButton },
    setup: () => ({ args }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>',
  }),
}

export const Sizes = {
  render: () => ({
    components: { LvButton },
    template: `
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <LvButton size="sm">Small</LvButton>
        <LvButton size="md">Medium</LvButton>
        <LvButton size="lg">Large</LvButton>
      </div>
    `,
  }),
}

export const AllVariants = {
  render: () => ({
    components: { LvButton },
    template: `
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <LvButton variant="filled">Filled</LvButton>
        <LvButton variant="outlined">Outlined</LvButton>
        <LvButton variant="ghost">Ghost</LvButton>
        <LvButton variant="danger">Danger</LvButton>
      </div>
    `,
  }),
}
