<template>
  <div
    ref="rootEl"
    :class="rootClasses"
  >
    <label
      v-if="label"
      :for="inputId"
      class="lv-dt-input__label"
    >
      {{ label }}<span
        v-if="required"
        class="lv-dt-input__required"
        aria-hidden="true"
      > *</span>
    </label>

    <div class="lv-dt-input__wrapper">
      <button
        :id="inputId"
        type="button"
        class="lv-dt-input__trigger"
        :disabled="disabled"
        :aria-expanded="open"
        :aria-haspopup="'dialog'"
        :aria-describedby="hint || error ? descId : undefined"
        :aria-invalid="error ? true : undefined"
        @click="toggle"
        @keydown.esc.stop="close"
      >
        <BaseIcon
          name="calendar"
          size="sm"
          class="lv-dt-input__icon"
          aria-hidden="true"
        />
        <span :class="['lv-dt-input__value', { 'lv-dt-input__value--placeholder': !modelValue }]">
          {{ displayValue }}
        </span>
        <BaseIcon
          name="chevron-down"
          size="sm"
          class="lv-dt-input__chevron"
          :class="{ 'lv-dt-input__chevron--open': open }"
          aria-hidden="true"
        />
      </button>

      <!-- Combined panel -->
      <Transition name="lv-dt-panel">
        <div
          v-if="open"
          class="lv-dt-input__panel"
          role="dialog"
          aria-label="Choose date and time"
        >
          <div class="lv-dt-input__body">
            <!-- ── Calendar ── -->
            <div class="lv-dt-input__calendar">
              <div class="lv-dt-input__nav">
                <button
                  type="button"
                  class="lv-dt-input__nav-btn"
                  aria-label="Previous month"
                  @click="prevMonth"
                >
                  <BaseIcon
                    name="chevron-left"
                    size="sm"
                    aria-hidden="true"
                  />
                </button>
                <span class="lv-dt-input__month-label">{{ monthYearLabel }}</span>
                <button
                  type="button"
                  class="lv-dt-input__nav-btn"
                  aria-label="Next month"
                  @click="nextMonth"
                >
                  <BaseIcon
                    name="chevron-right"
                    size="sm"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div
                class="lv-dt-input__grid"
                role="grid"
                :aria-label="monthYearLabel"
              >
                <div
                  v-for="wd in WEEKDAYS"
                  :key="wd"
                  class="lv-dt-input__weekday"
                  role="columnheader"
                  aria-hidden="true"
                >
                  {{ wd }}
                </div>

                <button
                  v-for="cell in calendarCells"
                  :key="cell.iso"
                  type="button"
                  role="gridcell"
                  class="lv-dt-input__day"
                  :class="{
                    'lv-dt-input__day--today': cell.isToday,
                    'lv-dt-input__day--selected': cell.isSelected,
                    'lv-dt-input__day--outside': cell.isOutside,
                    'lv-dt-input__day--disabled': cell.isDisabled,
                  }"
                  :disabled="cell.isDisabled"
                  :aria-selected="cell.isSelected || undefined"
                  :aria-current="cell.isToday ? 'date' : undefined"
                  :aria-label="cell.ariaLabel"
                  @click="selectDay(cell)"
                >
                  {{ cell.day }}
                </button>
              </div>

              <div class="lv-dt-input__actions">
                <button
                  type="button"
                  class="lv-dt-input__action-btn"
                  @click="selectToday"
                >
                  Today
                </button>
                <button
                  v-if="dateISO"
                  type="button"
                  class="lv-dt-input__action-btn lv-dt-input__action-btn--muted"
                  @click="clear"
                >
                  Clear
                </button>
              </div>
            </div>

            <!-- ── Time picker ── -->
            <div class="lv-dt-input__time">
              <div class="lv-dt-input__time-heading">Time</div>
              <div class="lv-dt-input__time-columns">
                <!-- Hours -->
                <div
                  ref="hoursColEl"
                  class="lv-dt-input__time-column"
                  role="listbox"
                  aria-label="Hour"
                >
                  <button
                    v-for="h in HOURS"
                    :id="`lv-dt-h-${uid}-${h}`"
                    :key="h"
                    type="button"
                    role="option"
                    class="lv-dt-input__time-option"
                    :class="{ 'lv-dt-input__time-option--selected': h === selectedHour }"
                    :aria-selected="h === selectedHour"
                    @click="selectHour(h)"
                  >
                    {{ String(h).padStart(2, '0') }}
                  </button>
                </div>

                <div
                  class="lv-dt-input__time-sep"
                  aria-hidden="true"
                >
                  :
                </div>

                <!-- Minutes -->
                <div
                  ref="minsColEl"
                  class="lv-dt-input__time-column"
                  role="listbox"
                  aria-label="Minute"
                >
                  <button
                    v-for="m in minutes"
                    :id="`lv-dt-m-${uid}-${m}`"
                    :key="m"
                    type="button"
                    role="option"
                    class="lv-dt-input__time-option"
                    :class="{ 'lv-dt-input__time-option--selected': m === selectedMinute }"
                    :aria-selected="m === selectedMinute"
                    @click="selectMinute(m)"
                  >
                    {{ String(m).padStart(2, '0') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <p
      v-if="error"
      :id="descId"
      class="lv-dt-input__hint lv-dt-input__hint--error"
      role="alert"
    >
      {{ error }}
    </p>
    <p
      v-else-if="hint"
      :id="descId"
      class="lv-dt-input__hint"
    >
      {{ hint }}
    </p>
  </div>
</template>

<script setup>
import { computed, ref, nextTick, watch, onMounted, onUnmounted } from 'vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

/**
 * DateTimeInput — Accessible date-time picker: calendar + time columns in one panel.
 *
 * modelValue: ISO datetime string 'YYYY-MM-DDTHH:MM', or null/undefined.
 * Emits: update:modelValue with 'YYYY-MM-DDTHH:MM' string or null.
 */
const props = defineProps({
  modelValue:  { type: String, default: null },
  label:       { type: String, default: undefined },
  placeholder: { type: String, default: 'Select date and time' },
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
  /** Interval between minute options */
  minuteStep:  { type: Number, default: 5 },
})

const emit = defineEmits(['update:modelValue'])

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
const MONTHS   = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December']
const HOURS    = Array.from({ length: 24 }, (_, i) => i)

const uid      = Math.random().toString(36).slice(2, 8)
const inputId  = computed(() => props.id ?? `lv-dt-${uid}`)
const descId   = `lv-dt-desc-${uid}`

const rootEl    = ref(null)
const hoursColEl = ref(null)
const minsColEl  = ref(null)
const open      = ref(false)

/* ── Parse modelValue into date/time parts ── */
const dateISO = computed(() => props.modelValue?.split('T')[0] ?? null)
const timeStr = computed(() => props.modelValue?.split('T')[1] ?? null)

const selectedHour   = computed(() => timeStr.value ? parseInt(timeStr.value.split(':')[0], 10) : null)
const selectedMinute = computed(() => timeStr.value ? parseInt(timeStr.value.split(':')[1], 10) : null)

const minutes = computed(() => {
  const step = Math.max(1, Math.min(30, props.minuteStep))
  const result = []
  for (let m = 0; m < 60; m += step) result.push(m)
  return result
})

/* ── Calendar view ── */
function initialView() {
  if (dateISO.value) {
    const [y, m] = dateISO.value.split('-').map(Number)
    return { year: y, month: m - 1 }
  }
  const now = new Date()
  return { year: now.getFullYear(), month: now.getMonth() }
}
const view = ref(initialView())

watch(dateISO, (val) => {
  if (val) {
    const [y, m] = val.split('-').map(Number)
    view.value = { year: y, month: m - 1 }
  }
})

function toISO(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const todayISO = toISO(new Date())

const calendarCells = computed(() => {
  const { year, month } = view.value
  const firstOfMonth = new Date(year, month, 1)
  const lastOfMonth  = new Date(year, month + 1, 0)
  const cells = []

  const dow    = firstOfMonth.getDay()
  const offset = (dow + 6) % 7

  for (let i = offset - 1; i >= 0; i--) cells.push(makeCell(new Date(year, month, -i), true))
  for (let d = 1; d <= lastOfMonth.getDate(); d++) cells.push(makeCell(new Date(year, month, d), false))
  const rem = (7 - (cells.length % 7)) % 7
  for (let i = 1; i <= rem; i++) cells.push(makeCell(new Date(year, month + 1, i), true))

  return cells
})

function makeCell(date, isOutside) {
  const iso = toISO(date)
  const isDisabled = isOutside
    || (props.min && iso < props.min.slice(0, 10))
    || (props.max && iso > props.max.slice(0, 10))
  return {
    iso,
    day: date.getDate(),
    isToday:    iso === todayISO,
    isSelected: iso === dateISO.value,
    isOutside,
    isDisabled,
    ariaLabel: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
  }
}

const monthYearLabel = computed(() => `${MONTHS[view.value.month]} ${view.value.year}`)

/* ── Display value ── */
const displayValue = computed(() => {
  if (!props.modelValue) return props.placeholder
  const [datePart, timePart] = props.modelValue.split('T')
  const [y, m, d] = datePart.split('-').map(Number)
  const dateLabel = new Date(y, m - 1, d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  return timePart ? `${dateLabel}, ${timePart}` : dateLabel
})

/* ── Panel control ── */
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
  if (hoursColEl.value && selectedHour.value !== null) {
    const el = hoursColEl.value.querySelector(`#lv-dt-h-${uid}-${selectedHour.value}`)
    el?.scrollIntoView({ block: 'center', behavior: 'instant' })
  }
  if (minsColEl.value && selectedMinute.value !== null) {
    const el = minsColEl.value.querySelector(`#lv-dt-m-${uid}-${selectedMinute.value}`)
    el?.scrollIntoView({ block: 'center', behavior: 'instant' })
  }
}

function prevMonth() {
  if (view.value.month === 0) view.value = { year: view.value.year - 1, month: 11 }
  else view.value = { ...view.value, month: view.value.month - 1 }
}

function nextMonth() {
  if (view.value.month === 11) view.value = { year: view.value.year + 1, month: 0 }
  else view.value = { ...view.value, month: view.value.month + 1 }
}

function buildValue(newDate, newTime) {
  const d = newDate ?? dateISO.value
  const t = newTime ?? timeStr.value ?? '00:00'
  if (!d) return null
  return `${d}T${t}`
}

function selectDay(cell) {
  if (cell.isDisabled) return
  emit('update:modelValue', buildValue(cell.iso, null))
}

function selectToday() {
  emit('update:modelValue', buildValue(todayISO, null))
  view.value = { year: new Date().getFullYear(), month: new Date().getMonth() }
}

function selectHour(h) {
  const t = `${String(h).padStart(2, '0')}:${String(selectedMinute.value ?? 0).padStart(2, '0')}`
  emit('update:modelValue', buildValue(null, t))
}

function selectMinute(m) {
  const t = `${String(selectedHour.value ?? 0).padStart(2, '0')}:${String(m).padStart(2, '0')}`
  emit('update:modelValue', buildValue(null, t))
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
  'lv-dt-input',
  {
    'lv-dt-input--disabled': props.disabled,
    'lv-dt-input--readonly': props.readonly,
    'lv-dt-input--error':    !!props.error,
  },
])
</script>

<style scoped>
.lv-dt-input {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  font-family: var(--font-sans);
}

.lv-dt-input__label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
}

.lv-dt-input__required { color: var(--color-danger); }

/* ── Trigger ── */
.lv-dt-input__wrapper { position: relative; }

.lv-dt-input__trigger {
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

.lv-dt-input__trigger:hover:not(:disabled) { border-color: var(--border-strong); }

.lv-dt-input__trigger:focus-visible {
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary) 15%, transparent);
}

.lv-dt-input__trigger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--color-slate-50);
}

.lv-dt-input--error .lv-dt-input__trigger { border-color: var(--color-danger); }
.lv-dt-input--error .lv-dt-input__trigger:focus-visible {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-danger) 15%, transparent);
}

.lv-dt-input--readonly .lv-dt-input__trigger {
  cursor: default;
  background-color: var(--color-slate-50);
}

.lv-dt-input__icon {
  flex-shrink: 0;
  color: var(--text-secondary);
}

.lv-dt-input__value {
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-variant-numeric: tabular-nums;
}

.lv-dt-input__value--placeholder { color: var(--text-disabled); }

.lv-dt-input__chevron {
  flex-shrink: 0;
  color: var(--text-secondary);
  transition: transform var(--duration-fast) var(--ease-in-out);
}

.lv-dt-input__chevron--open { transform: rotate(180deg); }

/* ── Panel ── */
.lv-dt-input__panel {
  position: absolute;
  top: calc(100% + var(--space-1));
  left: 0;
  z-index: 100;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

.lv-dt-panel-enter-active,
.lv-dt-panel-leave-active {
  transition:
    opacity var(--duration-fast) var(--ease-in-out),
    transform var(--duration-fast) var(--ease-in-out);
}
.lv-dt-panel-enter-from,
.lv-dt-panel-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ── Body: calendar + time side by side ── */
.lv-dt-input__body {
  display: flex;
  align-items: stretch;
}

/* ── Calendar side ── */
.lv-dt-input__calendar {
  padding: var(--space-3);
  min-width: 17rem;
  border-right: 1px solid var(--border-subtle);
}

.lv-dt-input__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-3);
}

.lv-dt-input__nav-btn {
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

.lv-dt-input__nav-btn:hover { background-color: var(--color-slate-100); color: var(--text-primary); }
.lv-dt-input__nav-btn:focus-visible { outline: 2px solid var(--brand-primary); outline-offset: 2px; }

.lv-dt-input__month-label {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
}

.lv-dt-input__grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--space-1);
}

.lv-dt-input__weekday {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--text-secondary);
  letter-spacing: var(--tracking-wide);
}

.lv-dt-input__day {
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
  transition: background-color var(--duration-fast) var(--ease-in-out), color var(--duration-fast) var(--ease-in-out);
}

.lv-dt-input__day:hover:not(:disabled) { background-color: var(--color-slate-100); }
.lv-dt-input__day:focus-visible { outline: 2px solid var(--brand-primary); outline-offset: 1px; }
.lv-dt-input__day--outside   { color: var(--text-disabled); }
.lv-dt-input__day--today      { font-weight: var(--font-semibold); color: var(--brand-primary); }
.lv-dt-input__day--selected   { background-color: var(--brand-primary) !important; color: var(--text-inverse) !important; font-weight: var(--font-semibold); }
.lv-dt-input__day--disabled   { opacity: 0.25; cursor: not-allowed; }

.lv-dt-input__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-3);
  margin-top: var(--space-2);
  border-top: 1px solid var(--border-subtle);
}

.lv-dt-input__action-btn {
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

.lv-dt-input__action-btn:hover { background-color: var(--color-blue-50); }
.lv-dt-input__action-btn:focus-visible { outline: 2px solid var(--brand-primary); outline-offset: 2px; }

.lv-dt-input__action-btn--muted { color: var(--text-secondary); }
.lv-dt-input__action-btn--muted:hover { background-color: var(--color-slate-100); }

/* ── Time side ── */
.lv-dt-input__time {
  display: flex;
  flex-direction: column;
  min-width: 8rem;
}

.lv-dt-input__time-heading {
  padding: var(--space-3) var(--space-3) var(--space-2);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-subtle);
}

.lv-dt-input__time-columns {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.lv-dt-input__time-column {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  max-height: 14rem;
  scrollbar-width: thin;
  scrollbar-color: var(--color-slate-300) transparent;
}

.lv-dt-input__time-column::-webkit-scrollbar { width: 4px; }
.lv-dt-input__time-column::-webkit-scrollbar-thumb { background-color: var(--color-slate-300); border-radius: 2px; }

.lv-dt-input__time-sep {
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

.lv-dt-input__time-option {
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

.lv-dt-input__time-option:hover { background-color: var(--color-slate-100); }
.lv-dt-input__time-option:focus-visible { outline: 2px solid var(--brand-primary); outline-offset: -2px; }
.lv-dt-input__time-option--selected {
  background-color: var(--brand-primary);
  color: var(--text-inverse);
  font-weight: var(--font-semibold);
}
.lv-dt-input__time-option--selected:hover { background-color: var(--brand-primary-hover); }

/* ── Hint / error ── */
.lv-dt-input__hint { font-size: var(--text-xs); color: var(--text-secondary); line-height: var(--leading-normal); }
.lv-dt-input__hint--error { color: var(--color-danger); }
</style>
