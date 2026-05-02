import{L as o}from"./LvSectionHeader-9qVIGEoy.js";import{L as v}from"./LvButton-srXpjCBU.js";import"./iframe-fzFKqeWd.js";import"./preload-helper-C1FmrZbK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Components/SectionHeader",component:o,tags:["autodocs"],argTypes:{description:{control:"text"},tag:{control:{type:"select"},options:["h2","h3","h4","h5","h6"],table:{defaultValue:{summary:"h2"}}}}},e={render:()=>({components:{LvSectionHeader:o},template:"<LvSectionHeader>Service information</LvSectionHeader>"})},t={render:()=>({components:{LvSectionHeader:o},template:`
      <LvSectionHeader description="All scheduled services for the selected date and route.">
        Today's services
      </LvSectionHeader>
    `})},n={render:()=>({components:{LvSectionHeader:o,LvButton:v},template:`
      <LvSectionHeader description="Manage the calling points for this service.">
        Calling points
        <template #actions>
          <LvButton variant="outlined" size="sm">Edit</LvButton>
        </template>
      </LvSectionHeader>
    `})};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvSectionHeader
    },
    template: '<LvSectionHeader>Service information</LvSectionHeader>'
  })
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvSectionHeader
    },
    template: \`
      <LvSectionHeader description="All scheduled services for the selected date and route.">
        Today's services
      </LvSectionHeader>
    \`
  })
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvSectionHeader,
      LvButton
    },
    template: \`
      <LvSectionHeader description="Manage the calling points for this service.">
        Calling points
        <template #actions>
          <LvButton variant="outlined" size="sm">Edit</LvButton>
        </template>
      </LvSectionHeader>
    \`
  })
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const g=["Default","WithDescription","WithActions"];export{e as Default,n as WithActions,t as WithDescription,g as __namedExportsOrder,f as default};
