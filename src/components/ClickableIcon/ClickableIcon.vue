<template>
  <button
    type="button"
    :class="classes"
    :disabled="disabled"
    :aria-disabled="disabled"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    v-bind="$attrs"
  >
    <BaseIcon
      :name="icon"
      :size="iconSizeMap[size]"
      aria-hidden="true"
    />
  </button>
</template>

<script setup>
import { computed } from 'vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

/**
 * ClickableIcon — Icon-only action button.
 *
 * Accessibility: ariaLabel is required — it is applied as both aria-label
 * and title so screen readers and pointer users both get context.
 */
const props = defineProps({
  /** Icon to display */
  icon: {
    type: String,
    required: true,
  },
  /** Accessible label (required for icon-only buttons) */
  ariaLabel: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  variant: {
    type: String,
    default: 'ghost',
    validator: (v) => ['ghost', 'outlined', 'filled', 'danger'].includes(v),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const iconSizeMap = { sm: 'sm', md: 'md', lg: 'lg' }

const classes = computed(() => [
  'lv-clickable-icon',
  `lv-clickable-icon--${props.size}`,
  `lv-clickable-icon--${props.variant}`,
  { 'lv-clickable-icon--disabled': props.disabled },
])
</script>

<style scoped>
.lv-clickable-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition:
    background-color var(--duration-fast) var(--ease-in-out),
    border-color     var(--duration-fast) var(--ease-in-out),
    color            var(--duration-fast) var(--ease-in-out);
  flex-shrink: 0;
}

/* ── Sizes ── */
.lv-clickable-icon--sm { width: 1.75rem; height: 1.75rem; }
.lv-clickable-icon--md { width: 2.25rem; height: 2.25rem; }
.lv-clickable-icon--lg { width: 2.75rem; height: 2.75rem; }

/* ── Variants ── */
.lv-clickable-icon--ghost {
  color: var(--text-secondary);
  background-color: transparent;
}
.lv-clickable-icon--ghost:hover:not(:disabled) {
  background-color: var(--color-slate-100);
  color: var(--text-primary);
}

.lv-clickable-icon--outlined {
  color: var(--brand-primary);
  border-color: var(--brand-primary);
  background-color: transparent;
}
.lv-clickable-icon--outlined:hover:not(:disabled) {
  background-color: var(--color-blue-50);
}

.lv-clickable-icon--filled {
  color: var(--text-inverse);
  background-color: var(--brand-primary);
  border-color: var(--brand-primary);
}
.lv-clickable-icon--filled:hover:not(:disabled) {
  background-color: var(--brand-primary-hover);
  border-color: var(--brand-primary-hover);
}

.lv-clickable-icon--danger {
  color: var(--color-danger);
  background-color: transparent;
}
.lv-clickable-icon--danger:hover:not(:disabled) {
  background-color: var(--color-red-50);
}

/* ── States ── */
.lv-clickable-icon--disabled,
.lv-clickable-icon:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
