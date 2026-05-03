import Button from './Button.vue'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/Button',
  component: Button,
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
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Outlined = {
  args: { variant: 'outlined', default: 'View timetable' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Ghost = {
  args: { variant: 'ghost', default: 'Details' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Danger = {
  args: { variant: 'danger', default: 'Cancel service' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Loading = {
  args: { variant: 'filled', loading: true, default: 'Booking…' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Disabled = {
  args: { variant: 'filled', disabled: true, default: 'Unavailable' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  }),
}

export const Sizes = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
}

export const AllVariants = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <Button variant="filled">Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    `,
  }),
}
