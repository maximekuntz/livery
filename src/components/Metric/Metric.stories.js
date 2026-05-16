import Metric from './Metric.vue'
import { ICONS } from '../BaseIcon/BaseIcon.vue'

export default {
  title: 'Components/Metric',
  component: Metric,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    icon: {
      control: { type: 'select' },
      options: [undefined, ...Object.keys(ICONS)],
    },
    variation: { control: 'text' },
    variationTrend: {
      control: { type: 'select' },
      options: ['up', 'down', 'neutral'],
      table: { defaultValue: { summary: 'neutral' } },
    },
    showVariationIcon: { control: 'boolean' },
    ariaLabel: { control: 'text' },
  },
}

export const Default = {
  args: {
    label: 'Monthly revenue',
    value: '$84,120',
    icon: 'info',
    variation: '+12.4% vs last month',
    variationTrend: 'up',
    showVariationIcon: true,
    ariaLabel: 'Monthly revenue metric',
  },
  render: (args) => ({
    components: { Metric },
    setup: () => ({ args }),
    template: '<Metric v-bind="args" style="max-width:280px" />',
  }),
}

export const Decreased = {
  args: {
    label: 'Conversion rate',
    value: '3.1%',
    icon: 'warning',
    variation: '-0.7 pts vs last month',
    variationTrend: 'down',
    showVariationIcon: true,
    ariaLabel: 'Conversion rate metric',
  },
  render: (args) => ({
    components: { Metric },
    setup: () => ({ args }),
    template: '<Metric v-bind="args" style="max-width:280px" />',
  }),
}

export const Neutral = {
  args: {
    label: 'Average response time',
    value: '210 ms',
    icon: 'clock',
    variation: 'No change this week',
    variationTrend: 'neutral',
    showVariationIcon: true,
    ariaLabel: 'Average response time metric',
  },
  render: (args) => ({
    components: { Metric },
    setup: () => ({ args }),
    template: '<Metric v-bind="args" style="max-width:280px" />',
  }),
}
