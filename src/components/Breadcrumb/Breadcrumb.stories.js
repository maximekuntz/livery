import Breadcrumb from './Breadcrumb.vue'

export default {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
}

export const Default = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Operations', href: '#/operations' },
      { label: 'Fleet Overview', current: true },
    ],
  },
  render: (args) => ({
    components: { Breadcrumb },
    setup: () => ({ args }),
    template: '<Breadcrumb v-bind="args" />',
  }),
}

export const WithClickHandler = {
  args: {
    items: [
      { label: 'Home', onClick: () => {} },
      { label: 'Settings', onClick: () => {} },
      { label: 'Profile', current: true },
    ],
  },
  render: (args) => ({
    components: { Breadcrumb },
    setup: () => ({ args }),
    template: '<Breadcrumb v-bind="args" />',
  }),
}
