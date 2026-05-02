import{j as d,e as T,g as b,w as h,G as L,n as _,H as x,h as k,o as m,d as C,F as B,r as w,m as I,I as N}from"./iframe-fzFKqeWd.js";import{L as S}from"./LvToast-BTsr5qmq.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{L as V}from"./LvButton-srXpjCBU.js";import"./preload-helper-C1FmrZbK.js";import"./LvBaseIcon-Cfre48RC.js";const c={__name:"LvToastContainer",props:{toasts:{type:Array,default:()=>[]},position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"].includes(e)}},emits:["remove"],setup(e){const t=e,o=k(()=>["lv-toast-container",`lv-toast-container--${t.position}`]);return(s,n)=>(m(),d(x,{to:"body"},[T("div",{class:_(o.value),"aria-label":"Notifications",role:"region"},[b(L,{name:"lv-toast",tag:"div",class:"lv-toast-container__stack"},{default:h(()=>[(m(!0),C(B,null,w(e.toasts,r=>(m(),d(S,I({key:r.id},{ref_for:!0},r,{onRemove:n[0]||(n[0]=l=>s.$emit("remove",l))}),null,16))),128))]),_:1})],2)]))}},g=A(c,[["__scopeId","data-v-c5bb86d7"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"LvToastContainer",description:"",tags:{},props:[{name:"toasts",description:"Array of toast objects from useToast()",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"position",type:{name:"string"},defaultValue:{func:!1,value:"'bottom-right'"},values:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]}],events:[{name:"remove"}],sourceFiles:["/home/runner/work/livery/livery/src/components/notification/LvToastContainer/LvToastContainer.vue"]});const a=N([]);let j=0;function D({message:e,title:t,variant:o="info",duration:s=4e3}){const n=++j;return a.push({id:n,message:e,title:t,variant:o}),s>0&&setTimeout(()=>y(n),s),n}function y(e){const t=a.findIndex(o=>o.id===e);t!==-1&&a.splice(t,1)}function O(){a.splice(0,a.length)}function z(){return{toasts:a,add:D,remove:y,clear:O}}const H={title:"Notification/ToastContainer",component:g,tags:["autodocs"],argTypes:{position:{control:{type:"select"},options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"],table:{defaultValue:{summary:"bottom-right"}}}},parameters:{docs:{description:{component:`
Mount once at the app root. Connect to \`useToast()\`:

\`\`\`vue
<!-- App.vue -->
<LvToastContainer :toasts="toasts" @remove="remove" />

<script setup>
import { useToast } from 'livery'
const { toasts, remove } = useToast()
<\/script>
\`\`\`

Dispatch from any component:
\`\`\`js
const { add } = useToast()
add({ variant: 'success', title: 'Done', message: 'Booking confirmed.' })
\`\`\`
        `}}}},i={render:e=>({components:{LvToastContainer:g,LvButton:V},setup(){const{toasts:t,add:o,remove:s}=z(),n=["info","success","warning","danger"],r={info:{title:"Information",message:"Track maintenance on Sunday 04:00–06:00."},success:{title:"Booking confirmed",message:"Your seat on 1A23 has been reserved."},warning:{title:"Delay expected",message:"The 16:15 is running 12 minutes late."},danger:{title:"Service cancelled",message:"The 18:45 to Oxford has been cancelled."}};function l(p){o({variant:p,...r[p]})}return{args:e,toasts:t,remove:s,variants:n,fire:l}},template:`
      <div>
        <div style="display:flex;gap:var(--space-3);flex-wrap:wrap">
          <LvButton
            v-for="v in variants"
            :key="v"
            variant="outlined"
            size="sm"
            @click="fire(v)"
          >
            {{ v }}
          </LvButton>
        </div>
        <LvToastContainer :toasts="toasts" :position="args.position" @remove="remove" />
      </div>
    `}),args:{position:"bottom-right"}};var v,u,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvToastContainer,
      LvButton
    },
    setup() {
      const {
        toasts,
        add,
        remove
      } = useToast();
      const variants = ['info', 'success', 'warning', 'danger'];
      const labels = {
        info: {
          title: 'Information',
          message: 'Track maintenance on Sunday 04:00–06:00.'
        },
        success: {
          title: 'Booking confirmed',
          message: 'Your seat on 1A23 has been reserved.'
        },
        warning: {
          title: 'Delay expected',
          message: 'The 16:15 is running 12 minutes late.'
        },
        danger: {
          title: 'Service cancelled',
          message: 'The 18:45 to Oxford has been cancelled.'
        }
      };
      function fire(variant) {
        add({
          variant,
          ...labels[variant]
        });
      }
      return {
        args,
        toasts,
        remove,
        variants,
        fire
      };
    },
    template: \`
      <div>
        <div style="display:flex;gap:var(--space-3);flex-wrap:wrap">
          <LvButton
            v-for="v in variants"
            :key="v"
            variant="outlined"
            size="sm"
            @click="fire(v)"
          >
            {{ v }}
          </LvButton>
        </div>
        <LvToastContainer :toasts="toasts" :position="args.position" @remove="remove" />
      </div>
    \`
  }),
  args: {
    position: 'bottom-right'
  }
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const M=["Playground"];export{i as Playground,M as __namedExportsOrder,H as default};
