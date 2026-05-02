import{s as me,u as pe,d as r,v as ce,t as c,f as b,e as o,x as ve,y as fe,g as C,n as g,w as be,T as ge,h as v,z as he,p as _,o as i,A as h,F as z,r as A}from"./iframe-fzFKqeWd.js";import{L as H}from"./LvBaseIcon-Cfre48RC.js";import{_ as ye}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-C1FmrZbK.js";const _e=["for"],xe={key:0,class:"lv-time-input__required","aria-hidden":"true"},Se={class:"lv-time-input__wrapper"},Ve=["id","disabled","aria-expanded","aria-describedby","aria-invalid","onKeydown"],Ie={key:0,class:"lv-time-input__panel"},Te={class:"lv-time-input__columns"},we=["aria-activedescendant"],Le=["id","aria-selected","onClick"],ke=["aria-activedescendant"],$e=["id","aria-selected","onClick"],Ce={key:0,class:"lv-time-input__actions"},w={__name:"LvTimeInput",props:{modelValue:{type:String,default:null},label:{type:String,default:void 0},placeholder:{type:String,default:"Select time"},hint:{type:String,default:void 0},error:{type:String,default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},id:{type:String,default:void 0},minuteStep:{type:Number,default:5}},emits:["update:modelValue"],setup(e,{emit:te}){const a=e,L=te,ne=Array.from({length:24},(n,l)=>l),u=Math.random().toString(36).slice(2,8),E=v(()=>a.id??`lv-time-${u}`),k=`lv-time-desc-${u}`,$=_(null),M=_(null),D=_(null),s=_(!1),ae=v(()=>{const n=Math.max(1,Math.min(30,a.minuteStep)),l=[];for(let t=0;t<60;t+=n)l.push(t);return l}),d=v(()=>a.modelValue?parseInt(a.modelValue.split(":")[0],10):null),m=v(()=>a.modelValue?parseInt(a.modelValue.split(":")[1],10):null),le=v(()=>a.modelValue?a.modelValue:a.placeholder);function re(){a.readonly||(s.value?y():(s.value=!0,he(ie)))}function y(){s.value=!1}function ie(){q(M.value,d.value,`lv-time-h-${u}`),q(D.value,m.value,`lv-time-m-${u}`)}function q(n,l,t){if(!n||l===null)return;const p=n.querySelector(`#${t}-${l}`);p&&p.scrollIntoView({block:"center",behavior:"instant"})}function N(n,l){const t=n??d.value??0,p=l??m.value??0;return`${String(t).padStart(2,"0")}:${String(p).padStart(2,"0")}`}function ue(n){L("update:modelValue",N(n,null))}function oe(n){L("update:modelValue",N(null,n))}function se(){L("update:modelValue",null),y()}function B(n){s.value&&$.value&&!$.value.contains(n.target)&&y()}me(()=>document.addEventListener("mousedown",B)),pe(()=>document.removeEventListener("mousedown",B));const de=v(()=>["lv-time-input",{"lv-time-input--disabled":a.disabled,"lv-time-input--readonly":a.readonly,"lv-time-input--error":!!a.error}]);return(n,l)=>(i(),r("div",{ref_key:"rootEl",ref:$,class:g(de.value)},[e.label?(i(),r("label",{key:0,for:E.value,class:"lv-time-input__label"},[ce(c(e.label),1),e.required?(i(),r("span",xe," *")):b("",!0)],8,_e)):b("",!0),o("div",Se,[o("button",{type:"button",id:E.value,class:"lv-time-input__trigger",disabled:e.disabled,"aria-expanded":s.value,"aria-haspopup":"listbox","aria-describedby":e.hint||e.error?k:void 0,"aria-invalid":e.error?!0:void 0,onClick:re,onKeydown:ve(fe(y,["stop"]),["esc"])},[C(H,{name:"clock",size:"sm",class:"lv-time-input__icon","aria-hidden":"true"}),o("span",{class:g(["lv-time-input__value",{"lv-time-input__value--placeholder":!e.modelValue}])},c(le.value),3),C(H,{name:"chevron-down",size:"sm",class:g(["lv-time-input__chevron",{"lv-time-input__chevron--open":s.value}]),"aria-hidden":"true"},null,8,["class"])],40,Ve),C(ge,{name:"lv-time-panel"},{default:be(()=>[s.value?(i(),r("div",Ie,[o("div",Te,[o("div",{ref_key:"hoursColEl",ref:M,class:"lv-time-input__column",role:"listbox","aria-label":"Hour","aria-activedescendant":d.value!==null?`lv-time-h-${h(u)}-${d.value}`:void 0},[(i(!0),r(z,null,A(h(ne),t=>(i(),r("button",{key:t,id:`lv-time-h-${h(u)}-${t}`,type:"button",role:"option",class:g(["lv-time-input__option",{"lv-time-input__option--selected":t===d.value}]),"aria-selected":t===d.value,onClick:p=>ue(t)},c(String(t).padStart(2,"0")),11,Le))),128))],8,we),l[0]||(l[0]=o("div",{class:"lv-time-input__separator","aria-hidden":"true"},":",-1)),o("div",{ref_key:"minsColEl",ref:D,class:"lv-time-input__column",role:"listbox","aria-label":"Minute","aria-activedescendant":m.value!==null?`lv-time-m-${h(u)}-${m.value}`:void 0},[(i(!0),r(z,null,A(ae.value,t=>(i(),r("button",{key:t,id:`lv-time-m-${h(u)}-${t}`,type:"button",role:"option",class:g(["lv-time-input__option",{"lv-time-input__option--selected":t===m.value}]),"aria-selected":t===m.value,onClick:p=>oe(t)},c(String(t).padStart(2,"0")),11,$e))),128))],8,ke)]),e.modelValue?(i(),r("div",Ce,[o("button",{type:"button",class:"lv-time-input__action-btn",onClick:se},"Clear")])):b("",!0)])):b("",!0)]),_:1})]),e.error?(i(),r("p",{key:1,id:k,class:"lv-time-input__hint lv-time-input__hint--error",role:"alert"},c(e.error),1)):e.hint?(i(),r("p",{key:2,id:k,class:"lv-time-input__hint"},c(e.hint),1)):b("",!0)],2))}},f=ye(w,[["__scopeId","data-v-b941c70d"]]);w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:"default",displayName:"LvTimeInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Select time'"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"id",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"minuteStep",description:"Interval between minute options (1–30)",type:{name:"number"},defaultValue:{func:!1,value:"5"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/livery/livery/src/components/LvTimeInput/LvTimeInput.vue"]});const Ne={title:"Form/TimeInput",component:f,tags:["autodocs"],argTypes:{modelValue:{control:"text"},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},required:{control:"boolean"},minuteStep:{control:{type:"number",min:1,max:30}}},parameters:{docs:{description:{component:'\n**LvTimeInput** — Accessible time picker with scrollable hour/minute columns.\n\n- `modelValue` is an `\'HH:MM\'` string (24-hour) or `null`\n- Two scrollable columns: hours (00–23) and minutes (configurable step)\n- Selected time scrolls into view when the panel opens\n- `minuteStep` controls the interval between minute options (default 5)\n\n**Accessibility**\n- Trigger uses `aria-expanded` and `aria-haspopup="listbox"`\n- Each column has `role="listbox"` with options using `aria-selected`\n- Error message uses `role="alert"`\n        '}}}},x={render:e=>({components:{LvTimeInput:f},data(){return{value:e.modelValue??null}},setup(){return{args:e}},template:`
      <div style="max-width: 200px; padding-bottom: 250px;">
        <LvTimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value ?? 'null' }}</code>
        </p>
      </div>
    `}),args:{label:"Departure time",hint:"24-hour format.",minuteStep:5}},S={name:"With Value",render:e=>({components:{LvTimeInput:f},data(){return{value:"07:30"}},setup(){return{args:e}},template:`
      <div style="max-width: 200px; padding-bottom: 250px;">
        <LvTimeInput v-bind="args" v-model="value" />
      </div>
    `}),args:{label:"Departure time",minuteStep:5}},V={name:"1-Minute Step",render:e=>({components:{LvTimeInput:f},data(){return{value:"08:42"}},setup(){return{args:e}},template:`
      <div style="max-width: 200px; padding-bottom: 250px;">
        <LvTimeInput v-bind="args" v-model="value" />
      </div>
    `}),args:{label:"Exact departure time",minuteStep:1}},I={name:"Error State",render:e=>({components:{LvTimeInput:f},data(){return{value:null}},setup(){return{args:e}},template:'<div style="max-width: 200px;"><LvTimeInput v-bind="args" v-model="value" /></div>'}),args:{label:"Departure time",error:"A departure time is required.",required:!0}},T={render:e=>({components:{LvTimeInput:f},setup(){return{args:e}},template:'<div style="max-width: 200px;"><LvTimeInput v-bind="args" model-value="07:30" /></div>'}),args:{label:"Departure time",disabled:!0}};var O,F,W;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvTimeInput
    },
    data() {
      return {
        value: args.modelValue ?? null
      };
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 200px; padding-bottom: 250px;">
        <LvTimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value ?? 'null' }}</code>
        </p>
      </div>
    \`
  }),
  args: {
    label: 'Departure time',
    hint: '24-hour format.',
    minuteStep: 5
  }
}`,...(W=(F=x.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var K,U,j;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'With Value',
  render: args => ({
    components: {
      LvTimeInput
    },
    data() {
      return {
        value: '07:30'
      };
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 200px; padding-bottom: 250px;">
        <LvTimeInput v-bind="args" v-model="value" />
      </div>
    \`
  }),
  args: {
    label: 'Departure time',
    minuteStep: 5
  }
}`,...(j=(U=S.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var R,G,J;V.parameters={...V.parameters,docs:{...(R=V.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '1-Minute Step',
  render: args => ({
    components: {
      LvTimeInput
    },
    data() {
      return {
        value: '08:42'
      };
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 200px; padding-bottom: 250px;">
        <LvTimeInput v-bind="args" v-model="value" />
      </div>
    \`
  }),
  args: {
    label: 'Exact departure time',
    minuteStep: 1
  }
}`,...(J=(G=V.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var P,Q,X;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Error State',
  render: args => ({
    components: {
      LvTimeInput
    },
    data() {
      return {
        value: null
      };
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="max-width: 200px;"><LvTimeInput v-bind="args" v-model="value" /></div>\`
  }),
  args: {
    label: 'Departure time',
    error: 'A departure time is required.',
    required: true
  }
}`,...(X=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvTimeInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="max-width: 200px;"><LvTimeInput v-bind="args" model-value="07:30" /></div>\`
  }),
  args: {
    label: 'Departure time',
    disabled: true
  }
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Be=["Default","WithValue","OneMinuteStep","ErrorState","Disabled"];export{x as Default,T as Disabled,I as ErrorState,V as OneMinuteStep,S as WithValue,Be as __namedExportsOrder,Ne as default};
