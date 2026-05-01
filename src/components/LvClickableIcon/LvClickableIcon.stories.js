import LvClickableIcon from './LvClickableIcon.vue'

export default {
  title: 'Primitives/ClickableIcon',
  component: LvClickableIcon,
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
    components: { LvClickableIcon },
    template: `
      <div style="display:flex;gap:1rem;align-items:center">
        <LvClickableIcon icon="close" ariaLabel="Dismiss" variant="ghost" />
        <LvClickableIcon icon="close" ariaLabel="Dismiss" variant="outlined" />
        <LvClickableIcon icon="close" ariaLabel="Dismiss" variant="filled" />
        <LvClickableIcon icon="close" ariaLabel="Delete" variant="danger" />
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { LvClickableIcon },
    template: `
      <div style="display:flex;gap:1rem;align-items:center">
        <LvClickableIcon icon="settings" ariaLabel="Settings" size="sm" />
        <LvClickableIcon icon="settings" ariaLabel="Settings" size="md" />
        <LvClickableIcon icon="settings" ariaLabel="Settings" size="lg" />
      </div>
    `,
  }),
}
