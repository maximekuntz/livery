<template>
  <div ref="rootEl" :class="rootClasses">
    <label v-if="label" :for="inputId" class="lv-date-input__label">
      {{ label }}<span v-if="required" class="lv-date-input__required" aria-hidden="true"> *</span>
    </label>

    <div class="lv-date-input__wrapper">
      <button
        type="button"
        :id="inputId"
        class="lv-date-input__trigger"
        :disabled="disabled"
        :aria-expanded="open"
        :aria-haspopup="'dialog'"
        :aria-describedby="hint || error ? descId : undefined"
        :aria-invalid="error ? true : undefined"
        @click="toggle"
        @keydown.esc.stop="close"
      >
        <BaseIcon name="calendar" size="sm" class="lv-date-input__icon" aria-hidden="true" />
        <span :class="['lv-date-input__value', { 'lv-date-input__value--placeholder': !modelValue }]">
          {{ displayValue }}
        </span>
        <BaseIcon
          name="chevron-down"
          size="sm"
          class="lv-date-input__chevron"
          :class="{ 'lv-date-input__chevron--open': open }"
          aria-hidden="true"
        />
      </button>

      <!-- Calendar panel -->
      <Transition name="lv-date-panel">
        <div
          v-if="open"
          class="lv-date-input__panel"
          role="dialog"
          :aria-label="`Choose a date`"
        >
          <!-- Month navigation -->
          <div class="lv-date-input__nav">
            <button
              type="button"
              class="lv-date-input__nav-btn"
              aria-label="Previous month"
              @click="prevMonth"
            >
              <BaseIcon name="chevron-left" size="sm" aria-hidden="true" />
            </button>
            <span class="lv-date-input__month-label">{{ monthYearLabel }}</span>
            <button
              type="button"
              class="lv-date-input__nav-btn"
              aria-label="Next month"
              @click="nextMonth"
            >
              <BaseIcon name="chevron-right" size="sm" aria-hidden="true" />
            </button>
          </div>

          <!-- Day grid -->
          <div class="lv-date-input__grid" role="grid" :aria-label="monthYearLabel">
            <div
              v-for="wd in WEEKDAYS"
              :key="wd"
              class="lv-date-input__weekday"
              role="columnheader"
              aria-hidden="true"
            >{{ wd }}</div>

            <button
              v-for="cell in calendarCells"
              :key="cell.iso"
              type="button"
              role="gridcell"
              class="lv-date-input__day"
              :class="{
                'lv-date-input__day--today':    cell.isToday,
                'lv-date-input__day--selected': cell.isSelected,
                'lv-date-input__day--outside':  cell.isOutside,
                'lv-date-input__day--disabled': cell.isDisabled,
              }"
              :disabled="cell.isDisabled"
              :aria-selected="cell.isSelected || undefined"
              :aria-current="cell.isToday ? 'date' : undefined"
              :aria-label="cell.ariaLabel"
              @click="selectDay(cell)"
            >{{ cell.day }}</button>
          </div>

          <!-- Actions -->
          <div class="lv-date-input__actions">
            <button type="button" class="lv-date-input__action-btn" @click="selectToday">Today</button>
            <button
              v-if="modelValue"
              type="button"
              class="lv-date-input__action-btn lv-date-input__action-btn--muted"
              @click="clear"
            >Clear</button>
          </div>
        </div>
      </Transition>
    </div>

    <p v-if="error" :id="descId" class="lv-date-input__hint lv-date-input__hint--error" role="alert">
      {{ error }}
    </p>
    <p v-else-if="hint" :id="descId" class="lv-date-input__hint">{{ hint }}</p>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

/**
 * DateInput — Accessible date picker with a calendar dropdown.
 *
 * modelValue: ISO date string 'YYYY-MM-DD', or null/undefined for no selection.
 * Emits: update:modelValue with an ISO date string or null.
 */
const props = defineProps({
  modelValue: { type: String, default: null },
  label:       { type: String, default: undefined },
  placeholder: { type: String, default: 'Select date' },
  hint:        { type: String, default: undefined },
  error:       { type: String, default: undefined },
  disabled:    { type: Boolean, default: false },
  readonly:    { type: Boolean, default: false },
  required:    { type: Boolean, default: false },
  id:          { type: String, default: undefined },
  /** ISO date string — dates before this are disabled */
  min:         { type: String, default: undefined },
  /** ISO date string — dates after this are disabled */
  max:         { type: String, default: undefined },
})

const emit = defineEmits(['update:modelValue'])

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const MONTHS   = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December']

const uid     = Math.random().toString(36).slice(2, 8)
const inputId = computed(() => props.id ?? `lv-date-${uid}`)
const descId  = `lv-date-desc-${uid}`

const rootEl = ref(null)
const open   = ref(false)

/* ── View state (which month the calendar shows) ── */
function initialView() {
  if (props.modelValue) {
    const [y, m] = props.modelValue.split('-').map(Number)
    return { year: y, month: m - 1 }
  }
  const now = new Date()
  return { year: now.getFullYear(), month: now.getMonth() }
}
const view = ref(initialView())

watch(() => props.modelValue, (val) => {
  if (val) {
    const [y, m] = val.split('-').map(Number)
    view.value = { year: y, month: m - 1 }
  }
})

/* ── Helpers ── */
function toISO(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/* ── Calendar cells ── */
const todayISO = toISO(new Date())

const calendarCells = computed(() => {
  const { year, month } = view.value
  const firstOfMonth = new Date(year, month, 1)
  const lastOfMonth  = new Date(year, month + 1, 0)
  const cells = []

  // Monday-based offset
  const dow    = firstOfMonth.getDay()
  const offset = (dow + 6) % 7

  for (let i = offset - 1; i >= 0; i--) {
    cells.push(makeCell(new Date(year, month, -i), true))
  }
  for (let d = 1; d <= lastOfMonth.getDate(); d++) {
    cells.push(makeCell(new Date(year, month, d), false))
  }
  const remaining = (7 - (cells.length % 7)) % 7
  for (let i = 1; i <= remaining; i++) {
    cells.push(makeCell(new Date(year, month + 1, i), true))
  }

  return cells
})

function makeCell(date, isOutside) {
  const iso = toISO(date)
  const isDisabled = isOutside
    || (props.min && iso < props.min)
    || (props.max && iso > props.max)
  return {
    iso,
    day: date.getDate(),
    isToday:    iso === todayISO,
    isSelected: iso === props.modelValue,
    isOutside,
    isDisabled,
    ariaLabel: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
  }
}

const monthYearLabel = computed(() => `${MONTHS[view.value.month]} ${view.value.year}`)

/* ── Display value ── */
const displayValue = computed(() => {
  if (!props.modelValue) return props.placeholder
  const [y, m, d] = props.modelValue.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
})

/* ── Panel control ── */
function toggle() {
  if (props.readonly) return
  open.value ? close() : (open.value = true)
}

function close() { open.value = false }

function prevMonth() {
  if (view.value.month === 0) { view.value = { year: view.value.year - 1, month: 11 } }
  else { view.value = { ...view.value, month: view.value.month - 1 } }
}

function nextMonth() {
  if (view.value.month === 11) { view.value = { year: view.value.year + 1, month: 0 } }
  else { view.value = { ...view.value, month: view.value.month + 1 } }
}

/* ── Selection ── */
function selectDay(cell) {
  if (cell.isDisabled) return
  emit('update:modelValue', cell.iso)
  close()
}

function selectToday() {
  const iso = todayISO
  if ((props.min && iso < props.min) || (props.max && iso > props.max)) return
  emit('update:modelValue', iso)
  view.value = { year: new Date().getFullYear(), month: new Date().getMonth() }
  close()
}

function clear() {
  emit('update:modelValue', null)
  close()
}

/* ── Outside click ── */
function handleOutsideClick(e) {
  if (open.value && rootEl.value && !rootEl.value.contains(e.target)) {
    close()
  }
}
onMounted(()  => document.addEventListener('mousedown', handleOutsideClick))
onUnmounted(() => document.removeEventListener('mousedown', handleOutsideClick))

/* ── Root classes ── */
const rootClasses = computed(() => [
  'lv-date-input',
  {
    'lv-date-input--disabled': props.disabled,
    'lv-date-input--readonly': props.readonly,
    'lv-date-input--error':    !!props.error,
  },
])
</script>

<style scoped>
/* ── Root ── */
.lv-date-input {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  font-family: var(--font-sans);
}

/* ── Label ── */
.lv-date-input__label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
}

.lv-date-input__required {
  color: var(--color-danger);
}

/* ── Trigger ── */
.lv-date-input__wrapper {
  position: relative;
}

.lv-date-input__trigger {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  height: 2.5rem;
  padding: 0 var(--space-3);
  font-family: var(--font-sans);
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

.lv-date-input__trigger:hover:not(:disabled) {
  border-color: var(--border-strong);
}

.lv-date-input__trigger:focus-visible {
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary) 15%, transparent);
}

.lv-date-input__trigger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--color-slate-50);
}

.lv-date-input--error .lv-date-input__trigger {
  border-color: var(--color-danger);
}

.lv-date-input--error .lv-date-input__trigger:focus-visible {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-danger) 15%, transparent);
}

.lv-date-input--readonly .lv-date-input__trigger {
  cursor: default;
  background-color: var(--color-slate-50);
}

.lv-date-input__icon {
  flex-shrink: 0;
  color: var(--text-secondary);
}

.lv-date-input__value {
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lv-date-input__value--placeholder {
  color: var(--text-disabled);
}

.lv-date-input__chevron {
  flex-shrink: 0;
  color: var(--text-secondary);
  transition: transform var(--duration-fast) var(--ease-in-out);
}

.lv-date-input__chevron--open {
  transform: rotate(180deg);
}

/* ── Calendar panel ── */
.lv-date-input__panel {
  position: absolute;
  top: calc(100% + var(--space-1));
  left: 0;
  z-index: 100;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--space-3);
  min-width: 17rem;
  user-select: none;
}

/* Panel transition */
.lv-date-panel-enter-active,
.lv-date-panel-leave-active {
  transition:
    opacity var(--duration-fast) var(--ease-in-out),
    transform var(--duration-fast) var(--ease-in-out);
}
.lv-date-panel-enter-from,
.lv-date-panel-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ── Month navigation ── */
.lv-date-input__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-3);
}

.lv-date-input__nav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--text-secondary);
  transition: background-color var(--duration-fast) var(--ease-in-out), color var(--duration-fast) var(--ease-in-out);
}

.lv-date-input__nav-btn:hover {
  background-color: var(--color-slate-100);
  color: var(--text-primary);
}

.lv-date-input__nav-btn:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

.lv-date-input__month-label {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
}

/* ── Day grid ── */
.lv-date-input__grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--space-1);
}

.lv-date-input__weekday {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--text-secondary);
  letter-spacing: var(--tracking-wide);
}

.lv-date-input__day {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.125rem;
  width: 100%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  background: none;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition:
    background-color var(--duration-fast) var(--ease-in-out),
    color var(--duration-fast) var(--ease-in-out);
}

.lv-date-input__day:hover:not(:disabled) {
  background-color: var(--color-slate-100);
}

.lv-date-input__day:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 1px;
}

.lv-date-input__day--outside {
  color: var(--text-disabled);
}

.lv-date-input__day--today {
  font-weight: var(--font-semibold);
  color: var(--brand-primary);
}

.lv-date-input__day--selected {
  background-color: var(--brand-primary) !important;
  color: var(--text-inverse) !important;
  font-weight: var(--font-semibold);
}

.lv-date-input__day--disabled {
  opacity: 0.25;
  cursor: not-allowed;
}

/* ── Actions row ── */
.lv-date-input__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-3);
  margin-top: var(--space-2);
  border-top: 1px solid var(--border-subtle);
}

.lv-date-input__action-btn {
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--brand-primary);
  cursor: pointer;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-md);
  transition: background-color var(--duration-fast) var(--ease-in-out);
}

.lv-date-input__action-btn:hover {
  background-color: var(--color-blue-50);
}

.lv-date-input__action-btn:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

.lv-date-input__action-btn--muted {
  color: var(--text-secondary);
}

.lv-date-input__action-btn--muted:hover {
  background-color: var(--color-slate-100);
}

/* ── Hint / error ── */
.lv-date-input__hint {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
}

.lv-date-input__hint--error {
  color: var(--color-danger);
}
</style>
