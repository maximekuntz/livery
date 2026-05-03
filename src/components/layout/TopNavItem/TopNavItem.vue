<template>
  <router-link
    v-if="to"
    :to="to"
    :class="classes"
    :aria-current="active ? 'page' : undefined"
  >
    <BaseIcon v-if="icon" :name="icon" size="sm" aria-hidden="true" />
    <slot />
  </router-link>
  <a
    v-else
    :href="href ?? '#'"
    :class="classes"
    :aria-current="active ? 'page' : undefined"
  >
    <BaseIcon v-if="icon" :name="icon" size="sm" aria-hidden="true" />
    <slot />
  </a>
</template>

<script setup>
import { computed } from 'vue'
import BaseIcon from '../../BaseIcon/BaseIcon.vue'

/**
 * TopNavItem — Navigation link styled for the top navbar.
 * Use inside the `nav` slot of TopNavLayout.
 */
const props = defineProps({
  to:     { type: [String, Object], default: undefined },
  href:   { type: String, default: undefined },
  icon:   { type: String, default: undefined },
  active: { type: Boolean, default: false },
})

const classes = computed(() => [
  'lv-top-nav-item',
  { 'lv-top-nav-item--active': props.active },
])
</script>

<style scoped>
.lv-top-nav-item {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-slate-400);
  text-decoration: none;
  border-radius: var(--radius-md);
  border-bottom: 2px solid transparent;
  transition:
    color var(--duration-fast) var(--ease-in-out),
    border-color var(--duration-fast) var(--ease-in-out);
  white-space: nowrap;
}

.lv-top-nav-item:hover {
  color: var(--text-inverse);
}

.lv-top-nav-item--active {
  color: var(--text-inverse);
  border-bottom-color: var(--brand-primary);
}

.lv-top-nav-item:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* Inside mobile drawer — stack vertically */
.lv-top-nav-layout__mobile-nav .lv-top-nav-item {
  border-bottom: none;
  border-left: 2px solid transparent;
  border-radius: var(--radius-sm);
  padding: var(--space-2) var(--space-3);
  width: 100%;
}

.lv-top-nav-layout__mobile-nav .lv-top-nav-item--active {
  border-left-color: var(--brand-primary);
  background-color: var(--color-slate-800);
}
</style>
