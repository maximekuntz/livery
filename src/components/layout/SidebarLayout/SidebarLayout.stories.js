import SidebarLayout from './SidebarLayout.vue'
import NavItem from '../NavItem/NavItem.vue'
import NavGroup from '../NavGroup/NavGroup.vue'
import Badge from '../../Badge/Badge.vue'
import Button from '../../Button/Button.vue'
import ClickableIcon from '../../ClickableIcon/ClickableIcon.vue'

export default {
  title: 'Layout/SidebarLayout',
  component: SidebarLayout,
  tags: ['autodocs'],
  argTypes: {
    sidebarWidth:      { control: 'text' },
    collapsedWidth:    { control: 'text' },
    collapsible:       { control: 'boolean' },
    collapsed:         { control: 'boolean' },
    sidebarLabel:      { control: 'text' },
    mobileBreakpoint:  { control: { type: 'number', min: 320, max: 1440, step: 16 } },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**SidebarLayout** — Two-column application shell for dashboard and tool UIs.

- Sticky, full-height sidebar on desktop; collapses to an off-canvas drawer on mobile
- Supports icon-only collapsed mode when \`collapsible\` is true
- Uses CSS custom properties exclusively — no hardcoded colours or spacing
- Semantically structured: \`<aside>\`, \`<nav>\`, \`<header>\`, \`<main>\`

**Accessibility**
- Sidebar has \`role="complementary"\` via \`<aside>\` + \`aria-label\`
- Mobile toggle sets \`aria-expanded\` on the hamburger button
- Backdrop closes the drawer and returns focus
- \`<main id="main-content"\` supports skip-link targets
        `,
      },
    },
  },
}

/* ── Helpers ── */
const SidebarContent = {
  components: { NavItem, NavGroup },
  template: `
    <NavGroup label="Operations">
      <NavItem href="#" icon="check-circle" :active="true">Dashboard</NavItem>
      <NavItem href="#" icon="search">Timetable</NavItem>
      <NavItem href="#" icon="info">Incidents</NavItem>
    </NavGroup>
    <NavGroup label="Network">
      <NavItem href="#" icon="external-link">Routes</NavItem>
      <NavItem href="#" icon="user">Depots</NavItem>
    </NavGroup>
  `,
}

const PageContent = {
  template: `
    <div style="max-width: 720px;">
      <h1 style="font-size: 1.5rem; font-weight: 700; margin: 0 0 0.5rem; color: var(--text-primary);">Dashboard</h1>
      <p style="color: var(--text-secondary); margin: 0 0 1.5rem;">Live operational overview for the Northern Network.</p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
        <div v-for="n in 3" :key="n" style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.25rem;">
          <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-tertiary); margin-bottom: 0.5rem;">Metric {{ n }}</div>
          <div style="font-size: 1.75rem; font-weight: 700; color: var(--text-primary);">{{ n * 42 }}</div>
        </div>
      </div>
    </div>
  `,
}

/* ─────────────────────────────────────────────────────────── */

export const Default = {
  render: (args) => ({
    components: { SidebarLayout, NavItem, NavGroup, Badge, ClickableIcon, PageContent },
    setup() { return { args } },
    template: `
      <SidebarLayout v-bind="args" style="height: 100vh;">
        <!-- Sidebar header -->
        <template #sidebar-header>
          <div style="display:flex; align-items:center; gap: 0.625rem;">
            <div style="width:28px; height:28px; border-radius:6px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color: var(--text-inverse); letter-spacing:-0.01em;">Livery</span>
          </div>
        </template>

        <!-- Sidebar nav -->
        <template #sidebar>
          <NavGroup label="Operations">
            <NavItem href="#" icon="check-circle" :active="true">Dashboard</NavItem>
            <NavItem href="#" icon="search">Timetable</NavItem>
            <NavItem href="#" icon="info">Incidents</NavItem>
          </NavGroup>
          <NavGroup label="Network">
            <NavItem href="#" icon="external-link">Routes</NavItem>
            <NavItem href="#" icon="user">Depots</NavItem>
          </NavGroup>
        </template>

        <!-- Sidebar footer -->
        <template #sidebar-footer>
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <div style="width:32px; height:32px; border-radius:50%; background:var(--color-slate-700); flex-shrink:0;"></div>
            <div style="flex:1; min-width:0;">
              <div style="font-size:0.8125rem; font-weight:600; color: var(--color-slate-200); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Alex Driver</div>
              <div style="font-size:0.75rem; color:var(--color-slate-500);">Controller</div>
            </div>
          </div>
        </template>

        <!-- Topbar -->
        <template #topbar>
          <div style="flex:1;"></div>
          <ClickableIcon icon="settings" aria-label="Settings" variant="ghost" />
          <ClickableIcon icon="user" aria-label="Profile" variant="ghost" />
        </template>

        <!-- Page content -->
        <PageContent />
      </SidebarLayout>
    `,
  }),
  args: {
    sidebarWidth: '240px',
    collapsedWidth: '64px',
    collapsible: false,
    collapsed: false,
    sidebarLabel: 'Sidebar',
    mobileBreakpoint: 768,
  },
}

export const Collapsible = {
  render: (args) => ({
    components: { SidebarLayout, NavItem, NavGroup, ClickableIcon, Button },
    setup() {
      return { args }
    },
    template: `
      <SidebarLayout v-bind="args" style="height:100vh;" ref="layout">
        <template #sidebar-header>
          <div style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem;">
            <div style="display:flex; align-items:center; gap:0.625rem; overflow:hidden;">
              <div style="width:28px; height:28px; border-radius:6px; background:var(--brand-primary); flex-shrink:0;"></div>
              <span v-if="!args.collapsed" style="font-weight:700; font-size:1rem; color:var(--text-inverse); white-space:nowrap;">Livery</span>
            </div>
          </div>
        </template>
        <template #sidebar>
          <NavGroup>
            <NavItem href="#" icon="check-circle" :active="true" :collapsed="args.collapsed">Dashboard</NavItem>
            <NavItem href="#" icon="search" :collapsed="args.collapsed">Timetable</NavItem>
            <NavItem href="#" icon="info" :collapsed="args.collapsed">Incidents</NavItem>
          </NavGroup>
        </template>
        <template #topbar>
          <span style="color:var(--text-secondary); font-size:0.875rem;">Toggle the collapsed control in the panel →</span>
        </template>
        <div style="padding:1rem; color:var(--text-primary);">Collapsible sidebar demo — adjust the <strong>collapsed</strong> control.</div>
      </SidebarLayout>
    `,
  }),
  args: {
    collapsible: true,
    collapsed: false,
    sidebarWidth: '240px',
    collapsedWidth: '64px',
  },
}

export const MinimalShell = {
  name: 'Minimal Shell',
  render: (args) => ({
    components: { SidebarLayout, NavItem },
    setup() { return { args } },
    template: `
      <SidebarLayout v-bind="args" style="height: 100vh;">
        <template #sidebar>
          <NavItem href="#" icon="check-circle" :active="true">Home</NavItem>
          <NavItem href="#" icon="settings">Settings</NavItem>
          <NavItem href="#" icon="user">Profile</NavItem>
        </template>
        <div style="color: var(--text-primary); padding: 0.5rem;">
          Minimal sidebar — no header or footer slots filled.
        </div>
      </SidebarLayout>
    `,
  }),
  args: {
    sidebarWidth: '200px',
  },
}
