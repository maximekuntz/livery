import{d,e as o,i as n,n as h,f,g as P,B as H,C as A,p as j,E as M,o as i,j as b,w as E,h as R,J as U}from"./iframe-fzFKqeWd.js";import{L as g}from"./LvBaseIcon-Cfre48RC.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{L as O}from"./LvButton-srXpjCBU.js";import"./LvBadge-BaKnQZ2B.js";import{L}from"./LvClickableIcon-l_Lcf01S.js";import"./preload-helper-C1FmrZbK.js";const J={class:"lv-top-nav-layout"},q={class:"lv-top-nav-layout__navbar",role:"banner"},G={class:"lv-top-nav-layout__navbar-inner"},K={class:"lv-top-nav-layout__brand"},Q={key:0,class:"lv-top-nav-layout__actions"},X=["aria-expanded"],Y={key:0,class:"lv-top-nav-layout__subbar"},c={__name:"LvTopNavLayout",props:{contained:{type:Boolean,default:!1},maxWidth:{type:String,default:"1280px"},navbarHeight:{type:String,default:"3.5rem"}},setup(e){M(a=>({v5e247ff9:e.navbarHeight,v34b92a64:e.maxWidth}));const t=j(!1);return(a,r)=>(i(),d("div",J,[o("header",q,[o("div",G,[o("div",K,[n(a.$slots,"brand",{},void 0,!0)]),o("nav",{class:h(["lv-top-nav-layout__nav",{"lv-top-nav-layout__nav--open":t.value}]),"aria-label":"Primary navigation"},[n(a.$slots,"nav",{},void 0,!0)],2),a.$slots.actions?(i(),d("div",Q,[n(a.$slots,"actions",{},void 0,!0)])):f("",!0),o("button",{type:"button",class:"lv-top-nav-layout__hamburger","aria-expanded":t.value,"aria-label":"Toggle navigation",onClick:r[0]||(r[0]=T=>t.value=!t.value)},[P(g,{name:t.value?"close":"menu",size:"md","aria-hidden":"true"},null,8,["name"])],8,X)]),H(o("nav",{class:"lv-top-nav-layout__mobile-nav","aria-label":"Mobile navigation",onClick:r[1]||(r[1]=T=>t.value=!1)},[n(a.$slots,"nav",{},void 0,!0)],512),[[A,t.value]])]),a.$slots.subbar?(i(),d("div",Y,[n(a.$slots,"subbar",{},void 0,!0)])):f("",!0),o("main",{class:h(["lv-top-nav-layout__content",{"lv-top-nav-layout__content--contained":e.contained}]),id:"main-content",tabindex:"-1"},[n(a.$slots,"default",{},void 0,!0)],2)]))}},s=F(c,[["__scopeId","data-v-3153278c"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"LvTopNavLayout",description:"",tags:{},props:[{name:"contained",description:"Constrains the content area to a max-width and centres it",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxWidth",description:"Max-width when `contained` is true",type:{name:"string"},defaultValue:{func:!1,value:"'1280px'"}},{name:"navbarHeight",description:"Height of the navbar",type:{name:"string"},defaultValue:{func:!1,value:"'3.5rem'"}}],slots:[{name:"brand"},{name:"nav"},{name:"actions"},{name:"subbar"},{name:"default"}],sourceFiles:["/home/runner/work/livery/livery/src/components/layout/LvTopNavLayout/LvTopNavLayout.vue"]});const Z=["href","aria-current"],u={__name:"LvTopNavItem",props:{to:{type:[String,Object],default:void 0},href:{type:String,default:void 0},icon:{type:String,default:void 0},active:{type:Boolean,default:!1}},setup(e){const t=e,a=R(()=>["lv-top-nav-item",{"lv-top-nav-item--active":t.active}]);return(r,T)=>{const V=U("router-link");return e.to?(i(),b(V,{key:0,to:e.to,class:h(a.value),"aria-current":e.active?"page":void 0},{default:E(()=>[e.icon?(i(),b(g,{key:0,name:e.icon,size:"sm","aria-hidden":"true"},null,8,["name"])):f("",!0),n(r.$slots,"default",{},void 0,!0)]),_:3},8,["to","class","aria-current"])):(i(),d("a",{key:1,href:e.href??"#",class:h(a.value),"aria-current":e.active?"page":void 0},[e.icon?(i(),b(g,{key:0,name:e.icon,size:"sm","aria-hidden":"true"},null,8,["name"])):f("",!0),n(r.$slots,"default",{},void 0,!0)],10,Z))}}},y=F(u,[["__scopeId","data-v-c88bd59d"]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"LvTopNavItem",description:"",tags:{},props:[{name:"to",type:{name:"string|object"},defaultValue:{func:!1,value:"undefined"}},{name:"href",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"active",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/livery/livery/src/components/layout/LvTopNavItem/LvTopNavItem.vue"]});const se={title:"Layout/TopNavLayout",component:s,tags:["autodocs"],argTypes:{contained:{control:"boolean"},maxWidth:{control:"text"},navbarHeight:{control:"text"}},parameters:{layout:"fullscreen",docs:{description:{component:'\n**LvTopNavLayout** — Full-page shell with a sticky top navigation bar.\n\n- Horizontal nav links collapse into a hamburger drawer on mobile\n- Optional `contained` prop constrains and centres the content area\n- Optional `subbar` slot for secondary chrome (tabs, breadcrumbs, filters)\n- Dark navbar matches Livery\'s rail-cabin aesthetic\n\n**Accessibility**\n- Top-level `<header role="banner">` landmark\n- Primary nav rendered as `<nav aria-label="Primary navigation">`\n- Mobile hamburger uses `aria-expanded` and `aria-label`\n- `<main id="main-content"` supports skip-link targets\n        '}}}},N={template:`
    <div>
      <h1 style="font-size: 1.5rem; font-weight: 700; margin: 0 0 0.5rem; color: var(--text-primary);">Timetable</h1>
      <p style="color: var(--text-secondary); margin: 0 0 1.5rem;">Northern Network — Live departures.</p>
      <div style="display:grid; gap:0.75rem;">
        <div v-for="i in 4" :key="i" style="background: var(--bg-surface); border:1px solid var(--border-subtle); border-radius: var(--radius-lg); padding:1rem 1.25rem; display:flex; align-items:center; gap:1rem;">
          <div style="font-variant-numeric:tabular-nums; font-weight:700; font-size:1.25rem; color:var(--text-primary); width:3rem; flex-shrink:0;">{{ ['07:42','08:15','09:03','09:37'][i-1] }}</div>
          <div style="flex:1;">
            <div style="font-weight:600; color:var(--text-primary);">Platform {{ i }}</div>
            <div style="font-size:0.8125rem; color:var(--text-secondary);">Manchester Piccadilly · 2 coaches · On time</div>
          </div>
          <div style="font-size:0.75rem; font-weight:600; color:var(--color-green-700);">ON TIME</div>
        </div>
      </div>
    </div>
  `},l={render:e=>({components:{LvTopNavLayout:s,LvTopNavItem:y,FakeContent:N},setup(){return{args:e}},template:`
      <LvTopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <div style="display:flex; align-items:center; gap:0.625rem;">
            <div style="width:26px; height:26px; border-radius:5px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color:var(--text-inverse); letter-spacing:-0.01em;">Livery</span>
          </div>
        </template>
        <template #nav>
          <LvTopNavItem href="#" :active="true">Dashboard</LvTopNavItem>
          <LvTopNavItem href="#">Timetable</LvTopNavItem>
          <LvTopNavItem href="#">Network</LvTopNavItem>
          <LvTopNavItem href="#">Reports</LvTopNavItem>
        </template>
        <FakeContent />
      </LvTopNavLayout>
    `}),args:{contained:!1,maxWidth:"1280px",navbarHeight:"3.5rem"}},v={name:"With Actions",render:e=>({components:{LvTopNavLayout:s,LvTopNavItem:y,LvButton:O,LvClickableIcon:L,FakeContent:N},setup(){return{args:e}},template:`
      <LvTopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <div style="display:flex; align-items:center; gap:0.625rem;">
            <div style="width:26px; height:26px; border-radius:5px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color:var(--text-inverse); letter-spacing:-0.01em;">Livery</span>
          </div>
        </template>
        <template #nav>
          <LvTopNavItem href="#" :active="true">Dashboard</LvTopNavItem>
          <LvTopNavItem href="#">Timetable</LvTopNavItem>
          <LvTopNavItem href="#">Network</LvTopNavItem>
        </template>
        <template #actions>
          <LvClickableIcon icon="search" aria-label="Search" variant="ghost" />
          <LvClickableIcon icon="settings" aria-label="Settings" variant="ghost" />
          <div style="width:32px; height:32px; border-radius:50%; background:var(--color-slate-600); flex-shrink:0; cursor:pointer;" title="User menu"></div>
        </template>
        <FakeContent />
      </LvTopNavLayout>
    `}),args:{contained:!1}},p={render:e=>({components:{LvTopNavLayout:s,LvTopNavItem:y,LvButton:O,LvClickableIcon:L,FakeContent:N},setup(){return{args:e}},template:`
      <LvTopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <div style="display:flex; align-items:center; gap:0.625rem;">
            <div style="width:26px; height:26px; border-radius:5px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color:var(--text-inverse);">Livery</span>
          </div>
        </template>
        <template #nav>
          <LvTopNavItem href="#" :active="true">Dashboard</LvTopNavItem>
          <LvTopNavItem href="#">Timetable</LvTopNavItem>
          <LvTopNavItem href="#">Network</LvTopNavItem>
        </template>
        <template #actions>
          <LvButton variant="outlined" size="sm">Sign out</LvButton>
        </template>
        <FakeContent />
      </LvTopNavLayout>
    `}),args:{contained:!0,maxWidth:"900px"}},m={name:"With Subbar",render:e=>({components:{LvTopNavLayout:s,LvTopNavItem:y,LvClickableIcon:L},setup(){return{args:e}},template:`
      <LvTopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <span style="font-weight:700; font-size:1rem; color:var(--text-inverse);">Livery</span>
        </template>
        <template #nav>
          <LvTopNavItem href="#" :active="true">Dashboard</LvTopNavItem>
          <LvTopNavItem href="#">Timetable</LvTopNavItem>
        </template>
        <template #actions>
          <LvClickableIcon icon="user" aria-label="Profile" variant="ghost" />
        </template>
        <template #subbar>
          <nav style="display:flex; gap:0.25rem; align-items:center;">
            <a href="#" style="padding:0.5rem 0.75rem; font-size:0.875rem; font-weight:600; color:var(--brand-primary); border-bottom:2px solid var(--brand-primary); text-decoration:none;">Overview</a>
            <a href="#" style="padding:0.5rem 0.75rem; font-size:0.875rem; color:var(--text-secondary); text-decoration:none;">Departures</a>
            <a href="#" style="padding:0.5rem 0.75rem; font-size:0.875rem; color:var(--text-secondary); text-decoration:none;">Arrivals</a>
          </nav>
        </template>
        <div style="color:var(--text-primary);">
          <p>Page content below the subbar (tab strip).</p>
        </div>
      </LvTopNavLayout>
    `}),args:{contained:!1}};var x,I,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvTopNavLayout,
      LvTopNavItem,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <LvTopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <div style="display:flex; align-items:center; gap:0.625rem;">
            <div style="width:26px; height:26px; border-radius:5px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color:var(--text-inverse); letter-spacing:-0.01em;">Livery</span>
          </div>
        </template>
        <template #nav>
          <LvTopNavItem href="#" :active="true">Dashboard</LvTopNavItem>
          <LvTopNavItem href="#">Timetable</LvTopNavItem>
          <LvTopNavItem href="#">Network</LvTopNavItem>
          <LvTopNavItem href="#">Reports</LvTopNavItem>
        </template>
        <FakeContent />
      </LvTopNavLayout>
    \`
  }),
  args: {
    contained: false,
    maxWidth: '1280px',
    navbarHeight: '3.5rem'
  }
}`,...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var w,_,C;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With Actions',
  render: args => ({
    components: {
      LvTopNavLayout,
      LvTopNavItem,
      LvButton,
      LvClickableIcon,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <LvTopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <div style="display:flex; align-items:center; gap:0.625rem;">
            <div style="width:26px; height:26px; border-radius:5px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color:var(--text-inverse); letter-spacing:-0.01em;">Livery</span>
          </div>
        </template>
        <template #nav>
          <LvTopNavItem href="#" :active="true">Dashboard</LvTopNavItem>
          <LvTopNavItem href="#">Timetable</LvTopNavItem>
          <LvTopNavItem href="#">Network</LvTopNavItem>
        </template>
        <template #actions>
          <LvClickableIcon icon="search" aria-label="Search" variant="ghost" />
          <LvClickableIcon icon="settings" aria-label="Settings" variant="ghost" />
          <div style="width:32px; height:32px; border-radius:50%; background:var(--color-slate-600); flex-shrink:0; cursor:pointer;" title="User menu"></div>
        </template>
        <FakeContent />
      </LvTopNavLayout>
    \`
  }),
  args: {
    contained: false
  }
}`,...(C=(_=v.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var z,S,W;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvTopNavLayout,
      LvTopNavItem,
      LvButton,
      LvClickableIcon,
      FakeContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <LvTopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <div style="display:flex; align-items:center; gap:0.625rem;">
            <div style="width:26px; height:26px; border-radius:5px; background:var(--brand-primary); flex-shrink:0;"></div>
            <span style="font-weight:700; font-size:1rem; color:var(--text-inverse);">Livery</span>
          </div>
        </template>
        <template #nav>
          <LvTopNavItem href="#" :active="true">Dashboard</LvTopNavItem>
          <LvTopNavItem href="#">Timetable</LvTopNavItem>
          <LvTopNavItem href="#">Network</LvTopNavItem>
        </template>
        <template #actions>
          <LvButton variant="outlined" size="sm">Sign out</LvButton>
        </template>
        <FakeContent />
      </LvTopNavLayout>
    \`
  }),
  args: {
    contained: true,
    maxWidth: '900px'
  }
}`,...(W=(S=p.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var B,D,$;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'With Subbar',
  render: args => ({
    components: {
      LvTopNavLayout,
      LvTopNavItem,
      LvClickableIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <LvTopNavLayout v-bind="args" style="min-height: 100vh;">
        <template #brand>
          <span style="font-weight:700; font-size:1rem; color:var(--text-inverse);">Livery</span>
        </template>
        <template #nav>
          <LvTopNavItem href="#" :active="true">Dashboard</LvTopNavItem>
          <LvTopNavItem href="#">Timetable</LvTopNavItem>
        </template>
        <template #actions>
          <LvClickableIcon icon="user" aria-label="Profile" variant="ghost" />
        </template>
        <template #subbar>
          <nav style="display:flex; gap:0.25rem; align-items:center;">
            <a href="#" style="padding:0.5rem 0.75rem; font-size:0.875rem; font-weight:600; color:var(--brand-primary); border-bottom:2px solid var(--brand-primary); text-decoration:none;">Overview</a>
            <a href="#" style="padding:0.5rem 0.75rem; font-size:0.875rem; color:var(--text-secondary); text-decoration:none;">Departures</a>
            <a href="#" style="padding:0.5rem 0.75rem; font-size:0.875rem; color:var(--text-secondary); text-decoration:none;">Arrivals</a>
          </nav>
        </template>
        <div style="color:var(--text-primary);">
          <p>Page content below the subbar (tab strip).</p>
        </div>
      </LvTopNavLayout>
    \`
  }),
  args: {
    contained: false
  }
}`,...($=(D=m.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const le=["Default","WithActions","Contained","WithSubbar"];export{p as Contained,l as Default,v as WithActions,m as WithSubbar,le as __namedExportsOrder,se as default};
