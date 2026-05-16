<template>
  <div :class="wrapperClasses">
    <!-- Optional caption / toolbar above the table -->
    <div v-if="$slots.toolbar || caption" class="lv-table__toolbar">
      <p v-if="caption" class="lv-table__caption-text" :id="captionId">
        <BaseIcon
          v-if="captionIcon"
          class="lv-table__caption-icon"
          :name="captionIcon"
          size="sm"
          aria-hidden="true"
        />
        <span>{{ caption }}</span>
      </p>
      <slot name="toolbar" />
    </div>

    <!-- Scroll container -->
    <div class="lv-table__scroll">
      <table
        class="lv-table"
        :aria-labelledby="caption ? captionId : undefined"
        :aria-describedby="$slots.footer ? footerId : undefined"
      >
        <!-- Head -->
        <thead v-if="columns.length" class="lv-table__head">
          <tr>
            <th
              v-for="col in columns"
              :key="col.key"
              scope="col"
              :class="[
                'lv-table__th',
                col.align ? `lv-table__cell--${col.align}` : '',
                col.sortable ? 'lv-table__th--sortable' : '',
                sortKey === col.key ? 'lv-table__th--sorted' : '',
              ]"
              :style="col.width ? { width: col.width } : undefined"
              :aria-sort="col.sortable ? (sortKey === col.key ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none') : undefined"
              @click="col.sortable ? handleSort(col.key) : undefined"
            >
              <span class="lv-table__th-content">
                <BaseIcon
                  v-if="col.icon"
                  :name="col.icon"
                  size="xs"
                  aria-hidden="true"
                />
                {{ col.label }}
                <span v-if="col.sortable" class="lv-table__sort-icon" aria-hidden="true">
                  <BaseIcon
                    :name="sortKey === col.key && sortDir === 'asc' ? 'chevron-up' : 'chevron-down'"
                    size="xs"
                  />
                </span>
              </span>
            </th>
          </tr>
        </thead>

        <!-- Body -->
        <tbody class="lv-table__body">
          <!-- Loading skeleton rows -->
          <template v-if="loading">
            <tr v-for="n in skeletonRows" :key="`skeleton-${n}`" class="lv-table__row lv-table__row--skeleton">
              <td v-for="col in columns" :key="col.key" class="lv-table__td">
                <span class="lv-table__skeleton-cell" />
              </td>
            </tr>
          </template>

          <!-- Empty state -->
          <template v-else-if="!rows.length">
            <tr class="lv-table__row lv-table__row--empty">
              <td :colspan="columns.length || 1" class="lv-table__td lv-table__empty-cell">
                <slot name="empty">
                  <span class="lv-table__empty-text">{{ emptyText }}</span>
                </slot>
              </td>
            </tr>
          </template>

          <!-- Data rows -->
          <template v-else>
            <tr
              v-for="(row, rowIndex) in displayedRows"
              :key="row[rowKey] ?? rowIndex"
              :class="[
                'lv-table__row',
                { 'lv-table__row--clickable': !!onRowClick },
                { 'lv-table__row--selected': isSelected(row) },
                { 'lv-table__row--striped': striped && rowIndex % 2 !== 0 },
              ]"
              :tabindex="onRowClick ? 0 : undefined"
              :aria-selected="selectable ? isSelected(row) : undefined"
              @click="onRowClick?.(row, rowIndex)"
              @keydown.enter="onRowClick?.(row, rowIndex)"
              @keydown.space.prevent="onRowClick?.(row, rowIndex)"
            >
              <td
                v-for="col in columns"
                :key="col.key"
                :class="[
                  'lv-table__td',
                  col.align ? `lv-table__cell--${col.align}` : '',
                ]"
              >
                <!-- Scoped slot per column, fallback to raw value -->
                <slot :name="`cell(${col.key})`" :value="row[col.key]" :row="row" :index="rowIndex">
                  {{ row[col.key] ?? '—' }}
                </slot>
              </td>
            </tr>
          </template>
        </tbody>

        <!-- Optional foot for totals / summaries -->
        <tfoot v-if="$slots.footer" class="lv-table__foot">
          <tr>
            <td :colspan="columns.length || 1" class="lv-table__td" :id="footerId">
              <slot name="footer" />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Pagination bar -->
    <div v-if="paginate" class="lv-table__pagination-bar">
      <Pagination
        :page="currentPage"
        :page-size="currentPageSize"
        :total-rows="effectiveTotalRows"
        :page-size-options="pageSizeOptions"
        :show-page-size="showPageSize"
        @update:page="onPageChange"
        @update:page-size="onPageSizeChange"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'
import Pagination from '../Pagination/Pagination.vue'

/**
 * Table — Accessible, sortable data table.
 *
 * Column definition shape:
 * ```js
 * { key: 'name', label: 'Name', icon: 'calendar', sortable: true, align: 'left', width: '200px' }
 * ```
 *
 * Slots:
 *   toolbar          — content above the table (search, filters)
 *   `cell(key)`      — scoped slot per column; receives `{ value, row, index }`
 *   empty            — replaces the default "No data" message
 *   footer           — tfoot row (column totals, summaries)
 *
 * Pagination:
 *   Set `paginate` to enable. Client-side by default — the table slices `rows`
 *   automatically. Pass `totalRows` to enable server-side mode where the table
 *   renders `rows` as-is and emits `update:page` / `update:pageSize` for you to
 *   fetch the next page.
 */
const props = defineProps({
  /** Column definitions */
  columns: {
    type: Array,
    default: () => [],
  },
  /** Row data — each item should have a unique key field */
  rows: {
    type: Array,
    default: () => [],
  },
  /** Property name to use as the row's unique key */
  rowKey: {
    type: String,
    default: 'id',
  },
  /** Accessible caption / visible table title */
  caption: {
    type: String,
    default: undefined,
  },
  /** Optional icon rendered before the caption */
  captionIcon: {
    type: String,
    default: undefined,
  },
  /** Show loading skeleton rows */
  loading: {
    type: Boolean,
    default: false,
  },
  /** Number of skeleton rows to render while loading */
  skeletonRows: {
    type: Number,
    default: 5,
  },
  /** Text shown when rows is empty */
  emptyText: {
    type: String,
    default: 'No data to display.',
  },
  /** Alternate row background */
  striped: {
    type: Boolean,
    default: false,
  },
  /** Reduce cell padding */
  dense: {
    type: Boolean,
    default: false,
  },
  /** Draw borders between all cells */
  bordered: {
    type: Boolean,
    default: false,
  },
  /** Row is keyboard/click navigable — emit row-click */
  selectable: {
    type: Boolean,
    default: false,
  },
  /** Currently selected row key value(s) — single value or array */
  selected: {
    type: [String, Number, Array],
    default: undefined,
  },
  /** Called when a row is clicked — (row, index) => void */
  onRowClick: {
    type: Function,
    default: undefined,
  },
  // ── Pagination ────────────────────────────────────────────────────────────
  /** Enable pagination. Client-side when `totalRows` is omitted. */
  paginate: {
    type: Boolean,
    default: false,
  },
  /** Current page (1-based). Use v-model:page for two-way binding. */
  page: {
    type: Number,
    default: 1,
  },
  /** Rows per page */
  pageSize: {
    type: Number,
    default: 10,
  },
  /** Page-size dropdown options */
  pageSizeOptions: {
    type: Array,
    default: () => [10, 25, 50, 100],
  },
  /** Show the rows-per-page selector inside the pagination bar */
  showPageSize: {
    type: Boolean,
    default: true,
  },
  /**
   * Total row count for server-side pagination.
   * When provided the table renders `rows` as-is and emits page/size changes
   * for the consumer to handle. When omitted, the table slices `rows` itself.
   */
  totalRows: {
    type: Number,
    default: undefined,
  },
})

const emit = defineEmits([
  /** { key, dir: 'asc' | 'desc' } */
  'sort',
  /** row object */
  'row-click',
  /** new page number */
  'update:page',
  /** new page size */
  'update:pageSize',
])

/* ── IDs for ARIA ── */
const uid       = Math.random().toString(36).slice(2, 7)
const captionId = `lv-table-caption-${uid}`
const footerId  = `lv-table-footer-${uid}`

/* ── Pagination state ── */
const currentPage     = ref(props.page)
const currentPageSize = ref(props.pageSize)

watch(() => props.page,     (v) => { currentPage.value = v })
watch(() => props.pageSize, (v) => { currentPageSize.value = v })

const effectiveTotalRows = computed(() =>
  props.totalRows !== undefined ? props.totalRows : props.rows.length
)

function onPageChange(p) {
  currentPage.value = p
  emit('update:page', p)
}

function onPageSizeChange(size) {
  currentPageSize.value = size
  // Reset to page 1 when page size changes
  currentPage.value = 1
  emit('update:pageSize', size)
  emit('update:page', 1)
}

/* ── Sort state ── */
const sortKey = ref(null)
const sortDir = ref('asc')

function handleSort(key) {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDir.value = 'asc'
  }
  emit('sort', { key: sortKey.value, dir: sortDir.value })
}

/* ── Selection ── */
function isSelected(row) {
  if (!props.selected) return false
  const val = row[props.rowKey]
  return Array.isArray(props.selected)
    ? props.selected.includes(val)
    : props.selected === val
}

/**
 * Rows to actually render — sliced for client-side pagination,
 * or the raw prop in server-side / no-pagination modes.
 */
const displayedRows = computed(() => {
  if (!props.paginate || props.totalRows !== undefined) return props.rows
  const start = (currentPage.value - 1) * currentPageSize.value
  return props.rows.slice(start, start + currentPageSize.value)
})

/* ── Root classes ── */
const wrapperClasses = computed(() => [
  'lv-table-wrapper',
  { 'lv-table-wrapper--bordered': props.bordered },
  { 'lv-table-wrapper--dense': props.dense },
  { 'lv-table-wrapper--striped': props.striped },
])
</script>

<style scoped>
/* ── Wrapper ── */
.lv-table-wrapper {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  font-family: var(--font-sans);
}

/* ── Toolbar ── */
.lv-table__toolbar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--border-subtle);
}

.lv-table__caption-text {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin: 0;
  flex: 1;
}

.lv-table__caption-icon {
  color: var(--text-secondary);
  flex: 0 0 auto;
}

/* ── Scroll container ── */
.lv-table__scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* ── Table ── */
.lv-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);
  color: var(--text-primary);
}

/* ── Head ── */
.lv-table__head {
  background-color: var(--color-slate-50);
  border-bottom: 2px solid var(--border-default);
}

.lv-table__th {
  padding: var(--space-3) var(--space-4);
  text-align: left;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--text-secondary);
  white-space: nowrap;
  border-bottom: none;
  user-select: none;
}

.lv-table__th--sortable {
  cursor: pointer;
}

.lv-table__th--sortable:hover {
  color: var(--text-primary);
  background-color: var(--color-slate-100);
}

.lv-table__th--sorted {
  color: var(--text-primary);
}

.lv-table__th-content {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
}

.lv-table__sort-icon {
  opacity: 0.4;
  transition: opacity var(--duration-fast) var(--ease-in-out);
}

.lv-table__th--sorted .lv-table__sort-icon {
  opacity: 1;
}

/* ── Body ── */
.lv-table__body .lv-table__row {
  border-bottom: 1px solid var(--border-subtle);
  transition: background-color var(--duration-fast) var(--ease-in-out);
}

.lv-table__body .lv-table__row:last-child {
  border-bottom: none;
}

/* Striped */
.lv-table__row--striped {
  background-color: var(--color-slate-50);
}

/* Clickable / selectable row */
.lv-table__row--clickable {
  cursor: pointer;
}

.lv-table__row--clickable:hover {
  background-color: var(--color-blue-50);
}

.lv-table__row--clickable:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: -2px;
}

.lv-table__row--selected {
  background-color: var(--color-blue-50) !important;
}

.lv-table__row--selected td:first-child {
  border-left: 3px solid var(--brand-primary);
}

/* ── Cells ── */
.lv-table__td {
  padding: var(--space-3) var(--space-4);
  vertical-align: middle;
  color: var(--text-primary);
}

.lv-table-wrapper--dense .lv-table__th,
.lv-table-wrapper--dense .lv-table__td {
  padding: var(--space-2) var(--space-3);
}

/* Alignment */
.lv-table__cell--left   { text-align: left; }
.lv-table__cell--center { text-align: center; }
.lv-table__cell--right  { text-align: right; }

/* Bordered variant */
.lv-table-wrapper--bordered .lv-table__th,
.lv-table-wrapper--bordered .lv-table__td {
  border: 1px solid var(--border-subtle);
}

/* ── Empty state ── */
.lv-table__empty-cell {
  text-align: center;
  padding: var(--space-12) var(--space-6);
}

.lv-table__empty-text {
  color: var(--text-secondary);
  font-size: var(--text-sm);
}

/* ── Loading skeleton ── */
.lv-table__skeleton-cell {
  display: block;
  height: 0.875rem;
  border-radius: var(--radius-md);
  background: linear-gradient(
    90deg,
    var(--color-slate-100) 25%,
    var(--color-slate-200) 50%,
    var(--color-slate-100) 75%
  );
  background-size: 200% 100%;
  animation: lv-skeleton-shimmer 1.4s ease-in-out infinite;
  width: 75%;
}

@keyframes lv-skeleton-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ── Foot ── */
.lv-table__foot .lv-table__td {
  padding: var(--space-3) var(--space-6);
  border-top: 1px solid var(--border-subtle);
  background-color: var(--color-slate-50);
  color: var(--text-secondary);
  font-size: var(--text-sm);
}

/* ── Pagination bar ── */
.lv-table__pagination-bar {
  border-top: 1px solid var(--border-subtle);
  background-color: var(--color-slate-50);
}
</style>
