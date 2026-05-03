<template>
  <span :class="classes" role="status">
    <BaseIcon
      v-if="icon"
      :name="icon"
      size="xs"
      class="base-badge__icon"
      aria-hidden="true"
    />
    <span v-if="label">{{ label }}</span>
    <slot v-else />
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { ICONS } from '../BaseIcon/BaseIcon.vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'success', 'warning', 'danger', 'info', 'inverse'].includes(v),
  },
  pill: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: undefined,
    validator: (v) => !v || Object.keys(ICONS).includes(v),
  },
  label: {
    type: String,
    default: '',
  },
})

const classes = computed(() => [
  'base-badge',
  `base-badge--${props.variant}`,
  {
    'base-badge--pill': props.pill,
    'base-badge--with-icon': Boolean(props.icon),
  },
])
</script>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
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

.base-badge--pill {
  border-radius: var(--radius-full);
  padding-inline: var(--space-3);
}

.base-badge__icon {
  margin-left: -1px;
}

.base-badge--default {
  background-color: var(--color-slate-100);
  color: var(--color-slate-700);
  border-color: var(--color-slate-200);
}

.base-badge--success {
  background-color: #ebfbee;
  color: var(--color-green-700);
  border-color: #b2f2bb;
}

.base-badge--warning {
  background-color: #fff9db;
  color: var(--color-amber-700);
  border-color: #ffe066;
}

.base-badge--danger {
  background-color: #fff5f5;
  color: var(--color-red-700);
  border-color: #ffc9c9;
}

.base-badge--info {
  background-color: var(--color-blue-50);
  color: var(--color-blue-800);
  border-color: var(--color-blue-100);
}

.base-badge--inverse {
  background-color: var(--color-slate-900);
  color: var(--text-inverse);
  border-color: var(--color-slate-700);
}
</style>
