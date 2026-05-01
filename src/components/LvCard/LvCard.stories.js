import LvCard from './LvCard.vue'
import LvButton from '../LvButton/LvButton.vue'
import LvBadge from '../LvBadge/LvBadge.vue'

export default {
  title: 'Components/Card',
  component: LvCard,
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
    components: { LvCard },
    template: `
      <LvCard style="max-width:360px">
        <p style="color:var(--text-primary)">Platform 3 — London Paddington to Bristol Temple Meads. Calling at Reading, Didcot Parkway, Swindon, Chippenham, Bath Spa.</p>
      </LvCard>
    `,
  }),
}

export const WithHeaderAndFooter = {
  render: () => ({
    components: { LvCard, LvButton, LvBadge },
    template: `
      <LvCard style="max-width:400px">
        <template #header>Delayed Service</template>
        <div style="display:flex;flex-direction:column;gap:var(--space-3)">
          <LvBadge variant="warning">Running 14 min late</LvBadge>
          <p style="color:var(--text-secondary);font-size:var(--text-sm)">
            Due to a signal failure at Reading, this service is subject to delay.
            We apologise for the inconvenience.
          </p>
        </div>
        <template #footer>
          <LvButton variant="outlined" size="sm">View alternatives</LvButton>
          <LvButton variant="ghost" size="sm">Dismiss</LvButton>
        </template>
      </LvCard>
    `,
  }),
}

export const Elevations = {
  render: () => ({
    components: { LvCard },
    template: `
      <div style="display:flex;gap:1.5rem;flex-wrap:wrap;padding:2rem;background:var(--bg-page)">
        <LvCard elevation="none" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">none</p>
        </LvCard>
        <LvCard elevation="sm" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">sm</p>
        </LvCard>
        <LvCard elevation="md" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">md</p>
        </LvCard>
        <LvCard elevation="lg" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">lg</p>
        </LvCard>
      </div>
    `,
  }),
}
