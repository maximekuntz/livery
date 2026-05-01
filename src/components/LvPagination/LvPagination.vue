<template>
  <nav class="lv-pagination" :aria-label="ariaLabel" role="navigation">
    <!-- Row summary -->
    <span class="lv-pagination__summary" aria-live="polite" aria-atomic="true">
      {{ summary }}
    </span>

    <div class="lv-pagination__controls">
      <!-- Page-size selector -->
      <div v-if="showPageSize" class="lv-pagination__size">
        <label :for="selectId" class="lv-pagination__size-label">Rows per page</label>
        <select
          :id="selectId"
          class="lv-pagination__select"
          :value="pageSize"
          @change="onSizeChange"
        >
          <option v-for="opt in pageSizeOptions" :key="opt" :value="opt">{{ opt }}</option>
        </select>
      </div>

      <!-- Previous -->
      <button
        type="button"
        class="lv-pagination__btn lv-pagination__btn--nav"
        :disabled="page <= 1"
        aria-label="Previous page"
        @click="go(page - 1)"
      >
        <LvBaseIcon name="chevron-left" size="sm" aria-hidden="true" />
      </button>

      <!-- Page buttons with ellipsis -->
      <template v-for="item in pageItems" :key="item === 'ellipsis-start' || item === 'ellipsis-end' ? item : `p${item}`">
        <span v-if="typeof item === 'string'" class="lv-pagination__ellipsis" aria-hidden="true">…</span>
        <button
          v-else
          type="button"
          :class="['lv-pagination__btn', 'lv-pagination__btn--page', { 'lv-pagination__btn--active': item === page }]"
          :aria-current="item === page ? 'page' : undefined"
          :aria-label="`Page ${item}`"
          @click="go(item)"
        >
          {{ item }}
        </button>
      </template>

      <!-- Next -->
      <button
        type="button"
        class="lv-pagination__btn lv-pagination__btn--nav"
        :disabled="page >= totalPages"
        aria-label="Next page"
        @click="go(page + 1)"
      >
        <LvBaseIcon name="chevron-right" size="sm" aria-hidden="true" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import LvBaseIcon from '../LvBaseIcon/LvBaseIcon.vue'

/**
 * LvPagination — Accessible paginator with ellipsis windowing.
 *
 * Supports v-model:page and v-model:page-size.
 * Can be used standalone or is embedded automatically inside LvTable.
 */
const props = defineProps({
  /** Current page (1-based). Bind with v-model:page. */
  page: {
    type: Number,
    default: 1,
  },
  /** Rows per page. Bind with v-model:page-size. */
  pageSize: {
    type: Number,
    default: 10,
  },
  /** Total number of rows across all pages */
  totalRows: {
    type: Number,
    required: true,
  },
  /** Options shown in the page-size selector */
  pageSizeOptions: {
    type: Array,
    default: () => [10, 25, 50, 100],
  },
  /** Show the rows-per-page selector */
  showPageSize: {
    type: Boolean,
    default: true,
  },
  /** Accessible label for the <nav> landmark */
  ariaLabel: {
    type: String,
    default: 'Table pagination',
  },
})

const emit = defineEmits(['update:page', 'update:pageSize'])

const uid      = Math.random().toString(36).slice(2, 7)
const selectId = `lv-pagination-size-${uid}`

const totalPages = computed(() => Math.max(1, Math.ceil(props.totalRows / props.pageSize)))

const summary = computed(() => {
  if (props.totalRows === 0) return 'No results'
  const from = (props.page - 1) * props.pageSize + 1
  const to   = Math.min(props.page * props.pageSize, props.totalRows)
  return `${from}–${to} of ${props.totalRows}`
})

/** Build the sequence of page numbers + ellipsis markers to render. */
const pageItems = computed(() => {
  const total = totalPages.value
  const cur   = props.page

  // Fewer than 8 pages — show all
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  // Build the core set: first, last, current ± 1
  const show = new Set([1, total])
  for (let p = Math.max(1, cur - 1); p <= Math.min(total, cur + 1); p++) {
    show.add(p)
  }

  const sorted = [...show].sort((a, b) => a - b)
  const result = []
  let prev = 0

  for (const p of sorted) {
    const gap = p - prev
    if (gap > 2) {
      result.push(prev === 0 ? 'ellipsis-start' : `ellipsis-${prev}-${p}`)
    } else if (gap === 2) {
      result.push(prev + 1)
    }
    result.push(p)
    prev = p
  }

  return result
})

function go(p) {
  const clamped = Math.max(1, Math.min(totalPages.value, p))
  if (clamped !== props.page) emit('update:page', clamped)
}

function onSizeChange(event) {
  const newSize = Number(event.target.value)
  // Keep roughly the same position in the dataset
  const firstRow   = (props.page - 1) * props.pageSize
  const newPage    = Math.max(1, Math.floor(firstRow / newSize) + 1)
  emit('update:pageSize', newSize)
  emit('update:page', newPage)
}
</script>

<style scoped>
.lv-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-6);
  flex-wrap: wrap;
  font-family: var(--font-sans);
}

/* ── Summary ── */
.lv-pagination__summary {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  white-space: nowrap;
}

/* ── Controls row ── */
.lv-pagination__controls {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
}

/* ── Page-size selector ── */
.lv-pagination__size {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-right: var(--space-3);
}

.lv-pagination__size-label {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  white-space: nowrap;
}

.lv-pagination__select {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--text-primary);
  background-color: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-1) var(--space-2);
  cursor: pointer;
  appearance: auto;
}

.lv-pagination__select:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* ── Buttons ── */
.lv-pagination__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  padding: 0 var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  background: none;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition:
    background-color var(--duration-fast) var(--ease-in-out),
    color var(--duration-fast) var(--ease-in-out),
    border-color var(--duration-fast) var(--ease-in-out);
}

.lv-pagination__btn:hover:not(:disabled) {
  background-color: var(--color-slate-100);
  color: var(--text-primary);
}

.lv-pagination__btn:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

.lv-pagination__btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

/* Active page */
.lv-pagination__btn--active {
  background-color: var(--brand-primary);
  color: var(--text-inverse);
  border-color: var(--brand-primary);
}

.lv-pagination__btn--active:hover:not(:disabled) {
  background-color: var(--brand-primary-hover);
  border-color: var(--brand-primary-hover);
  color: var(--text-inverse);
}

/* ── Ellipsis ── */
.lv-pagination__ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  user-select: none;
}
</style>
