import{L as n}from"./LvClickableIcon-l_Lcf01S.js";import"./iframe-fzFKqeWd.js";import"./preload-helper-C1FmrZbK.js";import"./LvBaseIcon-Cfre48RC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={title:"Primitives/ClickableIcon",component:n,tags:["autodocs"],argTypes:{icon:{control:"text"},ariaLabel:{control:"text"},size:{control:{type:"select"},options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},variant:{control:{type:"select"},options:["ghost","outlined","filled","danger"],table:{defaultValue:{summary:"ghost"}}},disabled:{control:"boolean"}}},e={args:{icon:"close",ariaLabel:"Dismiss",variant:"ghost",size:"md"}},a={render:()=>({components:{LvClickableIcon:n},template:`
      <div style="display:flex;gap:1rem;align-items:center">
        <LvClickableIcon icon="close" ariaLabel="Dismiss" variant="ghost" />
        <LvClickableIcon icon="close" ariaLabel="Dismiss" variant="outlined" />
        <LvClickableIcon icon="close" ariaLabel="Dismiss" variant="filled" />
        <LvClickableIcon icon="close" ariaLabel="Delete" variant="danger" />
      </div>
    `})},i={render:()=>({components:{LvClickableIcon:n},template:`
      <div style="display:flex;gap:1rem;align-items:center">
        <LvClickableIcon icon="settings" ariaLabel="Settings" size="sm" />
        <LvClickableIcon icon="settings" ariaLabel="Settings" size="md" />
        <LvClickableIcon icon="settings" ariaLabel="Settings" size="lg" />
      </div>
    `})};var s,l,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    icon: 'close',
    ariaLabel: 'Dismiss',
    variant: 'ghost',
    size: 'md'
  }
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var o,r,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvClickableIcon
    },
    template: \`
      <div style="display:flex;gap:1rem;align-items:center">
        <LvClickableIcon icon="close" ariaLabel="Dismiss" variant="ghost" />
        <LvClickableIcon icon="close" ariaLabel="Dismiss" variant="outlined" />
        <LvClickableIcon icon="close" ariaLabel="Dismiss" variant="filled" />
        <LvClickableIcon icon="close" ariaLabel="Delete" variant="danger" />
      </div>
    \`
  })
}`,...(c=(r=a.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var m,d,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvClickableIcon
    },
    template: \`
      <div style="display:flex;gap:1rem;align-items:center">
        <LvClickableIcon icon="settings" ariaLabel="Settings" size="sm" />
        <LvClickableIcon icon="settings" ariaLabel="Settings" size="md" />
        <LvClickableIcon icon="settings" ariaLabel="Settings" size="lg" />
      </div>
    \`
  })
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const C=["Default","AllVariants","Sizes"];export{a as AllVariants,e as Default,i as Sizes,C as __namedExportsOrder,k as default};
