import NavItem from './NavItem.vue'

export default {
  title: 'Components/Layout/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    icon: { control: 'text' },
    active: { control: 'boolean' },
    badge: { control: 'text' },
    collapsed: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export const Default = {
  args: {
    href: '#',
    icon: 'check-circle',
    active: false,
    badge: '',
    collapsed: false,
    label: 'Dashboard',
  },
  render: (args) => ({
    components: { NavItem },
    setup: () => ({ args }),
    template: `
      <div style="width: 260px; padding: 0.5rem; background: var(--color-slate-900); border-radius: var(--radius-lg);">
        <NavItem
          :href="args.href"
          :icon="args.icon || undefined"
          :active="args.active"
          :badge="args.badge || undefined"
          :collapsed="args.collapsed"
        >
          {{ args.label }}
        </NavItem>
      </div>
    `,
  }),
}

export const ActiveWithBadge = {
  render: () => ({
    components: { NavItem },
    template: `
      <div style="width: 260px; padding: 0.5rem; background: var(--color-slate-900); border-radius: var(--radius-lg); display: grid; gap: 0.25rem;">
        <NavItem href="#" icon="check-circle" :active="true">Dashboard</NavItem>
        <NavItem href="#" icon="info" badge="3">Incidents</NavItem>
      </div>
    `,
  }),
}

export const Collapsed = {
  render: () => ({
    components: { NavItem },
    template: `
      <div style="width: 80px; padding: 0.5rem; background: var(--color-slate-900); border-radius: var(--radius-lg); display: grid; gap: 0.25rem;">
        <NavItem href="#" icon="check-circle" :active="true" :collapsed="true">Dashboard</NavItem>
        <NavItem href="#" icon="search" :collapsed="true">Timetable</NavItem>
      </div>
    `,
  }),
}
