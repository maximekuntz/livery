<template>
  <div
    class="lv-train-consist"
    role="region"
    :aria-label="ariaLabel"
  >
    <!-- Direction of travel label -->
    <div class="lv-train-consist__header">
      <span class="lv-train-consist__direction">
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          focusable="false"
          class="lv-train-consist__direction-arrow"
          :style="direction === 'rtl' ? 'transform:scaleX(-1)' : ''"
        >
          <path
            d="M1 8h12M9 4l4 4-4 4"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </svg>
        Direction of travel
      </span>
    </div>

    <!-- Platform zone bands -->
    <div
      v-if="platformZones.length"
      class="lv-train-consist__zones"
      :style="`--carriage-count:${carriages.length}`"
      aria-hidden="true"
    >
      <div
        v-for="zone in computedZones"
        :key="zone.label"
        class="lv-train-consist__zone"
        :style="`grid-column:${zone.gridStart}/span ${zone.span}`"
        :data-zone="zone.label"
      >
        <span class="lv-train-consist__zone-label">{{ zone.label }}</span>
      </div>
    </div>

    <!-- Formation row -->
    <div class="lv-train-consist__track">
      <!-- Track rail lines -->
      <div
        class="lv-train-consist__rail lv-train-consist__rail--top"
        aria-hidden="true"
      />
      <div
        class="lv-train-consist__rail lv-train-consist__rail--bottom"
        aria-hidden="true"
      />

      <ol
        class="lv-train-consist__formation"
        role="list"
        aria-label="Carriages"
      >
        <li
          v-for="(carriage, index) in carriages"
          :key="carriage.id ?? index"
          class="lv-train-consist__item"
        >
          <TrainCarriage
            v-bind="carriage"
            :selected="selectedId != null && (carriage.id ?? index) === selectedId"
            @select="onSelect(carriage, index)"
          />
        </li>
      </ol>
    </div>

    <!-- Carriage number labels below formation -->
    <div
      class="lv-train-consist__number-row"
      aria-hidden="true"
    >
      <span
        v-for="(carriage, index) in carriages"
        :key="`num-${carriage.id ?? index}`"
        class="lv-train-consist__number-label"
      >{{ carriage.number ?? '' }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import TrainCarriage from '../TrainCarriage/TrainCarriage.vue'

/**
 * TrainConsist — Full train formation diagram.
 *
 * Renders an ordered sequence of rolling stock units with optional platform
 * zone bands above the formation. Clicking a unit emits `select` with the
 * carriage object and its index.
 *
 * Accessibility: the formation is an `<ol>` so screen readers announce
 * "list of N items". Each carriage button has its own `aria-label`.
 * Zone bands are `aria-hidden` — their meaning is conveyed by the carriages.
 *
 * @example
 * <TrainConsist
 *   :carriages="consist"
 *   :platform-zones="zones"
 *   direction="ltr"
 *   @select="onSelect"
 * />
 */
const props = defineProps({
  /**
   * Ordered array of carriage config objects.
   * Each item is spread onto an `TrainCarriage` — any prop accepted by
   * that component can be provided here.
   * Optionally include an `id` field to use as the list key and for
   * controlled selection via `selectedId`.
   */
  carriages: {
    type: Array,
    required: true,
  },
  /**
   * Platform zone bands displayed above the formation.
   * Each entry maps a zone label to a contiguous range of carriage indices.
   *
   * @example [{ label: 'A', from: 0, to: 1 }, { label: 'B', from: 2, to: 4 }]
   */
  platformZones: {
    type: Array,
    default: () => [],
  },
  /**
   * Which end of the `carriages` array is the front of the train.
   * `ltr` — index 0 is the front (displayed on the left).
   * `rtl` — index 0 is the rear (displayed on the left, nose on the right).
   */
  direction: {
    type: String,
    default: 'ltr',
    validator: (v) => ['ltr', 'rtl'].includes(v),
  },
  /**
   * Controlled selected carriage id (matches `carriage.id` or array index).
   */
  selectedId: {
    type: [String, Number],
    default: null,
  },
  /** Accessible region label for the consist diagram. */
  ariaLabel: {
    type: String,
    default: 'Train formation',
  },
})

const emit = defineEmits(['select'])

function onSelect(carriage, index) {
  emit('select', { carriage, index })
}

/**
 * Converts platform zone definitions to CSS Grid column coordinates.
 * CSS Grid is 1-indexed; zone.from/to are 0-indexed carriage positions.
 */
const computedZones = computed(() =>
  props.platformZones.map((zone) => ({
    label:     zone.label,
    gridStart: zone.from + 1,
    span:      zone.to - zone.from + 1,
  }))
)
</script>

<style scoped>
/* ── Shell ── */
.lv-train-consist {
  display: inline-flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-4) var(--space-4) var(--space-3);
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  font-family: var(--font-sans);
  overflow-x: auto;
}

/* ── Direction header ── */
.lv-train-consist__header {
  display: flex;
  align-items: center;
  margin-bottom: var(--space-1);
}

.lv-train-consist__direction {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.lv-train-consist__direction-arrow {
  width: 16px;
  height: 16px;
  color: var(--text-secondary);
  flex-shrink: 0;
}

/* ── Platform zone bands ── */
.lv-train-consist__zones {
  /* One column per carriage (96px) with the same 2px gap as the formation */
  display: grid;
  grid-template-columns: repeat(var(--carriage-count), 96px);
  gap: 2px;
  height: 22px;
}

.lv-train-consist__zone {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
}

.lv-train-consist__zone-label {
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: var(--tracking-widest);
  color: #fff;
}

/* Zone colour palette — extend as needed */
.lv-train-consist__zone[data-zone="A"] { background: var(--color-green-700); }
.lv-train-consist__zone[data-zone="B"] { background: var(--color-blue-700);  }
.lv-train-consist__zone[data-zone="C"] { background: var(--color-amber-700); }
.lv-train-consist__zone[data-zone="D"] { background: var(--color-red-600);   }
.lv-train-consist__zone[data-zone="E"] { background: var(--color-slate-600); }

/* ── Track + formation row ── */
.lv-train-consist__track {
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-bottom: 6px; /* leaves room for the rail lines below the wheels */
}

.lv-train-consist__rail {
  position: absolute;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--color-slate-500);
  border-radius: var(--radius-full);
}

.lv-train-consist__rail--top    { bottom: 12px; }
.lv-train-consist__rail--bottom { bottom: 2px;  }

.lv-train-consist__formation {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 1;
}

.lv-train-consist__item {
  display: flex;
}

/* ── Number labels ── */
.lv-train-consist__number-row {
  display: flex;
  gap: 2px;
}

.lv-train-consist__number-label {
  width: 96px;
  text-align: center;
  font-size: var(--text-xs);
  color: var(--text-secondary);
  font-weight: var(--font-medium);
  font-variant-numeric: tabular-nums;
}
</style>
