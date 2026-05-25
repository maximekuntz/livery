<template>
  <div class="lv-progress-bar">
    <div
      class="lv-progress-bar__track"
      role="progressbar"
      :aria-label="ariaLabel"
      :aria-valuemin="0"
      :aria-valuemax="safeMax"
      :aria-valuenow="safeValue"
      :aria-valuetext="valueText"
    >
      <div class="lv-progress-bar__fill" :style="{ width: `${percentage}%` }" />
    </div>
    <span v-if="showText" class="lv-progress-bar__text">{{ text }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

/**
 * ProgressBar — Linear progress indicator.
 *
 * Values are clamped between 0 and max.
 */
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  ariaLabel: {
    type: String,
    default: 'Progress',
  },
  text: {
    type: String,
    default: undefined,
  },
})

const safeMax = computed(() => Math.max(1, props.max))
const safeValue = computed(() => Math.min(Math.max(0, props.value), safeMax.value))
const percentage = computed(() => Math.round((safeValue.value / safeMax.value) * 100))
const showText = computed(() => !!props.text)
const valueText = computed(() => props.text || `${percentage.value}%`)
</script>

<style scoped>
.lv-progress-bar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
}

.lv-progress-bar__track {
  flex: 1;
  min-width: 0;
  width: 100%;
  height: 0.5rem;
  border-radius: var(--radius-full);
  background-color: var(--color-slate-200);
  overflow: hidden;
}

.lv-progress-bar__fill {
  height: 100%;
  background-color: var(--brand-primary);
  transition: width var(--duration-fast) var(--ease-in-out);
}

.lv-progress-bar__text {
  flex-shrink: 0;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: var(--leading-tight);
}
</style>
