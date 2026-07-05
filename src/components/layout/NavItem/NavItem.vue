<template>
  <router-link
    v-if="to"
    :to="to"
    :class="classes"
    :aria-current="active ? 'page' : undefined"
  >
    <span
      v-if="icon"
      class="lv-nav-item__icon"
      aria-hidden="true"
    >
      <BaseIcon
        :name="icon"
        size="sm"
      />
    </span>
    <span class="lv-nav-item__label">
      <slot />
    </span>
    <span
      v-if="badge"
      class="lv-nav-item__badge"
      aria-label=", {{ badge }} notifications"
    >
      {{ badge }}
    </span>
  </router-link>

  <a
    v-else
    :href="href ?? '#'"
    :class="classes"
    :aria-current="active ? 'page' : undefined"
  >
    <span
      v-if="icon"
      class="lv-nav-item__icon"
      aria-hidden="true"
    >
      <BaseIcon
        :name="icon"
        size="sm"
      />
    </span>
    <span class="lv-nav-item__label">
      <slot />
    </span>
    <span
      v-if="badge"
      class="lv-nav-item__badge"
    >
      {{ badge }}
    </span>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import BaseIcon from '../../BaseIcon/BaseIcon.vue'

/**
 * NavItem — A single navigation link for use inside SidebarLayout
 * or TopNavLayout.
 *
 * Works with vue-router (via `to`) or plain anchors (via `href`).
 * `active` can be set manually or driven by router's active class.
 */
const props = defineProps({
  /** Router-link `to` target */
  to:     { type: [String, Object], default: undefined },
  /** Fallback href for non-router usage */
  href:   { type: String, default: undefined },
  /** Icon name from BaseIcon */
  icon:   { type: String, default: undefined },
  /** Mark this item as the current page */
  active: { type: Boolean, default: false },
  /** Numeric badge — e.g. unread count */
  badge:  { type: [Number, String], default: undefined },
  /** Sidebar-specific: apply collapsed (icon-only) styling */
  collapsed: { type: Boolean, default: false },
})

const classes = computed(() => [
  'lv-nav-item',
  { 'lv-nav-item--active': props.active },
  { 'lv-nav-item--collapsed': props.collapsed },
])
</script>

<style scoped>
.lv-nav-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-slate-400);
  text-decoration: none;
  border-radius: var(--radius-md);
  margin: 1px var(--space-2);
  transition:
    background-color var(--duration-fast) var(--ease-in-out),
    color var(--duration-fast) var(--ease-in-out);
  white-space: nowrap;
  overflow: hidden;
}

.lv-nav-item:hover {
  background-color: var(--color-slate-800);
  color: var(--color-slate-100);
}

.lv-nav-item--active {
  background-color: var(--color-slate-800);
  color: var(--text-inverse);
}

.lv-nav-item--active .lv-nav-item__icon {
  color: var(--brand-primary);
}

.lv-nav-item:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

.lv-nav-item__icon {
  flex-shrink: 0;
  color: var(--color-slate-500);
  transition: color var(--duration-fast) var(--ease-in-out);
}

.lv-nav-item:hover .lv-nav-item__icon {
  color: var(--color-slate-300);
}

.lv-nav-item__label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── Badge ── */
.lv-nav-item__badge {
  flex-shrink: 0;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  background-color: var(--brand-primary);
  color: var(--text-inverse);
  border-radius: var(--radius-full);
  padding: 0 var(--space-2);
  min-width: 1.25rem;
  text-align: center;
  line-height: 1.4;
}

/* ── Collapsed (icon-only) ── */
.lv-nav-item--collapsed {
  justify-content: center;
  padding: var(--space-2);
  margin: 1px var(--space-2);
}

.lv-nav-item--collapsed .lv-nav-item__label,
.lv-nav-item--collapsed .lv-nav-item__badge {
  display: none;
}
</style>
