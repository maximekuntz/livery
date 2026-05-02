import{L as a}from"./LvBaseIcon-Cfre48RC.js";import"./iframe-fzFKqeWd.js";import"./preload-helper-C1FmrZbK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v=["check","close","chevron-down","chevron-up","chevron-left","chevron-right","eye","eye-off","search","info","warning","arrow-left","arrow-right","plus","minus","menu","settings","user","logout","external-link","check-circle","x-circle"],y={title:"Primitives/BaseIcon",component:a,tags:["autodocs"],argTypes:{name:{control:{type:"select"},options:v},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],table:{defaultValue:{summary:"md"}}},ariaLabel:{control:"text"}}},e={args:{name:"check",size:"md"}},n={render:()=>({components:{LvBaseIcon:a},setup:()=>({icons:v}),template:`
      <div style="display:flex;flex-wrap:wrap;gap:1.5rem;font-family:var(--font-sans)">
        <div
          v-for="name in icons"
          :key="name"
          style="display:flex;flex-direction:column;align-items:center;gap:var(--space-2)"
        >
          <LvBaseIcon :name="name" size="lg" />
          <span style="font-size:var(--text-xs);color:var(--text-secondary)">{{ name }}</span>
        </div>
      </div>
    `})},s={render:()=>({components:{LvBaseIcon:a},template:`
      <div style="display:flex;align-items:center;gap:1.5rem">
        <LvBaseIcon name="search" size="xs" />
        <LvBaseIcon name="search" size="sm" />
        <LvBaseIcon name="search" size="md" />
        <LvBaseIcon name="search" size="lg" />
        <LvBaseIcon name="search" size="xl" />
      </div>
    `})};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    name: 'check',
    size: 'md'
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var c,i,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvBaseIcon
    },
    setup: () => ({
      icons: AVAILABLE_ICONS
    }),
    template: \`
      <div style="display:flex;flex-wrap:wrap;gap:1.5rem;font-family:var(--font-sans)">
        <div
          v-for="name in icons"
          :key="name"
          style="display:flex;flex-direction:column;align-items:center;gap:var(--space-2)"
        >
          <LvBaseIcon :name="name" size="lg" />
          <span style="font-size:var(--text-xs);color:var(--text-secondary)">{{ name }}</span>
        </div>
      </div>
    \`
  })
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,p,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvBaseIcon
    },
    template: \`
      <div style="display:flex;align-items:center;gap:1.5rem">
        <LvBaseIcon name="search" size="xs" />
        <LvBaseIcon name="search" size="sm" />
        <LvBaseIcon name="search" size="md" />
        <LvBaseIcon name="search" size="lg" />
        <LvBaseIcon name="search" size="xl" />
      </div>
    \`
  })
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const I=["Default","AllIcons","Sizes"];export{n as AllIcons,e as Default,s as Sizes,I as __namedExportsOrder,y as default};
