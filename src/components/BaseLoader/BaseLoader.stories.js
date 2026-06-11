import BaseLoader from './BaseLoader.vue'

export default {
  title: 'Components/BaseLoader',
  component: BaseLoader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    label: { control: 'text' },
  },
}

export const Default = {
  args: {
    size: 'md',
    label: 'Loading',
  },
}

export const Sizes = {
  render: () => ({
    components: { BaseLoader },
    template: `
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <BaseLoader size="sm" label="Small" />
        <BaseLoader size="md" label="Medium" />
        <BaseLoader size="lg" label="Large" />
      </div>
    `,
  }),
}

export const SpinnerOnly = {
  args: {
    size: 'md',
    label: '',
  },
}
