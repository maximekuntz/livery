import Card from './Card.vue'
import BaseIcon from '../../BaseIcon/BaseIcon.vue'
import Button from '../../Button/Button.vue'
import BaseBadge from '../../BaseBadge/BaseBadge.vue'

export default {
  title: 'Components/Cards/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    ariaLabel: { control: 'text' },
  },
}

export const Default = {
  args: {
    elevation: 'md',
    ariaLabel: 'Service update card',
  },
  render: (args) => ({
    components: { Card, BaseIcon },
    setup: () => ({ args }),
    template: `
      <Card v-bind="args" style="max-width:360px">
        <template #icon>
          <BaseIcon name="info" size="sm" aria-hidden="true" style="color:var(--text-secondary)" />
        </template>
        <template #header>
          <div style="font-weight:var(--font-semibold);font-size:var(--text-sm);letter-spacing:var(--tracking-wide);text-transform:uppercase;color:var(--text-secondary)">
            Service update
          </div>
        </template>
        <template #content>
          <p style="color:var(--text-primary)">
            Platform 3 - London Paddington to Bristol Temple Meads.
          </p>
        </template>
      </Card>
    `,
  }),
}

export const WithFooter = {
  render: () => ({
    components: { Card, BaseIcon, Button, BaseBadge },
    template: `
      <Card style="max-width:400px" aria-label="Delayed service card">
        <template #icon>
          <BaseIcon name="warning" size="sm" aria-hidden="true" style="color:var(--text-secondary)" />
        </template>
        <template #header>
          <div style="font-weight:var(--font-semibold);font-size:var(--text-sm);letter-spacing:var(--tracking-wide);text-transform:uppercase;color:var(--text-secondary)">
            Delayed service
          </div>
        </template>
        <template #content>
          <div style="display:flex;flex-direction:column;gap:var(--space-3)">
            <BaseBadge variant="warning" icon="warning" label="Running 14 min late" />
            <p style="color:var(--text-secondary);font-size:var(--text-sm)">
              Due to a signal failure at Reading, this service is subject to delay.
            </p>
          </div>
        </template>
        <template #footer>
          <Button variant="outlined" size="sm" label="View alternatives" />
          <Button variant="ghost" size="sm" label="Dismiss" />
        </template>
      </Card>
    `,
  }),
}