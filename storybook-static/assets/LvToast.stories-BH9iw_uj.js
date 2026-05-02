import"./iframe-fzFKqeWd.js";import{L as y}from"./LvToast-BTsr5qmq.js";import"./preload-helper-C1FmrZbK.js";import"./LvBaseIcon-Cfre48RC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={title:"Notification/Toast",component:y,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","success","warning","danger"],table:{defaultValue:{summary:"info"}}},title:{control:"text"},message:{control:"text"},duration:{control:"number"}},parameters:{docs:{description:{component:"Individual toast notification. Use `LvToastContainer` + `useToast()` for programmatic dispatch."}}}},e={args:{id:1,variant:"info",title:"Information",message:"Track maintenance scheduled for Sunday.",duration:0}},a={args:{id:2,variant:"success",title:"Booking confirmed",message:"Your seat on 1A23 has been reserved.",duration:0}},n={args:{id:3,variant:"warning",title:"Delay expected",message:"The 16:15 is running 12 minutes late.",duration:0}},r={args:{id:4,variant:"danger",title:"Service cancelled",message:"The 18:45 to Oxford has been cancelled.",duration:0}},t={render:()=>({components:{LvToast:y},template:`
      <div style="display:flex;flex-direction:column;gap:var(--space-3);max-width:420px">
        <LvToast :id="1" variant="info"    title="Information"         message="Track maintenance scheduled for Sunday." :duration="0" @remove="() => {}" />
        <LvToast :id="2" variant="success" title="Booking confirmed"   message="Your seat on 1A23 has been reserved."   :duration="0" @remove="() => {}" />
        <LvToast :id="3" variant="warning" title="Delay expected"      message="The 16:15 is running 12 minutes late."  :duration="0" @remove="() => {}" />
        <LvToast :id="4" variant="danger"  title="Service cancelled"   message="The 18:45 to Oxford has been cancelled." :duration="0" @remove="() => {}" />
      </div>
    `})};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    id: 1,
    variant: 'info',
    title: 'Information',
    message: 'Track maintenance scheduled for Sunday.',
    duration: 0
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 2,
    variant: 'success',
    title: 'Booking confirmed',
    message: 'Your seat on 1A23 has been reserved.',
    duration: 0
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,u,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 3,
    variant: 'warning',
    title: 'Delay expected',
    message: 'The 16:15 is running 12 minutes late.',
    duration: 0
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,v,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 4,
    variant: 'danger',
    title: 'Service cancelled',
    message: 'The 18:45 to Oxford has been cancelled.',
    duration: 0
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var T,h,x;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvToast
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:var(--space-3);max-width:420px">
        <LvToast :id="1" variant="info"    title="Information"         message="Track maintenance scheduled for Sunday." :duration="0" @remove="() => {}" />
        <LvToast :id="2" variant="success" title="Booking confirmed"   message="Your seat on 1A23 has been reserved."   :duration="0" @remove="() => {}" />
        <LvToast :id="3" variant="warning" title="Delay expected"      message="The 16:15 is running 12 minutes late."  :duration="0" @remove="() => {}" />
        <LvToast :id="4" variant="danger"  title="Service cancelled"   message="The 18:45 to Oxford has been cancelled." :duration="0" @remove="() => {}" />
      </div>
    \`
  })
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const A=["Info","Success","Warning","Danger","AllVariants"];export{t as AllVariants,r as Danger,e as Info,a as Success,n as Warning,A as __namedExportsOrder,I as default};
