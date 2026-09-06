<template>
  <nav
    class="lv-breadcrumb"
    aria-label="Breadcrumb"
  >
    <ol class="lv-breadcrumb__list">
      <li
        v-for="(crumb, index) in normalizedItems"
        :key="crumb.key || `${crumb.label}-${index}`"
        class="lv-breadcrumb__item"
      >
        <button
          v-if="typeof crumb.onClick === 'function' && !crumb.current"
          class="lv-breadcrumb__button"
          type="button"
          @click="handleClick(crumb, index, $event)"
        >
          {{ crumb.label }}
        </button>
        <a
          v-else-if="crumb.href && !crumb.current"
          class="lv-breadcrumb__link"
          :href="crumb.href"
          @click="handleClick(crumb, index, $event)"
        >
          {{ crumb.label }}
        </a>
        <span
          v-else
          class="lv-breadcrumb__current"
          :aria-current="crumb.current ? 'page' : undefined"
        >
          {{ crumb.label }}
        </span>

        <span
          v-if="index < normalizedItems.length - 1"
          class="lv-breadcrumb__separator"
          aria-hidden="true"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['click'])

const normalizedItems = computed(() =>
  props.items.filter((crumb) => crumb && typeof crumb.label === 'string' && crumb.label.length > 0),
)

function handleClick(crumb, index, event) {
  if (typeof crumb.onClick === 'function') {
    crumb.onClick(event)
  }

  emit('click', { crumb, index, event })
}
</script>

<style scoped>
.lv-breadcrumb {
  font-size: var(--text-xs);
  color: var(--text-secondary);
}

.lv-breadcrumb__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.lv-breadcrumb__item {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
}

.lv-breadcrumb__link,
.lv-breadcrumb__button {
  font: inherit;
  color: var(--text-link);
  text-decoration: none;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.lv-breadcrumb__link:hover,
.lv-breadcrumb__button:hover {
  text-decoration: underline;
}

.lv-breadcrumb__current,
.lv-breadcrumb__separator {
  color: var(--text-secondary);
}
</style>
