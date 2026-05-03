<template>
  <div :class="rootClasses" ref="rootRef">
    <label v-if="label" class="lv-multi-select__label" :id="labelId">
      {{ label }}
      <span v-if="required" class="lv-multi-select__required" aria-hidden="true">*</span>
    </label>

    <!-- Trigger -->
    <button
      type="button"
      class="lv-multi-select__trigger"
      :aria-haspopup="'listbox'"
      :aria-expanded="open"
      :aria-labelledby="label ? labelId : undefined"
      :aria-describedby="hint || error ? descriptionId : undefined"
      :aria-invalid="!!error"
      :disabled="disabled"
      @click="toggle"
      @keydown.escape="close"
      @keydown.tab="close"
    >
      <span class="lv-multi-select__trigger-text">
        <span v-if="selectedOptions.length === 0" class="lv-multi-select__placeholder">
          {{ placeholder }}
        </span>
        <span v-else-if="selectedOptions.length <= 2">
          {{ selectedOptions.map(o => o.label).join(', ') }}
        </span>
        <span v-else>
          {{ selectedOptions[0].label }}, {{ selectedOptions[1].label }}
          <span class="lv-multi-select__overflow-count">+{{ selectedOptions.length - 2 }}</span>
        </span>
      </span>
      <BaseIcon :name="open ? 'chevron-up' : 'chevron-down'" size="sm" aria-hidden="true" />
    </button>

    <!-- Dropdown -->
    <div
      v-show="open"
      class="lv-multi-select__dropdown"
      role="listbox"
      :aria-multiselectable="true"
      :aria-labelledby="label ? labelId : undefined"
    >
      <!-- Search filter -->
      <div class="lv-multi-select__search">
        <BaseIcon name="search" size="sm" class="lv-multi-select__search-icon" aria-hidden="true" />
        <input
          ref="searchRef"
          v-model="searchQuery"
          type="text"
          class="lv-multi-select__search-input"
          placeholder="Filter…"
          aria-label="Filter options"
          @keydown.escape="close"
        />
      </div>

      <ul class="lv-multi-select__list" role="presentation">
        <li
          v-for="opt in filteredOptions"
          :key="opt.value"
          role="option"
          :aria-selected="isSelected(opt.value)"
          :aria-disabled="opt.disabled"
          class="lv-multi-select__option"
          :class="{
            'lv-multi-select__option--selected': isSelected(opt.value),
            'lv-multi-select__option--disabled': opt.disabled,
          }"
          @click="!opt.disabled && toggle(opt.value)"
        >
          <span class="lv-multi-select__option-check" aria-hidden="true">
            <BaseIcon v-if="isSelected(opt.value)" name="check" size="xs" />
          </span>
          {{ opt.label }}
        </li>
        <li v-if="filteredOptions.length === 0" class="lv-multi-select__empty">
          No options match "{{ searchQuery }}"
        </li>
      </ul>

      <div v-if="modelValue.length > 0" class="lv-multi-select__footer">
        <button type="button" class="lv-multi-select__clear" @click="clearAll">
          Clear all
        </button>
        <span class="lv-multi-select__count">{{ modelValue.length }} selected</span>
      </div>
    </div>

    <p v-if="error" :id="descriptionId" class="lv-multi-select__hint lv-multi-select__hint--error" role="alert">
      {{ error }}
    </p>
    <p v-else-if="hint" :id="descriptionId" class="lv-multi-select__hint">
      {{ hint }}
    </p>
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

/**
 * MultiSelectInput — Custom multi-select dropdown with search filter.
 * modelValue is an array of selected values.
 */
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  options: {
    type: Array,
    default: () => [],
  },
  label:       { type: String,  default: undefined },
  placeholder: { type: String,  default: 'Select options…' },
  hint:        { type: String,  default: undefined },
  error:       { type: String,  default: undefined },
  disabled:    { type: Boolean, default: false },
  required:    { type: Boolean, default: false },
  id:          { type: String,  default: undefined },
})

const emit = defineEmits(['update:modelValue'])

const uid           = Math.random().toString(36).slice(2, 8)
const labelId       = computed(() => `lv-ms-label-${uid}`)
const descriptionId = computed(() => `lv-ms-desc-${uid}`)

const open        = ref(false)
const searchQuery = ref('')
const rootRef     = ref(null)
const searchRef   = ref(null)

const normalizedOptions = computed(() =>
  props.options.map((o) =>
    typeof o === 'string' ? { label: o, value: o } : o
  )
)

const filteredOptions = computed(() => {
  if (!searchQuery.value) return normalizedOptions.value
  const q = searchQuery.value.toLowerCase()
  return normalizedOptions.value.filter((o) => o.label.toLowerCase().includes(q))
})

const selectedOptions = computed(() =>
  normalizedOptions.value.filter((o) => props.modelValue.includes(o.value))
)

function isSelected(value) {
  return props.modelValue.includes(value)
}

function toggle(value) {
  if (typeof value === 'string' || typeof value === 'number') {
    // option toggle
    const next = isSelected(value)
      ? props.modelValue.filter((v) => v !== value)
      : [...props.modelValue, value]
    emit('update:modelValue', next)
  } else {
    // button click — toggle dropdown
    if (props.disabled) return
    open.value = !open.value
    if (open.value) {
      searchQuery.value = ''
      nextTick(() => searchRef.value?.focus())
    }
  }
}

function close() {
  open.value = false
}

function clearAll() {
  emit('update:modelValue', [])
}

// Close on outside click
function handleOutsideClick(e) {
  if (rootRef.value && !rootRef.value.contains(e.target)) {
    close()
  }
}

onMounted(()  => document.addEventListener('mousedown', handleOutsideClick))
onUnmounted(() => document.removeEventListener('mousedown', handleOutsideClick))

const rootClasses = computed(() => [
  'lv-multi-select',
  {
    'lv-multi-select--open':     open.value,
    'lv-multi-select--disabled': props.disabled,
    'lv-multi-select--error':    !!props.error,
  },
])
</script>

<style scoped>
.lv-multi-select {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  font-family: var(--font-sans);
}

.lv-multi-select__label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
}

.lv-multi-select__required {
  color: var(--color-danger);
  margin-left: var(--space-1);
}

/* ── Trigger ── */
.lv-multi-select__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  width: 100%;
  height: 2.5rem;
  padding: var(--space-2) var(--space-3);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--text-primary);
  background-color: var(--bg-surface);
  border: 1.5px solid var(--border-default);
  border-radius: var(--radius-md);
  cursor: pointer;
  text-align: left;
  transition:
    border-color var(--duration-fast) var(--ease-in-out),
    box-shadow   var(--duration-fast) var(--ease-in-out);
}

.lv-multi-select__trigger:hover:not(:disabled) {
  border-color: var(--border-strong);
}

.lv-multi-select__trigger:focus-visible,
.lv-multi-select--open .lv-multi-select__trigger {
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary) 15%, transparent);
  outline: none;
}

.lv-multi-select--error .lv-multi-select__trigger {
  border-color: var(--color-danger);
}

.lv-multi-select--disabled .lv-multi-select__trigger {
  opacity: 0.5;
  cursor: not-allowed;
}

.lv-multi-select__trigger-text {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.lv-multi-select__placeholder {
  color: var(--text-disabled);
}

.lv-multi-select__overflow-count {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  background-color: var(--color-blue-50);
  color: var(--brand-primary);
  padding: 0 var(--space-1);
  border-radius: var(--radius-sm);
  margin-left: var(--space-1);
}

/* ── Dropdown ── */
.lv-multi-select__dropdown {
  position: absolute;
  top: calc(100% + var(--space-1));
  left: 0;
  right: 0;
  background-color: var(--bg-surface);
  border: 1.5px solid var(--border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: 100;
  overflow: hidden;
}

/* ── Search ── */
.lv-multi-select__search {
  position: relative;
  border-bottom: 1px solid var(--border-subtle);
}

.lv-multi-select__search-icon {
  position: absolute;
  left: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  pointer-events: none;
}

.lv-multi-select__search-input {
  width: 100%;
  height: 2.25rem;
  padding: var(--space-2) var(--space-3) var(--space-2) 2.25rem;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--text-primary);
  background-color: transparent;
  border: none;
  outline: none;
}

.lv-multi-select__search-input::placeholder {
  color: var(--text-disabled);
}

/* ── List ── */
.lv-multi-select__list {
  list-style: none;
  max-height: 14rem;
  overflow-y: auto;
  padding: var(--space-1) 0;
}

.lv-multi-select__option {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  color: var(--text-primary);
  cursor: pointer;
  transition: background-color var(--duration-fast) var(--ease-in-out);
}

.lv-multi-select__option:hover:not(.lv-multi-select__option--disabled) {
  background-color: var(--color-slate-50);
}

.lv-multi-select__option--selected {
  color: var(--brand-primary);
}

.lv-multi-select__option--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.lv-multi-select__option-check {
  width: 1rem;
  height: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--brand-primary);
}

.lv-multi-select__empty {
  padding: var(--space-4) var(--space-3);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  text-align: center;
}

/* ── Footer ── */
.lv-multi-select__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-3);
  border-top: 1px solid var(--border-subtle);
}

.lv-multi-select__clear {
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
}

.lv-multi-select__clear:hover {
  color: var(--color-danger);
}

.lv-multi-select__count {
  font-size: var(--text-xs);
  color: var(--text-secondary);
}

/* ── Hint / Error ── */
.lv-multi-select__hint {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
}

.lv-multi-select__hint--error {
  color: var(--color-danger);
}
</style>
