import Card from './Card.vue'
import Button from '../Button/Button.vue'
import Badge from '../Badge/Badge.vue'

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    flush: { control: 'boolean' },
  },
}

export const Default = {
  render: () => ({
    components: { Card },
    template: `
      <Card style="max-width:360px">
        <p style="color:var(--text-primary)">Platform 3 — London Paddington to Bristol Temple Meads. Calling at Reading, Didcot Parkway, Swindon, Chippenham, Bath Spa.</p>
      </Card>
    `,
  }),
}

export const WithHeaderAndFooter = {
  render: () => ({
    components: { Card, Button, Badge },
    template: `
      <Card style="max-width:400px">
        <template #header>Delayed Service</template>
        <div style="display:flex;flex-direction:column;gap:var(--space-3)">
          <Badge variant="warning">Running 14 min late</Badge>
          <p style="color:var(--text-secondary);font-size:var(--text-sm)">
            Due to a signal failure at Reading, this service is subject to delay.
            We apologise for the inconvenience.
          </p>
        </div>
        <template #footer>
          <Button variant="outlined" size="sm">View alternatives</Button>
          <Button variant="ghost" size="sm">Dismiss</Button>
        </template>
      </Card>
    `,
  }),
}

export const Elevations = {
  render: () => ({
    components: { Card },
    template: `
      <div style="display:flex;gap:1.5rem;flex-wrap:wrap;padding:2rem;background:var(--bg-page)">
        <Card elevation="none" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">none</p>
        </Card>
        <Card elevation="sm" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">sm</p>
        </Card>
        <Card elevation="md" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">md</p>
        </Card>
        <Card elevation="lg" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">lg</p>
        </Card>
      </div>
    `,
  }),
}
