<template>
  <div :class="classes" role="group" :aria-label="ariaLabel">
    <div v-if="$slots.header" class="lv-card__header">
      <slot name="header" />
    </div>
    <div class="lv-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="lv-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Card — Surface container with optional header and footer zones.
 *
 * Styled after the rectangular information panels on rolling stock and
 * station infrastructure — clean edges, restrained padding.
 */
const props = defineProps({
  /** Elevation level */
  elevation: {
    type: String,
    default: 'md',
    validator: (v) => ['none', 'sm', 'md', 'lg'].includes(v),
  },
  /** Removes padding for flush content (e.g. full-bleed images) */
  flush: {
    type: Boolean,
    default: false,
  },
  /** Accessible label for the card group */
  ariaLabel: {
    type: String,
    default: undefined,
  },
})

const classes = computed(() => [
  'lv-card',
  `lv-card--elevation-${props.elevation}`,
  { 'lv-card--flush': props.flush },
])
</script>

<style scoped>
.lv-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.lv-card--elevation-none { box-shadow: var(--shadow-none); }
.lv-card--elevation-sm   { box-shadow: var(--shadow-sm); }
.lv-card--elevation-md   { box-shadow: var(--shadow-md); }
.lv-card--elevation-lg   { box-shadow: var(--shadow-lg); }

.lv-card__body {
  padding: var(--space-6);
}

.lv-card--flush .lv-card__body {
  padding: 0;
}

.lv-card__header {
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--border-subtle);
  font-weight: var(--font-semibold);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-secondary);
}

.lv-card__footer {
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}
</style>
