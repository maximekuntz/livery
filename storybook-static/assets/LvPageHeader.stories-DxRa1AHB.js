import{L as e}from"./LvPageHeader-BBwlCpyo.js";import{L as B}from"./LvButton-srXpjCBU.js";import{L as b}from"./LvBadge-BaKnQZ2B.js";import{L as P}from"./LvClickableIcon-l_Lcf01S.js";import"./iframe-fzFKqeWd.js";import"./preload-helper-C1FmrZbK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LvBaseIcon-Cfre48RC.js";const W={title:"Components/PageHeader",component:e,tags:["autodocs"],argTypes:{eyebrow:{control:"text"},subtitle:{control:"text"},tag:{control:{type:"select"},options:["h1","h2","h3"],table:{defaultValue:{summary:"h1"}}}}},t={render:()=>({components:{LvPageHeader:e},template:"<LvPageHeader>Timetable</LvPageHeader>"})},a={render:()=>({components:{LvPageHeader:e},template:`
      <LvPageHeader
        eyebrow="GWR · Long-distance"
        subtitle="Browse, filter, and export scheduled services across the Great Western main line."
      >
        Services
      </LvPageHeader>
    `})},n={render:()=>({components:{LvPageHeader:e,LvButton:B,LvClickableIcon:P},template:`
      <LvPageHeader
        eyebrow="Platform management"
        subtitle="View and manage current platform allocations."
      >
        Platform overview
        <template #actions>
          <LvButton variant="outlined" size="md">Export</LvButton>
          <LvButton variant="filled"   size="md">Add service</LvButton>
        </template>
      </LvPageHeader>
    `})},r={render:()=>({components:{LvPageHeader:e,LvButton:B,LvBadge:b},template:`
      <LvPageHeader
        eyebrow="GWR · 1A23"
        subtitle="London Paddington → Bristol Temple Meads, calling at Reading, Didcot, Swindon, Bath Spa."
      >
        <template #breadcrumb>
          <a href="#" style="color:var(--text-link)">Services</a>
          <span>›</span>
          <span>1A23</span>
        </template>

        Service 1A23

        <template #actions>
          <LvButton variant="outlined" size="sm">Edit</LvButton>
          <LvButton variant="danger"   size="sm">Cancel service</LvButton>
        </template>
        <template #meta>
          <LvBadge variant="success" pill>On time</LvBadge>
          <LvBadge variant="default">Intercity 125</LvBadge>
          <LvBadge variant="info">First class available</LvBadge>
        </template>
      </LvPageHeader>
    `})};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvPageHeader
    },
    template: '<LvPageHeader>Timetable</LvPageHeader>'
  })
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,l,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvPageHeader
    },
    template: \`
      <LvPageHeader
        eyebrow="GWR · Long-distance"
        subtitle="Browse, filter, and export scheduled services across the Great Western main line."
      >
        Services
      </LvPageHeader>
    \`
  })
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,v,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvPageHeader,
      LvButton,
      LvClickableIcon
    },
    template: \`
      <LvPageHeader
        eyebrow="Platform management"
        subtitle="View and manage current platform allocations."
      >
        Platform overview
        <template #actions>
          <LvButton variant="outlined" size="md">Export</LvButton>
          <LvButton variant="filled"   size="md">Add service</LvButton>
        </template>
      </LvPageHeader>
    \`
  })
}`,...(p=(v=n.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var u,L,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvPageHeader,
      LvButton,
      LvBadge
    },
    template: \`
      <LvPageHeader
        eyebrow="GWR · 1A23"
        subtitle="London Paddington → Bristol Temple Meads, calling at Reading, Didcot, Swindon, Bath Spa."
      >
        <template #breadcrumb>
          <a href="#" style="color:var(--text-link)">Services</a>
          <span>›</span>
          <span>1A23</span>
        </template>

        Service 1A23

        <template #actions>
          <LvButton variant="outlined" size="sm">Edit</LvButton>
          <LvButton variant="danger"   size="sm">Cancel service</LvButton>
        </template>
        <template #meta>
          <LvBadge variant="success" pill>On time</LvBadge>
          <LvBadge variant="default">Intercity 125</LvBadge>
          <LvBadge variant="info">First class available</LvBadge>
        </template>
      </LvPageHeader>
    \`
  })
}`,...(g=(L=r.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};const z=["Default","WithEyebrowAndSubtitle","WithActions","WithBreadcrumbAndMeta"];export{t as Default,n as WithActions,r as WithBreadcrumbAndMeta,a as WithEyebrowAndSubtitle,z as __namedExportsOrder,W as default};
