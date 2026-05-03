<template>
  <article :class="classes" :aria-label="`Carriage ${number} information`">

    <!-- ── Header: number + class badge ── -->
    <header class="lv-carriage-info__header">
      <div class="lv-carriage-info__number">{{ number }}</div>
      <span
        v-if="travelClass"
        :class="classBadgeClasses"
        role="status"
        :aria-label="`Travel class: ${classLabel}`"
      >{{ classLabel }}</span>
    </header>

    <!-- ── Platform zone ── -->
    <div v-if="platformZone" class="lv-carriage-info__zone-row">
      <span
        class="lv-carriage-info__zone-badge"
        :data-zone="platformZone"
        role="status"
        :aria-label="`Platform zone ${platformZone}`"
      >
        Zone {{ platformZone }}
      </span>
    </div>

    <!-- ── Services grid ── -->
    <div v-if="services.length" class="lv-carriage-info__services-section">
      <p class="lv-carriage-info__services-heading">Services</p>
      <ul class="lv-carriage-info__services" aria-label="Available services">
        <li
          v-for="service in services"
          :key="service"
          class="lv-carriage-info__service"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span
            class="lv-carriage-info__service-icon"
            aria-hidden="true"
            v-html="SERVICE_ICONS[service]"
          />
          <span class="lv-carriage-info__service-label">{{ SERVICE_LABELS[service] ?? service }}</span>
        </li>
      </ul>
    </div>

    <p v-if="!services.length" class="lv-carriage-info__no-services">No services listed</p>

  </article>
</template>

<script setup>
import { computed } from 'vue'
import { SERVICE_LABELS, SERVICE_ICONS, VALID_SERVICES } from './CarriageInfo.constants.js'

/**
 * CarriageInfo — Detail panel for a single rolling stock unit.
 *
 * Displays carriage number, travel class, platform zone, and the set of
 * on-board services available in that vehicle. Intended to be shown
 * alongside or below an `TrainConsist` diagram when the user selects
 * a carriage.
 *
 * Accessibility:
 * - Rendered as an `<article>` with a descriptive `aria-label`.
 * - Class badge and zone badge use `role="status"` for live-region semantics
 *   when the panel updates reactively.
 * - Service icons are decorative (`aria-hidden`); the text label conveys meaning.
 */

const props = defineProps({
  /** Carriage or vehicle number/identifier */
  number: {
    type: [String, Number],
    required: true,
  },
  /** Travel class offered in this vehicle */
  travelClass: {
    type: String,
    default: null,
    validator: (v) => v === null || ['first', 'standard', 'mixed'].includes(v),
  },
  /** Platform zone letter (A–E) */
  platformZone: {
    type: String,
    default: null,
  },
  /**
   * On-board services available in this vehicle.
   * Accepted codes: `wifi` | `power` | `restaurant` | `buffet` |
   * `accessible` | `quiet` | `bike` | `luggage` | `baby`
   */
  services: {
    type: Array,
    default: () => [],
    validator: (v) => v.every((s) => VALID_SERVICES.includes(s)),
  },
  /** Compact layout — smaller number and tighter padding */
  compact: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [
  'lv-carriage-info',
  { 'lv-carriage-info--compact': props.compact },
])

const classLabel = computed(() =>
  ({ first: 'First Class', standard: 'Standard', mixed: 'Mixed Class' })[props.travelClass] ?? ''
)

const classBadgeClasses = computed(() => [
  'lv-carriage-info__class-badge',
  `lv-carriage-info__class-badge--${props.travelClass}`,
])
</script>

<style scoped>
/* ── Shell ── */
.lv-carriage-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  min-width: 220px;
  max-width: 360px;
  font-family: var(--font-sans);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

/* ── Header ── */
.lv-carriage-info__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.lv-carriage-info__number {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  letter-spacing: var(--tracking-tight);
}

.lv-carriage-info--compact .lv-carriage-info__number {
  font-size: var(--text-2xl);
}

/* ── Class badge ── */
.lv-carriage-info__class-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-2);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  border: 1.5px solid transparent;
  white-space: nowrap;
}

.lv-carriage-info__class-badge--first {
  background: #fff9db;
  color: var(--color-amber-700);
  border-color: #ffe066;
}

.lv-carriage-info__class-badge--standard {
  background: var(--color-blue-50);
  color: var(--color-blue-800);
  border-color: var(--color-blue-100);
}

.lv-carriage-info__class-badge--mixed {
  background: #f3f0ff;
  color: #5f3dc4;
  border-color: #d0bfff;
}

/* ── Platform zone ── */
.lv-carriage-info__zone-row {
  display: flex;
}

.lv-carriage-info__zone-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  letter-spacing: var(--tracking-wide);
  color: #fff;
}

.lv-carriage-info__zone-badge[data-zone="A"] { background: var(--color-green-700); }
.lv-carriage-info__zone-badge[data-zone="B"] { background: var(--color-blue-700);  }
.lv-carriage-info__zone-badge[data-zone="C"] { background: var(--color-amber-700); }
.lv-carriage-info__zone-badge[data-zone="D"] { background: var(--color-red-600);   }
.lv-carriage-info__zone-badge[data-zone="E"] { background: var(--color-slate-600); }

/* ── Services section ── */
.lv-carriage-info__services-section {
  border-top: 1px solid var(--border-subtle);
  padding-top: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.lv-carriage-info__services-heading {
  margin: 0;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-secondary);
}

.lv-carriage-info__services {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
  gap: var(--space-2);
  list-style: none;
  margin: 0;
  padding: 0;
}

.lv-carriage-info--compact .lv-carriage-info__services {
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
}

.lv-carriage-info__service {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-slate-50);
  border: 1px solid var(--border-subtle);
  text-align: center;
}

.lv-carriage-info__service-icon {
  width: 20px;
  height: 20px;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lv-carriage-info__service-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.lv-carriage-info__service-label {
  font-size: 10px;
  line-height: var(--leading-tight);
  color: var(--text-secondary);
}

/* ── Empty state ── */
.lv-carriage-info__no-services {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  border-top: 1px solid var(--border-subtle);
  padding-top: var(--space-3);
}
</style>
