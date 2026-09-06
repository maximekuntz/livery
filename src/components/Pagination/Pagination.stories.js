import Pagination from './Pagination.vue'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    page:            { control: { type: 'number', min: 1 } },
    pageSize:        { control: { type: 'number', min: 1 } },
    totalRows:       { control: { type: 'number', min: 0 } },
    showPageSize:    { control: 'boolean' },
    pageSizeOptions: { control: 'object' },
    ariaLabel:       { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
**Pagination** — Standalone accessible paginator.

- Ellipsis windowing: always shows first, last, current ± 1 pages
- \`v-model:page\` and \`v-model:pageSize\` for two-way binding
- Resetting to a sensible page when page size changes
- Can be used standalone or is automatically embedded inside \`Table\` when \`paginate\` is set

**Accessibility**
- \`<nav aria-label="…">\` landmark
- Active page has \`aria-current="page"\`
- Disabled prev/next are \`disabled\` (not just visually)
- Live region on the summary updates screen readers on page change
        `,
      },
    },
  },
}

export const Default = {
  render: (args) => ({
    components: { Pagination },
    data() { return { page: args.page, pageSize: args.pageSize } },
    setup() { return { args } },
    template: `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <Pagination
          v-bind="args"
          :page="page"
          :page-size="pageSize"
          @update:page="page = $event"
          @update:page-size="pageSize = $event"
        />
      </div>
    `,
  }),
  args: {
    page: 1,
    pageSize: 10,
    totalRows: 243,
    showPageSize: true,
    pageSizeOptions: [10, 25, 50, 100],
  },
}

export const FewPages = {
  name: 'Few Pages (≤ 7)',
  render: (args) => ({
    components: { Pagination },
    data() { return { page: 1, pageSize: 25 } },
    setup() { return { args } },
    template: `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <Pagination v-bind="args" :page="page" :page-size="pageSize"
          @update:page="page = $event" @update:page-size="pageSize = $event" />
      </div>
    `,
  }),
  args: { page: 2, pageSize: 25, totalRows: 120, showPageSize: false },
}

export const MidPageEllipsis = {
  name: 'Mid-page Ellipsis',
  render: (args) => ({
    components: { Pagination },
    data() { return { page: args.page, pageSize: args.pageSize } },
    setup() { return { args } },
    template: `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <Pagination v-bind="args" :page="page" :page-size="pageSize"
          @update:page="page = $event" @update:page-size="pageSize = $event" />
      </div>
    `,
  }),
  args: { page: 8, pageSize: 10, totalRows: 500, showPageSize: true },
}

export const LastPage = {
  render: (args) => ({
    components: { Pagination },
    data() { return { page: args.page, pageSize: args.pageSize } },
    setup() { return { args } },
    template: `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <Pagination v-bind="args" :page="page" :page-size="pageSize"
          @update:page="page = $event" @update:page-size="pageSize = $event" />
      </div>
    `,
  }),
  args: { page: 25, pageSize: 10, totalRows: 243, showPageSize: true },
}

export const NoResults = {
  render: (args) => ({
    components: { Pagination },
    setup() { return { args } },
    template: `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <Pagination v-bind="args" :page="1" :page-size="10" />
      </div>
    `,
  }),
  args: { totalRows: 0, showPageSize: false },
}
