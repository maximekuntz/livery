<template>
  <span :class="classes" role="status">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Badge — Compact status indicator.
 *
 * Draws from signal aspect colours: green = clear, amber = caution,
 * red = danger/stop, blue = informational.
 *
 * Accessibility: uses role="status" for live-region announcement.
 * When used as a label (not live), suppress with aria-hidden on the parent
 * and provide context in surrounding text.
 */
const props = defineProps({
  /** Colour variant mapped to rail signal aspects */
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'success', 'warning', 'danger', 'info', 'inverse'].includes(v),
  },
  /** Pill shape */
  pill: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [
  'lv-badge',
  `lv-badge--${props.variant}`,
  { 'lv-badge--pill': props.pill },
])
</script>

<style scoped>
.lv-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  line-height: 1;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  border: 1.5px solid transparent;
}

.lv-badge--pill {
  border-radius: var(--radius-full);
  padding-inline: var(--space-3);
}

/* ── Variants ── */
.lv-badge--default {
  background-color: var(--color-slate-100);
  color: var(--color-slate-700);
  border-color: var(--color-slate-200);
}

.lv-badge--success {
  background-color: #ebfbee;
  color: var(--color-green-700);
  border-color: #b2f2bb;
}

.lv-badge--warning {
  background-color: #fff9db;
  color: var(--color-amber-700);
  border-color: #ffe066;
}

.lv-badge--danger {
  background-color: #fff5f5;
  color: var(--color-red-700);
  border-color: #ffc9c9;
}

.lv-badge--info {
  background-color: var(--color-blue-50);
  color: var(--color-blue-800);
  border-color: var(--color-blue-100);
}

.lv-badge--inverse {
  background-color: var(--color-slate-900);
  color: var(--text-inverse);
  border-color: var(--color-slate-700);
}
</style>
