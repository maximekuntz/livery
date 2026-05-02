import{d as t,e as h,m as K,j as L,f as l,t as B,n as V,h as s,o as a,p as o}from"./iframe-fzFKqeWd.js";import{L as S}from"./LvBaseIcon-Cfre48RC.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-C1FmrZbK.js";const U=["id","type","checked","disabled","indeterminate","aria-describedby","aria-invalid","name","value"],X={key:0,class:"lv-boolean-input__box","aria-hidden":"true"},Z={key:1,class:"lv-boolean-input__track","aria-hidden":"true"},ee={key:2,class:"lv-boolean-input__radio","aria-hidden":"true"},ne={key:0,class:"lv-boolean-input__radio-dot"},ae={key:3,class:"lv-boolean-input__label"},te=["id"],oe=["id"],f={__name:"LvBooleanInput",props:{modelValue:{default:!1},type:{type:String,default:"checkbox",validator:e=>["checkbox","toggle","radio"].includes(e)},value:{default:void 0},label:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},name:{type:String,default:void 0},id:{type:String,default:void 0}},emits:["update:modelValue"],setup(e,{emit:b}){const n=e,I=b,q=Math.random().toString(36).slice(2,8),k=s(()=>n.id??`lv-bool-${q}`),y=s(()=>`${k.value}-desc`),G=s(()=>n.type==="toggle"?"checkbox":n.type),d=s(()=>n.type==="radio"?n.modelValue===n.value:!!n.modelValue);function H(g){n.type==="radio"?I("update:modelValue",n.value):I("update:modelValue",g.target.checked)}const J=s(()=>["lv-boolean-input",`lv-boolean-input--${n.type}`,{"lv-boolean-input--disabled":n.disabled,"lv-boolean-input--error":!!n.error,"lv-boolean-input--checked":d.value}]);return(g,x)=>(a(),t("div",{class:V(J.value)},[h("label",{class:V(["lv-boolean-input__control",{"lv-boolean-input__control--toggle":e.type==="toggle"}])},[h("input",K({id:k.value,type:G.value,checked:d.value,disabled:e.disabled,indeterminate:e.type==="checkbox"&&e.indeterminate,"aria-describedby":e.hint||e.error?y.value:void 0,"aria-invalid":!!e.error,name:e.name,value:e.value,class:"lv-boolean-input__native"},g.$attrs,{onChange:H}),null,16,U),e.type==="checkbox"?(a(),t("span",X,[d.value?(a(),L(S,{key:0,name:"check",size:"xs"})):e.indeterminate?(a(),L(S,{key:1,name:"minus",size:"xs"})):l("",!0)])):l("",!0),e.type==="toggle"?(a(),t("span",Z,[...x[0]||(x[0]=[h("span",{class:"lv-boolean-input__thumb"},null,-1)])])):l("",!0),e.type==="radio"?(a(),t("span",ee,[d.value?(a(),t("span",ne)):l("",!0)])):l("",!0),e.label?(a(),t("span",ae,B(e.label),1)):l("",!0)],2),e.error?(a(),t("p",{key:0,id:y.value,class:"lv-boolean-input__hint lv-boolean-input__hint--error",role:"alert"},B(e.error),9,te)):e.hint?(a(),t("p",{key:1,id:y.value,class:"lv-boolean-input__hint"},B(e.hint),9,oe)):l("",!0)],2))}},r=Q(f,[["__scopeId","data-v-199bb982"]]);f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"LvBooleanInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",description:"Visual and semantic type",type:{name:"string"},defaultValue:{func:!1,value:"'checkbox'"},values:["checkbox","toggle","radio"]},{name:"value",description:"Radio option value",type:{name:"undefined"},defaultValue:{func:!1,value:"undefined"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"indeterminate",description:"Checkbox indeterminate state",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"id",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/livery/livery/src/components/LvBooleanInput/LvBooleanInput.vue"]});const ue={title:"Components/BooleanInput",component:r,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["checkbox","toggle","radio"],table:{defaultValue:{summary:"checkbox"}}},label:{control:"text"},hint:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}}},u={render:()=>({components:{LvBooleanInput:r},setup(){return{v:o(!1)}},template:'<LvBooleanInput v-model="v" label="Accept terms and conditions" type="checkbox" />'})},i={render:()=>({components:{LvBooleanInput:r},setup(){return{v:o(!1)}},template:'<LvBooleanInput v-model="v" label="Enable real-time tracking" type="toggle" />'})},c={render:()=>({components:{LvBooleanInput:r},setup(){return{v:o("first")}},template:`
      <div style="display:flex;flex-direction:column;gap:var(--space-3)">
        <LvBooleanInput v-model="v" type="radio" value="first"  label="First class" />
        <LvBooleanInput v-model="v" type="radio" value="second" label="Standard class" />
        <LvBooleanInput v-model="v" type="radio" value="any"    label="Any available" />
      </div>
    `})},p={render:()=>({components:{LvBooleanInput:r},setup(){return{v:o(!1)}},template:'<LvBooleanInput v-model="v" label="I agree to the terms" error="You must accept to continue." />'})},v={render:()=>({components:{LvBooleanInput:r},setup(){return{v:o(!1)}},template:'<LvBooleanInput v-model="v" label="Select all" :indeterminate="true" />'})},m={render:()=>({components:{LvBooleanInput:r},setup(){const e=o(!0),b=o(!0),n=o("a");return{cb:e,tg:b,rd:n}},template:`
      <div style="display:flex;flex-direction:column;gap:var(--space-5)">
        <LvBooleanInput v-model="cb" type="checkbox" label="Checkbox" />
        <LvBooleanInput v-model="tg" type="toggle"   label="Toggle" />
        <LvBooleanInput v-model="rd" type="radio" value="a" label="Radio option A" />
        <LvBooleanInput v-model="rd" type="radio" value="b" label="Radio option B" />
      </div>
    `})};var _,C,A;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvBooleanInput
    },
    setup() {
      const v = ref(false);
      return {
        v
      };
    },
    template: '<LvBooleanInput v-model="v" label="Accept terms and conditions" type="checkbox" />'
  })
}`,...(A=(C=u.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var T,R,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvBooleanInput
    },
    setup() {
      const v = ref(false);
      return {
        v
      };
    },
    template: '<LvBooleanInput v-model="v" label="Enable real-time tracking" type="toggle" />'
  })
}`,...(E=(R=i.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var N,$,z;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvBooleanInput
    },
    setup() {
      const v = ref('first');
      return {
        v
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:var(--space-3)">
        <LvBooleanInput v-model="v" type="radio" value="first"  label="First class" />
        <LvBooleanInput v-model="v" type="radio" value="second" label="Standard class" />
        <LvBooleanInput v-model="v" type="radio" value="any"    label="Any available" />
      </div>
    \`
  })
}`,...(z=($=c.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var F,j,O;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvBooleanInput
    },
    setup() {
      const v = ref(false);
      return {
        v
      };
    },
    template: '<LvBooleanInput v-model="v" label="I agree to the terms" error="You must accept to continue." />'
  })
}`,...(O=(j=p.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var W,Y,w;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvBooleanInput
    },
    setup() {
      const v = ref(false);
      return {
        v
      };
    },
    template: '<LvBooleanInput v-model="v" label="Select all" :indeterminate="true" />'
  })
}`,...(w=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:w.source}}};var D,M,P;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvBooleanInput
    },
    setup() {
      const cb = ref(true);
      const tg = ref(true);
      const rd = ref('a');
      return {
        cb,
        tg,
        rd
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:var(--space-5)">
        <LvBooleanInput v-model="cb" type="checkbox" label="Checkbox" />
        <LvBooleanInput v-model="tg" type="toggle"   label="Toggle" />
        <LvBooleanInput v-model="rd" type="radio" value="a" label="Radio option A" />
        <LvBooleanInput v-model="rd" type="radio" value="b" label="Radio option B" />
      </div>
    \`
  })
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const ie=["Checkbox","Toggle","Radio","WithError","Indeterminate","AllTypes"];export{m as AllTypes,u as Checkbox,v as Indeterminate,c as Radio,i as Toggle,p as WithError,ie as __namedExportsOrder,ue as default};
