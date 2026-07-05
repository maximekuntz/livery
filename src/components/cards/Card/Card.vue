<template>
  <div
    :class="classes"
    role="group"
    :aria-label="ariaLabel"
  >
    <div
      v-if="$slots.icon || $slots.header"
      class="card__header"
    >
      <div
        v-if="$slots.icon"
        class="card__header-icon"
      >
        <slot name="icon" />
      </div>

      <div
        v-if="$slots.header"
        class="card__header-content"
      >
        <slot name="header" />
      </div>
    </div>

    <div class="card__body">
      <slot name="content">
        <slot />
      </slot>
    </div>

    <div
      v-if="$slots.footer"
      class="card__footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  elevation: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg'].includes(value),
  },
  ariaLabel: {
    type: String,
    default: undefined,
  },
})

const classes = computed(() => [
  'card',
  `card--elevation-${props.elevation}`,
])
</script>

<style scoped>
.card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.card--elevation-none { box-shadow: var(--shadow-none); }
.card--elevation-sm   { box-shadow: var(--shadow-sm); }
.card--elevation-md   { box-shadow: var(--shadow-md); }
.card--elevation-lg   { box-shadow: var(--shadow-lg); }

.card__body {
  padding: var(--space-6);
}

.card__header {
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.card__header-icon {
  display: inline-flex;
  align-items: center;
  color: var(--text-secondary);
}

.card__header-content {
  min-width: 0;
  flex: 1;
}

.card__footer {
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}
</style>