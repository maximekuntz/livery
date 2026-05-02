import{p as I,s as J,u as q,d as t,e as d,i as o,f as l,g as _,n as N,h,E as K,o as a,j as Q,w as X,t as S,J as Y}from"./iframe-fzFKqeWd.js";import{L as w}from"./LvBaseIcon-Cfre48RC.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{L as Z}from"./LvBadge-BaKnQZ2B.js";import{L as ee}from"./LvButton-srXpjCBU.js";import{L as E}from"./LvClickableIcon-l_Lcf01S.js";import"./preload-helper-C1FmrZbK.js";const ae=["aria-label","aria-hidden"],te={key:0,class:"lv-sidebar-layout__sidebar-header"},ne={class:"lv-sidebar-layout__nav","aria-label":"Primary navigation"},le={key:1,class:"lv-sidebar-layout__sidebar-footer"},re={class:"lv-sidebar-layout__main"},ie={key:0,class:"lv-sidebar-layout__topbar"},se=["aria-expanded"],oe={class:"lv-sidebar-layout__content",id:"main-content",tabindex:"-1"},g={__name:"LvSidebarLayout",props:{sidebarWidth:{type:String,default:"240px"},collapsedWidth:{type:String,default:"64px"},collapsible:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1},sidebarLabel:{type:String,default:"Sidebar"},mobileBreakpoint:{type:Number,default:768}},emits:["update:collapsed"],setup(e,{expose:v,emit:c}){K(r=>({afeb283e:R.value,v5a3053de:e.sidebarWidth}));const i=e,W=c,s=I(i.collapsed),n=I(!1),p=I(!1);function k(){p.value=window.innerWidth<i.mobileBreakpoint,p.value||(n.value=!1)}J(()=>{k(),window.addEventListener("resize",k)}),q(()=>window.removeEventListener("resize",k));const B=h(()=>p.value);function F(){s.value=!s.value,W("update:collapsed",s.value)}const R=h(()=>s.value?i.collapsedWidth:i.sidebarWidth),U=h(()=>["lv-sidebar-layout",{"lv-sidebar-layout--collapsed":s.value,"lv-sidebar-layout--mobile-open":n.value,"lv-sidebar-layout--collapsible":i.collapsible}]);return v({toggleCollapsed:F,isCollapsed:s,mobileOpen:n}),(r,u)=>(a(),t("div",{class:N(U.value)},[d("aside",{class:"lv-sidebar-layout__sidebar","aria-label":e.sidebarLabel,"aria-hidden":n.value?void 0:p.value?"true":void 0},[r.$slots["sidebar-header"]?(a(),t("div",te,[o(r.$slots,"sidebar-header",{},void 0,!0)])):l("",!0),d("nav",ne,[o(r.$slots,"sidebar",{},void 0,!0)]),r.$slots["sidebar-footer"]?(a(),t("div",le,[o(r.$slots,"sidebar-footer",{},void 0,!0)])):l("",!0)],8,ae),n.value?(a(),t("div",{key:0,class:"lv-sidebar-layout__backdrop","aria-hidden":"true",onClick:u[0]||(u[0]=H=>n.value=!1)})):l("",!0),d("div",re,[r.$slots.topbar||B.value?(a(),t("header",ie,[B.value?(a(),t("button",{key:0,type:"button",class:"lv-sidebar-layout__hamburger","aria-expanded":n.value,"aria-controls":"lv-sidebar","aria-label":"Toggle navigation",onClick:u[1]||(u[1]=H=>n.value=!n.value)},[_(w,{name:n.value?"close":"menu",size:"md","aria-hidden":"true"},null,8,["name"])],8,se)):l("",!0),o(r.$slots,"topbar",{},void 0,!0)])):l("",!0),d("main",oe,[o(r.$slots,"default",{},void 0,!0)])])],2))}},x=C(g,[["__scopeId","data-v-9df60b5f"]]);g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:"default",displayName:"LvSidebarLayout",description:"",tags:{},expose:[{name:"toggleCollapsed"},{name:"isCollapsed"},{name:"mobileOpen"}],props:[{name:"sidebarWidth",description:"Width of the sidebar",type:{name:"string"},defaultValue:{func:!1,value:"'240px'"}},{name:"collapsedWidth",description:"Collapsed (icon-only) width when `collapsible` is true",type:{name:"string"},defaultValue:{func:!1,value:"'64px'"}},{name:"collapsible",description:"Whether the sidebar can be collapsed to icon-only mode on desktop",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"collapsed",description:"Start in collapsed state",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sidebarLabel",description:"Accessible label for the sidebar landmark",type:{name:"string"},defaultValue:{func:!1,value:"'Sidebar'"}},{name:"mobileBreakpoint",description:"px value at which the sidebar goes off-canvas",type:{name:"number"},defaultValue:{func:!1,value:"768"}}],events:[{name:"update:collapsed"}],slots:[{name:"sidebar-header"},{name:"sidebar"},{name:"sidebar-footer"},{name:"topbar"},{name:"default"}],sourceFiles:["/home/runner/work/livery/livery/src/components/layout/LvSidebarLayout/LvSidebarLayout.vue"]});const de={key:0,class:"lv-nav-item__icon","aria-hidden":"true"},ve={class:"lv-nav-item__label"},ce={key:1,class:"lv-nav-item__badge","aria-label":", {{ badge }} notifications"},pe=["href","aria-current"],ue={key:0,class:"lv-nav-item__icon","aria-hidden":"true"},me={class:"lv-nav-item__label"},be={key:1,class:"lv-nav-item__badge"},y={__name:"LvNavItem",props:{to:{type:[String,Object],default:void 0},href:{type:String,default:void 0},icon:{type:String,default:void 0},active:{type:Boolean,default:!1},badge:{type:[Number,String],default:void 0},collapsed:{type:Boolean,default:!1}},setup(e){const v=e,c=h(()=>["lv-nav-item",{"lv-nav-item--active":v.active},{"lv-nav-item--collapsed":v.collapsed}]);return(i,W)=>{const s=Y("router-link");return e.to?(a(),Q(s,{key:0,to:e.to,class:N(c.value),"aria-current":e.active?"page":void 0},{default:X(()=>[e.icon?(a(),t("span",de,[_(w,{name:e.icon,size:"sm"},null,8,["name"])])):l("",!0),d("span",ve,[o(i.$slots,"default",{},void 0,!0)]),e.badge?(a(),t("span",ce,S(e.badge),1)):l("",!0)]),_:3},8,["to","class","aria-current"])):(a(),t("a",{key:1,href:e.href??"#",class:N(c.value),"aria-current":e.active?"page":void 0},[e.icon?(a(),t("span",ue,[_(w,{name:e.icon,size:"sm"},null,8,["name"])])):l("",!0),d("span",me,[o(i.$slots,"default",{},void 0,!0)]),e.badge?(a(),t("span",be,S(e.badge),1)):l("",!0)],10,pe))}}},$=C(y,[["__scopeId","data-v-ff24abd8"]]);y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:"default",displayName:"LvNavItem",description:"",tags:{},props:[{name:"to",description:"Router-link `to` target",type:{name:"string|object"},defaultValue:{func:!1,value:"undefined"}},{name:"href",description:"Fallback href for non-router usage",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"icon",description:"Icon name from LvBaseIcon",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"active",description:"Mark this item as the current page",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"badge",description:"Numeric badge — e.g. unread count",type:{name:"number|string"},defaultValue:{func:!1,value:"undefined"}},{name:"collapsed",description:"Sidebar-specific: apply collapsed (icon-only) styling",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/livery/livery/src/components/layout/LvNavItem/LvNavItem.vue"]});const fe={class:"lv-nav-group"},he={key:1,class:"lv-nav-group__divider","aria-hidden":"true"},L={__name:"LvNavGroup",props:{label:{type:String,default:void 0},collapsed:{type:Boolean,default:!1}},setup(e){return(v,c)=>(a(),t("div",fe,[e.label?(a(),t("div",{key:0,class:N(["lv-nav-group__label",{"lv-nav-group__label--hidden":e.collapsed}])},[d("span",null,S(e.label),1)],2)):e.collapsed?l("",!0):(a(),t("div",he)),o(v.$slots,"default",{},void 0,!0)]))}},A=C(L,[["__scopeId","data-v-b42e440b"]]);L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{exportName:"default",displayName:"LvNavGroup",description:"",tags:{},props:[{name:"label",description:'Section heading — e.g. "Operations", "Settings"',type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"collapsed",description:"Mirrors the parent sidebar's collapsed state to hide labels",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/livery/livery/src/components/layout/LvNavGroup/LvNavGroup.vue"]});const Se={title:"Layout/SidebarLayout",component:x,tags:["autodocs"],argTypes:{sidebarWidth:{control:"text"},collapsedWidth:{control:"text"},collapsible:{control:"boolean"},collapsed:{control:"boolean"},sidebarLabel:{control:"text"},mobileBreakpoint:{control:{type:"number",min:320,max:1440,step:16}}},parameters:{layout:"fullscreen",docs:{description:{component:'\n**LvSidebarLayout** — Two-column application shell for dashboard and tool UIs.\n\n- Sticky, full-height sidebar on desktop; collapses to an off-canvas drawer on mobile\n- Supports icon-only collapsed mode when `collapsible` is true\n- Uses CSS custom properties exclusively — no hardcoded colours or spacing\n- Semantically structured: `<aside>`, `<nav>`, `<header>`, `<main>`\n\n**Accessibility**\n- Sidebar has `role="complementary"` via `<aside>` + `aria-label`\n- Mobile toggle sets `aria-expanded` on the hamburger button\n- Backdrop closes the drawer and returns focus\n- `<main id="main-content"` supports skip-link targets\n        '}}}},ge={template:`
    <div style="max-width: 720px;">
      <h1 style="font-size: 1.5rem; font-weight: 700; margin: 0 0 0.5rem; color: var(--text-primary);">Dashboard</h1>
      <p style="color: var(--text-secondary); margin: 0 0 1.5rem;">Live operational overview for the Northern Network.</p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
        <div v-for="n in 3" :key="n" style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.25rem;">
          <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-tertiary); margin-bottom: 0.5rem;">Metric {{ n }}</div>
          <div style="font-size: 1.75rem; font-weight: 700; color: var(--text-primary);">{{ n * 42 }}</div>
        </div>
      </div>
    </div>
  `},m={render:e=>({components:{LvSidebarLayout:x,LvNavItem:$,LvNavGroup:A,LvBadge:Z,LvClickableIcon:E,PageContent:ge},setup(){return{args:e}},template:`
      <LvSidebarLayout v-bind="args" style="height: 100vh;">
        <!-- Sidebar header -->
        <template #sidebar-header>
          <div style="display:flex; align-items:center; gap: 0.625rem;">
            <div style="width:28px; height:28px; border-radius:6px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color: var(--text-inverse); letter-spacing:-0.01em;">Livery</span>
          </div>
        </template>

        <!-- Sidebar nav -->
        <template #sidebar>
          <LvNavGroup label="Operations">
            <LvNavItem href="#" icon="check-circle" :active="true">Dashboard</LvNavItem>
            <LvNavItem href="#" icon="search">Timetable</LvNavItem>
            <LvNavItem href="#" icon="info">Incidents</LvNavItem>
          </LvNavGroup>
          <LvNavGroup label="Network">
            <LvNavItem href="#" icon="external-link">Routes</LvNavItem>
            <LvNavItem href="#" icon="user">Depots</LvNavItem>
          </LvNavGroup>
        </template>

        <!-- Sidebar footer -->
        <template #sidebar-footer>
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <div style="width:32px; height:32px; border-radius:50%; background:var(--color-slate-700); flex-shrink:0;"></div>
            <div style="flex:1; min-width:0;">
              <div style="font-size:0.8125rem; font-weight:600; color: var(--color-slate-200); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Alex Driver</div>
              <div style="font-size:0.75rem; color:var(--color-slate-500);">Controller</div>
            </div>
          </div>
        </template>

        <!-- Topbar -->
        <template #topbar>
          <div style="flex:1;"></div>
          <LvClickableIcon icon="settings" aria-label="Settings" variant="ghost" />
          <LvClickableIcon icon="user" aria-label="Profile" variant="ghost" />
        </template>

        <!-- Page content -->
        <PageContent />
      </LvSidebarLayout>
    `}),args:{sidebarWidth:"240px",collapsedWidth:"64px",collapsible:!1,collapsed:!1,sidebarLabel:"Sidebar",mobileBreakpoint:768}},b={render:e=>({components:{LvSidebarLayout:x,LvNavItem:$,LvNavGroup:A,LvClickableIcon:E,LvButton:ee},setup(){return{args:e}},template:`
      <LvSidebarLayout v-bind="args" style="height:100vh;" ref="layout">
        <template #sidebar-header>
          <div style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem;">
            <div style="display:flex; align-items:center; gap:0.625rem; overflow:hidden;">
              <div style="width:28px; height:28px; border-radius:6px; background:var(--brand-primary); flex-shrink:0;"></div>
              <span v-if="!args.collapsed" style="font-weight:700; font-size:1rem; color:var(--text-inverse); white-space:nowrap;">Livery</span>
            </div>
          </div>
        </template>
        <template #sidebar>
          <LvNavGroup>
            <LvNavItem href="#" icon="check-circle" :active="true" :collapsed="args.collapsed">Dashboard</LvNavItem>
            <LvNavItem href="#" icon="search" :collapsed="args.collapsed">Timetable</LvNavItem>
            <LvNavItem href="#" icon="info" :collapsed="args.collapsed">Incidents</LvNavItem>
          </LvNavGroup>
        </template>
        <template #topbar>
          <span style="color:var(--text-secondary); font-size:0.875rem;">Toggle the collapsed control in the panel →</span>
        </template>
        <div style="padding:1rem; color:var(--text-primary);">Collapsible sidebar demo — adjust the <strong>collapsed</strong> control.</div>
      </LvSidebarLayout>
    `}),args:{collapsible:!0,collapsed:!1,sidebarWidth:"240px",collapsedWidth:"64px"}},f={name:"Minimal Shell",render:e=>({components:{LvSidebarLayout:x,LvNavItem:$},setup(){return{args:e}},template:`
      <LvSidebarLayout v-bind="args" style="height: 100vh;">
        <template #sidebar>
          <LvNavItem href="#" icon="check-circle" :active="true">Home</LvNavItem>
          <LvNavItem href="#" icon="settings">Settings</LvNavItem>
          <LvNavItem href="#" icon="user">Profile</LvNavItem>
        </template>
        <div style="color: var(--text-primary); padding: 0.5rem;">
          Minimal sidebar — no header or footer slots filled.
        </div>
      </LvSidebarLayout>
    `}),args:{sidebarWidth:"200px"}};var z,G,V;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvSidebarLayout,
      LvNavItem,
      LvNavGroup,
      LvBadge,
      LvClickableIcon,
      PageContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <LvSidebarLayout v-bind="args" style="height: 100vh;">
        <!-- Sidebar header -->
        <template #sidebar-header>
          <div style="display:flex; align-items:center; gap: 0.625rem;">
            <div style="width:28px; height:28px; border-radius:6px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color: var(--text-inverse); letter-spacing:-0.01em;">Livery</span>
          </div>
        </template>

        <!-- Sidebar nav -->
        <template #sidebar>
          <LvNavGroup label="Operations">
            <LvNavItem href="#" icon="check-circle" :active="true">Dashboard</LvNavItem>
            <LvNavItem href="#" icon="search">Timetable</LvNavItem>
            <LvNavItem href="#" icon="info">Incidents</LvNavItem>
          </LvNavGroup>
          <LvNavGroup label="Network">
            <LvNavItem href="#" icon="external-link">Routes</LvNavItem>
            <LvNavItem href="#" icon="user">Depots</LvNavItem>
          </LvNavGroup>
        </template>

        <!-- Sidebar footer -->
        <template #sidebar-footer>
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <div style="width:32px; height:32px; border-radius:50%; background:var(--color-slate-700); flex-shrink:0;"></div>
            <div style="flex:1; min-width:0;">
              <div style="font-size:0.8125rem; font-weight:600; color: var(--color-slate-200); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Alex Driver</div>
              <div style="font-size:0.75rem; color:var(--color-slate-500);">Controller</div>
            </div>
          </div>
        </template>

        <!-- Topbar -->
        <template #topbar>
          <div style="flex:1;"></div>
          <LvClickableIcon icon="settings" aria-label="Settings" variant="ghost" />
          <LvClickableIcon icon="user" aria-label="Profile" variant="ghost" />
        </template>

        <!-- Page content -->
        <PageContent />
      </LvSidebarLayout>
    \`
  }),
  args: {
    sidebarWidth: '240px',
    collapsedWidth: '64px',
    collapsible: false,
    collapsed: false,
    sidebarLabel: 'Sidebar',
    mobileBreakpoint: 768
  }
}`,...(V=(G=m.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var M,D,T;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvSidebarLayout,
      LvNavItem,
      LvNavGroup,
      LvClickableIcon,
      LvButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <LvSidebarLayout v-bind="args" style="height:100vh;" ref="layout">
        <template #sidebar-header>
          <div style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem;">
            <div style="display:flex; align-items:center; gap:0.625rem; overflow:hidden;">
              <div style="width:28px; height:28px; border-radius:6px; background:var(--brand-primary); flex-shrink:0;"></div>
              <span v-if="!args.collapsed" style="font-weight:700; font-size:1rem; color:var(--text-inverse); white-space:nowrap;">Livery</span>
            </div>
          </div>
        </template>
        <template #sidebar>
          <LvNavGroup>
            <LvNavItem href="#" icon="check-circle" :active="true" :collapsed="args.collapsed">Dashboard</LvNavItem>
            <LvNavItem href="#" icon="search" :collapsed="args.collapsed">Timetable</LvNavItem>
            <LvNavItem href="#" icon="info" :collapsed="args.collapsed">Incidents</LvNavItem>
          </LvNavGroup>
        </template>
        <template #topbar>
          <span style="color:var(--text-secondary); font-size:0.875rem;">Toggle the collapsed control in the panel →</span>
        </template>
        <div style="padding:1rem; color:var(--text-primary);">Collapsible sidebar demo — adjust the <strong>collapsed</strong> control.</div>
      </LvSidebarLayout>
    \`
  }),
  args: {
    collapsible: true,
    collapsed: false,
    sidebarWidth: '240px',
    collapsedWidth: '64px'
  }
}`,...(T=(D=b.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var P,j,O;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Minimal Shell',
  render: args => ({
    components: {
      LvSidebarLayout,
      LvNavItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <LvSidebarLayout v-bind="args" style="height: 100vh;">
        <template #sidebar>
          <LvNavItem href="#" icon="check-circle" :active="true">Home</LvNavItem>
          <LvNavItem href="#" icon="settings">Settings</LvNavItem>
          <LvNavItem href="#" icon="user">Profile</LvNavItem>
        </template>
        <div style="color: var(--text-primary); padding: 0.5rem;">
          Minimal sidebar — no header or footer slots filled.
        </div>
      </LvSidebarLayout>
    \`
  }),
  args: {
    sidebarWidth: '200px'
  }
}`,...(O=(j=f.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const we=["Default","Collapsible","MinimalShell"];export{b as Collapsible,m as Default,f as MinimalShell,we as __namedExportsOrder,Se as default};
