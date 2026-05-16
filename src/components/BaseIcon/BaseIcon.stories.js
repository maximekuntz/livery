import BaseIcon from './BaseIcon.vue'

const AVAILABLE_ICONS = [
  'check', 'close', 'chevron-down', 'chevron-up', 'chevron-left', 'chevron-right',
  'eye', 'eye-off', 'search', 'info', 'warning', 'arrow-left', 'arrow-right',
  'plus', 'minus', 'menu', 'settings', 'user', 'logout', 'external-link',
  'check-circle', 'x-circle',
]

export default {
  title: 'Components/BaseIcon',
  component: BaseIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Renders built-in Livery SVG icons by name (for example: "search") and also supports Font Awesome class names (for example: "fa-solid fa-train"). For Font Awesome icons, load Font Awesome CSS in your app or Storybook preview.',
      },
    },
  },
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

export const FontAwesome = {
  parameters: {
    docs: {
      description: {
        story: 'Example usage with Font Awesome classes. This requires Font Awesome CSS to be loaded globally.',
      },
    },
  },
  render: () => ({
    components: { BaseIcon },
    setup: () => ({
      faIcons: ['fa-solid fa-train', 'fa-solid fa-bell', 'fa-solid fa-user', 'fa-regular fa-calendar'],
    }),
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:1.5rem;font-family:var(--font-sans)">
        <div
          v-for="name in faIcons"
          :key="name"
          style="display:flex;flex-direction:column;align-items:center;gap:var(--space-2)"
        >
          <BaseIcon :name="name" size="lg" :aria-label="name" />
          <span style="font-size:var(--text-xs);color:var(--text-secondary)">{{ name }}</span>
        </div>
      </div>
    `,
  }),
}
