<template>
  <div :class="rootClasses">
    <!-- ── Sidebar ── -->
    <aside
      class="lv-sidebar-layout__sidebar"
      :aria-label="sidebarLabel"
      :aria-hidden="mobileOpen ? undefined : isMobile ? 'true' : undefined"
    >
      <!-- Sidebar header — logo / wordmark zone -->
      <div
        v-if="$slots['sidebar-header']"
        class="lv-sidebar-layout__sidebar-header"
      >
        <slot name="sidebar-header" />
      </div>

      <!-- Primary navigation -->
      <nav
        class="lv-sidebar-layout__nav"
        aria-label="Primary navigation"
      >
        <slot name="sidebar" />
      </nav>

      <!-- Sidebar footer — user menu, settings link -->
      <div
        v-if="$slots['sidebar-footer']"
        class="lv-sidebar-layout__sidebar-footer"
      >
        <slot name="sidebar-footer" />
      </div>
    </aside>

    <!-- Mobile overlay backdrop -->
    <div
      v-if="mobileOpen"
      class="lv-sidebar-layout__backdrop"
      aria-hidden="true"
      @click="mobileOpen = false"
    />

    <!-- ── Main column ── -->
    <div class="lv-sidebar-layout__main">
      <!-- Topbar inside the main column (mobile hamburger + page-level chrome) -->
      <header
        v-if="$slots.topbar || showMobileToggle"
        class="lv-sidebar-layout__topbar"
      >
        <button
          v-if="showMobileToggle"
          type="button"
          class="lv-sidebar-layout__hamburger"
          :aria-expanded="mobileOpen"
          aria-controls="lv-sidebar"
          aria-label="Toggle navigation"
          @click="mobileOpen = !mobileOpen"
        >
          <BaseIcon
            :name="mobileOpen ? 'close' : 'menu'"
            size="md"
            aria-hidden="true"
          />
        </button>
        <slot name="topbar" />
      </header>

      <!-- Page content -->
      <main
        id="main-content"
        class="lv-sidebar-layout__content"
        tabindex="-1"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import BaseIcon from '../../BaseIcon/BaseIcon.vue'

/**
 * SidebarLayout — Two-column application shell with collapsible sidebar.
 *
 * Slots:
 *   sidebar-header  — logo / brand zone at the top of the sidebar
 *   sidebar         — nav links (use NavItem / NavGroup)
 *   sidebar-footer  — user avatar, settings link at the bottom
 *   topbar          — content in the in-main-column top bar
 *   default         — page body content
 *
 * Responsive: sidebar collapses off-canvas below `mobileBreakpoint`.
 * The hamburger button appears automatically when the sidebar is hidden.
 */
const props = defineProps({
  /** Width of the sidebar */
  sidebarWidth: {
    type: String,
    default: '240px',
  },
  /** Collapsed (icon-only) width when `collapsible` is true */
  collapsedWidth: {
    type: String,
    default: '64px',
  },
  /** Whether the sidebar can be collapsed to icon-only mode on desktop */
  collapsible: {
    type: Boolean,
    default: false,
  },
  /** Start in collapsed state */
  collapsed: {
    type: Boolean,
    default: false,
  },
  /** Accessible label for the sidebar landmark */
  sidebarLabel: {
    type: String,
    default: 'Sidebar',
  },
  /** px value at which the sidebar goes off-canvas */
  mobileBreakpoint: {
    type: Number,
    default: 768,
  },
})

const emit = defineEmits(['update:collapsed'])

const isCollapsed = ref(props.collapsed)
const mobileOpen  = ref(false)
const isMobile    = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth < props.mobileBreakpoint
  if (!isMobile.value) mobileOpen.value = false
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => window.removeEventListener('resize', checkMobile))

const showMobileToggle = computed(() => isMobile.value)

function toggleCollapsed() {
  isCollapsed.value = !isCollapsed.value
  emit('update:collapsed', isCollapsed.value)
}

const currentWidth = computed(() =>
  isCollapsed.value ? props.collapsedWidth : props.sidebarWidth
)

const rootClasses = computed(() => [
  'lv-sidebar-layout',
  {
    'lv-sidebar-layout--collapsed':    isCollapsed.value,
    'lv-sidebar-layout--mobile-open':  mobileOpen.value,
    'lv-sidebar-layout--collapsible':  props.collapsible,
  },
])

defineExpose({ toggleCollapsed, isCollapsed, mobileOpen })
</script>

<style scoped>
/* ── Shell ── */
.lv-sidebar-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: var(--bg-page);
  font-family: var(--font-sans);
}

/* ── Sidebar ── */
.lv-sidebar-layout__sidebar {
  display: flex;
  flex-direction: column;
  width: v-bind(currentWidth);
  flex-shrink: 0;
  background-color: var(--color-slate-900);
  border-right: 1px solid var(--color-slate-800);
  overflow-y: auto;
  overflow-x: hidden;
  transition: width var(--duration-normal) var(--ease-in-out);
  z-index: 200;
}

.lv-sidebar-layout__sidebar-header {
  padding: var(--space-4) var(--space-4) var(--space-2);
  flex-shrink: 0;
  border-bottom: 1px solid var(--color-slate-800);
}

.lv-sidebar-layout__nav {
  flex: 1;
  padding: var(--space-3) 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.lv-sidebar-layout__sidebar-footer {
  padding: var(--space-3) var(--space-4);
  flex-shrink: 0;
  border-top: 1px solid var(--color-slate-800);
}

/* ── Main column ── */
.lv-sidebar-layout__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
}

/* ── Topbar strip inside main ── */
.lv-sidebar-layout__topbar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  height: 3.5rem;
  padding: 0 var(--space-6);
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  flex-shrink: 0;
}

/* ── Content ── */
.lv-sidebar-layout__content {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-6);
  outline: none;
}

/* ── Hamburger ── */
.lv-sidebar-layout__hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  border-radius: var(--radius-md);
  padding: var(--space-1);
  transition: color var(--duration-fast) var(--ease-in-out);
}
.lv-sidebar-layout__hamburger:hover { color: var(--text-primary); }
.lv-sidebar-layout__hamburger:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* ── Backdrop ── */
.lv-sidebar-layout__backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 199;
}

/* ── Responsive ── */
@media (max-width: 767px) {
  .lv-sidebar-layout__sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: v-bind(sidebarWidth) !important;
    transform: translateX(-100%);
    transition:
      transform var(--duration-normal) var(--ease-in-out),
      box-shadow var(--duration-normal) var(--ease-in-out);
  }

  .lv-sidebar-layout--mobile-open .lv-sidebar-layout__sidebar {
    transform: translateX(0);
    box-shadow: var(--shadow-xl);
  }

  .lv-sidebar-layout--mobile-open .lv-sidebar-layout__backdrop {
    display: block;
  }

  .lv-sidebar-layout__hamburger {
    display: inline-flex;
  }
}
</style>
