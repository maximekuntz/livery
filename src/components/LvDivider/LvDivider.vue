<template>
  <hr :class="classes" :aria-orientation="orientation" role="separator" />
</template>

<script setup>
import { computed } from 'vue'

/**
 * LvDivider — A ruled line separator.
 *
 * Evokes the parallel lines of railway track.
 * Supports horizontal and vertical orientations.
 */
const props = defineProps({
  orientation: {
    type: String,
    default: 'horizontal',
    validator: (v) => ['horizontal', 'vertical'].includes(v),
  },
  /** Decorative — hides from assistive tech when true */
  decorative: {
    type: Boolean,
    default: true,
  },
})

const classes = computed(() => [
  'lv-divider',
  `lv-divider--${props.orientation}`,
])
</script>

<style scoped>
.lv-divider {
  border: none;
  background-color: var(--border-default);
  flex-shrink: 0;
}

.lv-divider--horizontal {
  width: 100%;
  height: 1px;
  margin: 0;
}

.lv-divider--vertical {
  width: 1px;
  height: 100%;
  align-self: stretch;
}
</style>
