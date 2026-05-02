import{L as e}from"./LvButton-srXpjCBU.js";import"./iframe-fzFKqeWd.js";import"./preload-helper-C1FmrZbK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const j={title:"Components/Button",component:e,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["filled","outlined","ghost","danger"],description:"Visual treatment of the button",table:{defaultValue:{summary:"filled"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size scale",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disables the button"},loading:{control:"boolean",description:"Shows spinner and prevents interaction"},tag:{control:"text",description:"HTML element to render (button, a, …)",table:{defaultValue:{summary:"button"}}}},parameters:{docs:{description:{component:"@type { import('@storybook/vue3-vite').Meta }"}}}},n={args:{variant:"filled",size:"md",default:"Depart"},render:t=>({components:{LvButton:e},setup:()=>({args:t}),template:'<LvButton v-bind="args">{{ args.default }}</LvButton>'})},a={args:{variant:"outlined",default:"View timetable"},render:t=>({components:{LvButton:e},setup:()=>({args:t}),template:'<LvButton v-bind="args">{{ args.default }}</LvButton>'})},r={args:{variant:"ghost",default:"Details"},render:t=>({components:{LvButton:e},setup:()=>({args:t}),template:'<LvButton v-bind="args">{{ args.default }}</LvButton>'})},o={args:{variant:"danger",default:"Cancel service"},render:t=>({components:{LvButton:e},setup:()=>({args:t}),template:'<LvButton v-bind="args">{{ args.default }}</LvButton>'})},s={args:{variant:"filled",loading:!0,default:"Booking…"},render:t=>({components:{LvButton:e},setup:()=>({args:t}),template:'<LvButton v-bind="args">{{ args.default }}</LvButton>'})},i={args:{variant:"filled",disabled:!0,default:"Unavailable"},render:t=>({components:{LvButton:e},setup:()=>({args:t}),template:'<LvButton v-bind="args">{{ args.default }}</LvButton>'})},l={render:()=>({components:{LvButton:e},template:`
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <LvButton size="sm">Small</LvButton>
        <LvButton size="md">Medium</LvButton>
        <LvButton size="lg">Large</LvButton>
      </div>
    `})},u={render:()=>({components:{LvButton:e},template:`
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <LvButton variant="filled">Filled</LvButton>
        <LvButton variant="outlined">Outlined</LvButton>
        <LvButton variant="ghost">Ghost</LvButton>
        <LvButton variant="danger">Danger</LvButton>
      </div>
    `})};var d,p,v,m,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    size: 'md',
    default: 'Depart'
  },
  render: args => ({
    components: {
      LvButton
    },
    setup: () => ({
      args
    }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>'
  })
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source},description:{story:"Default filled button",...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};var g,L,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    default: 'View timetable'
  },
  render: args => ({
    components: {
      LvButton
    },
    setup: () => ({
      args
    }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>'
  })
}`,...(B=(L=a.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var f,b,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    default: 'Details'
  },
  render: args => ({
    components: {
      LvButton
    },
    setup: () => ({
      args
    }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>'
  })
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,h,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    default: 'Cancel service'
  },
  render: args => ({
    components: {
      LvButton
    },
    setup: () => ({
      args
    }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>'
  })
}`,...(z=(h=o.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var D,w,x;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    loading: true,
    default: 'Booking…'
  },
  render: args => ({
    components: {
      LvButton
    },
    setup: () => ({
      args
    }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>'
  })
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var V,O,F;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    disabled: true,
    default: 'Unavailable'
  },
  render: args => ({
    components: {
      LvButton
    },
    setup: () => ({
      args
    }),
    template: '<LvButton v-bind="args">{{ args.default }}</LvButton>'
  })
}`,...(F=(O=i.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var G,M,k;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvButton
    },
    template: \`
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <LvButton size="sm">Small</LvButton>
        <LvButton size="md">Medium</LvButton>
        <LvButton size="lg">Large</LvButton>
      </div>
    \`
  })
}`,...(k=(M=l.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var C,_,A;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvButton
    },
    template: \`
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <LvButton variant="filled">Filled</LvButton>
        <LvButton variant="outlined">Outlined</LvButton>
        <LvButton variant="ghost">Ghost</LvButton>
        <LvButton variant="danger">Danger</LvButton>
      </div>
    \`
  })
}`,...(A=(_=u.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const q=["Filled","Outlined","Ghost","Danger","Loading","Disabled","Sizes","AllVariants"];export{u as AllVariants,o as Danger,i as Disabled,n as Filled,r as Ghost,s as Loading,a as Outlined,l as Sizes,q as __namedExportsOrder,j as default};
