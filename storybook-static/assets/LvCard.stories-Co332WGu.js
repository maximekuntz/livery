import{d as l,i as d,f as v,e as w,n as _,h as B,o as i}from"./iframe-fzFKqeWd.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{L as z}from"./LvButton-srXpjCBU.js";import{L as S}from"./LvBadge-BaKnQZ2B.js";import"./preload-helper-C1FmrZbK.js";const D=["aria-label"],k={key:0,class:"lv-card__header"},V={class:"lv-card__body"},R={key:1,class:"lv-card__footer"},o={__name:"LvCard",props:{elevation:{type:String,default:"md",validator:t=>["none","sm","md","lg"].includes(t)},flush:{type:Boolean,default:!1},ariaLabel:{type:String,default:void 0}},setup(t){const p=t,C=B(()=>["lv-card",`lv-card--elevation-${p.elevation}`,{"lv-card--flush":p.flush}]);return(e,P)=>(i(),l("div",{class:_(C.value),role:"group","aria-label":t.ariaLabel},[e.$slots.header?(i(),l("div",k,[d(e.$slots,"header",{},void 0,!0)])):v("",!0),w("div",V,[d(e.$slots,"default",{},void 0,!0)]),e.$slots.footer?(i(),l("div",R,[d(e.$slots,"footer",{},void 0,!0)])):v("",!0)],10,D))}},s=b(o,[["__scopeId","data-v-dd7e70d3"]]);o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"LvCard",description:"",tags:{},props:[{name:"elevation",description:"Elevation level",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["none","sm","md","lg"]},{name:"flush",description:"Removes padding for flush content (e.g. full-bleed images)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",description:"Accessible label for the card group",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/livery/livery/src/components/LvCard/LvCard.vue"]});const A={title:"Components/Card",component:s,tags:["autodocs"],argTypes:{elevation:{control:{type:"select"},options:["none","sm","md","lg"],table:{defaultValue:{summary:"md"}}},flush:{control:"boolean"}}},a={render:()=>({components:{LvCard:s},template:`
      <LvCard style="max-width:360px">
        <p style="color:var(--text-primary)">Platform 3 — London Paddington to Bristol Temple Meads. Calling at Reading, Didcot Parkway, Swindon, Chippenham, Bath Spa.</p>
      </LvCard>
    `})},n={render:()=>({components:{LvCard:s,LvButton:z,LvBadge:S},template:`
      <LvCard style="max-width:400px">
        <template #header>Delayed Service</template>
        <div style="display:flex;flex-direction:column;gap:var(--space-3)">
          <LvBadge variant="warning">Running 14 min late</LvBadge>
          <p style="color:var(--text-secondary);font-size:var(--text-sm)">
            Due to a signal failure at Reading, this service is subject to delay.
            We apologise for the inconvenience.
          </p>
        </div>
        <template #footer>
          <LvButton variant="outlined" size="sm">View alternatives</LvButton>
          <LvButton variant="ghost" size="sm">Dismiss</LvButton>
        </template>
      </LvCard>
    `})},r={render:()=>({components:{LvCard:s},template:`
      <div style="display:flex;gap:1.5rem;flex-wrap:wrap;padding:2rem;background:var(--bg-page)">
        <LvCard elevation="none" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">none</p>
        </LvCard>
        <LvCard elevation="sm" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">sm</p>
        </LvCard>
        <LvCard elevation="md" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">md</p>
        </LvCard>
        <LvCard elevation="lg" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">lg</p>
        </LvCard>
      </div>
    `})};var m,c,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvCard
    },
    template: \`
      <LvCard style="max-width:360px">
        <p style="color:var(--text-primary)">Platform 3 — London Paddington to Bristol Temple Meads. Calling at Reading, Didcot Parkway, Swindon, Chippenham, Bath Spa.</p>
      </LvCard>
    \`
  })
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var f,g,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvCard,
      LvButton,
      LvBadge
    },
    template: \`
      <LvCard style="max-width:400px">
        <template #header>Delayed Service</template>
        <div style="display:flex;flex-direction:column;gap:var(--space-3)">
          <LvBadge variant="warning">Running 14 min late</LvBadge>
          <p style="color:var(--text-secondary);font-size:var(--text-sm)">
            Due to a signal failure at Reading, this service is subject to delay.
            We apologise for the inconvenience.
          </p>
        </div>
        <template #footer>
          <LvButton variant="outlined" size="sm">View alternatives</LvButton>
          <LvButton variant="ghost" size="sm">Dismiss</LvButton>
        </template>
      </LvCard>
    \`
  })
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var L,x,h;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvCard
    },
    template: \`
      <div style="display:flex;gap:1.5rem;flex-wrap:wrap;padding:2rem;background:var(--bg-page)">
        <LvCard elevation="none" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">none</p>
        </LvCard>
        <LvCard elevation="sm" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">sm</p>
        </LvCard>
        <LvCard elevation="md" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">md</p>
        </LvCard>
        <LvCard elevation="lg" style="min-width:140px;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">lg</p>
        </LvCard>
      </div>
    \`
  })
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const F=["Default","WithHeaderAndFooter","Elevations"];export{a as Default,r as Elevations,n as WithHeaderAndFooter,F as __namedExportsOrder,A as default};
