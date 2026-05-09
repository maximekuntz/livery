import Divider from './Divider.vue'

export default {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: { defaultValue: { summary: 'horizontal' } },
    },
    decorative: { control: 'boolean' },
  },
}

export const Horizontal = {
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: (args) => ({
    components: { Divider },
    setup: () => ({ args }),
    template: `
      <div style="max-width: 480px; display: grid; gap: 0.75rem;">
        <span style="font-size: var(--text-sm); color: var(--text-secondary);">Section A</span>
        <Divider v-bind="args" />
        <span style="font-size: var(--text-sm); color: var(--text-secondary);">Section B</span>
      </div>
    `,
  }),
}

export const Vertical = {
  args: {
    orientation: 'vertical',
    decorative: true,
  },
  render: (args) => ({
    components: { Divider },
    setup: () => ({ args }),
    template: `
      <div style="height: 96px; display: flex; align-items: stretch; gap: 1rem;">
        <div style="display:flex; align-items:center; color: var(--text-secondary);">Left panel</div>
        <Divider v-bind="args" />
        <div style="display:flex; align-items:center; color: var(--text-secondary);">Right panel</div>
      </div>
    `,
  }),
}
