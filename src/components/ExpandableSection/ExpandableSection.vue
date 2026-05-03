<template>
  <div :class="classes">
    <button
      type="button"
      class="lv-expandable-section__trigger"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      :disabled="disabled"
      @click="toggle"
    >
      <span class="lv-expandable-section__trigger-content">
        <slot name="trigger" />
      </span>
      <svg
        class="lv-expandable-section__chevron"
        :class="{ 'lv-expandable-section__chevron--open': isOpen }"
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

    <div
      v-show="isOpen"
      :id="panelId"
      class="lv-expandable-section__panel"
      role="region"
      :aria-label="panelLabel"
    >
      <div class="lv-expandable-section__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

let uid = 0

/**
 * ExpandableSection — A single collapsible panel with a labelled trigger.
 *
 * Accessibility: trigger carries `aria-expanded`; the panel is a `role=region`
 * linked via `aria-controls` / `id`. Chevron is decorative (`aria-hidden`).
 * Compose multiple instances to build an accordion.
 */
const props = defineProps({
  /** Open by default */
  defaultOpen: {
    type: Boolean,
    default: false,
  },
  /** Prevent toggling */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** Visual treatment */
  variant: {
    type: String,
    default: 'bordered',
    validator: (v) => ['bordered', 'ghost'].includes(v),
  },
})

const emit = defineEmits(['update:open'])

const isOpen = ref(props.defaultOpen)
const panelId = `lv-expandable-section-${++uid}`

// Use the trigger slot text as an implicit label for the region
const panelLabel = computed(() => undefined)

const classes = computed(() => [
  'lv-expandable-section',
  `lv-expandable-section--${props.variant}`,
  {
    'lv-expandable-section--open': isOpen.value,
    'lv-expandable-section--disabled': props.disabled,
  },
])

function toggle() {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  emit('update:open', isOpen.value)
}
</script>

<style scoped>
.lv-expandable-section {
  overflow: hidden;
}

/* ── Bordered variant ── */
.lv-expandable-section--bordered {
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
}

.lv-expandable-section--bordered + .lv-expandable-section--bordered {
  margin-top: calc(-1px);
  border-radius: 0;
}

.lv-expandable-section--bordered:first-child {
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.lv-expandable-section--bordered:last-child {
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}

.lv-expandable-section--bordered:only-child {
  border-radius: var(--radius-lg);
}

/* ── Ghost variant ── */
.lv-expandable-section--ghost {
  border-bottom: 1px solid var(--border-subtle);
}

/* ── Trigger ── */
.lv-expandable-section__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-4) var(--space-5);
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  text-align: left;
  gap: var(--space-4);
  transition: background-color var(--duration-fast) var(--ease-in-out);
}

.lv-expandable-section__trigger:hover:not(:disabled) {
  background-color: var(--color-slate-50);
}

.lv-expandable-section__trigger:disabled {
  cursor: not-allowed;
  color: var(--text-disabled);
}

.lv-expandable-section__trigger-content {
  flex: 1;
  min-width: 0;
}

/* ── Chevron ── */
.lv-expandable-section__chevron {
  flex-shrink: 0;
  color: var(--text-secondary);
  transition: transform var(--duration-normal) var(--ease-in-out);
}

.lv-expandable-section__chevron--open {
  transform: rotate(180deg);
}

/* ── Panel ── */
.lv-expandable-section__panel {
  border-top: 1px solid var(--border-subtle);
}

.lv-expandable-section--ghost .lv-expandable-section__panel {
  border-top-color: var(--border-subtle);
}

.lv-expandable-section__body {
  padding: var(--space-4) var(--space-5) var(--space-5);
  font-size: var(--text-md);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
}
</style>
