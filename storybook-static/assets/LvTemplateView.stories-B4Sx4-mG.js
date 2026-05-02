import{d as i,i as d,f as l,e as y,n as R,h as $,E as D,o as s}from"./iframe-fzFKqeWd.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{L as r}from"./LvPageHeader-BBwlCpyo.js";import{L as M}from"./LvButton-srXpjCBU.js";import{L as E}from"./LvBadge-BaKnQZ2B.js";import{L as N}from"./LvSectionHeader-9qVIGEoy.js";import"./preload-helper-C1FmrZbK.js";const G={key:0,class:"lv-template-view__chrome"},j={key:0,class:"lv-template-view__header"},U={key:1,class:"lv-template-view__toolbar"},q={class:"lv-template-view__body"},J={class:"lv-template-view__main",tabindex:"-1"},K=["aria-label"],h={__name:"LvTemplateView",props:{padding:{type:Boolean,default:!0},maxWidth:{type:String,default:"none"},asideWidth:{type:String,default:"320px"},stickyChrome:{type:Boolean,default:!1},asidePosition:{type:String,default:"right",validator:e=>["left","right"].includes(e)},asideLabel:{type:String,default:"Side panel"}},setup(e){D(t=>({ed6135fe:e.maxWidth,v034f1426:e.asideWidth}));const o=e,O=$(()=>({"lv-template-view--padded":o.padding,"lv-template-view--constrained":o.maxWidth!=="none","lv-template-view--sticky-chrome":o.stickyChrome,"lv-template-view--aside-left":o.asidePosition==="left"}));return(t,Q)=>(s(),i("div",{class:R(["lv-template-view",O.value])},[t.$slots.header||t.$slots.toolbar?(s(),i("div",G,[t.$slots.header?(s(),i("div",j,[d(t.$slots,"header",{},void 0,!0)])):l("",!0),t.$slots.toolbar?(s(),i("div",U,[d(t.$slots,"toolbar",{},void 0,!0)])):l("",!0)])):l("",!0),y("div",q,[y("main",J,[d(t.$slots,"default",{},void 0,!0)]),t.$slots.aside?(s(),i("aside",{key:0,class:"lv-template-view__aside","aria-label":e.asideLabel},[d(t.$slots,"aside",{},void 0,!0)],8,K)):l("",!0)])],2))}},a=I(h,[["__scopeId","data-v-c61f7877"]]);h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:"default",displayName:"LvTemplateView",description:"",tags:{},props:[{name:"padding",description:"Adds standard horizontal padding (`--space-6`) to all zones.\nSet to `false` for full-bleed content such as data tables.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"maxWidth",description:"Maximum width of the entire view. Use to constrain wide viewports.\nAccepts any valid CSS length (`1280px`, `90ch`, etc.)\nor `'none'` for full-width.",type:{name:"string"},defaultValue:{func:!1,value:"'none'"}},{name:"asideWidth",description:"Width of the aside panel. Accepts any valid CSS length.",type:{name:"string"},defaultValue:{func:!1,value:"'320px'"}},{name:"stickyChrome",description:"Stick the header + toolbar chrome to the top of the scroll container.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"asidePosition",description:"Which side the aside panel appears on.",type:{name:"string"},defaultValue:{func:!1,value:"'right'"},values:["left","right"]},{name:"asideLabel",description:"Accessible label for the aside landmark element.",type:{name:"string"},defaultValue:{func:!1,value:"'Side panel'"}}],slots:[{name:"header"},{name:"toolbar"},{name:"default"},{name:"aside"}],sourceFiles:["/home/runner/work/livery/livery/src/components/layout/LvTemplateView/LvTemplateView.vue"]});const ne={title:"Layout/TemplateView",component:a,tags:["autodocs"],argTypes:{padding:{control:"boolean"},maxWidth:{control:"text"},asideWidth:{control:"text"},stickyChrome:{control:"boolean"},asidePosition:{control:"select",options:["left","right"]},asideLabel:{control:"text"}},parameters:{layout:"fullscreen",docs:{description:{component:`
**LvTemplateView** — Standard page-view layout shell.

Place this inside the content area of \`LvSidebarLayout\` or \`LvTopNavLayout\`
to give any page a consistent structure: header chrome, an optional toolbar,
a main content area, and an optional aside panel.

### Slots

| Slot | Purpose |
|---|---|
| \`header\` | Full-width header zone — compose \`LvPageHeader\` here |
| \`toolbar\` | Optional bar below the header: tabs, filters, bulk actions |
| \`default\` | Main scrollable page content |
| \`aside\` | Optional side panel alongside the main content |

### Composition

\`\`\`html
<LvSidebarLayout>
  <template #sidebar>…</template>

  <LvTemplateView>
    <template #header>
      <LvPageHeader eyebrow="Operations">Timetable</LvPageHeader>
    </template>
    <template #toolbar>
      <LvButton variant="ghost" size="sm">Filter</LvButton>
    </template>

    <!-- main content -->
  </LvTemplateView>
</LvSidebarLayout>
\`\`\`

**Accessibility**
- \`<main>\` receives \`tabindex="-1"\` for skip-link support
- \`<aside>\` has a configurable \`aria-label\` via the \`asideLabel\` prop
- Sticky chrome uses \`z-index: 100\` to stay above scrolling content
        `}}}},n={template:`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: var(--space-4);">
      <div
        v-for="(item, i) in items"
        :key="i"
        style="
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
        "
      >
        <div style="font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide); color: var(--text-tertiary); margin-bottom: var(--space-2);">
          {{ item.label }}
        </div>
        <div style="font-size: var(--text-2xl); font-weight: 700; color: var(--text-primary);">
          {{ item.value }}
        </div>
      </div>
    </div>
  `,data(){return{items:[{label:"Services today",value:"284"},{label:"On time",value:"91%"},{label:"Active incidents",value:"3"},{label:"Passengers",value:"48 k"}]}}},v={name:"Default",render:e=>({components:{LvTemplateView:a,LvPageHeader:r,FakeMetrics:n},setup(){return{args:e}},template:`
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Operations" subtitle="Live overview for the Northern Network.">
              Dashboard
            </LvPageHeader>
          </template>
          <FakeMetrics />
        </LvTemplateView>
      </div>
    `}),args:{padding:!0,maxWidth:"none",stickyChrome:!1}},p={name:"With Toolbar",render:e=>({components:{LvTemplateView:a,LvPageHeader:r,LvButton:M,LvBadge:E,FakeMetrics:n},setup(){return{args:e}},template:`
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Operations">Incidents</LvPageHeader>
          </template>
          <template #toolbar>
            <LvButton size="sm" variant="secondary">All</LvButton>
            <LvButton size="sm" variant="ghost">Active <LvBadge variant="danger" size="sm" style="margin-left: 4px;">3</LvBadge></LvButton>
            <LvButton size="sm" variant="ghost">Resolved</LvButton>
            <div style="margin-left: auto; display: flex; gap: var(--space-2);">
              <LvButton size="sm" variant="primary">Report incident</LvButton>
            </div>
          </template>
          <FakeMetrics />
        </LvTemplateView>
      </div>
    `}),args:{padding:!0,maxWidth:"none",stickyChrome:!1}},m={name:"With Aside",render:e=>({components:{LvTemplateView:a,LvPageHeader:r,LvSectionHeader:N,FakeMetrics:n},setup(){return{args:e}},template:`
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Routes" subtitle="Select a route to see details.">
              Route Map
            </LvPageHeader>
          </template>

          <FakeMetrics />

          <template #aside>
            <LvSectionHeader>Route details</LvSectionHeader>
            <dl style="font-size: var(--text-sm); display: flex; flex-direction: column; gap: var(--space-3); margin: var(--space-4) 0 0;">
              <div>
                <dt style="color: var(--text-tertiary); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Route</dt>
                <dd style="color: var(--text-primary); font-weight: 600; margin: 0;">Northern Line</dd>
              </div>
              <div>
                <dt style="color: var(--text-tertiary); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Status</dt>
                <dd style="color: var(--text-primary); margin: 0;">Good service</dd>
              </div>
              <div>
                <dt style="color: var(--text-tertiary); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Next departure</dt>
                <dd style="color: var(--text-primary); margin: 0; font-family: var(--font-mono);">07:42</dd>
              </div>
            </dl>
          </template>
        </LvTemplateView>
      </div>
    `}),args:{padding:!0,maxWidth:"none",asideWidth:"280px",asidePosition:"right",stickyChrome:!1}},c={name:"Aside Left",render:e=>({components:{LvTemplateView:a,LvPageHeader:r,LvSectionHeader:N,FakeMetrics:n},setup(){return{args:e}},template:`
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Network">Services</LvPageHeader>
          </template>

          <template #aside>
            <LvSectionHeader>Filters</LvSectionHeader>
            <p style="font-size: var(--text-sm); color: var(--text-secondary); margin: var(--space-3) 0 0;">
              Operator, line, date range…
            </p>
          </template>

          <FakeMetrics />
        </LvTemplateView>
      </div>
    `}),args:{padding:!0,maxWidth:"none",asideWidth:"240px",asidePosition:"left",stickyChrome:!1}},u={name:"Sticky Chrome",render:e=>({components:{LvTemplateView:a,LvPageHeader:r,LvButton:M,FakeMetrics:n},setup(){return{args:e}},template:`
      <div style="height: 300px; overflow-y: auto; background: var(--bg-page); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Operations" subtitle="Scroll down — the header stays pinned.">
              Sticky header demo
            </LvPageHeader>
          </template>
          <template #toolbar>
            <LvButton size="sm" variant="ghost">All</LvButton>
            <LvButton size="sm" variant="ghost">Active</LvButton>
          </template>
          <div style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div
              v-for="n in 12"
              :key="n"
              style="
                background: var(--bg-surface);
                border: 1px solid var(--border-subtle);
                border-radius: var(--radius-md);
                padding: var(--space-4);
                color: var(--text-secondary);
                font-size: var(--text-sm);
              "
            >
              Row {{ n }} — scroll to see the header stick
            </div>
          </div>
        </LvTemplateView>
      </div>
    `}),args:{padding:!0,stickyChrome:!0}},g={name:"Constrained Width",render:e=>({components:{LvTemplateView:a,LvPageHeader:r,FakeMetrics:n},setup(){return{args:e}},template:`
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Settings" subtitle="Constrained to 768px, centred.">
              Account settings
            </LvPageHeader>
          </template>
          <FakeMetrics />
        </LvTemplateView>
      </div>
    `}),args:{padding:!0,maxWidth:"768px",stickyChrome:!1}};var L,f,b;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Default',
  render: args => ({
    components: {
      LvTemplateView,
      LvPageHeader,
      FakeMetrics
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Operations" subtitle="Live overview for the Northern Network.">
              Dashboard
            </LvPageHeader>
          </template>
          <FakeMetrics />
        </LvTemplateView>
      </div>
    \`
  }),
  args: {
    padding: true,
    maxWidth: 'none',
    stickyChrome: false
  }
}`,...(b=(f=v.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,w,k;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'With Toolbar',
  render: args => ({
    components: {
      LvTemplateView,
      LvPageHeader,
      LvButton,
      LvBadge,
      FakeMetrics
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Operations">Incidents</LvPageHeader>
          </template>
          <template #toolbar>
            <LvButton size="sm" variant="secondary">All</LvButton>
            <LvButton size="sm" variant="ghost">Active <LvBadge variant="danger" size="sm" style="margin-left: 4px;">3</LvBadge></LvButton>
            <LvButton size="sm" variant="ghost">Resolved</LvButton>
            <div style="margin-left: auto; display: flex; gap: var(--space-2);">
              <LvButton size="sm" variant="primary">Report incident</LvButton>
            </div>
          </template>
          <FakeMetrics />
        </LvTemplateView>
      </div>
    \`
  }),
  args: {
    padding: true,
    maxWidth: 'none',
    stickyChrome: false
  }
}`,...(k=(w=p.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,V,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Aside',
  render: args => ({
    components: {
      LvTemplateView,
      LvPageHeader,
      LvSectionHeader,
      FakeMetrics
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Routes" subtitle="Select a route to see details.">
              Route Map
            </LvPageHeader>
          </template>

          <FakeMetrics />

          <template #aside>
            <LvSectionHeader>Route details</LvSectionHeader>
            <dl style="font-size: var(--text-sm); display: flex; flex-direction: column; gap: var(--space-3); margin: var(--space-4) 0 0;">
              <div>
                <dt style="color: var(--text-tertiary); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Route</dt>
                <dd style="color: var(--text-primary); font-weight: 600; margin: 0;">Northern Line</dd>
              </div>
              <div>
                <dt style="color: var(--text-tertiary); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Status</dt>
                <dd style="color: var(--text-primary); margin: 0;">Good service</dd>
              </div>
              <div>
                <dt style="color: var(--text-tertiary); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Next departure</dt>
                <dd style="color: var(--text-primary); margin: 0; font-family: var(--font-mono);">07:42</dd>
              </div>
            </dl>
          </template>
        </LvTemplateView>
      </div>
    \`
  }),
  args: {
    padding: true,
    maxWidth: 'none',
    asideWidth: '280px',
    asidePosition: 'right',
    stickyChrome: false
  }
}`,...(T=(V=m.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var H,P,B;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Aside Left',
  render: args => ({
    components: {
      LvTemplateView,
      LvPageHeader,
      LvSectionHeader,
      FakeMetrics
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Network">Services</LvPageHeader>
          </template>

          <template #aside>
            <LvSectionHeader>Filters</LvSectionHeader>
            <p style="font-size: var(--text-sm); color: var(--text-secondary); margin: var(--space-3) 0 0;">
              Operator, line, date range…
            </p>
          </template>

          <FakeMetrics />
        </LvTemplateView>
      </div>
    \`
  }),
  args: {
    padding: true,
    maxWidth: 'none',
    asideWidth: '240px',
    asidePosition: 'left',
    stickyChrome: false
  }
}`,...(B=(P=c.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var W,z,C;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Sticky Chrome',
  render: args => ({
    components: {
      LvTemplateView,
      LvPageHeader,
      LvButton,
      FakeMetrics
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="height: 300px; overflow-y: auto; background: var(--bg-page); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Operations" subtitle="Scroll down — the header stays pinned.">
              Sticky header demo
            </LvPageHeader>
          </template>
          <template #toolbar>
            <LvButton size="sm" variant="ghost">All</LvButton>
            <LvButton size="sm" variant="ghost">Active</LvButton>
          </template>
          <div style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div
              v-for="n in 12"
              :key="n"
              style="
                background: var(--bg-surface);
                border: 1px solid var(--border-subtle);
                border-radius: var(--radius-md);
                padding: var(--space-4);
                color: var(--text-secondary);
                font-size: var(--text-sm);
              "
            >
              Row {{ n }} — scroll to see the header stick
            </div>
          </div>
        </LvTemplateView>
      </div>
    \`
  }),
  args: {
    padding: true,
    stickyChrome: true
  }
}`,...(C=(z=u.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var _,A,F;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Constrained Width',
  render: args => ({
    components: {
      LvTemplateView,
      LvPageHeader,
      FakeMetrics
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="height: 100vh; background: var(--bg-page);">
        <LvTemplateView v-bind="args">
          <template #header>
            <LvPageHeader eyebrow="Settings" subtitle="Constrained to 768px, centred.">
              Account settings
            </LvPageHeader>
          </template>
          <FakeMetrics />
        </LvTemplateView>
      </div>
    \`
  }),
  args: {
    padding: true,
    maxWidth: '768px',
    stickyChrome: false
  }
}`,...(F=(A=g.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const ie=["Default","WithToolbar","WithAside","AsideLeft","StickyChrome","Constrained"];export{c as AsideLeft,g as Constrained,v as Default,u as StickyChrome,m as WithAside,p as WithToolbar,ie as __namedExportsOrder,ne as default};
