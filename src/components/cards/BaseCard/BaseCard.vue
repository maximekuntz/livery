<template>
  <Card
    :elevation="elevation"
    :aria-label="ariaLabel"
  >
    <template
      v-if="icon"
      #icon
    >
      <BaseIcon
        :name="icon"
        size="sm"
        class="base-card__header-icon"
        aria-hidden="true"
      />
    </template>

    <template
      v-if="name"
      #header
    >
      <div class="base-card__header-content">
        {{ name }}
      </div>
    </template>

    <template #content>
      <slot />
    </template>

    <template
      v-if="$slots.footer"
      #footer
    >
      <slot name="footer" />
    </template>
  </Card>
</template>

<script setup>
import BaseIcon from '../../BaseIcon/BaseIcon.vue'
import Card from '../Card/Card.vue'

defineProps({
  elevation: {
    type: String,
    default: 'md',
    validator: (v) => ['none', 'sm', 'md', 'lg'].includes(v),
  },
  ariaLabel: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: undefined
  },
})
</script>

<style scoped>
.base-card__header-content {
  font-weight: var(--font-semibold);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-secondary);
}

.base-card__header-icon {
  color: var(--text-secondary);
}
</style>