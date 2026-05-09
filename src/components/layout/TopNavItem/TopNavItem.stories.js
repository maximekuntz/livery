import TopNavItem from './TopNavItem.vue'

export default {
  title: 'Components/Layout/TopNavItem',
  component: TopNavItem,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    icon: { control: 'text' },
    active: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export const Default = {
  args: {
    href: '#',
    icon: '',
    active: false,
    label: 'Timetable',
  },
  render: (args) => ({
    components: { TopNavItem },
    setup: () => ({ args }),
    template: `
      <div style="padding: 0.75rem; background: var(--color-slate-900); border-radius: var(--radius-lg); width: max-content;">
        <TopNavItem :href="args.href" :icon="args.icon || undefined" :active="args.active">{{ args.label }}</TopNavItem>
      </div>
    `,
  }),
}

export const Active = {
  render: () => ({
    components: { TopNavItem },
    template: `
      <div style="padding: 0.75rem; background: var(--color-slate-900); border-radius: var(--radius-lg); width: max-content; display: flex; gap: 0.25rem;">
        <TopNavItem href="#" :active="true">Dashboard</TopNavItem>
        <TopNavItem href="#">Timetable</TopNavItem>
        <TopNavItem href="#">Network</TopNavItem>
      </div>
    `,
  }),
}

export const WithIcon = {
  render: () => ({
    components: { TopNavItem },
    template: `
      <div style="padding: 0.75rem; background: var(--color-slate-900); border-radius: var(--radius-lg); width: max-content;">
        <TopNavItem href="#" icon="info">Incidents</TopNavItem>
      </div>
    `,
  }),
}
