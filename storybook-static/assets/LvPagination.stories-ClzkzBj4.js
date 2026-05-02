import{L as a}from"./LvPagination-BTmZVLXv.js";import"./iframe-fzFKqeWd.js";import"./preload-helper-C1FmrZbK.js";import"./LvBaseIcon-Cfre48RC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={title:"Data/Pagination",component:a,tags:["autodocs"],argTypes:{page:{control:{type:"number",min:1}},pageSize:{control:{type:"number",min:1}},totalRows:{control:{type:"number",min:0}},showPageSize:{control:"boolean"},pageSizeOptions:{control:"object"},ariaLabel:{control:"text"}},parameters:{docs:{description:{component:'\n**LvPagination** — Standalone accessible paginator.\n\n- Ellipsis windowing: always shows first, last, current ± 1 pages\n- `v-model:page` and `v-model:pageSize` for two-way binding\n- Resetting to a sensible page when page size changes\n- Can be used standalone or is automatically embedded inside `LvTable` when `paginate` is set\n\n**Accessibility**\n- `<nav aria-label="…">` landmark\n- Active page has `aria-current="page"`\n- Disabled prev/next are `disabled` (not just visually)\n- Live region on the summary updates screen readers on page change\n        '}}}},n={render:e=>({components:{LvPagination:a},data(){return{page:e.page,pageSize:e.pageSize}},setup(){return{args:e}},template:`
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <LvPagination
          v-bind="args"
          :page="page"
          :page-size="pageSize"
          @update:page="page = $event"
          @update:page-size="pageSize = $event"
        />
      </div>
    `}),args:{page:1,pageSize:10,totalRows:243,showPageSize:!0,pageSizeOptions:[10,25,50,100]}},r={name:"Few Pages (≤ 7)",render:e=>({components:{LvPagination:a},data(){return{page:1,pageSize:25}},setup(){return{args:e}},template:`
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <LvPagination v-bind="args" :page="page" :page-size="pageSize"
          @update:page="page = $event" @update:page-size="pageSize = $event" />
      </div>
    `}),args:{page:2,pageSize:25,totalRows:120,showPageSize:!1}},s={name:"Mid-page Ellipsis",render:e=>({components:{LvPagination:a},data(){return{page:e.page,pageSize:e.pageSize}},setup(){return{args:e}},template:`
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <LvPagination v-bind="args" :page="page" :page-size="pageSize"
          @update:page="page = $event" @update:page-size="pageSize = $event" />
      </div>
    `}),args:{page:8,pageSize:10,totalRows:500,showPageSize:!0}},t={name:"Last Page",render:e=>({components:{LvPagination:a},data(){return{page:e.page,pageSize:e.pageSize}},setup(){return{args:e}},template:`
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <LvPagination v-bind="args" :page="page" :page-size="pageSize"
          @update:page="page = $event" @update:page-size="pageSize = $event" />
      </div>
    `}),args:{page:25,pageSize:10,totalRows:243,showPageSize:!0}},i={name:"No Results",render:e=>({components:{LvPagination:a},setup(){return{args:e}},template:`
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <LvPagination v-bind="args" :page="1" :page-size="10" />
      </div>
    `}),args:{totalRows:0,showPageSize:!1}};var g,o,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvPagination
    },
    data() {
      return {
        page: args.page,
        pageSize: args.pageSize
      };
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <LvPagination
          v-bind="args"
          :page="page"
          :page-size="pageSize"
          @update:page="page = $event"
          @update:page-size="pageSize = $event"
        />
      </div>
    \`
  }),
  args: {
    page: 1,
    pageSize: 10,
    totalRows: 243,
    showPageSize: true,
    pageSizeOptions: [10, 25, 50, 100]
  }
}`,...(p=(o=n.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var d,u,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Few Pages (≤ 7)',
  render: args => ({
    components: {
      LvPagination
    },
    data() {
      return {
        page: 1,
        pageSize: 25
      };
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <LvPagination v-bind="args" :page="page" :page-size="pageSize"
          @update:page="page = $event" @update:page-size="pageSize = $event" />
      </div>
    \`
  }),
  args: {
    page: 2,
    pageSize: 25,
    totalRows: 120,
    showPageSize: false
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var v,c,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Mid-page Ellipsis',
  render: args => ({
    components: {
      LvPagination
    },
    data() {
      return {
        page: args.page,
        pageSize: args.pageSize
      };
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <LvPagination v-bind="args" :page="page" :page-size="pageSize"
          @update:page="page = $event" @update:page-size="pageSize = $event" />
      </div>
    \`
  }),
  args: {
    page: 8,
    pageSize: 10,
    totalRows: 500,
    showPageSize: true
  }
}`,...(b=(c=s.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var z,m,S;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Last Page',
  render: args => ({
    components: {
      LvPagination
    },
    data() {
      return {
        page: args.page,
        pageSize: args.pageSize
      };
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <LvPagination v-bind="args" :page="page" :page-size="pageSize"
          @update:page="page = $event" @update:page-size="pageSize = $event" />
      </div>
    \`
  }),
  args: {
    page: 25,
    pageSize: 10,
    totalRows: 243,
    showPageSize: true
  }
}`,...(S=(m=t.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var w,P,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'No Results',
  render: args => ({
    components: {
      LvPagination
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden;">
        <LvPagination v-bind="args" :page="1" :page-size="10" />
      </div>
    \`
  }),
  args: {
    totalRows: 0,
    showPageSize: false
  }
}`,...(f=(P=i.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};const k=["Default","FewPages","MidPageEllipsis","LastPage","NoResults"];export{n as Default,r as FewPages,t as LastPage,s as MidPageEllipsis,i as NoResults,k as __namedExportsOrder,x as default};
