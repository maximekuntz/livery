import{p as N,q as F,d as l,t as C,f as y,i as O,e as i,F as k,r as R,g as q,n as z,h as K,o as r,l as _e,v as j,x as G,y as Be}from"./iframe-fzFKqeWd.js";import{L as Ve}from"./LvBaseIcon-Cfre48RC.js";import{L as Me}from"./LvPagination-BTmZVLXv.js";import{_ as De}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{L as v}from"./LvBadge-BaKnQZ2B.js";import"./LvButton-srXpjCBU.js";import"./preload-helper-C1FmrZbK.js";const Ie={key:0,class:"lv-table__toolbar"},We={class:"lv-table__scroll"},xe=["aria-labelledby","aria-describedby"],Pe={key:0,class:"lv-table__head"},$e=["aria-sort","onClick"],Ke={class:"lv-table__th-content"},Ye={key:0,class:"lv-table__sort-icon","aria-hidden":"true"},Ee={class:"lv-table__body"},Fe={key:1,class:"lv-table__row lv-table__row--empty"},qe=["colspan"],je={class:"lv-table__empty-text"},Ge=["tabindex","aria-selected","onClick","onKeydown"],He={key:1,class:"lv-table__foot"},Je=["colspan"],Qe={key:1,class:"lv-table__pagination-bar"},$={__name:"LvTable",props:{columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},rowKey:{type:String,default:"id"},caption:{type:String,default:void 0},loading:{type:Boolean,default:!1},skeletonRows:{type:Number,default:5},emptyText:{type:String,default:"No data to display."},striped:{type:Boolean,default:!1},dense:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},selected:{type:[String,Number,Array],default:void 0},onRowClick:{type:Function,default:void 0},paginate:{type:Boolean,default:!1},page:{type:Number,default:1},pageSize:{type:Number,default:10},pageSizeOptions:{type:Array,default:()=>[10,25,50,100]},showPageSize:{type:Boolean,default:!0},totalRows:{type:Number,default:void 0}},emits:["sort","row-click","update:page","update:pageSize"],setup(e,{emit:s}){const n=e,b=s,A=Math.random().toString(36).slice(2,7),w=`lv-table-caption-${A}`,Y=`lv-table-footer-${A}`,L=N(n.page),T=N(n.pageSize);F(()=>n.page,t=>{L.value=t}),F(()=>n.pageSize,t=>{T.value=t});const Ae=K(()=>n.totalRows!==void 0?n.totalRows:n.rows.length);function Ne(t){L.value=t,b("update:page",t)}function Ce(t){T.value=t,L.value=1,b("update:pageSize",t),b("update:page",1)}const f=N(null),S=N("asc");function Oe(t){f.value===t?S.value=S.value==="asc"?"desc":"asc":(f.value=t,S.value="asc"),b("sort",{key:f.value,dir:S.value})}function E(t){if(!n.selected)return!1;const h=t[n.rowKey];return Array.isArray(n.selected)?n.selected.includes(h):n.selected===h}const ze=K(()=>{if(!n.paginate||n.totalRows!==void 0)return n.rows;const t=(L.value-1)*T.value;return n.rows.slice(t,t+T.value)}),Ue=K(()=>["lv-table-wrapper",{"lv-table-wrapper--bordered":n.bordered},{"lv-table-wrapper--dense":n.dense},{"lv-table-wrapper--striped":n.striped}]);return(t,h)=>(r(),l("div",{class:z(Ue.value)},[t.$slots.toolbar||e.caption?(r(),l("div",Ie,[e.caption?(r(),l("p",{key:0,class:"lv-table__caption-text",id:w},C(e.caption),1)):y("",!0),O(t.$slots,"toolbar",{},void 0,!0)])):y("",!0),i("div",We,[i("table",{class:"lv-table","aria-labelledby":e.caption?w:void 0,"aria-describedby":t.$slots.footer?Y:void 0},[e.columns.length?(r(),l("thead",Pe,[i("tr",null,[(r(!0),l(k,null,R(e.columns,a=>(r(),l("th",{key:a.key,scope:"col",class:z(["lv-table__th",a.align?`lv-table__cell--${a.align}`:"",a.sortable?"lv-table__th--sortable":"",f.value===a.key?"lv-table__th--sorted":""]),style:_e(a.width?{width:a.width}:void 0),"aria-sort":a.sortable?f.value===a.key?S.value==="asc"?"ascending":"descending":"none":void 0,onClick:u=>a.sortable?Oe(a.key):void 0},[i("span",Ke,[j(C(a.label)+" ",1),a.sortable?(r(),l("span",Ye,[q(Ve,{name:f.value===a.key&&S.value==="asc"?"chevron-up":"chevron-down",size:"xs"},null,8,["name"])])):y("",!0)])],14,$e))),128))])])):y("",!0),i("tbody",Ee,[e.loading?(r(!0),l(k,{key:0},R(e.skeletonRows,a=>(r(),l("tr",{key:`skeleton-${a}`,class:"lv-table__row lv-table__row--skeleton"},[(r(!0),l(k,null,R(e.columns,u=>(r(),l("td",{key:u.key,class:"lv-table__td"},[...h[0]||(h[0]=[i("span",{class:"lv-table__skeleton-cell"},null,-1)])]))),128))]))),128)):e.rows.length?(r(!0),l(k,{key:2},R(ze.value,(a,u)=>(r(),l("tr",{key:a[e.rowKey]??u,class:z(["lv-table__row",{"lv-table__row--clickable":!!e.onRowClick},{"lv-table__row--selected":E(a)},{"lv-table__row--striped":e.striped&&u%2!==0}]),tabindex:e.onRowClick?0:void 0,"aria-selected":e.selectable?E(a):void 0,onClick:c=>{var p;return(p=e.onRowClick)==null?void 0:p.call(e,a,u)},onKeydown:[G(c=>{var p;return(p=e.onRowClick)==null?void 0:p.call(e,a,u)},["enter"]),G(Be(c=>{var p;return(p=e.onRowClick)==null?void 0:p.call(e,a,u)},["prevent"]),["space"])]},[(r(!0),l(k,null,R(e.columns,c=>(r(),l("td",{key:c.key,class:z(["lv-table__td",c.align?`lv-table__cell--${c.align}`:""])},[O(t.$slots,`cell(${c.key})`,{value:a[c.key],row:a,index:u},()=>[j(C(a[c.key]??"—"),1)],!0)],2))),128))],42,Ge))),128)):(r(),l("tr",Fe,[i("td",{colspan:e.columns.length||1,class:"lv-table__td lv-table__empty-cell"},[O(t.$slots,"empty",{},()=>[i("span",je,C(e.emptyText),1)],!0)],8,qe)]))]),t.$slots.footer?(r(),l("tfoot",He,[i("tr",null,[i("td",{colspan:e.columns.length||1,class:"lv-table__td",id:Y},[O(t.$slots,"footer",{},void 0,!0)],8,Je)])])):y("",!0)],8,xe)]),e.paginate?(r(),l("div",Qe,[q(Me,{page:L.value,"page-size":T.value,"total-rows":Ae.value,"page-size-options":e.pageSizeOptions,"show-page-size":e.showPageSize,"onUpdate:page":Ne,"onUpdate:pageSize":Ce},null,8,["page","page-size","total-rows","page-size-options","show-page-size"])])):y("",!0)],2))}},o=De($,[["__scopeId","data-v-b64c7958"]]);$.__docgenInfo=Object.assign({displayName:$.name??$.__name},{exportName:"default",displayName:"LvTable",description:"",tags:{},props:[{name:"columns",description:"Column definitions",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"rows",description:"Row data — each item should have a unique key field",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"rowKey",description:"Property name to use as the row's unique key",type:{name:"string"},defaultValue:{func:!1,value:"'id'"}},{name:"caption",description:"Accessible caption / visible table title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"loading",description:"Show loading skeleton rows",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"skeletonRows",description:"Number of skeleton rows to render while loading",type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"emptyText",description:"Text shown when rows is empty",type:{name:"string"},defaultValue:{func:!1,value:"'No data to display.'"}},{name:"striped",description:"Alternate row background",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dense",description:"Reduce cell padding",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bordered",description:"Draw borders between all cells",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selectable",description:"Row is keyboard/click navigable — emit row-click",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",description:"Currently selected row key value(s) — single value or array",type:{name:"string|number|array"},defaultValue:{func:!1,value:"undefined"}},{name:"onRowClick",description:"Called when a row is clicked — (row, index) => void",type:{name:"func"},defaultValue:{func:!1,value:"undefined"}},{name:"paginate",description:"Enable pagination. Client-side when `totalRows` is omitted.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"page",description:"Current page (1-based). Use v-model:page for two-way binding.",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"pageSize",description:"Rows per page",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"pageSizeOptions",description:"Page-size dropdown options",type:{name:"array"},defaultValue:{func:!1,value:"[10, 25, 50, 100]"}},{name:"showPageSize",description:"Show the rows-per-page selector inside the pagination bar",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"totalRows",description:"Total row count for server-side pagination.\nWhen provided the table renders `rows` as-is and emits page/size changes\nfor the consumer to handle. When omitted, the table slices `rows` itself.",type:{name:"number"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"sort",description:"{ key, dir: 'asc' | 'desc' }"},{name:"row-click",description:"row object"},{name:"update:page",description:"new page number"},{name:"update:pageSize",description:"new page size"}],slots:[{name:"toolbar"},{name:"empty"},{name:"`cell(${col.key})`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"value",title:"binding"},{name:"row",title:"binding"},{name:"index",title:"binding"}]},{name:"footer"}],sourceFiles:["/home/runner/work/livery/livery/src/components/LvTable/LvTable.vue"]});const la={title:"Data/Table",component:o,tags:["autodocs"],argTypes:{loading:{control:"boolean"},striped:{control:"boolean"},dense:{control:"boolean"},bordered:{control:"boolean"},selectable:{control:"boolean"},paginate:{control:"boolean"},showPageSize:{control:"boolean"},pageSize:{control:{type:"number",min:1,max:100}},skeletonRows:{control:{type:"number",min:1,max:20}},emptyText:{control:"text"},caption:{control:"text"}},parameters:{docs:{description:{component:'\n**LvTable** — Accessible, sortable data table for structured content.\n\n- Sortable columns with `aria-sort` — sorting is UI-only; emit `sort` to apply it externally\n- Scoped slot `cell(key)` for custom cell rendering per column\n- `loading` shows animated skeleton rows; `empty` slot for zero-state\n- `selectable` rows are keyboard navigable with `aria-selected`\n- `striped`, `dense`, and `bordered` visual modifiers\n\n**Accessibility**\n- `<table>` with `aria-labelledby` pointing to the caption\n- Column headers use `scope="col"` and `aria-sort` for sortable columns\n- Clickable rows have `tabindex="0"` with `Enter`/`Space` keyboard support\n        '}}}},d=[{key:"service",label:"Service",sortable:!0},{key:"origin",label:"Origin",sortable:!0},{key:"destination",label:"Destination"},{key:"departs",label:"Departs",sortable:!0,align:"right"},{key:"status",label:"Status",align:"center"}],m=[{id:1,service:"1A42",origin:"Leeds",destination:"Manchester Piccadilly",departs:"07:42",status:"On Time"},{id:2,service:"2B18",origin:"Sheffield",destination:"York",departs:"08:05",status:"Delayed"},{id:3,service:"3C09",origin:"Manchester",destination:"Liverpool Lime Street",departs:"08:20",status:"On Time"},{id:4,service:"4D55",origin:"York",destination:"Leeds",departs:"09:00",status:"Cancelled"},{id:5,service:"5E31",origin:"Liverpool",destination:"Sheffield",departs:"09:15",status:"On Time"}],g={"On Time":"success",Delayed:"warning",Cancelled:"danger"},U={render:e=>({components:{LvTable:o},setup(){return{args:e,COLUMNS:d,ROWS:m}},template:`
      <LvTable v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Northern Network — Live Departures" />
    `}),args:{striped:!1,dense:!1,bordered:!1,loading:!1}},_={name:"Custom Cells",render:e=>({components:{LvTable:o,LvBadge:v},setup(){return{args:e,COLUMNS:d,ROWS:m,STATUS_VARIANT:g}},template:`
      <LvTable v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Northern Network — Live Departures">
        <template #cell(status)="{ value }">
          <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
        </template>
        <template #cell(departs)="{ value }">
          <span style="font-family: var(--font-mono); font-variant-numeric: tabular-nums;">{{ value }}</span>
        </template>
      </LvTable>
    `}),args:{striped:!0}},B={render:e=>({components:{LvTable:o,LvBadge:v},setup(){const{ref:s,computed:n}=window.Vue??{};return{args:e,COLUMNS:d,ROWS:m,STATUS_VARIANT:g}},data(){return{sortKey:null,sortDir:"asc"}},computed:{sortedRows(){return this.sortKey?[...m].sort((s,n)=>{const b=s[this.sortKey]??"",A=n[this.sortKey]??"",w=String(b).localeCompare(String(A));return this.sortDir==="asc"?w:-w}):m}},methods:{onSort({key:s,dir:n}){this.sortKey=s,this.sortDir=n}},template:`
      <LvTable
        v-bind="args"
        :columns="COLUMNS"
        :rows="sortedRows"
        caption="Sorted Departures"
        @sort="onSort"
      >
        <template #cell(status)="{ value }">
          <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
        </template>
      </LvTable>
    `}),args:{}},V={render:e=>({components:{LvTable:o},setup(){return{args:e,COLUMNS:d}},template:'<LvTable v-bind="args" :columns="COLUMNS" :rows="[]" caption="Loading state" />'}),args:{loading:!0,skeletonRows:6}},M={render:e=>({components:{LvTable:o},setup(){return{args:e,COLUMNS:d}},template:`
      <LvTable v-bind="args" :columns="COLUMNS" :rows="[]" caption="No results">
        <template #empty>
          <div style="text-align:center; padding: 0.5rem 0;">
            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🚉</div>
            <p style="color: var(--text-secondary); margin:0; font-size: var(--text-sm);">No services found for this route.</p>
          </div>
        </template>
      </LvTable>
    `}),args:{}},D={render:e=>({components:{LvTable:o,LvBadge:v},setup(){return{args:e,COLUMNS:d,ROWS:m,STATUS_VARIANT:g}},template:`
      <LvTable v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Dense table">
        <template #cell(status)="{ value }">
          <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
        </template>
      </LvTable>
    `}),args:{dense:!0}},I={name:"With Footer",render:e=>({components:{LvTable:o,LvBadge:v},setup(){return{args:e,COLUMNS:d,ROWS:m,STATUS_VARIANT:g}},template:`
      <LvTable v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Departures with footer">
        <template #cell(status)="{ value }">
          <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
        </template>
        <template #footer>
          Showing {{ ROWS.length }} of {{ ROWS.length }} services
        </template>
      </LvTable>
    `}),args:{striped:!0}},W={render:e=>({components:{LvTable:o,LvBadge:v},data(){return{selectedId:null}},setup(){return{args:e,COLUMNS:d,ROWS:m,STATUS_VARIANT:g}},template:`
      <div>
        <LvTable
          v-bind="args"
          :columns="COLUMNS"
          :rows="ROWS"
          caption="Click a row to select it"
          row-key="id"
          :selectable="true"
          :selected="selectedId"
          :on-row-click="(row) => selectedId = row.id"
        >
          <template #cell(status)="{ value }">
            <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
          </template>
        </LvTable>
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Selected service ID: <strong>{{ selectedId ?? 'none' }}</strong>
        </p>
      </div>
    `}),args:{}},Re=Array.from({length:40},(e,s)=>({id:s+1,service:`${String.fromCharCode(65+s%5)}${String(s+1).padStart(3,"0")}`,origin:["Leeds","Sheffield","Manchester","York","Liverpool"][s%5],destination:["Manchester Piccadilly","York","Liverpool Lime Street","Leeds","Sheffield"][s%5],departs:`${String(7+Math.floor(s/4)).padStart(2,"0")}:${String(s%4*15).padStart(2,"0")}`,status:["On Time","On Time","Delayed","On Time","Cancelled"][s%5]})),x={name:"Client-Side Pagination",render:e=>({components:{LvTable:o,LvBadge:v},setup(){return{args:e,COLUMNS:d,MANY_ROWS:Re,STATUS_VARIANT:g}},template:`
      <LvTable
        v-bind="args"
        :columns="COLUMNS"
        :rows="MANY_ROWS"
        caption="All Departures (40 rows, paginated client-side)"
        :paginate="true"
        :page-size="5"
      >
        <template #cell(status)="{ value }">
          <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
        </template>
        <template #cell(departs)="{ value }">
          <span style="font-family: var(--font-mono); font-variant-numeric: tabular-nums;">{{ value }}</span>
        </template>
      </LvTable>
    `}),args:{striped:!0}},P={name:"Server-Side Pagination",render:e=>({components:{LvTable:o,LvBadge:v},data(){return{page:1,pageSize:5,allRows:Re}},computed:{pagedRows(){const s=(this.page-1)*this.pageSize;return this.allRows.slice(s,s+this.pageSize)}},setup(){return{args:e,COLUMNS:d,STATUS_VARIANT:g}},template:`
      <div>
        <LvTable
          v-bind="args"
          :columns="COLUMNS"
          :rows="pagedRows"
          caption="Server-Side Pagination (simulated)"
          :paginate="true"
          :total-rows="allRows.length"
          :page="page"
          :page-size="pageSize"
          @update:page="page = $event"
          @update:page-size="pageSize = $event"
        >
          <template #cell(status)="{ value }">
            <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
          </template>
          <template #cell(departs)="{ value }">
            <span style="font-family: var(--font-mono); font-variant-numeric: tabular-nums;">{{ value }}</span>
          </template>
        </LvTable>
        <p style="margin-top:0.75rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Page <strong>{{ page }}</strong> · Page size <strong>{{ pageSize }}</strong>
          (in a real app, page/size changes would trigger an API call)
        </p>
      </div>
    `}),args:{}};var H,J,Q;U.parameters={...U.parameters,docs:{...(H=U.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvTable
    },
    setup() {
      return {
        args,
        COLUMNS,
        ROWS
      };
    },
    template: \`
      <LvTable v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Northern Network — Live Departures" />
    \`
  }),
  args: {
    striped: false,
    dense: false,
    bordered: false,
    loading: false
  }
}`,...(Q=(J=U.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Custom Cells',
  render: args => ({
    components: {
      LvTable,
      LvBadge
    },
    setup() {
      return {
        args,
        COLUMNS,
        ROWS,
        STATUS_VARIANT
      };
    },
    template: \`
      <LvTable v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Northern Network — Live Departures">
        <template #cell(status)="{ value }">
          <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
        </template>
        <template #cell(departs)="{ value }">
          <span style="font-family: var(--font-mono); font-variant-numeric: tabular-nums;">{{ value }}</span>
        </template>
      </LvTable>
    \`
  }),
  args: {
    striped: true
  }
}`,...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvTable,
      LvBadge
    },
    setup() {
      const {
        ref,
        computed
      } = window.Vue ?? {};
      // Storybook renders in browser — use Vue from the global
      return {
        args,
        COLUMNS,
        ROWS,
        STATUS_VARIANT
      };
    },
    data() {
      return {
        sortKey: null,
        sortDir: 'asc'
      };
    },
    computed: {
      sortedRows() {
        if (!this.sortKey) return ROWS;
        return [...ROWS].sort((a, b) => {
          const va = a[this.sortKey] ?? '';
          const vb = b[this.sortKey] ?? '';
          const cmp = String(va).localeCompare(String(vb));
          return this.sortDir === 'asc' ? cmp : -cmp;
        });
      }
    },
    methods: {
      onSort({
        key,
        dir
      }) {
        this.sortKey = key;
        this.sortDir = dir;
      }
    },
    template: \`
      <LvTable
        v-bind="args"
        :columns="COLUMNS"
        :rows="sortedRows"
        caption="Sorted Departures"
        @sort="onSort"
      >
        <template #cell(status)="{ value }">
          <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
        </template>
      </LvTable>
    \`
  }),
  args: {}
}`,...(ne=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,le,re;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvTable
    },
    setup() {
      return {
        args,
        COLUMNS
      };
    },
    template: \`<LvTable v-bind="args" :columns="COLUMNS" :rows="[]" caption="Loading state" />\`
  }),
  args: {
    loading: true,
    skeletonRows: 6
  }
}`,...(re=(le=V.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var oe,ie,de;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvTable
    },
    setup() {
      return {
        args,
        COLUMNS
      };
    },
    template: \`
      <LvTable v-bind="args" :columns="COLUMNS" :rows="[]" caption="No results">
        <template #empty>
          <div style="text-align:center; padding: 0.5rem 0;">
            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🚉</div>
            <p style="color: var(--text-secondary); margin:0; font-size: var(--text-sm);">No services found for this route.</p>
          </div>
        </template>
      </LvTable>
    \`
  }),
  args: {}
}`,...(de=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,ce,pe;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvTable,
      LvBadge
    },
    setup() {
      return {
        args,
        COLUMNS,
        ROWS,
        STATUS_VARIANT
      };
    },
    template: \`
      <LvTable v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Dense table">
        <template #cell(status)="{ value }">
          <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
        </template>
      </LvTable>
    \`
  }),
  args: {
    dense: true
  }
}`,...(pe=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ve,ge;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'With Footer',
  render: args => ({
    components: {
      LvTable,
      LvBadge
    },
    setup() {
      return {
        args,
        COLUMNS,
        ROWS,
        STATUS_VARIANT
      };
    },
    template: \`
      <LvTable v-bind="args" :columns="COLUMNS" :rows="ROWS" caption="Departures with footer">
        <template #cell(status)="{ value }">
          <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
        </template>
        <template #footer>
          Showing {{ ROWS.length }} of {{ ROWS.length }} services
        </template>
      </LvTable>
    \`
  }),
  args: {
    striped: true
  }
}`,...(ge=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var be,fe,Se;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LvTable,
      LvBadge
    },
    data() {
      return {
        selectedId: null
      };
    },
    setup() {
      return {
        args,
        COLUMNS,
        ROWS,
        STATUS_VARIANT
      };
    },
    template: \`
      <div>
        <LvTable
          v-bind="args"
          :columns="COLUMNS"
          :rows="ROWS"
          caption="Click a row to select it"
          row-key="id"
          :selectable="true"
          :selected="selectedId"
          :on-row-click="(row) => selectedId = row.id"
        >
          <template #cell(status)="{ value }">
            <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
          </template>
        </LvTable>
        <p style="margin-top: 1rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Selected service ID: <strong>{{ selectedId ?? 'none' }}</strong>
        </p>
      </div>
    \`
  }),
  args: {}
}`,...(Se=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var ye,we,Le;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Client-Side Pagination',
  render: args => ({
    components: {
      LvTable,
      LvBadge
    },
    setup() {
      return {
        args,
        COLUMNS,
        MANY_ROWS,
        STATUS_VARIANT
      };
    },
    template: \`
      <LvTable
        v-bind="args"
        :columns="COLUMNS"
        :rows="MANY_ROWS"
        caption="All Departures (40 rows, paginated client-side)"
        :paginate="true"
        :page-size="5"
      >
        <template #cell(status)="{ value }">
          <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
        </template>
        <template #cell(departs)="{ value }">
          <span style="font-family: var(--font-mono); font-variant-numeric: tabular-nums;">{{ value }}</span>
        </template>
      </LvTable>
    \`
  }),
  args: {
    striped: true
  }
}`,...(Le=(we=x.parameters)==null?void 0:we.docs)==null?void 0:Le.source}}};var Te,he,ke;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'Server-Side Pagination',
  render: args => ({
    components: {
      LvTable,
      LvBadge
    },
    data() {
      return {
        page: 1,
        pageSize: 5,
        allRows: MANY_ROWS
      };
    },
    computed: {
      pagedRows() {
        const start = (this.page - 1) * this.pageSize;
        return this.allRows.slice(start, start + this.pageSize);
      }
    },
    setup() {
      return {
        args,
        COLUMNS,
        STATUS_VARIANT
      };
    },
    template: \`
      <div>
        <LvTable
          v-bind="args"
          :columns="COLUMNS"
          :rows="pagedRows"
          caption="Server-Side Pagination (simulated)"
          :paginate="true"
          :total-rows="allRows.length"
          :page="page"
          :page-size="pageSize"
          @update:page="page = $event"
          @update:page-size="pageSize = $event"
        >
          <template #cell(status)="{ value }">
            <LvBadge :variant="STATUS_VARIANT[value] ?? 'default'" pill>{{ value }}</LvBadge>
          </template>
          <template #cell(departs)="{ value }">
            <span style="font-family: var(--font-mono); font-variant-numeric: tabular-nums;">{{ value }}</span>
          </template>
        </LvTable>
        <p style="margin-top:0.75rem; font-size: var(--text-sm); color: var(--text-secondary);">
          Page <strong>{{ page }}</strong> · Page size <strong>{{ pageSize }}</strong>
          (in a real app, page/size changes would trigger an API call)
        </p>
      </div>
    \`
  }),
  args: {}
}`,...(ke=(he=P.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};const ra=["Default","CustomCells","Sortable","Loading","Empty","Dense","WithFooter","Selectable","ClientSidePagination","ServerSidePagination"];export{x as ClientSidePagination,_ as CustomCells,U as Default,D as Dense,M as Empty,V as Loading,W as Selectable,P as ServerSidePagination,B as Sortable,I as WithFooter,ra as __namedExportsOrder,la as default};
