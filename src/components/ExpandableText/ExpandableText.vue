<template>
  <div class="lv-expandable-text">
    <div
      ref="contentRef"
      class="lv-expandable-text__body"
      :class="{ 'lv-expandable-text__body--clamped': !isExpanded && isClamped }"
      :style="clampStyle"
    >
      <slot />
    </div>

    <button
      v-if="isClamped || isExpanded"
      type="button"
      class="lv-expandable-text__toggle"
      :aria-expanded="isExpanded"
      @click="toggle"
    >
      {{ isExpanded ? collapseLabel : expandLabel }}
      <svg
        class="lv-expandable-text__chevron"
        :class="{ 'lv-expandable-text__chevron--open': isExpanded }"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated } from 'vue'

/**
 * ExpandableText — Truncates long text after a set number of lines
 * with a show-more / show-less toggle.
 *
 * Accessibility: toggle button carries `aria-expanded` reflecting the
 * current state; screen readers announce the full text when expanded.
 */
const props = defineProps({
  /** Number of visible lines when collapsed */
  maxLines: {
    type: Number,
    default: 3,
    validator: (v) => v > 0,
  },
  /** Label for the expand trigger */
  expandLabel: {
    type: String,
    default: 'Show more',
  },
  /** Label for the collapse trigger */
  collapseLabel: {
    type: String,
    default: 'Show less',
  },
})

const isExpanded = ref(false)
const isClamped = ref(false)
const contentRef = ref(null)

const clampStyle = computed(() =>
  !isExpanded.value ? { '--max-lines': props.maxLines } : {}
)

function checkClamped() {
  const el = contentRef.value
  if (!el) return
  // Compare scrollHeight vs clientHeight to detect overflow
  isClamped.value = el.scrollHeight > el.clientHeight + 1
}

function toggle() {
  isExpanded.value = !isExpanded.value
  if (!isExpanded.value) {
    // Re-check after collapsing in case content changed
    setTimeout(checkClamped, 0)
  }
}

onMounted(checkClamped)
onUpdated(checkClamped)
</script>

<style scoped>
.lv-expandable-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.lv-expandable-text__body {
  font-size: var(--text-md);
  line-height: var(--leading-normal);
  color: var(--text-primary);
}

.lv-expandable-text__body--clamped {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--max-lines);
  overflow: hidden;
}

.lv-expandable-text__toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-link);
  transition: color var(--duration-fast) var(--ease-in-out);
}

.lv-expandable-text__toggle:hover {
  color: var(--text-link-hover);
}

.lv-expandable-text__chevron {
  flex-shrink: 0;
  transition: transform var(--duration-normal) var(--ease-in-out);
}

.lv-expandable-text__chevron--open {
  transform: rotate(180deg);
}
</style>
