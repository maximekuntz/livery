import{d as t,v as w,t as s,f as o,e as S,m as B,F as k,r as C,g as q,n as P,h as d,o as n,p as E}from"./iframe-fzFKqeWd.js";import{L as $}from"./LvBaseIcon-Cfre48RC.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-C1FmrZbK.js";const F=["for"],M={key:0,class:"lv-select-input__required","aria-hidden":"true"},R={class:"lv-select-input__wrapper"},W=["id","value","disabled","required","aria-describedby","aria-invalid"],j=["selected"],G=["value","disabled"],H={class:"lv-select-input__chevron","aria-hidden":"true"},J=["id"],K=["id"],p={__name:"LvSelectInput",props:{modelValue:{default:""},options:{type:Array,default:()=>[]},label:{type:String,default:void 0},placeholder:{type:String,default:void 0},hint:{type:String,default:void 0},error:{type:String,default:void 0},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},id:{type:String,default:void 0}},emits:["update:modelValue"],setup(e){const r=e,O=Math.random().toString(36).slice(2,8),v=d(()=>r.id??`lv-select-${O}`),f=d(()=>`${v.value}-desc`),A=d(()=>r.options.map(a=>typeof a=="string"?{label:a,value:a}:a)),D=d(()=>["lv-select-input",{"lv-select-input--disabled":r.disabled,"lv-select-input--error":!!r.error}]);return(a,b)=>(n(),t("div",{class:P(D.value)},[e.label?(n(),t("label",{key:0,for:v.value,class:"lv-select-input__label"},[w(s(e.label)+" ",1),e.required?(n(),t("span",M,"*")):o("",!0)],8,F)):o("",!0),S("div",R,[S("select",B({id:v.value,value:e.modelValue,disabled:e.disabled,required:e.required,"aria-describedby":e.hint||e.error?f.value:void 0,"aria-invalid":!!e.error,class:"lv-select-input__select"},a.$attrs,{onChange:b[0]||(b[0]=l=>a.$emit("update:modelValue",l.target.value))}),[e.placeholder?(n(),t("option",{key:0,value:"",disabled:"",selected:!e.modelValue},s(e.placeholder),9,j)):o("",!0),(n(!0),t(k,null,C(A.value,l=>(n(),t("option",{key:l.value,value:l.value,disabled:l.disabled},s(l.label),9,G))),128))],16,W),S("span",H,[q($,{name:"chevron-down",size:"sm"})])]),e.error?(n(),t("p",{key:1,id:f.value,class:"lv-select-input__hint lv-select-input__hint--error",role:"alert"},s(e.error),9,J)):e.hint?(n(),t("p",{key:2,id:f.value,class:"lv-select-input__hint"},s(e.hint),9,K)):o("",!0)],2))}},m=z(p,[["__scopeId","data-v-344b16a4"]]);p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"LvSelectInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"id",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/livery/livery/src/components/LvSelectInput/LvSelectInput.vue"]});const h=[{label:"London Paddington",value:"PAD"},{label:"Bristol Temple Meads",value:"BRI"},{label:"Reading",value:"RDG"},{label:"Bath Spa",value:"BTH"},{label:"Swindon",value:"SWI"},{label:"Chippenham",value:"CPM",disabled:!0}],Z={title:"Components/SelectInput",component:m,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"}}},i={render:()=>({components:{LvSelectInput:m},setup(){return{v:E(""),STATIONS:h}},template:`
      <LvSelectInput
        v-model="v"
        label="Destination"
        placeholder="Select a station"
        :options="STATIONS"
        hint="Choose your destination station."
        style="max-width:280px"
      />
    `})},u={render:()=>({components:{LvSelectInput:m},setup(){return{STATIONS:h}},template:`
      <LvSelectInput
        label="Destination"
        placeholder="Select a station"
        :options="STATIONS"
        error="Please select a destination."
        style="max-width:280px"
      />
    `})},c={render:()=>({components:{LvSelectInput:m},setup(){return{STATIONS:h}},template:`
      <LvSelectInput
        modelValue="PAD"
        label="Origin"
        :options="STATIONS"
        disabled
        style="max-width:280px"
      />
    `})};var y,I,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvSelectInput
    },
    setup() {
      const v = ref('');
      return {
        v,
        STATIONS
      };
    },
    template: \`
      <LvSelectInput
        v-model="v"
        label="Destination"
        placeholder="Select a station"
        :options="STATIONS"
        hint="Choose your destination station."
        style="max-width:280px"
      />
    \`
  })
}`,...(g=(I=i.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var T,V,x;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvSelectInput
    },
    setup() {
      return {
        STATIONS
      };
    },
    template: \`
      <LvSelectInput
        label="Destination"
        placeholder="Select a station"
        :options="STATIONS"
        error="Please select a destination."
        style="max-width:280px"
      />
    \`
  })
}`,...(x=(V=u.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var L,N,_;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvSelectInput
    },
    setup() {
      return {
        STATIONS
      };
    },
    template: \`
      <LvSelectInput
        modelValue="PAD"
        label="Origin"
        :options="STATIONS"
        disabled
        style="max-width:280px"
      />
    \`
  })
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const ee=["Default","WithError","Disabled"];export{i as Default,c as Disabled,u as WithError,ee as __namedExportsOrder,Z as default};
