import{p as T,q as xe,s as De,u as _e,d as s,v as Se,t as c,f as y,e as d,x as we,y as Ve,g as f,n as b,w as Ie,T as Le,h as g,o as i,F as Y,r as W}from"./iframe-fzFKqeWd.js";import{L as x}from"./LvBaseIcon-Cfre48RC.js";import{_ as ke}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-C1FmrZbK.js";const Me=["for"],Ce={key:0,class:"lv-date-input__required","aria-hidden":"true"},Oe={class:"lv-date-input__wrapper"},Te=["id","disabled","aria-expanded","aria-describedby","aria-invalid","onKeydown"],Ee={key:0,class:"lv-date-input__panel",role:"dialog","aria-label":"Choose a date"},Ne={class:"lv-date-input__nav"},qe={class:"lv-date-input__month-label"},Be=["aria-label"],ze=["disabled","aria-selected","aria-current","aria-label","onClick"],Fe={class:"lv-date-input__actions"},L={__name:"LvDateInput",props:{modelValue:{type:String,default:null},label:{type:String,default:void 0},placeholder:{type:String,default:"Select date"},hint:{type:String,default:void 0},error:{type:String,default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},id:{type:String,default:void 0},min:{type:String,default:void 0},max:{type:String,default:void 0}},emits:["update:modelValue"],setup(t,{emit:le}){const n=t,k=le,oe=["Mo","Tu","We","Th","Fr","Sa","Su"],de=["January","February","March","April","May","June","July","August","September","October","November","December"],E=Math.random().toString(36).slice(2,8),N=g(()=>n.id??`lv-date-${E}`),M=`lv-date-desc-${E}`,C=T(null),u=T(!1);function se(){if(n.modelValue){const[l,a]=n.modelValue.split("-").map(Number);return{year:l,month:a-1}}const e=new Date;return{year:e.getFullYear(),month:e.getMonth()}}const r=T(se());xe(()=>n.modelValue,e=>{if(e){const[l,a]=e.split("-").map(Number);r.value={year:l,month:a-1}}});function q(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}const B=q(new Date),ie=g(()=>{const{year:e,month:l}=r.value,a=new Date(e,l,1),h=new Date(e,l+1,0),v=[],he=(a.getDay()+6)%7;for(let o=he-1;o>=0;o--)v.push(O(new Date(e,l,-o),!0));for(let o=1;o<=h.getDate();o++)v.push(O(new Date(e,l,o),!1));const be=(7-v.length%7)%7;for(let o=1;o<=be;o++)v.push(O(new Date(e,l+1,o),!0));return v});function O(e,l){const a=q(e),h=l||n.min&&a<n.min||n.max&&a>n.max;return{iso:a,day:e.getDate(),isToday:a===B,isSelected:a===n.modelValue,isOutside:l,isDisabled:h,ariaLabel:e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}}const z=g(()=>`${de[r.value.month]} ${r.value.year}`),ue=g(()=>{if(!n.modelValue)return n.placeholder;const[e,l,a]=n.modelValue.split("-").map(Number);return new Date(e,l-1,a).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})});function ce(){n.readonly||(u.value?m():u.value=!0)}function m(){u.value=!1}function pe(){r.value.month===0?r.value={year:r.value.year-1,month:11}:r.value={...r.value,month:r.value.month-1}}function me(){r.value.month===11?r.value={year:r.value.year+1,month:0}:r.value={...r.value,month:r.value.month+1}}function ve(e){e.isDisabled||(k("update:modelValue",e.iso),m())}function ye(){const e=B;n.min&&e<n.min||n.max&&e>n.max||(k("update:modelValue",e),r.value={year:new Date().getFullYear(),month:new Date().getMonth()},m())}function fe(){k("update:modelValue",null),m()}function F(e){u.value&&C.value&&!C.value.contains(e.target)&&m()}De(()=>document.addEventListener("mousedown",F)),_e(()=>document.removeEventListener("mousedown",F));const ge=g(()=>["lv-date-input",{"lv-date-input--disabled":n.disabled,"lv-date-input--readonly":n.readonly,"lv-date-input--error":!!n.error}]);return(e,l)=>(i(),s("div",{ref_key:"rootEl",ref:C,class:b(ge.value)},[t.label?(i(),s("label",{key:0,for:N.value,class:"lv-date-input__label"},[Se(c(t.label),1),t.required?(i(),s("span",Ce," *")):y("",!0)],8,Me)):y("",!0),d("div",Oe,[d("button",{type:"button",id:N.value,class:"lv-date-input__trigger",disabled:t.disabled,"aria-expanded":u.value,"aria-haspopup":"dialog","aria-describedby":t.hint||t.error?M:void 0,"aria-invalid":t.error?!0:void 0,onClick:ce,onKeydown:we(Ve(m,["stop"]),["esc"])},[f(x,{name:"calendar",size:"sm",class:"lv-date-input__icon","aria-hidden":"true"}),d("span",{class:b(["lv-date-input__value",{"lv-date-input__value--placeholder":!t.modelValue}])},c(ue.value),3),f(x,{name:"chevron-down",size:"sm",class:b(["lv-date-input__chevron",{"lv-date-input__chevron--open":u.value}]),"aria-hidden":"true"},null,8,["class"])],40,Te),f(Le,{name:"lv-date-panel"},{default:Ie(()=>[u.value?(i(),s("div",Ee,[d("div",Ne,[d("button",{type:"button",class:"lv-date-input__nav-btn","aria-label":"Previous month",onClick:pe},[f(x,{name:"chevron-left",size:"sm","aria-hidden":"true"})]),d("span",qe,c(z.value),1),d("button",{type:"button",class:"lv-date-input__nav-btn","aria-label":"Next month",onClick:me},[f(x,{name:"chevron-right",size:"sm","aria-hidden":"true"})])]),d("div",{class:"lv-date-input__grid",role:"grid","aria-label":z.value},[(i(),s(Y,null,W(oe,a=>d("div",{key:a,class:"lv-date-input__weekday",role:"columnheader","aria-hidden":"true"},c(a),1)),64)),(i(!0),s(Y,null,W(ie.value,a=>(i(),s("button",{key:a.iso,type:"button",role:"gridcell",class:b(["lv-date-input__day",{"lv-date-input__day--today":a.isToday,"lv-date-input__day--selected":a.isSelected,"lv-date-input__day--outside":a.isOutside,"lv-date-input__day--disabled":a.isDisabled}]),disabled:a.isDisabled,"aria-selected":a.isSelected||void 0,"aria-current":a.isToday?"date":void 0,"aria-label":a.ariaLabel,onClick:h=>ve(a)},c(a.day),11,ze))),128))],8,Be),d("div",Fe,[d("button",{type:"button",class:"lv-date-input__action-btn",onClick:ye},"Today"),t.modelValue?(i(),s("button",{key:0,type:"button",class:"lv-date-input__action-btn lv-date-input__action-btn--muted",onClick:fe},"Clear")):y("",!0)])])):y("",!0)]),_:1})]),t.error?(i(),s("p",{key:1,id:M,class:"lv-date-input__hint lv-date-input__hint--error",role:"alert"},c(t.error),1)):t.hint?(i(),s("p",{key:2,id:M,class:"lv-date-input__hint"},c(t.hint),1)):y("",!0)],2))}},p=ke(L,[["__scopeId","data-v-dd0b90b8"]]);L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{exportName:"default",displayName:"LvDateInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Select date'"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"id",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"min",description:"ISO date string — dates before this are disabled",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"max",description:"ISO date string — dates after this are disabled",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/livery/livery/src/components/LvDateInput/LvDateInput.vue"]});const Ge={title:"Form/DateInput",component:p,tags:["autodocs"],argTypes:{modelValue:{control:"text"},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},required:{control:"boolean"},min:{control:"text"},max:{control:"text"}},parameters:{docs:{description:{component:'\n**LvDateInput** — Accessible date picker with a calendar dropdown.\n\n- `modelValue` is an ISO date string (`YYYY-MM-DD`) or `null`\n- Monday-first calendar grid with today and selected day highlighted\n- `min` / `max` props disable out-of-range dates\n- "Today" and "Clear" quick actions at the bottom of the panel\n- Closes on outside click or Escape\n\n**Accessibility**\n- Trigger button uses `aria-expanded`, `aria-haspopup="dialog"`\n- Grid cells have `aria-selected` and `aria-current="date"` for today\n- Error message uses `role="alert"`\n        '}}}},D={render:t=>({components:{LvDateInput:p},data(){return{value:t.modelValue??null}},setup(){return{args:t}},template:`
      <div style="max-width: 280px; padding-bottom: 320px;">
        <LvDateInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value ?? 'null' }}</code>
        </p>
      </div>
    `}),args:{label:"Departure date",placeholder:"Select date",hint:"Choose a departure date for your service."}},_={name:"With Value",render:t=>({components:{LvDateInput:p},data(){return{value:"2026-05-12"}},setup(){return{args:t}},template:`
      <div style="max-width: 280px; padding-bottom: 320px;">
        <LvDateInput v-bind="args" v-model="value" />
      </div>
    `}),args:{label:"Departure date"}},S={name:"Min / Max Constraints",render:t=>({components:{LvDateInput:p},data(){return{value:null}},setup(){return{args:t}},template:`
      <div style="max-width: 280px; padding-bottom: 320px;">
        <LvDateInput v-bind="args" v-model="value" />
        <p style="margin-top: 0.5rem; font-size: var(--text-xs); color: var(--text-secondary);">
          Only dates in the next 30 days are selectable.
        </p>
      </div>
    `}),args:{label:"Booking date",min:new Date().toISOString().slice(0,10),max:new Date(Date.now()+30*864e5).toISOString().slice(0,10)}},w={name:"Error State",render:t=>({components:{LvDateInput:p},data(){return{value:null}},setup(){return{args:t}},template:'<div style="max-width: 280px;"><LvDateInput v-bind="args" v-model="value" /></div>'}),args:{label:"Departure date",error:"A departure date is required.",required:!0}},V={render:t=>({components:{LvDateInput:p},setup(){return{args:t}},template:'<div style="max-width: 280px;"><LvDateInput v-bind="args" model-value="2026-05-12" /></div>'}),args:{label:"Departure date",disabled:!0}},I={render:t=>({components:{LvDateInput:p},setup(){return{args:t}},template:'<div style="max-width: 280px;"><LvDateInput v-bind="args" model-value="2026-05-12" /></div>'}),args:{label:"Departure date",readonly:!0,hint:"This field is read-only."}};var $,A,K;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvDateInput
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
      <div style="max-width: 280px; padding-bottom: 320px;">
        <LvDateInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value ?? 'null' }}</code>
        </p>
      </div>
    \`
  }),
  args: {
    label: 'Departure date',
    placeholder: 'Select date',
    hint: 'Choose a departure date for your service.'
  }
}`,...(K=(A=D.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var G,J,R;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With Value',
  render: args => ({
    components: {
      LvDateInput
    },
    data() {
      return {
        value: '2026-05-12'
      };
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 280px; padding-bottom: 320px;">
        <LvDateInput v-bind="args" v-model="value" />
      </div>
    \`
  }),
  args: {
    label: 'Departure date'
  }
}`,...(R=(J=_.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var j,H,P;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Min / Max Constraints',
  render: args => ({
    components: {
      LvDateInput
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
    template: \`
      <div style="max-width: 280px; padding-bottom: 320px;">
        <LvDateInput v-bind="args" v-model="value" />
        <p style="margin-top: 0.5rem; font-size: var(--text-xs); color: var(--text-secondary);">
          Only dates in the next 30 days are selectable.
        </p>
      </div>
    \`
  }),
  args: {
    label: 'Booking date',
    min: new Date().toISOString().slice(0, 10),
    max: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10)
  }
}`,...(P=(H=S.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var U,Q,X;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Error State',
  render: args => ({
    components: {
      LvDateInput
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
    template: \`<div style="max-width: 280px;"><LvDateInput v-bind="args" v-model="value" /></div>\`
  }),
  args: {
    label: 'Departure date',
    error: 'A departure date is required.',
    required: true
  }
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvDateInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="max-width: 280px;"><LvDateInput v-bind="args" model-value="2026-05-12" /></div>\`
  }),
  args: {
    label: 'Departure date',
    disabled: true
  }
}`,...(ae=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvDateInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="max-width: 280px;"><LvDateInput v-bind="args" model-value="2026-05-12" /></div>\`
  }),
  args: {
    label: 'Departure date',
    readonly: true,
    hint: 'This field is read-only.'
  }
}`,...(re=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const Je=["Default","WithValue","WithMinMax","ErrorState","Disabled","Readonly"];export{D as Default,V as Disabled,w as ErrorState,I as Readonly,S as WithMinMax,_ as WithValue,Je as __namedExportsOrder,Ge as default};
