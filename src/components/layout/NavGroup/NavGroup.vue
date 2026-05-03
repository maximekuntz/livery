<template>
  <div class="lv-nav-group">
    <div v-if="label" class="lv-nav-group__label" :class="{ 'lv-nav-group__label--hidden': collapsed }">
      <span>{{ label }}</span>
    </div>
    <div v-else-if="!collapsed" class="lv-nav-group__divider" aria-hidden="true" />
    <slot />
  </div>
</template>

<script setup>
/**
 * NavGroup — Groups nav items with an optional section label.
 * Used inside the sidebar slot of SidebarLayout.
 */
defineProps({
  /** Section heading — e.g. "Operations", "Settings" */
  label: { type: String, default: undefined },
  /** Mirrors the parent sidebar's collapsed state to hide labels */
  collapsed: { type: Boolean, default: false },
})
</script>

<style scoped>
.lv-nav-group {
  margin-bottom: var(--space-2);
}

.lv-nav-group__label {
  padding: var(--space-3) var(--space-6) var(--space-1);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-slate-600);
  white-space: nowrap;
  overflow: hidden;
  transition: opacity var(--duration-normal) var(--ease-in-out);
}

.lv-nav-group__label--hidden {
  opacity: 0;
  pointer-events: none;
  height: 0;
  padding: 0;
}

.lv-nav-group__divider {
  height: 1px;
  background-color: var(--color-slate-800);
  margin: var(--space-2) var(--space-4);
}
</style>
