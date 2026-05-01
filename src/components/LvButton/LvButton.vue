<template>
  <component
    :is="tag"
    :type="tag === 'button' ? type : undefined"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
    :aria-busy="loading"
    :class="classes"
    v-bind="$attrs"
  >
    <span v-if="loading" class="lv-button__spinner" aria-hidden="true" />
    <span v-if="$slots.icon && iconPosition === 'left'" class="lv-button__icon" aria-hidden="true">
      <slot name="icon" />
    </span>
    <span class="lv-button__label">
      <slot />
    </span>
    <span v-if="$slots.icon && iconPosition === 'right'" class="lv-button__icon" aria-hidden="true">
      <slot name="icon" />
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

/**
 * LvButton — Primary interactive element.
 *
 * Accessibility: always communicates intent via text label or aria-label.
 * Loading state sets `aria-busy` and disables pointer interaction.
 */
const props = defineProps({
  /** Visual treatment */
  variant: {
    type: String,
    default: 'filled',
    validator: (v) => ['filled', 'outlined', 'ghost', 'danger'].includes(v),
  },
  /** Size scale */
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  /** Render as a different element (e.g. 'a' for links) */
  tag: {
    type: String,
    default: 'button',
  },
  /** Native button type */
  type: {
    type: String,
    default: 'button',
  },
  /** Disabled state */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** Shows spinner and disables interaction */
  loading: {
    type: Boolean,
    default: false,
  },
  /** Icon slot position */
  iconPosition: {
    type: String,
    default: 'left',
    validator: (v) => ['left', 'right'].includes(v),
  },
})

const classes = computed(() => [
  'lv-button',
  `lv-button--${props.variant}`,
  `lv-button--${props.size}`,
  {
    'lv-button--disabled': props.disabled,
    'lv-button--loading':  props.loading,
  },
])
</script>

<style scoped>
.lv-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition:
    background-color var(--duration-fast) var(--ease-in-out),
    border-color     var(--duration-fast) var(--ease-in-out),
    color            var(--duration-fast) var(--ease-in-out),
    box-shadow       var(--duration-fast) var(--ease-in-out);
  white-space: nowrap;
  user-select: none;
  text-decoration: none;
}

/* ── Sizes ── */
.lv-button--sm {
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-xs);
  min-height: 2rem;
}

.lv-button--md {
  padding: var(--space-2) var(--space-5);
  font-size: var(--text-sm);
  min-height: 2.5rem;
}

.lv-button--lg {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-md);
  min-height: 3rem;
}

/* ── Variants ── */
.lv-button--filled {
  background-color: var(--brand-primary);
  color: var(--text-inverse);
  border-color: var(--brand-primary);
}

.lv-button--filled:hover:not(:disabled) {
  background-color: var(--brand-primary-hover);
  border-color: var(--brand-primary-hover);
}

.lv-button--filled:active:not(:disabled) {
  background-color: var(--brand-primary-active);
  border-color: var(--brand-primary-active);
}

.lv-button--outlined {
  background-color: transparent;
  color: var(--brand-primary);
  border-color: var(--brand-primary);
}

.lv-button--outlined:hover:not(:disabled) {
  background-color: var(--color-blue-50);
}

.lv-button--outlined:active:not(:disabled) {
  background-color: var(--color-blue-100);
}

.lv-button--ghost {
  background-color: transparent;
  color: var(--brand-primary);
  border-color: transparent;
}

.lv-button--ghost:hover:not(:disabled) {
  background-color: var(--color-blue-50);
}

.lv-button--ghost:active:not(:disabled) {
  background-color: var(--color-blue-100);
}

.lv-button--danger {
  background-color: var(--color-danger);
  color: var(--text-inverse);
  border-color: var(--color-danger);
}

.lv-button--danger:hover:not(:disabled) {
  background-color: var(--color-red-700);
  border-color: var(--color-red-700);
}

/* ── States ── */
.lv-button--disabled,
.lv-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

.lv-button--loading {
  cursor: wait;
  pointer-events: none;
}

/* ── Spinner ── */
.lv-button__spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: var(--radius-full);
  animation: lv-spin 0.6s linear infinite;
  flex-shrink: 0;
}

@keyframes lv-spin {
  to { transform: rotate(360deg); }
}

.lv-button__icon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.lv-button__label {
  display: inline-flex;
  align-items: center;
}
</style>
