<template>
  <header class="base-header" :class="{ 'base-header--divider': !noDivider }">
    <div class="base-header__content">
      <div v-if="label" class="base-header__label">{{ label }}</div>

      <div class="base-header__title-row">
        <BaseLoader
          v-if="loading"
          size="sm"
          label=""
          class="base-header__loader"
          aria-hidden="true"
        />
        <BaseIcon
          v-else-if="icon"
          :name="icon"
          size="sm"
          class="base-header__icon"
          aria-hidden="true"
        />
        <component :is="tag" class="base-header__title">
          <slot>{{ title }}</slot>
        </component>
      </div>

      <p v-if="subtitle" class="base-header__subtitle">
        {{ subtitle }}
      </p>
    </div>

    <div v-if="$slots.actions" class="base-header__actions">
      <slot name="actions" />
    </div>
  </header>
</template>

<script setup>
import { ICONS } from '../BaseIcon/BaseIcon.vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'
import BaseLoader from '../BaseLoader/BaseLoader.vue'

defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: undefined,
  },
  label: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: undefined,
    validator: (v) => !v || Object.keys(ICONS).includes(v),
  },
  tag: {
    type: String,
    default: 'h2',
    validator: (v) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(v),
  },
  noDivider: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.base-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-4);
}

.base-header--divider {
  border-bottom: 1px solid var(--border-subtle);
}

.base-header__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
}

.base-header__label {
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--brand-primary);
}

.base-header__title-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.base-header__icon {
  color: var(--text-secondary);
}

.base-header__loader {
  color: var(--text-secondary);
}

.base-header__title {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--text-secondary);
  margin: 0;
}

.base-header__subtitle {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
  margin: 0;
}

.base-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}
</style>
