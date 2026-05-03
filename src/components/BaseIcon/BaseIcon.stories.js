import BaseIcon from './BaseIcon.vue'

const AVAILABLE_ICONS = [
  'check', 'close', 'chevron-down', 'chevron-up', 'chevron-left', 'chevron-right',
  'eye', 'eye-off', 'search', 'info', 'warning', 'arrow-left', 'arrow-right',
  'plus', 'minus', 'menu', 'settings', 'user', 'logout', 'external-link',
  'check-circle', 'x-circle',
]

export default {
  title: 'Primitives/BaseIcon',
  component: BaseIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: AVAILABLE_ICONS,
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: { defaultValue: { summary: 'md' } },
    },
    ariaLabel: { control: 'text' },
  },
}

export const Default = {
  args: { name: 'check', size: 'md' },
}

export const AllIcons = {
  render: () => ({
    components: { BaseIcon },
    setup: () => ({ icons: AVAILABLE_ICONS }),
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:1.5rem;font-family:var(--font-sans)">
        <div
          v-for="name in icons"
          :key="name"
          style="display:flex;flex-direction:column;align-items:center;gap:var(--space-2)"
        >
          <BaseIcon :name="name" size="lg" />
          <span style="font-size:var(--text-xs);color:var(--text-secondary)">{{ name }}</span>
        </div>
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { BaseIcon },
    template: `
      <div style="display:flex;align-items:center;gap:1.5rem">
        <BaseIcon name="search" size="xs" />
        <BaseIcon name="search" size="sm" />
        <BaseIcon name="search" size="md" />
        <BaseIcon name="search" size="lg" />
        <BaseIcon name="search" size="xl" />
      </div>
    `,
  }),
}
