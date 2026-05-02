import{d as n,v as O,t as h,f as o,e as I,i as L,m as j,g as F,n as R,h as u,p as g,o as r}from"./iframe-fzFKqeWd.js";import{L as A}from"./LvClickableIcon-l_Lcf01S.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{L as J}from"./LvBaseIcon-Cfre48RC.js";import"./preload-helper-C1FmrZbK.js";const K=["for"],Q={key:0,class:"lv-text-input__required","aria-hidden":"true"},U={class:"lv-text-input__wrapper"},X={key:0,class:"lv-text-input__addon lv-text-input__addon--leading","aria-hidden":"true"},Y=["id","type","value","placeholder","disabled","readonly","required","autocomplete","aria-describedby","aria-invalid"],Z={key:1,class:"lv-text-input__addon lv-text-input__addon--trailing"},ee={key:2,class:"lv-text-input__addon lv-text-input__addon--trailing","aria-hidden":"true"},te=["id"],ae=["id"],f={__name:"LvTextInput",props:{modelValue:{type:String,default:""},type:{type:String,default:"text",validator:e=>["text","email","password","number","tel","url","search"].includes(e)},label:{type:String,default:void 0},placeholder:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},autocomplete:{type:String,default:void 0},id:{type:String,default:void 0}},emits:["update:modelValue"],setup(e){const t=e,M=Math.random().toString(36).slice(2,8),y=u(()=>t.id??`lv-input-${M}`),b=u(()=>`${y.value}-desc`),s=g(!1),z=u(()=>t.type==="password"?s.value?"text":"password":t.type),W=u(()=>["lv-text-input",{"lv-text-input--disabled":t.disabled,"lv-text-input--error":!!t.error}]);return(a,d)=>(r(),n("div",{class:R(W.value)},[e.label?(r(),n("label",{key:0,for:y.value,class:"lv-text-input__label"},[O(h(e.label)+" ",1),e.required?(r(),n("span",Q,"*")):o("",!0)],8,K)):o("",!0),I("div",U,[a.$slots.leading?(r(),n("span",X,[L(a.$slots,"leading",{},void 0,!0)])):o("",!0),I("input",j({id:y.value,type:z.value,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,autocomplete:e.autocomplete,"aria-describedby":b.value,"aria-invalid":!!e.error,class:["lv-text-input__input",{"lv-text-input__input--has-leading":a.$slots.leading,"lv-text-input__input--has-trailing":a.$slots.trailing||e.type==="password"}]},a.$attrs,{onInput:d[0]||(d[0]=x=>a.$emit("update:modelValue",x.target.value))}),null,16,Y),e.type==="password"?(r(),n("span",Z,[F(A,{icon:s.value?"eye-off":"eye",ariaLabel:s.value?"Hide password":"Show password",size:"sm",variant:"ghost",onClick:d[1]||(d[1]=x=>s.value=!s.value)},null,8,["icon","ariaLabel"])])):a.$slots.trailing?(r(),n("span",ee,[L(a.$slots,"trailing",{},void 0,!0)])):o("",!0)]),e.error?(r(),n("p",{key:1,id:b.value,class:"lv-text-input__hint lv-text-input__hint--error",role:"alert"},h(e.error),9,te)):e.hint?(r(),n("p",{key:2,id:b.value,class:"lv-text-input__hint"},h(e.hint),9,ae)):o("",!0)],2))}},l=G(f,[["__scopeId","data-v-0e936745"]]);f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"LvTextInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",description:"Input type — password gets a built-in reveal toggle",type:{name:"string"},defaultValue:{func:!1,value:"'text'"},values:["text","email","password","number","tel","url","search"]},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",description:'Renders error style and announces message via role="alert"',type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"autocomplete",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"id",description:"Explicit id — auto-generated if omitted",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue"}],slots:[{name:"leading"},{name:"trailing"}],sourceFiles:["/home/runner/work/livery/livery/src/components/LvTextInput/LvTextInput.vue"]});const de={title:"Components/TextInput",component:l,tags:["autodocs"],argTypes:{modelValue:{control:"text"},type:{control:{type:"select"},options:["text","email","password","number","tel","url","search"],table:{defaultValue:{summary:"text"}}},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},required:{control:"boolean"}}},i={args:{label:"Station name",placeholder:"e.g. London Paddington",hint:"Enter the full station name."},render:e=>({components:{LvTextInput:l},setup(){const t=g("");return{args:e,value:t}},template:'<LvTextInput v-bind="args" v-model="value" />'})},p={args:{label:"Departure time",modelValue:"abc",error:"Please enter a valid time in HH:MM format."},render:e=>({components:{LvTextInput:l},setup:()=>({args:e}),template:'<LvTextInput v-bind="args" />'})},c={args:{label:"Passcode",type:"password",placeholder:"••••••••"},render:e=>({components:{LvTextInput:l},setup(){const t=g("");return{args:e,v:t}},template:'<LvTextInput v-bind="args" v-model="v" />'})},m={render:()=>({components:{LvTextInput:l,LvBaseIcon:J},setup(){return{v:g("")}},template:`
      <LvTextInput v-model="v" label="Search services" placeholder="Search…">
        <template #leading>
          <LvBaseIcon name="search" size="sm" />
        </template>
      </LvTextInput>
    `})},v={args:{label:"Platform",modelValue:"Platform 3",disabled:!0},render:e=>({components:{LvTextInput:l},setup:()=>({args:e}),template:'<LvTextInput v-bind="args" />'})};var T,V,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Station name',
    placeholder: 'e.g. London Paddington',
    hint: 'Enter the full station name.'
  },
  render: args => ({
    components: {
      LvTextInput
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: '<LvTextInput v-bind="args" v-model="value" />'
  })
}`,...(S=(V=i.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var _,w,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Departure time',
    modelValue: 'abc',
    error: 'Please enter a valid time in HH:MM format.'
  },
  render: args => ({
    components: {
      LvTextInput
    },
    setup: () => ({
      args
    }),
    template: '<LvTextInput v-bind="args" />'
  })
}`,...(P=(w=p.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var k,$,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Passcode',
    type: 'password',
    placeholder: '••••••••'
  },
  render: args => ({
    components: {
      LvTextInput
    },
    setup() {
      const v = ref('');
      return {
        args,
        v
      };
    },
    template: '<LvTextInput v-bind="args" v-model="v" />'
  })
}`,...(B=($=c.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var q,D,E;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvTextInput,
      LvBaseIcon
    },
    setup() {
      const v = ref('');
      return {
        v
      };
    },
    template: \`
      <LvTextInput v-model="v" label="Search services" placeholder="Search…">
        <template #leading>
          <LvBaseIcon name="search" size="sm" />
        </template>
      </LvTextInput>
    \`
  })
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,C,H;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Platform',
    modelValue: 'Platform 3',
    disabled: true
  },
  render: args => ({
    components: {
      LvTextInput
    },
    setup: () => ({
      args
    }),
    template: '<LvTextInput v-bind="args" />'
  })
}`,...(H=(C=v.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};const ue=["Default","WithError","Password","WithLeadingIcon","Disabled"];export{i as Default,v as Disabled,c as Password,p as WithError,m as WithLeadingIcon,ue as __namedExportsOrder,de as default};
