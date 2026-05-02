<template>
  <section :class="classes" :aria-labelledby="titleId">
    <div v-if="title || $slots.header" class="lv-page-section__header">
      <slot name="header">
        <div class="lv-page-section__heading-row">
          <div class="lv-page-section__heading-content">
            <component
              :is="tag"
              :id="titleId"
              class="lv-page-section__title"
            >
              {{ title }}
            </component>
            <p v-if="description" class="lv-page-section__description">
              {{ description }}
            </p>
          </div>
          <div v-if="$slots.actions" class="lv-page-section__actions">
            <slot name="actions" />
          </div>
        </div>
      </slot>
    </div>

    <div class="lv-page-section__body">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

let uid = 0

/**
 * LvPageSection — Semantic `<section>` container for major page regions.
 *
 * Provides consistent vertical rhythm between top-level content blocks.
 * Each instance generates a unique id linking `aria-labelledby` to the
 * title element, satisfying the WCAG 2.2 landmark labelling requirement.
 */
const props = defineProps({
  /** Section title — rendered as the heading element */
  title: {
    type: String,
    default: undefined,
  },
  /** Supporting text below the title */
  description: {
    type: String,
    default: undefined,
  },
  /** Heading element level — maintain correct document outline */
  tag: {
    type: String,
    default: 'h2',
    validator: (v) => ['h1', 'h2', 'h3', 'h4'].includes(v),
  },
  /** Remove header divider line */
  noDivider: {
    type: Boolean,
    default: false,
  },
  /** Tighter vertical padding */
  compact: {
    type: Boolean,
    default: false,
  },
})

const titleId = `lv-page-section-title-${++uid}`

const classes = computed(() => [
  'lv-page-section',
  {
    'lv-page-section--no-divider': props.noDivider,
    'lv-page-section--compact': props.compact,
  },
])
</script>

<style scoped>
.lv-page-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

/* ── Header ── */
.lv-page-section__header {
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--border-subtle);
}

.lv-page-section--no-divider .lv-page-section__header {
  border-bottom: none;
  padding-bottom: 0;
}

.lv-page-section__heading-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
}

.lv-page-section__heading-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
}

.lv-page-section__title {
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
  margin: 0;
}

.lv-page-section__description {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
  margin: 0;
}

.lv-page-section__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}

/* ── Body ── */
.lv-page-section__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

/* ── Compact modifier ── */
.lv-page-section--compact {
  gap: var(--space-4);
}

.lv-page-section--compact .lv-page-section__header {
  padding-bottom: var(--space-3);
}

.lv-page-section--compact .lv-page-section__title {
  font-size: var(--text-lg);
}
</style>
