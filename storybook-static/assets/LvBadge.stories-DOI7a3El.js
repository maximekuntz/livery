import{L as r}from"./LvBadge-BaKnQZ2B.js";import"./iframe-fzFKqeWd.js";import"./preload-helper-C1FmrZbK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Components/Badge",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","success","warning","danger","info","inverse"],description:"Signal-aspect colour variant",table:{defaultValue:{summary:"default"}}},pill:{control:"boolean",description:"Renders with fully rounded corners"}}},e={args:{variant:"default",default:"On time"},render:c=>({components:{LvBadge:r},setup:()=>({args:c}),template:'<LvBadge v-bind="args">{{ args.default }}</LvBadge>'})},a={render:()=>({components:{LvBadge:r},template:`
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
        <LvBadge variant="default">Default</LvBadge>
        <LvBadge variant="success">Clear</LvBadge>
        <LvBadge variant="warning">Caution</LvBadge>
        <LvBadge variant="danger">Stop</LvBadge>
        <LvBadge variant="info">Info</LvBadge>
        <LvBadge variant="inverse">Inverse</LvBadge>
      </div>
    `})},n={render:()=>({components:{LvBadge:r},template:`
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
        <LvBadge variant="success" pill>On time</LvBadge>
        <LvBadge variant="warning" pill>Delayed</LvBadge>
        <LvBadge variant="danger" pill>Cancelled</LvBadge>
      </div>
    `})};var t,d,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    default: 'On time'
  },
  render: args => ({
    components: {
      LvBadge
    },
    setup: () => ({
      args
    }),
    template: '<LvBadge v-bind="args">{{ args.default }}</LvBadge>'
  })
}`,...(s=(d=e.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var i,l,v;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvBadge
    },
    template: \`
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
        <LvBadge variant="default">Default</LvBadge>
        <LvBadge variant="success">Clear</LvBadge>
        <LvBadge variant="warning">Caution</LvBadge>
        <LvBadge variant="danger">Stop</LvBadge>
        <LvBadge variant="info">Info</LvBadge>
        <LvBadge variant="inverse">Inverse</LvBadge>
      </div>
    \`
  })
}`,...(v=(l=a.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var g,o,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvBadge
    },
    template: \`
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center">
        <LvBadge variant="success" pill>On time</LvBadge>
        <LvBadge variant="warning" pill>Delayed</LvBadge>
        <LvBadge variant="danger" pill>Cancelled</LvBadge>
      </div>
    \`
  })
}`,...(p=(o=n.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const w=["Default","AllVariants","Pills"];export{a as AllVariants,e as Default,n as Pills,w as __namedExportsOrder,f as default};
