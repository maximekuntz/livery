import{p as D,q as Ee,s as Ne,u as Ye,d as o,v as qe,t as m,f as T,e as l,x as ze,y as Ae,g as w,n as h,w as Be,T as Fe,h as c,z as We,o as s,F as M,r as L,A as K}from"./iframe-fzFKqeWd.js";import{L as k}from"./LvBaseIcon-Cfre48RC.js";import{_ as He}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-C1FmrZbK.js";const Ke=["for"],Je={key:0,class:"lv-dt-input__required","aria-hidden":"true"},Pe={class:"lv-dt-input__wrapper"},Ge=["id","disabled","aria-expanded","aria-describedby","aria-invalid","onKeydown"],Ue={key:0,class:"lv-dt-input__panel",role:"dialog","aria-label":"Choose date and time"},je={class:"lv-dt-input__body"},Re={class:"lv-dt-input__calendar"},Qe={class:"lv-dt-input__nav"},Xe={class:"lv-dt-input__month-label"},Ze=["aria-label"],et=["disabled","aria-selected","aria-current","aria-label","onClick"],tt={class:"lv-dt-input__actions"},nt={class:"lv-dt-input__time"},at={class:"lv-dt-input__time-columns"},lt=["id","aria-selected","onClick"],rt=["id","aria-selected","onClick"],q={__name:"LvDateTimeInput",props:{modelValue:{type:String,default:null},label:{type:String,default:void 0},placeholder:{type:String,default:"Select date and time"},hint:{type:String,default:void 0},error:{type:String,default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},id:{type:String,default:void 0},min:{type:String,default:void 0},max:{type:String,default:void 0},minuteStep:{type:Number,default:5}},emits:["update:modelValue"],setup(a,{emit:ve}){const i=a,b=ve,fe=["Mo","Tu","We","Th","Fr","Sa","Su"],ye=["January","February","March","April","May","June","July","August","September","October","November","December"],ge=Array.from({length:24},(e,n)=>n),y=Math.random().toString(36).slice(2,8),J=c(()=>i.id??`lv-dt-${y}`),z=`lv-dt-desc-${y}`,A=D(null),B=D(null),F=D(null),p=D(!1),g=c(()=>{var e;return((e=i.modelValue)==null?void 0:e.split("T")[0])??null}),_=c(()=>{var e;return((e=i.modelValue)==null?void 0:e.split("T")[1])??null}),S=c(()=>_.value?parseInt(_.value.split(":")[0],10):null),x=c(()=>_.value?parseInt(_.value.split(":")[1],10):null),he=c(()=>{const e=Math.max(1,Math.min(30,i.minuteStep)),n=[];for(let t=0;t<60;t+=e)n.push(t);return n});function be(){if(g.value){const[n,t]=g.value.split("-").map(Number);return{year:n,month:t-1}}const e=new Date;return{year:e.getFullYear(),month:e.getMonth()}}const r=D(be());Ee(g,e=>{if(e){const[n,t]=e.split("-").map(Number);r.value={year:n,month:t-1}}});function P(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}const G=P(new Date),_e=c(()=>{const{year:e,month:n}=r.value,t=new Date(e,n,1),u=new Date(e,n+1,0),v=[],$e=(t.getDay()+6)%7;for(let d=$e-1;d>=0;d--)v.push(W(new Date(e,n,-d),!0));for(let d=1;d<=u.getDate();d++)v.push(W(new Date(e,n,d),!1));const Oe=(7-v.length%7)%7;for(let d=1;d<=Oe;d++)v.push(W(new Date(e,n+1,d),!0));return v});function W(e,n){const t=P(e),u=n||i.min&&t<i.min.slice(0,10)||i.max&&t>i.max.slice(0,10);return{iso:t,day:e.getDate(),isToday:t===G,isSelected:t===g.value,isOutside:n,isDisabled:u,ariaLabel:e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}}const U=c(()=>`${ye[r.value.month]} ${r.value.year}`),Se=c(()=>{if(!i.modelValue)return i.placeholder;const[e,n]=i.modelValue.split("T"),[t,u,v]=e.split("-").map(Number),H=new Date(t,u-1,v).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});return n?`${H}, ${n}`:H});function xe(){i.readonly||(p.value?I():(p.value=!0,We(De)))}function I(){p.value=!1}function De(){if(B.value&&S.value!==null){const e=B.value.querySelector(`#lv-dt-h-${y}-${S.value}`);e==null||e.scrollIntoView({block:"center",behavior:"instant"})}if(F.value&&x.value!==null){const e=F.value.querySelector(`#lv-dt-m-${y}-${x.value}`);e==null||e.scrollIntoView({block:"center",behavior:"instant"})}}function Te(){r.value.month===0?r.value={year:r.value.year-1,month:11}:r.value={...r.value,month:r.value.month-1}}function we(){r.value.month===11?r.value={year:r.value.year+1,month:0}:r.value={...r.value,month:r.value.month+1}}function V(e,n){const t=e??g.value,u=n??_.value??"00:00";return t?`${t}T${u}`:null}function Ie(e){e.isDisabled||b("update:modelValue",V(e.iso,null))}function Ve(){b("update:modelValue",V(G,null)),r.value={year:new Date().getFullYear(),month:new Date().getMonth()}}function Me(e){const n=`${String(e).padStart(2,"0")}:${String(x.value??0).padStart(2,"0")}`;b("update:modelValue",V(null,n))}function Le(e){const n=`${String(S.value??0).padStart(2,"0")}:${String(e).padStart(2,"0")}`;b("update:modelValue",V(null,n))}function ke(){b("update:modelValue",null),I()}function j(e){p.value&&A.value&&!A.value.contains(e.target)&&I()}Ne(()=>document.addEventListener("mousedown",j)),Ye(()=>document.removeEventListener("mousedown",j));const Ce=c(()=>["lv-dt-input",{"lv-dt-input--disabled":i.disabled,"lv-dt-input--readonly":i.readonly,"lv-dt-input--error":!!i.error}]);return(e,n)=>(s(),o("div",{ref_key:"rootEl",ref:A,class:h(Ce.value)},[a.label?(s(),o("label",{key:0,for:J.value,class:"lv-dt-input__label"},[qe(m(a.label),1),a.required?(s(),o("span",Je," *")):T("",!0)],8,Ke)):T("",!0),l("div",Pe,[l("button",{type:"button",id:J.value,class:"lv-dt-input__trigger",disabled:a.disabled,"aria-expanded":p.value,"aria-haspopup":"dialog","aria-describedby":a.hint||a.error?z:void 0,"aria-invalid":a.error?!0:void 0,onClick:xe,onKeydown:ze(Ae(I,["stop"]),["esc"])},[w(k,{name:"calendar",size:"sm",class:"lv-dt-input__icon","aria-hidden":"true"}),l("span",{class:h(["lv-dt-input__value",{"lv-dt-input__value--placeholder":!a.modelValue}])},m(Se.value),3),w(k,{name:"chevron-down",size:"sm",class:h(["lv-dt-input__chevron",{"lv-dt-input__chevron--open":p.value}]),"aria-hidden":"true"},null,8,["class"])],40,Ge),w(Fe,{name:"lv-dt-panel"},{default:Be(()=>[p.value?(s(),o("div",Ue,[l("div",je,[l("div",Re,[l("div",Qe,[l("button",{type:"button",class:"lv-dt-input__nav-btn","aria-label":"Previous month",onClick:Te},[w(k,{name:"chevron-left",size:"sm","aria-hidden":"true"})]),l("span",Xe,m(U.value),1),l("button",{type:"button",class:"lv-dt-input__nav-btn","aria-label":"Next month",onClick:we},[w(k,{name:"chevron-right",size:"sm","aria-hidden":"true"})])]),l("div",{class:"lv-dt-input__grid",role:"grid","aria-label":U.value},[(s(),o(M,null,L(fe,t=>l("div",{key:t,class:"lv-dt-input__weekday",role:"columnheader","aria-hidden":"true"},m(t),1)),64)),(s(!0),o(M,null,L(_e.value,t=>(s(),o("button",{key:t.iso,type:"button",role:"gridcell",class:h(["lv-dt-input__day",{"lv-dt-input__day--today":t.isToday,"lv-dt-input__day--selected":t.isSelected,"lv-dt-input__day--outside":t.isOutside,"lv-dt-input__day--disabled":t.isDisabled}]),disabled:t.isDisabled,"aria-selected":t.isSelected||void 0,"aria-current":t.isToday?"date":void 0,"aria-label":t.ariaLabel,onClick:u=>Ie(t)},m(t.day),11,et))),128))],8,Ze),l("div",tt,[l("button",{type:"button",class:"lv-dt-input__action-btn",onClick:Ve},"Today"),g.value?(s(),o("button",{key:0,type:"button",class:"lv-dt-input__action-btn lv-dt-input__action-btn--muted",onClick:ke},"Clear")):T("",!0)])]),l("div",nt,[n[1]||(n[1]=l("div",{class:"lv-dt-input__time-heading"},"Time",-1)),l("div",at,[l("div",{ref_key:"hoursColEl",ref:B,class:"lv-dt-input__time-column",role:"listbox","aria-label":"Hour"},[(s(!0),o(M,null,L(K(ge),t=>(s(),o("button",{key:t,id:`lv-dt-h-${K(y)}-${t}`,type:"button",role:"option",class:h(["lv-dt-input__time-option",{"lv-dt-input__time-option--selected":t===S.value}]),"aria-selected":t===S.value,onClick:u=>Me(t)},m(String(t).padStart(2,"0")),11,lt))),128))],512),n[0]||(n[0]=l("div",{class:"lv-dt-input__time-sep","aria-hidden":"true"},":",-1)),l("div",{ref_key:"minsColEl",ref:F,class:"lv-dt-input__time-column",role:"listbox","aria-label":"Minute"},[(s(!0),o(M,null,L(he.value,t=>(s(),o("button",{key:t,id:`lv-dt-m-${K(y)}-${t}`,type:"button",role:"option",class:h(["lv-dt-input__time-option",{"lv-dt-input__time-option--selected":t===x.value}]),"aria-selected":t===x.value,onClick:u=>Le(t)},m(String(t).padStart(2,"0")),11,rt))),128))],512)])])])])):T("",!0)]),_:1})]),a.error?(s(),o("p",{key:1,id:z,class:"lv-dt-input__hint lv-dt-input__hint--error",role:"alert"},m(a.error),1)):a.hint?(s(),o("p",{key:2,id:z,class:"lv-dt-input__hint"},m(a.hint),1)):T("",!0)],2))}},f=He(q,[["__scopeId","data-v-c3bff209"]]);q.__docgenInfo=Object.assign({displayName:q.name??q.__name},{exportName:"default",displayName:"LvDateTimeInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Select date and time'"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"id",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"min",description:"ISO date string — dates before this are disabled",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"max",description:"ISO date string — dates after this are disabled",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"minuteStep",description:"Interval between minute options",type:{name:"number"},defaultValue:{func:!1,value:"5"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/livery/livery/src/components/LvDateTimeInput/LvDateTimeInput.vue"]});const ut={title:"Form/DateTimeInput",component:f,tags:["autodocs"],argTypes:{modelValue:{control:"text"},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"},required:{control:"boolean"},minuteStep:{control:{type:"number",min:1,max:30}},min:{control:"text"},max:{control:"text"}},parameters:{docs:{description:{component:'\n**LvDateTimeInput** — Accessible combined date and time picker.\n\n- `modelValue` is an ISO datetime string (`YYYY-MM-DDTHH:MM`) or `null`\n- Single trigger opens a single panel: calendar on the left, time columns on the right\n- Selecting a date sets the date part; time columns update the time part independently\n- "Today" navigates to the current date; "Clear" resets the entire value\n- `min` / `max` accept ISO date strings (`YYYY-MM-DD`) to constrain the calendar\n\n**Accessibility**\n- Trigger uses `aria-expanded` and `aria-haspopup="dialog"`\n- Calendar grid cells have `aria-selected` and `aria-current="date"`\n- Time columns use `role="listbox"` + `aria-selected`\n- Error message uses `role="alert"`\n        '}}}},C={render:a=>({components:{LvDateTimeInput:f},data(){return{value:a.modelValue??null}},setup(){return{args:a}},template:`
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value ?? 'null' }}</code>
        </p>
      </div>
    `}),args:{label:"Scheduled departure",hint:"Select the date and time of departure.",minuteStep:5}},$={name:"With Value",render:a=>({components:{LvDateTimeInput:f},data(){return{value:"2026-05-12T07:30"}},setup(){return{args:a}},template:`
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value }}</code>
        </p>
      </div>
    `}),args:{label:"Scheduled departure",minuteStep:5}},O={name:"Min / Max Constraints",render:a=>({components:{LvDateTimeInput:f},data(){return{value:null}},setup(){return{args:a}},template:`
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 0.5rem; font-size: var(--text-xs); color: var(--text-secondary);">
          Only dates within the next 14 days are selectable.
        </p>
      </div>
    `}),args:{label:"Service slot",min:new Date().toISOString().slice(0,10),max:new Date(Date.now()+14*864e5).toISOString().slice(0,10),minuteStep:15}},E={name:"1-Minute Step",render:a=>({components:{LvDateTimeInput:f},data(){return{value:"2026-05-12T08:42"}},setup(){return{args:a}},template:`
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
      </div>
    `}),args:{label:"Exact departure time",minuteStep:1}},N={name:"Error State",render:a=>({components:{LvDateTimeInput:f},data(){return{value:null}},setup(){return{args:a}},template:'<div style="max-width: 320px;"><LvDateTimeInput v-bind="args" v-model="value" /></div>'}),args:{label:"Scheduled departure",error:"A departure date and time is required.",required:!0}},Y={render:a=>({components:{LvDateTimeInput:f},setup(){return{args:a}},template:'<div style="max-width: 320px;"><LvDateTimeInput v-bind="args" model-value="2026-05-12T07:30" /></div>'}),args:{label:"Scheduled departure",disabled:!0}};var R,Q,X;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvDateTimeInput
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
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value ?? 'null' }}</code>
        </p>
      </div>
    \`
  }),
  args: {
    label: 'Scheduled departure',
    hint: 'Select the date and time of departure.',
    minuteStep: 5
  }
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;$.parameters={...$.parameters,docs:{...(Z=$.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With Value',
  render: args => ({
    components: {
      LvDateTimeInput
    },
    data() {
      return {
        value: '2026-05-12T07:30'
      };
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Value: <code>{{ value }}</code>
        </p>
      </div>
    \`
  }),
  args: {
    label: 'Scheduled departure',
    minuteStep: 5
  }
}`,...(te=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,le;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Min / Max Constraints',
  render: args => ({
    components: {
      LvDateTimeInput
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
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
        <p style="margin-top: 0.5rem; font-size: var(--text-xs); color: var(--text-secondary);">
          Only dates within the next 14 days are selectable.
        </p>
      </div>
    \`
  }),
  args: {
    label: 'Service slot',
    min: new Date().toISOString().slice(0, 10),
    max: new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10),
    minuteStep: 15
  }
}`,...(le=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var re,ie,oe;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '1-Minute Step',
  render: args => ({
    components: {
      LvDateTimeInput
    },
    data() {
      return {
        value: '2026-05-12T08:42'
      };
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="max-width: 320px; padding-bottom: 380px;">
        <LvDateTimeInput v-bind="args" v-model="value" />
      </div>
    \`
  }),
  args: {
    label: 'Exact departure time',
    minuteStep: 1
  }
}`,...(oe=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,de,ue;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Error State',
  render: args => ({
    components: {
      LvDateTimeInput
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
    template: \`<div style="max-width: 320px;"><LvDateTimeInput v-bind="args" v-model="value" /></div>\`
  }),
  args: {
    label: 'Scheduled departure',
    error: 'A departure date and time is required.',
    required: true
  }
}`,...(ue=(de=N.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,me,pe;Y.parameters={...Y.parameters,docs:{...(ce=Y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvDateTimeInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="max-width: 320px;"><LvDateTimeInput v-bind="args" model-value="2026-05-12T07:30" /></div>\`
  }),
  args: {
    label: 'Scheduled departure',
    disabled: true
  }
}`,...(pe=(me=Y.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const ct=["Default","WithValue","WithMinMax","OneMinuteStep","ErrorState","Disabled"];export{C as Default,Y as Disabled,N as ErrorState,E as OneMinuteStep,O as WithMinMax,$ as WithValue,ct as __namedExportsOrder,ut as default};
