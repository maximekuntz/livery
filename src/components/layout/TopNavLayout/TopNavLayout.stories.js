import TopNavLayout from './TopNavLayout.vue'
import TopNavItem from '../TopNavItem/TopNavItem.vue'
import Button from '../../Button/Button.vue'
import Badge from '../../Badge/Badge.vue'
import ClickableIcon from '../../ClickableIcon/ClickableIcon.vue'

export default {
  title: 'Layout/TopNavLayout',
  component: TopNavLayout,
  tags: ['autodocs'],
  argTypes: {
    contained:    { control: 'boolean' },
    maxWidth:     { control: 'text' },
    navbarHeight: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**TopNavLayout** — Full-page shell with a sticky top navigation bar.

- Horizontal nav links collapse into a hamburger drawer on mobile
- Optional \`contained\` prop constrains and centres the content area
- Optional \`subbar\` slot for secondary chrome (tabs, breadcrumbs, filters)
- Dark navbar matches Livery's rail-cabin aesthetic

**Accessibility**
- Top-level \`<header role="banner">\` landmark
- Primary nav rendered as \`<nav aria-label="Primary navigation">\`
- Mobile hamburger uses \`aria-expanded\` and \`aria-label\`
- \`<main id="main-content"\` supports skip-link targets
        `,
      },
    },
  },
}

/* ── Shared page body ── */
const FakeContent = {
  template: `
    <div>
      <h1 style="font-size: 1.5rem; font-weight: 700; margin: 0 0 0.5rem; color: var(--text-primary);">Timetable</h1>
      <p style="color: var(--text-secondary); margin: 0 0 1.5rem;">Northern Network — Live departures.</p>
      <div style="display:grid; gap:0.75rem;">
        <div v-for="i in 4" :key="i" style="background: var(--bg-surface); border:1px solid var(--border-subtle); border-radius: var(--radius-lg); padding:1rem 1.25rem; display:flex; align-items:center; gap:1rem;">
          <div style="font-variant-numeric:tabular-nums; font-weight:700; font-size:1.25rem; color:var(--text-primary); width:3rem; flex-shrink:0;">{{ ['07:42','08:15','09:03','09:37'][i-1] }}</div>
          <div style="flex:1;">
            <div style="font-weight:600; color:var(--text-primary);">Platform {{ i }}</div>
            <div style="font-size:0.8125rem; color:var(--text-secondary);">Manchester Piccadilly · 2 coaches · On time</div>
          </div>
          <div style="font-size:0.75rem; font-weight:600; color:var(--color-green-700);">ON TIME</div>
        </div>
      </div>
    </div>
  `,
}

/* ─────────────────────────────────────────────────────────── */

export const Default = {
  render: (args) => ({
    components: { TopNavLayout, TopNavItem, FakeContent },
    setup() { return { args } },
    template: `
      <TopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <div style="display:flex; align-items:center; gap:0.625rem;">
            <div style="width:26px; height:26px; border-radius:5px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color:var(--text-inverse); letter-spacing:-0.01em;">Livery</span>
          </div>
        </template>
        <template #nav>
          <TopNavItem href="#" :active="true">Dashboard</TopNavItem>
          <TopNavItem href="#">Timetable</TopNavItem>
          <TopNavItem href="#">Network</TopNavItem>
          <TopNavItem href="#">Reports</TopNavItem>
        </template>
        <FakeContent />
      </TopNavLayout>
    `,
  }),
  args: {
    contained: false,
    maxWidth: '1280px',
    navbarHeight: '3.5rem',
  },
}

export const WithActions = {
  name: 'With Actions',
  render: (args) => ({
    components: { TopNavLayout, TopNavItem, Button, ClickableIcon, FakeContent },
    setup() { return { args } },
    template: `
      <TopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <div style="display:flex; align-items:center; gap:0.625rem;">
            <div style="width:26px; height:26px; border-radius:5px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color:var(--text-inverse); letter-spacing:-0.01em;">Livery</span>
          </div>
        </template>
        <template #nav>
          <TopNavItem href="#" :active="true">Dashboard</TopNavItem>
          <TopNavItem href="#">Timetable</TopNavItem>
          <TopNavItem href="#">Network</TopNavItem>
        </template>
        <template #actions>
          <ClickableIcon icon="search" aria-label="Search" variant="ghost" />
          <ClickableIcon icon="settings" aria-label="Settings" variant="ghost" />
          <div style="width:32px; height:32px; border-radius:50%; background:var(--color-slate-600); flex-shrink:0; cursor:pointer;" title="User menu"></div>
        </template>
        <FakeContent />
      </TopNavLayout>
    `,
  }),
  args: {
    contained: false,
  },
}

export const Contained = {
  render: (args) => ({
    components: { TopNavLayout, TopNavItem, Button, ClickableIcon, FakeContent },
    setup() { return { args } },
    template: `
      <TopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <div style="display:flex; align-items:center; gap:0.625rem;">
            <div style="width:26px; height:26px; border-radius:5px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color:var(--text-inverse);">Livery</span>
          </div>
        </template>
        <template #nav>
          <TopNavItem href="#" :active="true">Dashboard</TopNavItem>
          <TopNavItem href="#">Timetable</TopNavItem>
          <TopNavItem href="#">Network</TopNavItem>
        </template>
        <template #actions>
          <Button variant="outlined" size="sm">Sign out</Button>
        </template>
        <FakeContent />
      </TopNavLayout>
    `,
  }),
  args: {
    contained: true,
    maxWidth: '900px',
  },
}

export const WithSubbar = {
  name: 'With Subbar',
  render: (args) => ({
    components: { TopNavLayout, TopNavItem, ClickableIcon },
    setup() { return { args } },
    template: `
      <TopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <span style="font-weight:700; font-size:1rem; color:var(--text-inverse);">Livery</span>
        </template>
        <template #nav>
          <TopNavItem href="#" :active="true">Dashboard</TopNavItem>
          <TopNavItem href="#">Timetable</TopNavItem>
        </template>
        <template #actions>
          <ClickableIcon icon="user" aria-label="Profile" variant="ghost" />
        </template>
        <template #subbar>
          <nav style="display:flex; gap:0.25rem; align-items:center;">
            <a href="#" style="padding:0.5rem 0.75rem; font-size:0.875rem; font-weight:600; color:var(--brand-primary); border-bottom:2px solid var(--brand-primary); text-decoration:none;">Overview</a>
            <a href="#" style="padding:0.5rem 0.75rem; font-size:0.875rem; color:var(--text-secondary); text-decoration:none;">Departures</a>
            <a href="#" style="padding:0.5rem 0.75rem; font-size:0.875rem; color:var(--text-secondary); text-decoration:none;">Arrivals</a>
          </nav>
        </template>
        <div style="color:var(--text-primary);">
          <p>Page content below the subbar (tab strip).</p>
        </div>
      </TopNavLayout>
    `,
  }),
  args: {
    contained: false,
  },
}
