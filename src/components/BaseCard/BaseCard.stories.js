import BaseCard from './BaseCard.vue'
import Button from '../Button/Button.vue'
import BaseBadge from '../BaseBadge/BaseBadge.vue'

export default {
  title: 'Components/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    name: { control: 'text' },
    icon: { control: 'text' },
  },
}

export const Default = {
  args: {
    name: 'Service update',
    icon: 'info',
  },
  render: (args) => ({
    components: { BaseCard },
    setup: () => ({ args }),
    template: `
      <BaseCard v-bind="args" style="max-width:360px">
        <p style="color:var(--text-primary)">
          Platform 3 — London Paddington to Bristol Temple Meads.
        </p>
      </BaseCard>
    `,
  }),
}

export const WithNameAndFooter = {
  render: () => ({
    components: { BaseCard, Button, BaseBadge },
    template: `
      <BaseCard style="max-width:400px" icon="warning" name="Delayed service">
        <div style="display:flex;flex-direction:column;gap:var(--space-3)">
          <BaseBadge variant="warning" icon="warning" label="Running 14 min late" />
          <p style="color:var(--text-secondary);font-size:var(--text-sm)">
            Due to a signal failure at Reading, this service is subject to delay.
          </p>
        </div>
        <template #footer>
          <Button variant="outlined" size="sm">View alternatives</Button>
          <Button variant="ghost" size="sm">Dismiss</Button>
        </template>
      </BaseCard>
    `,
  }),
}
