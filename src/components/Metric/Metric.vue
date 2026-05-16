<template>
  <article class="metric" :aria-label="ariaLabel">
    <header class="metric__header">
      <BaseIcon
        v-if="icon"
        :name="icon"
        size="sm"
        class="metric__icon"
        aria-hidden="true"
      />
      <span class="metric__label">{{ label }}</span>
    </header>

    <p class="metric__value">{{ value }}</p>

    <p
      v-if="variation"
      :class="['metric__variation', `metric__variation--${variationTrend}`]"
    >
      <BaseIcon
        v-if="showVariationIcon"
        :name="variationIcon"
        size="xs"
        class="metric__variation-icon"
        aria-hidden="true"
      />
      <span>{{ variation }}</span>
    </p>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { ICONS } from '../BaseIcon/BaseIcon.vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number],
    required: true,
  },
  icon: {
    type: String,
    default: undefined,
    validator: (v) => !v || Object.keys(ICONS).includes(v),
  },
  variation: {
    type: String,
    default: '',
  },
  variationTrend: {
    type: String,
    default: 'neutral',
    validator: (v) => ['up', 'down', 'neutral'].includes(v),
  },
  showVariationIcon: {
    type: Boolean,
    default: true,
  },
  ariaLabel: {
    type: String,
    default: undefined,
  },
})

const variationIcon = computed(() => {
  if (props.variationTrend === 'up') return 'chevron-up'
  if (props.variationTrend === 'down') return 'chevron-down'
  return 'minus'
})
</script>

<style scoped>
.metric {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4);
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.metric__header {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--text-secondary);
}

.metric__icon {
  color: var(--text-secondary);
}

.metric__label {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.metric__value {
  margin: 0;
  color: var(--text-primary);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.metric__variation {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}

.metric__variation--up {
  color: var(--color-success);
}

.metric__variation--down {
  color: var(--color-danger);
}

.metric__variation--neutral {
  color: var(--text-secondary);
}
</style>
