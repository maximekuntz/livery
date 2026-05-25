import ProgressBar from './ProgressBar.vue'

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0 } },
    max: { control: { type: 'number', min: 1 } },
    ariaLabel: { control: 'text' },
    text: { control: 'text' },
  },
}

export const Default = {
  args: {
    value: 35,
    max: 100,
    ariaLabel: 'Upload progress',
    text: '35%',
  },
  render: (args) => ({
    components: { ProgressBar },
    setup: () => ({ args }),
    template: '<ProgressBar v-bind="args" />',
  }),
}

export const Complete = {
  args: {
    value: 100,
    max: 100,
    ariaLabel: 'Import progress',
    text: 'Completed',
  },
  render: (args) => ({
    components: { ProgressBar },
    setup: () => ({ args }),
    template: '<ProgressBar v-bind="args" />',
  }),
}

export const WithoutText = {
  args: {
    value: 60,
    max: 100,
    ariaLabel: 'Transfer progress',
    text: undefined,
  },
}
