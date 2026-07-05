<template>
  <div
    :class="classes"
    role="alert"
    :aria-live="variant === 'danger' ? 'assertive' : 'polite'"
  >
    <span
      class="lv-alert__icon"
      aria-hidden="true"
    >
      <BaseIcon
        :name="iconName"
        size="md"
      />
    </span>

    <div class="lv-alert__body">
      <p
        v-if="title"
        class="lv-alert__title"
      >
        {{ title }}
      </p>
      <div class="lv-alert__description">
        <slot />
      </div>
    </div>

    <button
      v-if="dismissible"
      type="button"
      class="lv-alert__close"
      aria-label="Dismiss"
      @click="$emit('dismiss')"
    >
      <BaseIcon
        name="close"
        size="sm"
        aria-hidden="true"
      />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseIcon from '../../BaseIcon/BaseIcon.vue'

/**
 * Alert — Inline contextual notification.
 *
 * Maps to railway signal aspects:
 *   success → clear aspect (green)
 *   warning → caution aspect (amber)
 *   danger  → stop aspect (red)
 *   info    → informational (blue)
 *
 * Accessibility: role="alert" with aria-live="polite" (or "assertive" for danger).
 * The dismiss event must be handled by the parent to actually remove the element.
 */
const props = defineProps({
  variant: {
    type: String,
    default: 'info',
    validator: (v) => ['success', 'warning', 'danger', 'info'].includes(v),
  },
  title: {
    type: String,
    default: undefined,
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['dismiss'])

const ICONS = {
  success: 'check-circle',
  warning: 'warning',
  danger:  'x-circle',
  info:    'info',
}

const iconName = computed(() => ICONS[props.variant])

const classes = computed(() => [
  'lv-alert',
  `lv-alert--${props.variant}`,
  { 'lv-alert--dismissible': props.dismissible },
])
</script>

<style scoped>
.lv-alert {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border: 1.5px solid transparent;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}

/* ── Variants ── */
.lv-alert--info {
  background-color: var(--color-blue-50);
  border-color: var(--color-blue-100);
  color: var(--color-blue-800);
}
.lv-alert--info .lv-alert__icon { color: var(--color-blue-600); }

.lv-alert--success {
  background-color: #ebfbee;
  border-color: #b2f2bb;
  color: var(--color-green-700);
}
.lv-alert--success .lv-alert__icon { color: var(--color-green-700); }

.lv-alert--warning {
  background-color: #fff9db;
  border-color: #ffe066;
  color: var(--color-amber-700);
}
.lv-alert--warning .lv-alert__icon { color: var(--color-amber-700); }

.lv-alert--danger {
  background-color: #fff5f5;
  border-color: #ffc9c9;
  color: var(--color-red-700);
}
.lv-alert--danger .lv-alert__icon { color: var(--color-red-600); }

/* ── Layout ── */
.lv-alert__icon {
  flex-shrink: 0;
  margin-top: 1px;
}

.lv-alert__body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.lv-alert__title {
  font-weight: var(--font-semibold);
  margin: 0;
}

.lv-alert__description {
  margin: 0;
}

.lv-alert__close {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.6;
  color: inherit;
  padding: 0;
  border-radius: var(--radius-sm);
  transition: opacity var(--duration-fast) var(--ease-in-out);
}

.lv-alert__close:hover  { opacity: 1; }
.lv-alert__close:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
  opacity: 1;
}
</style>
