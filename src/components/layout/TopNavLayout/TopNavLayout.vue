<template>
  <div class="lv-top-nav-layout">
    <!-- ── Navbar ── -->
    <header class="lv-top-nav-layout__navbar" role="banner">
      <div class="lv-top-nav-layout__navbar-inner">

        <!-- Brand slot — logo / wordmark -->
        <div class="lv-top-nav-layout__brand">
          <slot name="brand" />
        </div>

        <!-- Primary nav links — hidden on mobile -->
        <nav
          class="lv-top-nav-layout__nav"
          :class="{ 'lv-top-nav-layout__nav--open': mobileOpen }"
          aria-label="Primary navigation"
        >
          <slot name="nav" />
        </nav>

        <!-- Right-side actions — user menu, CTAs, icons -->
        <div v-if="$slots.actions" class="lv-top-nav-layout__actions">
          <slot name="actions" />
        </div>

        <!-- Mobile hamburger -->
        <button
          type="button"
          class="lv-top-nav-layout__hamburger"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation"
          @click="mobileOpen = !mobileOpen"
        >
          <BaseIcon :name="mobileOpen ? 'close' : 'menu'" size="md" aria-hidden="true" />
        </button>
      </div>

      <!-- Mobile nav drawer -->
      <nav
        v-show="mobileOpen"
        class="lv-top-nav-layout__mobile-nav"
        aria-label="Mobile navigation"
        @click="mobileOpen = false"
      >
        <slot name="nav" />
      </nav>
    </header>

    <!-- Optional secondary bar — breadcrumb, tabs, filters -->
    <div v-if="$slots.subbar" class="lv-top-nav-layout__subbar">
      <slot name="subbar" />
    </div>

    <!-- ── Page content ── -->
    <main
      class="lv-top-nav-layout__content"
      :class="{ 'lv-top-nav-layout__content--contained': contained }"
      id="main-content"
      tabindex="-1"
    >
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseIcon from '../../BaseIcon/BaseIcon.vue'

/**
 * TopNavLayout — Full-page shell with a fixed top navigation bar.
 *
 * Slots:
 *   brand    — logo / wordmark on the left
 *   nav      — navigation links (TopNavItem)
 *   actions  — right side: user avatar, icon buttons, CTAs
 *   subbar   — optional secondary bar below the navbar (tabs, breadcrumb, filters)
 *   default  — page body content
 *
 * On mobile the nav links collapse behind a hamburger into a drawer.
 */
const props = defineProps({
  /** Constrains the content area to a max-width and centres it */
  contained: {
    type: Boolean,
    default: false,
  },
  /** Max-width when `contained` is true */
  maxWidth: {
    type: String,
    default: '1280px',
  },
  /** Height of the navbar */
  navbarHeight: {
    type: String,
    default: '3.5rem',
  },
})

const mobileOpen = ref(false)
</script>

<style scoped>
/* ── Shell ── */
.lv-top-nav-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-page);
  font-family: var(--font-sans);
}

/* ── Navbar ── */
.lv-top-nav-layout__navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-slate-900);
  border-bottom: 1px solid var(--color-slate-800);
  flex-shrink: 0;
}

.lv-top-nav-layout__navbar-inner {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  height: v-bind(navbarHeight);
  padding: 0 var(--space-6);
  max-width: v-bind(maxWidth);
  margin: 0 auto;
  width: 100%;
}

/* ── Brand ── */
.lv-top-nav-layout__brand {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

/* ── Nav links ── */
.lv-top-nav-layout__nav {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  flex: 1;
}

/* ── Actions ── */
.lv-top-nav-layout__actions {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-left: auto;
}

/* ── Hamburger ── */
.lv-top-nav-layout__hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-slate-400);
  border-radius: var(--radius-md);
  padding: var(--space-1);
  margin-left: auto;
  transition: color var(--duration-fast) var(--ease-in-out);
}
.lv-top-nav-layout__hamburger:hover { color: var(--text-inverse); }
.lv-top-nav-layout__hamburger:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* ── Mobile nav drawer ── */
.lv-top-nav-layout__mobile-nav {
  display: none;
  flex-direction: column;
  padding: var(--space-3) var(--space-4);
  border-top: 1px solid var(--color-slate-800);
  background-color: var(--color-slate-900);
}

/* ── Subbar ── */
.lv-top-nav-layout__subbar {
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  padding: 0 var(--space-6);
  display: flex;
  align-items: center;
  min-height: 2.75rem;
}

/* ── Content ── */
.lv-top-nav-layout__content {
  flex: 1;
  padding: var(--space-8) var(--space-6);
  outline: none;
}

.lv-top-nav-layout__content--contained {
  max-width: v-bind(maxWidth);
  margin: 0 auto;
  width: 100%;
}

/* ── Responsive ── */
@media (max-width: 767px) {
  .lv-top-nav-layout__nav {
    display: none;
  }

  .lv-top-nav-layout__hamburger {
    display: inline-flex;
  }

  .lv-top-nav-layout__mobile-nav {
    display: flex;
  }

  .lv-top-nav-layout__content {
    padding: var(--space-5) var(--space-4);
  }
}
</style>
