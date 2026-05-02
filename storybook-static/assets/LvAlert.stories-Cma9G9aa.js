import{d as o,e as c,g as u,t as I,f as p,i as z,n as O,h as f,o as d,p as C}from"./iframe-fzFKqeWd.js";import{L as g}from"./LvBaseIcon-Cfre48RC.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-C1FmrZbK.js";const j=["aria-live"],E={class:"lv-alert__icon","aria-hidden":"true"},M={class:"lv-alert__body"},P={key:0,class:"lv-alert__title"},Y={class:"lv-alert__description"},i={__name:"LvAlert",props:{variant:{type:String,default:"info",validator:e=>["success","warning","danger","info"].includes(e)},title:{type:String,default:void 0},dismissible:{type:Boolean,default:!1}},emits:["dismiss"],setup(e){const l=e,N={success:"check-circle",warning:"warning",danger:"x-circle",info:"info"},D=f(()=>N[l.variant]),V=f(()=>["lv-alert",`lv-alert--${l.variant}`,{"lv-alert--dismissible":l.dismissible}]);return(v,m)=>(d(),o("div",{class:O(V.value),role:"alert","aria-live":e.variant==="danger"?"assertive":"polite"},[c("span",E,[u(g,{name:D.value,size:"md"},null,8,["name"])]),c("div",M,[e.title?(d(),o("p",P,I(e.title),1)):p("",!0),c("div",Y,[z(v.$slots,"default",{},void 0,!0)])]),e.dismissible?(d(),o("button",{key:0,type:"button",class:"lv-alert__close","aria-label":"Dismiss",onClick:m[0]||(m[0]=F=>v.$emit("dismiss"))},[u(g,{name:"close",size:"sm","aria-hidden":"true"})])):p("",!0)],10,j))}},t=$(i,[["__scopeId","data-v-bf86e048"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"LvAlert",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'info'"},values:["success","warning","danger","info"]},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"dismissible",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"dismiss"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/livery/livery/src/components/notification/LvAlert/LvAlert.vue"]});const K={title:"Notification/Alert",component:t,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","success","warning","danger"],table:{defaultValue:{summary:"info"}}},title:{control:"text"},dismissible:{control:"boolean"}}},n={args:{variant:"info",title:"Service update",default:"The 14:32 service to Bristol Temple Meads is running on time."},render:e=>({components:{LvAlert:t},setup:()=>({args:e}),template:'<LvAlert v-bind="args">{{ args.default }}</LvAlert>'})},s={render:()=>({components:{LvAlert:t},template:`
      <div style="display:flex;flex-direction:column;gap:var(--space-4);max-width:520px">
        <LvAlert variant="info"    title="Information">Track maintenance scheduled for Sunday 04:00–06:00.</LvAlert>
        <LvAlert variant="success" title="Booking confirmed">Your seat reservation for 1A23 has been confirmed.</LvAlert>
        <LvAlert variant="warning" title="Delay expected">The 16:15 service is running approximately 12 minutes late.</LvAlert>
        <LvAlert variant="danger"  title="Service cancelled">The 18:45 to Oxford has been cancelled due to a signal failure.</LvAlert>
      </div>
    `})},a={render:()=>({components:{LvAlert:t},setup(){return{visible:C(!0)}},template:`
      <div style="max-width:520px">
        <LvAlert
          v-if="visible"
          variant="warning"
          title="Disruption notice"
          dismissible
          @dismiss="visible = false"
        >
          Services on the Bristol line may be subject to short delays this afternoon.
        </LvAlert>
        <p v-else style="font-size:var(--text-sm);color:var(--text-secondary)">Alert dismissed.</p>
      </div>
    `})},r={render:()=>({components:{LvAlert:t},template:`
      <LvAlert variant="info" style="max-width:520px">
        Passengers are reminded to carry valid tickets at all times.
      </LvAlert>
    `})};var A,y,L;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Service update',
    default: 'The 14:32 service to Bristol Temple Meads is running on time.'
  },
  render: args => ({
    components: {
      LvAlert
    },
    setup: () => ({
      args
    }),
    template: '<LvAlert v-bind="args">{{ args.default }}</LvAlert>'
  })
}`,...(L=(y=n.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var b,h,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvAlert
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:var(--space-4);max-width:520px">
        <LvAlert variant="info"    title="Information">Track maintenance scheduled for Sunday 04:00–06:00.</LvAlert>
        <LvAlert variant="success" title="Booking confirmed">Your seat reservation for 1A23 has been confirmed.</LvAlert>
        <LvAlert variant="warning" title="Delay expected">The 16:15 service is running approximately 12 minutes late.</LvAlert>
        <LvAlert variant="danger"  title="Service cancelled">The 18:45 to Oxford has been cancelled due to a signal failure.</LvAlert>
      </div>
    \`
  })
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var _,S,w;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvAlert
    },
    setup() {
      const visible = ref(true);
      return {
        visible
      };
    },
    template: \`
      <div style="max-width:520px">
        <LvAlert
          v-if="visible"
          variant="warning"
          title="Disruption notice"
          dismissible
          @dismiss="visible = false"
        >
          Services on the Bristol line may be subject to short delays this afternoon.
        </LvAlert>
        <p v-else style="font-size:var(--text-sm);color:var(--text-secondary)">Alert dismissed.</p>
      </div>
    \`
  })
}`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,T,B;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvAlert
    },
    template: \`
      <LvAlert variant="info" style="max-width:520px">
        Passengers are reminded to carry valid tickets at all times.
      </LvAlert>
    \`
  })
}`,...(B=(T=r.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const Q=["Default","AllVariants","Dismissible","NoTitle"];export{s as AllVariants,n as Default,a as Dismissible,r as NoTitle,Q as __namedExportsOrder,K as default};
