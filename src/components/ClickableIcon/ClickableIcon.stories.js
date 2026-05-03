import ClickableIcon from './ClickableIcon.vue'

export default {
  title: 'Primitives/ClickableIcon',
  component: ClickableIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    ariaLabel: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['ghost', 'outlined', 'filled', 'danger'],
      table: { defaultValue: { summary: 'ghost' } },
    },
    disabled: { control: 'boolean' },
  },
}

export const Default = {
  args: { icon: 'close', ariaLabel: 'Dismiss', variant: 'ghost', size: 'md' },
}

export const AllVariants = {
  render: () => ({
    components: { ClickableIcon },
    template: `
      <div style="display:flex;gap:1rem;align-items:center">
        <ClickableIcon icon="close" ariaLabel="Dismiss" variant="ghost" />
        <ClickableIcon icon="close" ariaLabel="Dismiss" variant="outlined" />
        <ClickableIcon icon="close" ariaLabel="Dismiss" variant="filled" />
        <ClickableIcon icon="close" ariaLabel="Delete" variant="danger" />
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { ClickableIcon },
    template: `
      <div style="display:flex;gap:1rem;align-items:center">
        <ClickableIcon icon="settings" ariaLabel="Settings" size="sm" />
        <ClickableIcon icon="settings" ariaLabel="Settings" size="md" />
        <ClickableIcon icon="settings" ariaLabel="Settings" size="lg" />
      </div>
    `,
  }),
}
