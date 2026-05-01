import LvSidebarLayout from './LvSidebarLayout.vue'
import LvNavItem from '../LvNavItem/LvNavItem.vue'
import LvNavGroup from '../LvNavGroup/LvNavGroup.vue'
import LvBadge from '../../LvBadge/LvBadge.vue'
import LvButton from '../../LvButton/LvButton.vue'
import LvClickableIcon from '../../LvClickableIcon/LvClickableIcon.vue'

export default {
  title: 'Layout/SidebarLayout',
  component: LvSidebarLayout,
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
**LvSidebarLayout** — Two-column application shell for dashboard and tool UIs.

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
  components: { LvNavItem, LvNavGroup },
  template: `
    <LvNavGroup label="Operations">
      <LvNavItem href="#" icon="check-circle" :active="true">Dashboard</LvNavItem>
      <LvNavItem href="#" icon="search">Timetable</LvNavItem>
      <LvNavItem href="#" icon="info">Incidents</LvNavItem>
    </LvNavGroup>
    <LvNavGroup label="Network">
      <LvNavItem href="#" icon="external-link">Routes</LvNavItem>
      <LvNavItem href="#" icon="user">Depots</LvNavItem>
    </LvNavGroup>
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
    components: { LvSidebarLayout, LvNavItem, LvNavGroup, LvBadge, LvClickableIcon, PageContent },
    setup() { return { args } },
    template: `
      <LvSidebarLayout v-bind="args" style="height: 100vh;">
        <!-- Sidebar header -->
        <template #sidebar-header>
          <div style="display:flex; align-items:center; gap: 0.625rem;">
            <div style="width:28px; height:28px; border-radius:6px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color: var(--text-inverse); letter-spacing:-0.01em;">Livery</span>
          </div>
        </template>

        <!-- Sidebar nav -->
        <template #sidebar>
          <LvNavGroup label="Operations">
            <LvNavItem href="#" icon="check-circle" :active="true">Dashboard</LvNavItem>
            <LvNavItem href="#" icon="search">Timetable</LvNavItem>
            <LvNavItem href="#" icon="info">Incidents</LvNavItem>
          </LvNavGroup>
          <LvNavGroup label="Network">
            <LvNavItem href="#" icon="external-link">Routes</LvNavItem>
            <LvNavItem href="#" icon="user">Depots</LvNavItem>
          </LvNavGroup>
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
          <LvClickableIcon icon="settings" aria-label="Settings" variant="ghost" />
          <LvClickableIcon icon="user" aria-label="Profile" variant="ghost" />
        </template>

        <!-- Page content -->
        <PageContent />
      </LvSidebarLayout>
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
    components: { LvSidebarLayout, LvNavItem, LvNavGroup, LvClickableIcon, LvButton },
    setup() {
      return { args }
    },
    template: `
      <LvSidebarLayout v-bind="args" style="height:100vh;" ref="layout">
        <template #sidebar-header>
          <div style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem;">
            <div style="display:flex; align-items:center; gap:0.625rem; overflow:hidden;">
              <div style="width:28px; height:28px; border-radius:6px; background:var(--brand-primary); flex-shrink:0;"></div>
              <span v-if="!args.collapsed" style="font-weight:700; font-size:1rem; color:var(--text-inverse); white-space:nowrap;">Livery</span>
            </div>
          </div>
        </template>
        <template #sidebar>
          <LvNavGroup>
            <LvNavItem href="#" icon="check-circle" :active="true" :collapsed="args.collapsed">Dashboard</LvNavItem>
            <LvNavItem href="#" icon="search" :collapsed="args.collapsed">Timetable</LvNavItem>
            <LvNavItem href="#" icon="info" :collapsed="args.collapsed">Incidents</LvNavItem>
          </LvNavGroup>
        </template>
        <template #topbar>
          <span style="color:var(--text-secondary); font-size:0.875rem;">Toggle the collapsed control in the panel →</span>
        </template>
        <div style="padding:1rem; color:var(--text-primary);">Collapsible sidebar demo — adjust the <strong>collapsed</strong> control.</div>
      </LvSidebarLayout>
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
    components: { LvSidebarLayout, LvNavItem },
    setup() { return { args } },
    template: `
      <LvSidebarLayout v-bind="args" style="height: 100vh;">
        <template #sidebar>
          <LvNavItem href="#" icon="check-circle" :active="true">Home</LvNavItem>
          <LvNavItem href="#" icon="settings">Settings</LvNavItem>
          <LvNavItem href="#" icon="user">Profile</LvNavItem>
        </template>
        <div style="color: var(--text-primary); padding: 0.5rem;">
          Minimal sidebar — no header or footer slots filled.
        </div>
      </LvSidebarLayout>
    `,
  }),
  args: {
    sidebarWidth: '200px',
  },
}
