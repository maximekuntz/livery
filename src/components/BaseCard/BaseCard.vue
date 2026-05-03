<template>
  <div :class="classes" role="group" :aria-label="ariaLabel">
    <div v-if="name || icon" class="base-card__header">
      <BaseIcon
        v-if="icon"
        :name="icon"
        size="sm"
        class="base-card__header-icon"
        aria-hidden="true"
      />
      <div class="base-card__header-content">
        {{ name }}
      </div>
    </div>

    <div class="base-card__body">
      <slot />
    </div>

    <div v-if="$slots.footer" class="base-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ICONS } from '../BaseIcon/BaseIcon.vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

const props = defineProps({
  elevation: {
    type: String,
    default: 'md',
    validator: (v) => ['none', 'sm', 'md', 'lg'].includes(v),
  },
  ariaLabel: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: undefined,
    validator: (v) => !v || Object.keys(ICONS).includes(v),
  },
})

const classes = computed(() => [
  'base-card',
  `base-card--elevation-${props.elevation}`,
])
</script>

<style scoped>
.base-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.base-card--elevation-none { box-shadow: var(--shadow-none); }
.base-card--elevation-sm   { box-shadow: var(--shadow-sm); }
.base-card--elevation-md   { box-shadow: var(--shadow-md); }
.base-card--elevation-lg   { box-shadow: var(--shadow-lg); }

.base-card__body {
  padding: var(--space-6);
}

.base-card__header {
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: var(--font-semibold);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-secondary);
}

.base-card__header-icon {
  color: var(--text-secondary);
}

.base-card__header-content {
  min-width: 0;
}

.base-card__footer {
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}
</style>
