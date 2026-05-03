<template>
  <button
    :class="classes"
    :aria-label="ariaLabel"
    :aria-pressed="selected"
    :aria-disabled="disabled"
    :disabled="disabled"
    type="button"
    @click="!disabled && $emit('select')"
  >
    <svg
      :viewBox="'0 0 96 56'"
      xmlns="http://www.w3.org/2000/svg"
      class="lv-train-carriage__svg"
      aria-hidden="true"
      focusable="false"
    >
      <!-- ── nose-left: straight right end + angled left end, coupler on right ── -->
      <template v-if="shape === 'nose-left'">
        <path
          d="M 5.33,44.15 L 12.67,11.85 A 6,6 0 0,1 20,6 L 86,6 A 6,6 0 0,1 92,12 L 92,44 A 6,6 0 0,1 86,50 L 10,50 A 6,6 0 0,1 5.33,44.15 Z"
          class="lv-train-carriage__body"
        />
        <!-- Coupler on the straight right end -->
        <rect x="92" y="18" width="4" height="20" rx="1" class="lv-train-carriage__coupler" />
      </template>

      <!-- ── nose-right: angled right end + straight left end, coupler on left ── -->
      <template v-else-if="shape === 'nose-right'">
        <path
          d="M 4,44 L 4,12 A 6,6 0 0,1 10,6 L 76,6 A 6,6 0 0,1 83.33,11.85 L 90.67,44.15 A 6,6 0 0,1 86,50 L 10,50 A 6,6 0 0,1 4,44 Z"
          class="lv-train-carriage__body"
        />
        <!-- Coupler on the straight left end -->
        <rect x="0" y="18" width="4" height="20" rx="1" class="lv-train-carriage__coupler" />
      </template>

      <!-- ── locomotive: both sides angled (symmetric), couplers at both ends ── -->
      <!-- Used for standalone locomotives that are not permanently coupled.   -->
      <template v-else-if="shape === 'locomotive'">
        <!--
          Symmetric trapezoid: BL(4,50) BR(92,50) TR(82,6) TL(14,6)
          All four corners share the same rounded-angle arc (r=6).
        -->
        <path
          d="M 5.33,44.15 L 12.67,11.85 A 6,6 0 0,1 20,6 L 76,6 A 6,6 0 0,1 83.33,11.85 L 90.67,44.15 A 6,6 0 0,1 86,50 L 10,50 A 6,6 0 0,1 5.33,44.15 Z"
          class="lv-train-carriage__body"
        />
      </template>

      <!-- ── Rectangular coach ── -->
      <template v-else>
        <rect x="4" y="6" width="88" height="44" rx="2" class="lv-train-carriage__body" />
        <!-- Couplers at both ends -->
        <rect x="0"  y="18" width="4" height="20" rx="1" class="lv-train-carriage__coupler" />
        <rect x="92" y="18" width="4" height="20" rx="1" class="lv-train-carriage__coupler" />
      </template>

      <!-- Number label — vertically centred in the body (y 6–50 for both shapes) -->
      <text
        v-if="number != null"
        x="48" y="28"
        class="lv-train-carriage__label"
        text-anchor="middle"
        dominant-baseline="middle"
      >{{ number }}</text>
    </svg>
  </button>
</template>

<script setup>
import { computed } from 'vue'

/**
 * TrainCarriage — Visual silhouette of a single rolling stock unit.
 *
 * Two silhouette families:
 * - `rectangular` — standard coach / MU trailer car (rectangle)
 * - `nose-left` / `nose-right` — cab unit drawn as a trapezoid (wide base,
 *   narrow top); the two values differ only in which end carries a coupler.
 *
 * Accessibility: rendered as a `<button>` so it is natively keyboard-
 * focusable. `aria-label` encodes type, number and class. `aria-pressed`
 * reflects selection state.
 */

const props = defineProps({
  /**
   * Rolling stock category — semantic label only (all types share the same colour).
   * - `carriage`   — unpowered trailer coach
   * - `locomotive` — dedicated traction unit
   * - `power-car`  — semi-permanent power car at the end of a fixed formation
   */
  type: {
    type: String,
    default: 'carriage',
    validator: (v) => ['carriage', 'locomotive', 'power-car'].includes(v),
  },
  /**
   * Silhouette shape.
   * - `rectangular` — plain rectangle (coach / trailer)
   * - `nose-left`   — rectangle with angled left end + coupler on right (MU cab, LTR formation front)
   * - `nose-right`  — rectangle with angled right end + coupler on left (MU cab, RTL formation front)
   * - `locomotive`  — symmetric trapezoid, both sides angled, couplers at both ends (standalone loco)
   */
  shape: {
    type: String,
    default: 'rectangular',
    validator: (v) => ['rectangular', 'nose-left', 'nose-right', 'locomotive'].includes(v),
  },
  /**
   * Travel class — reflected in `aria-label` and body colour modifier class.
   * `null` | `first` | `standard` | `mixed`
   */
  travelClass: {
    type: String,
    default: null,
    validator: (v) => v === null || ['first', 'standard', 'mixed'].includes(v),
  },
  /** Numeric or alpha-numeric vehicle identifier rendered in the body. */
  number: {
    type: [String, Number],
    default: null,
  },
  /** Highlights the unit as selected / active. */
  selected: {
    type: Boolean,
    default: false,
  },
  /** Dims and disables interaction (e.g. unit not in service today). */
  disabled: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['select'])

const classes = computed(() => [
  'lv-train-carriage',
  `lv-train-carriage--${props.type}`,
  `lv-train-carriage--${props.shape}`,
  {
    [`lv-train-carriage--class-${props.travelClass}`]: props.travelClass,
    'lv-train-carriage--selected': props.selected,
    'lv-train-carriage--disabled': props.disabled,
  },
])

const ariaLabel = computed(() => {
  const parts = []
  if (props.type === 'locomotive')      parts.push('Locomotive')
  else if (props.type === 'power-car')  parts.push('Power car')
  else parts.push(props.number != null ? `Carriage ${props.number}` : 'Carriage')
  if (props.travelClass === 'first')    parts.push('— First Class')
  if (props.travelClass === 'standard') parts.push('— Standard')
  if (props.travelClass === 'mixed')    parts.push('— Mixed Class')
  if (props.disabled) parts.push('(not in service)')
  return parts.join(' ')
})
</script>

<style scoped>
/* ── Container ── */
.lv-train-carriage {
  display: inline-block;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: var(--radius-sm);
  outline-offset: 3px;
  transition: filter 120ms ease, transform 100ms ease;
}

.lv-train-carriage:focus-visible {
  outline: 2px solid var(--brand-primary);
}

.lv-train-carriage--disabled {
  cursor: not-allowed;
  opacity: 0.42;
}

.lv-train-carriage:not(.lv-train-carriage--disabled):hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.lv-train-carriage--selected .lv-train-carriage__body {
  stroke: var(--brand-primary) !important;
  stroke-width: 2.5 !important;
}

.lv-train-carriage__svg {
  display: block;
  width: 96px;
  height: 56px;
}

/* ── Body fill — single colour for all types ── */
.lv-train-carriage__body {
  fill: var(--color-slate-200);
  stroke: var(--color-slate-400);
  stroke-width: 1.5;
}

/* ── Couplers ── */
.lv-train-carriage__coupler {
  fill: var(--color-slate-500);
  stroke: var(--color-slate-700);
  stroke-width: 0.5;
}

/* ── Number label ── */
.lv-train-carriage__label {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: var(--font-bold);
  fill: var(--color-slate-700);
  pointer-events: none;
  user-select: none;
}
</style>
