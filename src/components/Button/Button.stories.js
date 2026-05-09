import Button from './Button.vue'
import { ICONS } from '../BaseIcon/BaseIcon.vue'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text content of the button',
    },
    icon: {
      control: { type: 'select' },
      options: [null, ...Object.keys(ICONS)],
      description: 'Icon name from the BaseIcon set',
      table: { defaultValue: { summary: 'null' } },
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Side the icon appears on',
      table: { defaultValue: { summary: 'left' } },
    },
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
  },
}

/** Default filled button */
export const Filled = {
  args: { variant: 'filled', size: 'md', label: 'Depart' },
}

export const Outlined = {
  args: { variant: 'outlined', label: 'View timetable' },
}

export const Ghost = {
  args: { variant: 'ghost', label: 'Details' },
}

export const Danger = {
  args: { variant: 'danger', label: 'Cancel service' },
}

export const WithIcon = {
  args: { variant: 'filled', label: 'Depart', icon: 'arrow-right', iconPosition: 'right' },
}

export const IconOnly = {
  args: { variant: 'ghost', label: '', icon: 'search' },
}

export const Clickable = {
  args: { variant: 'filled', label: 'Click me' },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button')
    button.addEventListener('click', () => console.log('Button clicked!'))
  },
}

export const Loading = {
  args: { variant: 'filled', loading: true, label: 'Booking…' },
}

export const Disabled = {
  args: { variant: 'filled', disabled: true, label: 'Unavailable' },
}

export const Sizes = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <Button size="sm" label="Small" />
        <Button size="md" label="Medium" />
        <Button size="lg" label="Large" />
      </div>
    `,
  }),
}

export const AllVariants = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <Button variant="filled" label="Filled" />
        <Button variant="outlined" label="Outlined" />
        <Button variant="ghost" label="Ghost" />
        <Button variant="danger" label="Danger" />
      </div>
    `,
  }),
}
