import NavGroup from './NavGroup.vue'
import NavItem from '../NavItem/NavItem.vue'

export default {
  title: 'Components/Layout/NavGroup',
  component: NavGroup,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    collapsed: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    label: 'Operations',
    collapsed: false,
  },
  render: (args) => ({
    components: { NavGroup, NavItem },
    setup: () => ({ args }),
    template: `
      <div style="width: 260px; padding: 0.5rem; background: var(--color-slate-900); border-radius: var(--radius-lg);">
        <NavGroup :label="args.label" :collapsed="args.collapsed">
          <NavItem href="#" icon="check-circle" :active="true" :collapsed="args.collapsed">Dashboard</NavItem>
          <NavItem href="#" icon="search" :collapsed="args.collapsed">Timetable</NavItem>
          <NavItem href="#" icon="info" :collapsed="args.collapsed">Incidents</NavItem>
        </NavGroup>
      </div>
    `,
  }),
}

export const WithoutLabel = {
  render: () => ({
    components: { NavGroup, NavItem },
    template: `
      <div style="width: 260px; padding: 0.5rem; background: var(--color-slate-900); border-radius: var(--radius-lg);">
        <NavGroup>
          <NavItem href="#" icon="external-link">Routes</NavItem>
          <NavItem href="#" icon="user">Depots</NavItem>
        </NavGroup>
      </div>
    `,
  }),
}

export const Collapsed = {
  render: () => ({
    components: { NavGroup, NavItem },
    template: `
      <div style="width: 80px; padding: 0.5rem; background: var(--color-slate-900); border-radius: var(--radius-lg);">
        <NavGroup label="Ops" :collapsed="true">
          <NavItem href="#" icon="check-circle" :active="true" :collapsed="true">Dashboard</NavItem>
          <NavItem href="#" icon="search" :collapsed="true">Timetable</NavItem>
        </NavGroup>
      </div>
    `,
  }),
}
