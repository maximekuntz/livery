import{s as J,u as Y,d as n,v as k,t as s,f as m,e as o,g as R,x as C,B as z,C as Z,D as ee,F as le,r as te,n as P,h as p,p as v,o as a,j as ae,z as ne}from"./iframe-fzFKqeWd.js";import{L}from"./LvBaseIcon-Cfre48RC.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-C1FmrZbK.js";const oe=["id"],ie={key:0,class:"lv-multi-select__required","aria-hidden":"true"},re=["aria-expanded","aria-labelledby","aria-describedby","aria-invalid","disabled"],ue={class:"lv-multi-select__trigger-text"},de={key:0,class:"lv-multi-select__placeholder"},ce={key:1},me={key:2},pe={class:"lv-multi-select__overflow-count"},ve=["aria-labelledby"],fe={class:"lv-multi-select__search"},he={class:"lv-multi-select__list",role:"presentation"},be=["aria-selected","aria-disabled","onClick"],ye={class:"lv-multi-select__option-check","aria-hidden":"true"},_e={key:0,class:"lv-multi-select__empty"},Se={key:0,class:"lv-multi-select__footer"},ge={class:"lv-multi-select__count"},xe=["id"],Ie=["id"],S={__name:"LvMultiSelectInput",props:{modelValue:{type:Array,default:()=>[]},options:{type:Array,default:()=>[]},label:{type:String,default:void 0},placeholder:{type:String,default:"Select options…"},hint:{type:String,default:void 0},error:{type:String,default:void 0},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},id:{type:String,default:void 0}},emits:["update:modelValue"],setup(e,{emit:U}){const r=e,M=U,N=Math.random().toString(36).slice(2,8),x=p(()=>`lv-ms-label-${N}`),I=p(()=>`lv-ms-desc-${N}`),u=v(!1),d=v(""),T=v(null),O=v(null),V=p(()=>r.options.map(l=>typeof l=="string"?{label:l,value:l}:l)),A=p(()=>{if(!d.value)return V.value;const l=d.value.toLowerCase();return V.value.filter(i=>i.label.toLowerCase().includes(l))}),c=p(()=>V.value.filter(l=>r.modelValue.includes(l.value)));function f(l){return r.modelValue.includes(l)}function B(l){if(typeof l=="string"||typeof l=="number"){const i=f(l)?r.modelValue.filter(t=>t!==l):[...r.modelValue,l];M("update:modelValue",i)}else{if(r.disabled)return;u.value=!u.value,u.value&&(d.value="",ne(()=>{var i;return(i=O.value)==null?void 0:i.focus()}))}}function h(){u.value=!1}function Q(){M("update:modelValue",[])}function D(l){T.value&&!T.value.contains(l.target)&&h()}J(()=>document.addEventListener("mousedown",D)),Y(()=>document.removeEventListener("mousedown",D));const X=p(()=>["lv-multi-select",{"lv-multi-select--open":u.value,"lv-multi-select--disabled":r.disabled,"lv-multi-select--error":!!r.error}]);return(l,i)=>(a(),n("div",{class:P(X.value),ref_key:"rootRef",ref:T},[e.label?(a(),n("label",{key:0,class:"lv-multi-select__label",id:x.value},[k(s(e.label)+" ",1),e.required?(a(),n("span",ie,"*")):m("",!0)],8,oe)):m("",!0),o("button",{type:"button",class:"lv-multi-select__trigger","aria-haspopup":"listbox","aria-expanded":u.value,"aria-labelledby":e.label?x.value:void 0,"aria-describedby":e.hint||e.error?I.value:void 0,"aria-invalid":!!e.error,disabled:e.disabled,onClick:B,onKeydown:[C(h,["escape"]),C(h,["tab"])]},[o("span",ue,[c.value.length===0?(a(),n("span",de,s(e.placeholder),1)):c.value.length<=2?(a(),n("span",ce,s(c.value.map(t=>t.label).join(", ")),1)):(a(),n("span",me,[k(s(c.value[0].label)+", "+s(c.value[1].label)+" ",1),o("span",pe,"+"+s(c.value.length-2),1)]))]),R(L,{name:u.value?"chevron-up":"chevron-down",size:"sm","aria-hidden":"true"},null,8,["name"])],40,re),z(o("div",{class:"lv-multi-select__dropdown",role:"listbox","aria-multiselectable":!0,"aria-labelledby":e.label?x.value:void 0},[o("div",fe,[R(L,{name:"search",size:"sm",class:"lv-multi-select__search-icon","aria-hidden":"true"}),z(o("input",{ref_key:"searchRef",ref:O,"onUpdate:modelValue":i[0]||(i[0]=t=>d.value=t),type:"text",class:"lv-multi-select__search-input",placeholder:"Filter…","aria-label":"Filter options",onKeydown:C(h,["escape"])},null,544),[[ee,d.value]])]),o("ul",he,[(a(!0),n(le,null,te(A.value,t=>(a(),n("li",{key:t.value,role:"option","aria-selected":f(t.value),"aria-disabled":t.disabled,class:P(["lv-multi-select__option",{"lv-multi-select__option--selected":f(t.value),"lv-multi-select__option--disabled":t.disabled}]),onClick:Te=>!t.disabled&&B(t.value)},[o("span",ye,[f(t.value)?(a(),ae(L,{key:0,name:"check",size:"xs"})):m("",!0)]),k(" "+s(t.label),1)],10,be))),128)),A.value.length===0?(a(),n("li",_e,' No options match "'+s(d.value)+'" ',1)):m("",!0)]),e.modelValue.length>0?(a(),n("div",Se,[o("button",{type:"button",class:"lv-multi-select__clear",onClick:Q}," Clear all "),o("span",ge,s(e.modelValue.length)+" selected",1)])):m("",!0)],8,ve),[[Z,u.value]]),e.error?(a(),n("p",{key:1,id:I.value,class:"lv-multi-select__hint lv-multi-select__hint--error",role:"alert"},s(e.error),9,xe)):e.hint?(a(),n("p",{key:2,id:I.value,class:"lv-multi-select__hint"},s(e.hint),9,Ie)):m("",!0)],2))}},g=se(S,[["__scopeId","data-v-392cbc1a"]]);S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{exportName:"default",displayName:"LvMultiSelectInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"options",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'Select options…'"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"id",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/livery/livery/src/components/LvMultiSelectInput/LvMultiSelectInput.vue"]});const w=[{label:"London Paddington",value:"PAD"},{label:"Bristol Temple Meads",value:"BRI"},{label:"Reading",value:"RDG"},{label:"Bath Spa",value:"BTH"},{label:"Swindon",value:"SWI"},{label:"Oxford",value:"OXF"},{label:"Chippenham",value:"CPM",disabled:!0},{label:"Didcot Parkway",value:"DID"}],we={title:"Components/MultiSelectInput",component:g,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"}}},b={render:()=>({components:{LvMultiSelectInput:g},setup(){return{selected:v([]),STATIONS:w}},template:`
      <div style="max-width:320px">
        <LvMultiSelectInput
          v-model="selected"
          :options="STATIONS"
          label="Calling points"
          placeholder="Select stations…"
          hint="Choose all stations this service calls at."
        />
        <p style="margin-top:1rem;font-size:var(--text-xs);color:var(--text-secondary)">
          Selected: {{ selected.join(', ') || '—' }}
        </p>
      </div>
    `})},y={render:()=>({components:{LvMultiSelectInput:g},setup(){return{STATIONS:w}},template:`
      <div style="max-width:320px">
        <LvMultiSelectInput
          :modelValue="[]"
          :options="STATIONS"
          label="Calling points"
          error="Select at least one calling point."
        />
      </div>
    `})},_={render:()=>({components:{LvMultiSelectInput:g},setup(){return{selected:v(["PAD","RDG","BTH","BRI"]),STATIONS:w}},template:`
      <div style="max-width:320px">
        <LvMultiSelectInput
          v-model="selected"
          :options="STATIONS"
          label="Calling points"
        />
      </div>
    `})};var q,E,F;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvMultiSelectInput
    },
    setup() {
      const selected = ref([]);
      return {
        selected,
        STATIONS
      };
    },
    template: \`
      <div style="max-width:320px">
        <LvMultiSelectInput
          v-model="selected"
          :options="STATIONS"
          label="Calling points"
          placeholder="Select stations…"
          hint="Choose all stations this service calls at."
        />
        <p style="margin-top:1rem;font-size:var(--text-xs);color:var(--text-secondary)">
          Selected: {{ selected.join(', ') || '—' }}
        </p>
      </div>
    \`
  })
}`,...(F=(E=b.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var j,G,H;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvMultiSelectInput
    },
    setup() {
      return {
        STATIONS
      };
    },
    template: \`
      <div style="max-width:320px">
        <LvMultiSelectInput
          :modelValue="[]"
          :options="STATIONS"
          label="Calling points"
          error="Select at least one calling point."
        />
      </div>
    \`
  })
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,W,$;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LvMultiSelectInput
    },
    setup() {
      const selected = ref(['PAD', 'RDG', 'BTH', 'BRI']);
      return {
        selected,
        STATIONS
      };
    },
    template: \`
      <div style="max-width:320px">
        <LvMultiSelectInput
          v-model="selected"
          :options="STATIONS"
          label="Calling points"
        />
      </div>
    \`
  })
}`,...($=(W=_.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const Me=["Default","WithError","Preselected"];export{b as Default,_ as Preselected,y as WithError,Me as __namedExportsOrder,we as default};
