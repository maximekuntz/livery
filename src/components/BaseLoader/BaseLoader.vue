<template>
  <span class="base-loader" role="status" :aria-label="props.label">
    <span class="base-loader__spinner" :class="`base-loader__spinner--${props.size}`" aria-hidden="true" />
    <span v-if="props.label" class="base-loader__label">{{ props.label }}</span>
  </span>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  label: {
    type: String,
    default: 'Loading',
  },
})
</script>

<style scoped>
.base-loader {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-blue-600);
}

.base-loader__spinner {
  display: inline-block;
  border-radius: 50%;
  border: 2px solid var(--color-blue-100);
  border-top-color: currentColor;
  animation: base-loader-spin 0.8s linear infinite;
}

.base-loader__spinner--sm {
  width: 0.75rem;
  height: 0.75rem;
}

.base-loader__spinner--md {
  width: 1rem;
  height: 1rem;
}

.base-loader__spinner--lg {
  width: 1.5rem;
  height: 1.5rem;
}

.base-loader__label {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

@keyframes base-loader-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
