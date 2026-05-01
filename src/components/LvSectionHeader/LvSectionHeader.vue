<template>
  <div class="lv-section-header">
    <div class="lv-section-header__content">
      <component
        :is="tag"
        class="lv-section-header__title"
      >
        <slot />
      </component>
      <p v-if="description" class="lv-section-header__description">
        {{ description }}
      </p>
    </div>
    <div v-if="$slots.actions" class="lv-section-header__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup>
/**
 * LvSectionHeader — Section-level heading with optional description and actions.
 *
 * Styled after interior section boards on rolling stock panels —
 * compact, uppercase rule, clear hierarchy below a PageHeader.
 */
defineProps({
  /** Description text below the title */
  description: {
    type: String,
    default: undefined,
  },
  /** Heading element level — choose to maintain correct document outline */
  tag: {
    type: String,
    default: 'h2',
    validator: (v) => ['h2', 'h3', 'h4', 'h5', 'h6'].includes(v),
  },
})
</script>

<style scoped>
.lv-section-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--border-subtle);
}

.lv-section-header__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
}

.lv-section-header__title {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--text-secondary);
  margin: 0;
}

.lv-section-header__description {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
  margin: 0;
}

.lv-section-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}
</style>
