<template>
  <div ref="rootEl" :class="rootClasses">
    <label v-if="label" :for="inputId" class="lv-time-input__label">
      {{ label }}<span v-if="required" class="lv-time-input__required" aria-hidden="true"> *</span>
    </label>

    <div class="lv-time-input__wrapper">
      <button
        type="button"
        :id="inputId"
        class="lv-time-input__trigger"
        :disabled="disabled"
        :aria-expanded="open"
        :aria-haspopup="'listbox'"
        :aria-describedby="hint || error ? descId : undefined"
        :aria-invalid="error ? true : undefined"
        @click="toggle"
        @keydown.esc.stop="close"
      >
        <BaseIcon name="clock" size="sm" class="lv-time-input__icon" aria-hidden="true" />
        <span :class="['lv-time-input__value', { 'lv-time-input__value--placeholder': !modelValue }]">
          {{ displayValue }}
        </span>
        <BaseIcon
          name="chevron-down"
          size="sm"
          class="lv-time-input__chevron"
          :class="{ 'lv-time-input__chevron--open': open }"
          aria-hidden="true"
        />
      </button>

      <!-- Time picker panel -->
      <Transition name="lv-time-panel">
        <div v-if="open" class="lv-time-input__panel">
          <div class="lv-time-input__columns">
            <!-- Hours -->
            <div
              ref="hoursColEl"
              class="lv-time-input__column"
              role="listbox"
              aria-label="Hour"
              :aria-activedescendant="selectedHour !== null ? `lv-time-h-${uid}-${selectedHour}` : undefined"
            >
              <button
                v-for="h in HOURS"
                :key="h"
                :id="`lv-time-h-${uid}-${h}`"
                type="button"
                role="option"
                class="lv-time-input__option"
                :class="{ 'lv-time-input__option--selected': h === selectedHour }"
                :aria-selected="h === selectedHour"
                @click="selectHour(h)"
              >{{ String(h).padStart(2, '0') }}</button>
            </div>

            <div class="lv-time-input__separator" aria-hidden="true">:</div>

            <!-- Minutes -->
            <div
              ref="minsColEl"
              class="lv-time-input__column"
              role="listbox"
              aria-label="Minute"
              :aria-activedescendant="selectedMinute !== null ? `lv-time-m-${uid}-${selectedMinute}` : undefined"
            >
              <button
                v-for="m in minutes"
                :key="m"
                :id="`lv-time-m-${uid}-${m}`"
                type="button"
                role="option"
                class="lv-time-input__option"
                :class="{ 'lv-time-input__option--selected': m === selectedMinute }"
                :aria-selected="m === selectedMinute"
                @click="selectMinute(m)"
              >{{ String(m).padStart(2, '0') }}</button>
            </div>
          </div>

          <!-- Clear action -->
          <div v-if="modelValue" class="lv-time-input__actions">
            <button type="button" class="lv-time-input__action-btn" @click="clear">Clear</button>
          </div>
        </div>
      </Transition>
    </div>

    <p v-if="error" :id="descId" class="lv-time-input__hint lv-time-input__hint--error" role="alert">
      {{ error }}
    </p>
    <p v-else-if="hint" :id="descId" class="lv-time-input__hint">{{ hint }}</p>
  </div>
</template>

<script setup>
import { computed, ref, nextTick, onMounted, onUnmounted } from 'vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

/**
 * TimeInput — Accessible time picker with scrollable hour/minute columns.
 *
 * modelValue: 'HH:MM' string (24-hour), or null/undefined for no selection.
 * Emits: update:modelValue with 'HH:MM' string or null.
 */
const props = defineProps({
  modelValue:  { type: String, default: null },
  label:       { type: String, default: undefined },
  placeholder: { type: String, default: 'Select time' },
  hint:        { type: String, default: undefined },
  error:       { type: String, default: undefined },
  disabled:    { type: Boolean, default: false },
  readonly:    { type: Boolean, default: false },
  required:    { type: Boolean, default: false },
  id:          { type: String, default: undefined },
  /** Interval between minute options (1–30) */
  minuteStep:  { type: Number, default: 5 },
})

const emit = defineEmits(['update:modelValue'])

const HOURS = Array.from({ length: 24 }, (_, i) => i)

const uid     = Math.random().toString(36).slice(2, 8)
const inputId = computed(() => props.id ?? `lv-time-${uid}`)
const descId  = `lv-time-desc-${uid}`

const rootEl    = ref(null)
const hoursColEl = ref(null)
const minsColEl  = ref(null)
const open      = ref(false)

const minutes = computed(() => {
  const step = Math.max(1, Math.min(30, props.minuteStep))
  const result = []
  for (let m = 0; m < 60; m += step) result.push(m)
  return result
})

const selectedHour   = computed(() => {
  if (!props.modelValue) return null
  return parseInt(props.modelValue.split(':')[0], 10)
})

const selectedMinute = computed(() => {
  if (!props.modelValue) return null
  return parseInt(props.modelValue.split(':')[1], 10)
})

const displayValue = computed(() => {
  if (!props.modelValue) return props.placeholder
  return props.modelValue
})

function toggle() {
  if (props.readonly) return
  if (open.value) {
    close()
  } else {
    open.value = true
    nextTick(scrollToSelected)
  }
}

function close() { open.value = false }

function scrollToSelected() {
  scrollCol(hoursColEl.value, selectedHour.value, `lv-time-h-${uid}`)
  scrollCol(minsColEl.value, selectedMinute.value, `lv-time-m-${uid}`)
}

function scrollCol(colEl, selectedVal, idPrefix) {
  if (!colEl || selectedVal === null) return
  const el = colEl.querySelector(`#${idPrefix}-${selectedVal}`)
  if (el) el.scrollIntoView({ block: 'center', behavior: 'instant' })
}

function buildValue(h, m) {
  const hour = h ?? selectedHour.value ?? 0
  const min  = m ?? selectedMinute.value ?? 0
  return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`
}

function selectHour(h) {
  emit('update:modelValue', buildValue(h, null))
}

function selectMinute(m) {
  emit('update:modelValue', buildValue(null, m))
}

function clear() {
  emit('update:modelValue', null)
  close()
}

function handleOutsideClick(e) {
  if (open.value && rootEl.value && !rootEl.value.contains(e.target)) close()
}
onMounted(()  => document.addEventListener('mousedown', handleOutsideClick))
onUnmounted(() => document.removeEventListener('mousedown', handleOutsideClick))

const rootClasses = computed(() => [
  'lv-time-input',
  {
    'lv-time-input--disabled': props.disabled,
    'lv-time-input--readonly': props.readonly,
    'lv-time-input--error':    !!props.error,
  },
])
</script>

<style scoped>
.lv-time-input {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  font-family: var(--font-sans);
}

.lv-time-input__label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
}

.lv-time-input__required { color: var(--color-danger); }

/* ── Trigger ── */
.lv-time-input__wrapper { position: relative; }

.lv-time-input__trigger {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  height: 2.5rem;
  padding: 0 var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--text-primary);
  background-color: var(--bg-surface);
  border: 1.5px solid var(--border-default);
  border-radius: var(--radius-md);
  cursor: pointer;
  text-align: left;
  outline: none;
  transition:
    border-color var(--duration-fast) var(--ease-in-out),
    box-shadow   var(--duration-fast) var(--ease-in-out);
}

.lv-time-input__trigger:hover:not(:disabled) { border-color: var(--border-strong); }

.lv-time-input__trigger:focus-visible {
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary) 15%, transparent);
}

.lv-time-input__trigger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--color-slate-50);
}

.lv-time-input--error .lv-time-input__trigger { border-color: var(--color-danger); }
.lv-time-input--error .lv-time-input__trigger:focus-visible {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-danger) 15%, transparent);
}

.lv-time-input--readonly .lv-time-input__trigger {
  cursor: default;
  background-color: var(--color-slate-50);
}

.lv-time-input__icon {
  flex-shrink: 0;
  color: var(--text-secondary);
}

.lv-time-input__value {
  flex: 1;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

.lv-time-input__value--placeholder {
  font-family: var(--font-sans);
  color: var(--text-disabled);
}

.lv-time-input__chevron {
  flex-shrink: 0;
  color: var(--text-secondary);
  transition: transform var(--duration-fast) var(--ease-in-out);
}

.lv-time-input__chevron--open { transform: rotate(180deg); }

/* ── Panel ── */
.lv-time-input__panel {
  position: absolute;
  top: calc(100% + var(--space-1));
  left: 0;
  z-index: 100;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  min-width: 9rem;
}

.lv-time-panel-enter-active,
.lv-time-panel-leave-active {
  transition:
    opacity var(--duration-fast) var(--ease-in-out),
    transform var(--duration-fast) var(--ease-in-out);
}
.lv-time-panel-enter-from,
.lv-time-panel-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ── Columns ── */
.lv-time-input__columns {
  display: flex;
  align-items: stretch;
}

.lv-time-input__column {
  display: flex;
  flex-direction: column;
  max-height: 12.5rem;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: var(--color-slate-300) transparent;
}

.lv-time-input__column::-webkit-scrollbar { width: 4px; }
.lv-time-input__column::-webkit-scrollbar-thumb { background-color: var(--color-slate-300); border-radius: 2px; }

.lv-time-input__separator {
  display: flex;
  align-items: center;
  padding: 0 var(--space-1);
  font-weight: var(--font-semibold);
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  border-left: 1px solid var(--border-subtle);
  border-right: 1px solid var(--border-subtle);
}

/* ── Time options ── */
.lv-time-input__option {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  width: 100%;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color var(--duration-fast) var(--ease-in-out);
  white-space: nowrap;
}

.lv-time-input__option:hover { background-color: var(--color-slate-100); }

.lv-time-input__option:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: -2px;
}

.lv-time-input__option--selected {
  background-color: var(--brand-primary);
  color: var(--text-inverse);
  font-weight: var(--font-semibold);
}

.lv-time-input__option--selected:hover {
  background-color: var(--brand-primary-hover);
}

/* ── Actions ── */
.lv-time-input__actions {
  padding: var(--space-2) var(--space-3);
  border-top: 1px solid var(--border-subtle);
  text-align: right;
}

.lv-time-input__action-btn {
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--text-secondary);
  cursor: pointer;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-md);
  transition: background-color var(--duration-fast) var(--ease-in-out);
}

.lv-time-input__action-btn:hover { background-color: var(--color-slate-100); }
.lv-time-input__action-btn:focus-visible { outline: 2px solid var(--brand-primary); outline-offset: 2px; }

/* ── Hint / error ── */
.lv-time-input__hint { font-size: var(--text-xs); color: var(--text-secondary); line-height: var(--leading-normal); }
.lv-time-input__hint--error { color: var(--color-danger); }
</style>
