import Table from './Table.vue'
import BaseBadge from '../BaseBadge/BaseBadge.vue'
import Button from '../Button/Button.vue'

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    loading:          { control: 'boolean' },
    striped:          { control: 'boolean' },
    dense:            { control: 'boolean' },
    bordered:         { control: 'boolean' },
    selectable:       { control: 'boolean' },
    paginate:         { control: 'boolean' },
    showPageSize:     { control: 'boolean' },
    pageSize:         { control: { type: 'number', min: 1, max: 100 } },
    skeletonRows:     { control: { type: 'number', min: 1, max: 20 } },
    emptyText:        { control: 'text' },
    caption:          { control: 'text' },
    captionIcon:      { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
**Table** — Accessible, sortable data table for structured content.

- Optional \`captionIcon\` renders a leading icon in the visible table caption
- Column definitions can include an optional \`icon\` name to render a leading header icon
- Sortable columns with \`aria-sort\` — sorting is UI-only; emit \`sort\` to apply it externally
- Scoped slot \`cell(key)\` for custom cell rendering per column
- \`loading\` shows animated skeleton rows; \`empty\` slot for zero-state
- \`selectable\` rows are keyboard navigable with \`aria-selected\`
- \`striped\`, \`dense\`, and \`bordered\` visual modifiers

**Accessibility**
- \`<table>\` with \`aria-labelledby\` pointing to the caption
- Column headers use \`scope="col"\` and \`aria-sort\` for sortable columns
- Clickable rows have \`tabindex="0"\` with \`Enter\`/\`Space\` keyboard support
        `,
      },
    },
  },
}

/* ── Shared fixtures ── */
const COLUMNS = [
  { key: 'service', label: 'Service', icon: 'menu', sortable: true },
  { key: 'origin',  label: 'Origin',  icon: 'arrow-left', sortable: true },
  { key: 'destination', label: 'Destination', icon: 'arrow-right' },
  { key: 'departs', label: 'Departs', icon: 'clock', sortable: true, align: 'right' },
  { key: 'status',  label: 'Status', icon: 'info', align: 'center' },
]

const ROWS = [
  { id: 1, service: '1A42', origin: 'Leeds',      destination: 'Manchester Piccadilly', departs: '07:42', status: 'On Time' },
  { id: 2, service: '2B18', origin: 'Sheffield',  destination: 'York',                  departs: '08:05', status: 'Delayed' },
  { id: 3, service: '3C09', origin: 'Manchester', destination: 'Liverpool Lime Street',  departs: '08:20', status: 'On Time' },
  { id: 4, service: '4D55', origin: 'York',       destination: 'Leeds',                 departs: '09:00', status: 'Cancelled' },
  { id: 5, service: '5E31', origin: 'Liverpool',  destination: 'Sheffield',             departs: '09:15', status: 'On Time' },
]

const STATUS_VARIANT = { 'On Time': 'success', 'Delayed': 'warning', 'Cancelled': 'danger' }

/* ─────────────────────────────────────────────────────────── */

export const Default = {
  render: (args) => ({
    components: { Table },
    setup() { return { args, COLUMNS, ROWS } },
    template: `
      <Table v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Northern Network — Live Departures" />
    `,
  }),
  args: {
    captionIcon: 'calendar',
    striped: false,
    dense: false,
    bordered: false,
    loading: false,
  },
}

export const CustomCells = {
  name: 'Custom Cells',
  render: (args) => ({
    components: { Table, BaseBadge },
    setup() { return { args, COLUMNS, ROWS, STATUS_VARIANT } },
    template: `
      <Table v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Northern Network — Live Departures">
        <template #cell(status)="{ value }">
          <BaseBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill :label="value" />
        </template>
        <template #cell(departs)="{ value }">
          <span style="font-family: var(--font-mono); font-variant-numeric: tabular-nums;">{{ value }}</span>
        </template>
      </Table>
    `,
  }),
  args: { striped: true },
}

export const Sortable = {
  render: (args) => ({
    components: { Table, BaseBadge },
    setup() {
      const { ref, computed } = window.Vue ?? {}
      // Storybook renders in browser — use Vue from the global
      return { args, COLUMNS, ROWS, STATUS_VARIANT }
    },
    data() {
      return { sortKey: null, sortDir: 'asc' }
    },
    computed: {
      sortedRows() {
        if (!this.sortKey) return ROWS
        return [...ROWS].sort((a, b) => {
          const va = a[this.sortKey] ?? ''
          const vb = b[this.sortKey] ?? ''
          const cmp = String(va).localeCompare(String(vb))
          return this.sortDir === 'asc' ? cmp : -cmp
        })
      },
    },
    methods: {
      onSort({ key, dir }) {
        this.sortKey = key
        this.sortDir = dir
      },
    },
    template: `
      <Table
        v-bind="args"
        :columns="COLUMNS"
        :rows="sortedRows"
        caption="Sorted Departures"
        @sort="onSort"
      >
        <template #cell(status)="{ value }">
          <BaseBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill :label="value" />
        </template>
      </Table>
    `,
  }),
  args: {},
}

export const Loading = {
  render: (args) => ({
    components: { Table },
    setup() { return { args, COLUMNS } },
    template: `<Table v-bind="args" :columns="COLUMNS" :rows="[]" caption="Loading state" />`,
  }),
  args: { loading: true, skeletonRows: 6 },
}

export const Empty = {
  render: (args) => ({
    components: { Table },
    setup() { return { args, COLUMNS } },
    template: `
      <Table v-bind="args" :columns="COLUMNS" :rows="[]" caption="No results">
        <template #empty>
          <div style="text-align:center; padding: 0.5rem 0;">
            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🚉</div>
            <p style="color: var(--text-secondary); margin:0; font-size: var(--text-sm);">No services found for this route.</p>
          </div>
        </template>
      </Table>
    `,
  }),
  args: {},
}

export const Dense = {
  render: (args) => ({
    components: { Table, BaseBadge },
    setup() { return { args, COLUMNS, ROWS, STATUS_VARIANT } },
    template: `
      <Table v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Dense table">
        <template #cell(status)="{ value }">
          <BaseBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill :label="value" />
        </template>
      </Table>
    `,
  }),
  args: { dense: true },
}

export const WithFooter = {
  name: 'With Footer',
  render: (args) => ({
    components: { Table, BaseBadge },
    setup() { return { args, COLUMNS, ROWS, STATUS_VARIANT } },
    template: `
      <Table v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Departures with footer">
        <template #cell(status)="{ value }">
          <BaseBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill :label="value" />
        </template>
        <template #footer>
          Showing {{ ROWS.length }} of {{ ROWS.length }} services
        </template>
      </Table>
    `,
  }),
  args: { striped: true },
}

export const Selectable = {
  render: (args) => ({
    components: { Table, BaseBadge },
    data() {
      return { selectedId: null }
    },
    setup() { return { args, COLUMNS, ROWS, STATUS_VARIANT } },
    template: `
      <div>
        <Table
          v-bind="args"
          :columns="COLUMNS"
          :rows="ROWS"
          caption="Click a row to select it"
          row-key="id"
          :selectable="true"
          :selected="selectedId"
          :on-row-click="(row) => selectedId = row.id"
        >
          <template #cell(status)="{ value }">
            <BaseBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill :label="value" />
          </template>
        </Table>
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Selected service ID: <strong>{{ selectedId ?? 'none' }}</strong>
        </p>
      </div>
    `,
  }),
  args: {},
}

/* ── Pagination fixture — 40 rows ── */
const MANY_ROWS = Array.from({ length: 40 }, (_, i) => ({
  id:          i + 1,
  service:     `${String.fromCharCode(65 + (i % 5))}${String(i + 1).padStart(3, '0')}`,
  origin:      ['Leeds', 'Sheffield', 'Manchester', 'York', 'Liverpool'][i % 5],
  destination: ['Manchester Piccadilly', 'York', 'Liverpool Lime Street', 'Leeds', 'Sheffield'][i % 5],
  departs:     `${String(7 + Math.floor(i / 4)).padStart(2, '0')}:${String((i % 4) * 15).padStart(2, '0')}`,
  status:      ['On Time', 'On Time', 'Delayed', 'On Time', 'Cancelled'][i % 5],
}))

export const ClientSidePagination = {
  name: 'Client-Side Pagination',
  render: (args) => ({
    components: { Table, BaseBadge },
    setup() { return { args, COLUMNS, MANY_ROWS, STATUS_VARIANT } },
    template: `
      <Table
        v-bind="args"
        :columns="COLUMNS"
        :rows="MANY_ROWS"
        caption="All Departures (40 rows, paginated client-side)"
        :paginate="true"
        :page-size="5"
      >
        <template #cell(status)="{ value }">
          <BaseBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill :label="value" />
        </template>
        <template #cell(departs)="{ value }">
          <span style="font-family: var(--font-mono); font-variant-numeric: tabular-nums;">{{ value }}</span>
        </template>
      </Table>
    `,
  }),
  args: { striped: true },
}

export const ServerSidePagination = {
  name: 'Server-Side Pagination',
  render: (args) => ({
    components: { Table, BaseBadge },
    data() {
      return {
        page: 1,
        pageSize: 5,
        allRows: MANY_ROWS,
      }
    },
    computed: {
      pagedRows() {
        const start = (this.page - 1) * this.pageSize
        return this.allRows.slice(start, start + this.pageSize)
      },
    },
    setup() { return { args, COLUMNS, STATUS_VARIANT } },
    template: `
      <div>
        <Table
          v-bind="args"
          :columns="COLUMNS"
          :rows="pagedRows"
          caption="Server-Side Pagination (simulated)"
          :paginate="true"
          :total-rows="allRows.length"
          :page="page"
          :page-size="pageSize"
          @update:page="page = $event"
          @update:page-size="pageSize = $event"
        >
          <template #cell(status)="{ value }">
            <BaseBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill :label="value" />
          </template>
          <template #cell(departs)="{ value }">
            <span style="font-family: var(--font-mono); font-variant-numeric: tabular-nums;">{{ value }}</span>
          </template>
        </Table>
        <p style="margin-top:0.75rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Page <strong>{{ page }}</strong> · Page size <strong>{{ pageSize }}</strong>
          (in a real app, page/size changes would trigger an API call)
        </p>
      </div>
    `,
  }),
  args: {},
}
