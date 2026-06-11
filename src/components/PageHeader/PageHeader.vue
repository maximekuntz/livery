<template>
  <header class="lv-page-header">
    <div v-if="$slots.breadcrumb" class="lv-page-header__breadcrumb">
      <slot name="breadcrumb" />
    </div>

    <div class="lv-page-header__main">
      <div class="lv-page-header__content">
        <div v-if="eyebrow" class="lv-page-header__eyebrow">{{ eyebrow }}</div>

        <div class="lv-page-header__title-row">
          <BaseLoader
            v-if="loading"
            size="lg"
            label=""
            class="lv-page-header__loader"
            aria-hidden="true"
          />
          <BaseIcon
            v-else-if="icon"
            :name="icon"
            size="lg"
            class="lv-page-header__icon"
          />
          <component :is="tag" class="lv-page-header__title">
            <slot />
          </component>
        </div>

        <p v-if="subtitle" class="lv-page-header__subtitle">
          {{ subtitle }}
        </p>
      </div>

      <div v-if="$slots.actions" class="lv-page-header__actions">
        <slot name="actions" />
      </div>
    </div>

    <div v-if="$slots.meta" class="lv-page-header__meta">
      <slot name="meta" />
    </div>
  </header>
</template>

<script setup>
import BaseIcon from '../BaseIcon/BaseIcon.vue'
import BaseLoader from '../BaseLoader/BaseLoader.vue'

/**
 * PageHeader — Top-level page heading.
 *
 * Draws from the destination boards found above carriage entrances:
 * a strong title, a subdued eyebrow route indicator, and a subtitle
 * for supporting context. Actions slot for primary page-level CTAs.
 */
defineProps({
  /** Optional icon shown before the page title */
  icon: {
    type: String,
    default: undefined,
  },
  /** Small label above the title — e.g. route or category */
  eyebrow: {
    type: String,
    default: undefined,
  },
  /** Supporting text below the title */
  subtitle: {
    type: String,
    default: undefined,
  },
  /** HTML heading element */
  tag: {
    type: String,
    default: 'h1',
    validator: (v) => ['h1', 'h2', 'h3'].includes(v),
  },
  /** Shows a spinner instead of the configured icon */
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.lv-page-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding-bottom: var(--space-6);
  border-bottom: 2px solid var(--border-default);
  font-family: var(--font-sans);
}

/* ── Breadcrumb ── */
.lv-page-header__breadcrumb {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-1);
  letter-spacing: var(--tracking-wide);
}

/* ── Main row ── */
.lv-page-header__main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-6);
}

.lv-page-header__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
}

.lv-page-header__title-row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

/* ── Eyebrow ── */
.lv-page-header__eyebrow {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--brand-primary);
}

/* ── Title ── */
.lv-page-header__title {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-tight);
  color: var(--text-primary);
  margin: 0;
}

.lv-page-header__icon {
  color: var(--text-secondary);
}

.lv-page-header__loader {
  color: var(--text-secondary);
}

/* ── Subtitle ── */
.lv-page-header__subtitle {
  font-size: var(--text-md);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin: 0;
  max-width: 60ch;
}

/* ── Actions ── */
.lv-page-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-shrink: 0;
}

/* ── Meta row (badges, tags, status…) ── */
.lv-page-header__meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}
</style>
