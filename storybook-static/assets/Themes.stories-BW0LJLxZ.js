const d={name:"Trans-Europ-Express Grand Comfort",id:"tee-grand-comfort",crimson50:"#fdf2f3",crimson100:"#fbe0e2",crimson200:"#f6bcc0",crimson300:"#ef8c94",crimson400:"#e55663",crimson500:"#d42b3a",crimson600:"#b41c2b",crimson700:"#961724",crimson800:"#7d131e",crimson900:"#6b131d",cream50:"#fdfaf3",cream100:"#f8f0d8",cream200:"#f2e6c4",cream300:"#e8d49a",cream400:"#d9bc6a",bgPage:"#fdfaf3",bgSurface:"#ffffff",bgInverse:"#96172400",bgInverseValue:"#96172a",textPrimary:"#2d0c10",textSecondary:"#6b3038",textDisabled:"#b8858c",textInverse:"#fdf2f3",textLink:"#b41c2b",textLinkHover:"#7d131e",borderSubtle:"#f2e6c4",borderDefault:"#e8d49a",borderStrong:"#b41c2b",brandPrimary:"#b41c2b",brandPrimaryHover:"#96172a",brandPrimaryActive:"#7d131e",colorSuccess:"#2f9e44",colorWarning:"#f59f00",colorDanger:"#b41c2b",colorInfo:"#1c7ed6"},o={name:"Corail",id:"corail",coral50:"#fff5f0",coral100:"#ffe6d8",coral200:"#ffc9a8",coral300:"#ffa070",coral400:"#f57036",coral500:"#e0540f",coral600:"#c24508",coral700:"#a13806",coral800:"#852e06",coral900:"#6e2707",silver50:"#f4f5f6",silver100:"#e8eaec",silver200:"#cdd1d6",silver300:"#b0b7be",silver400:"#8c959e",silver500:"#6a7480",silver600:"#505a64",silver700:"#3d4550",bgPage:"#f4f5f6",bgSurface:"#ffffff",bgInverseValue:"#3d4550",textPrimary:"#1a1d20",textSecondary:"#505a64",textDisabled:"#b0b7be",textInverse:"#ffffff",textLink:"#c24508",textLinkHover:"#a13806",borderSubtle:"#e8eaec",borderDefault:"#cdd1d6",borderStrong:"#e0540f",brandPrimary:"#e0540f",brandPrimaryHover:"#c24508",brandPrimaryActive:"#a13806",colorSuccess:"#2f9e44",colorWarning:"#f59f00",colorDanger:"#f03e3e",colorInfo:"#1c7ed6"},s={name:"Orient Express",id:"orient-express",navy50:"#f0f3fa",navy100:"#dce3f4",navy200:"#b6c3e7",navy300:"#8199d4",navy400:"#4e6cbc",navy500:"#2a4a99",navy600:"#1c3680",navy700:"#1a2e6e",navy800:"#162559",navy900:"#111d47",navy950:"#0c1430",gold50:"#fdfbf0",gold100:"#faf3d0",gold200:"#f3e49a",gold300:"#e9ce5e",gold400:"#d9b432",gold500:"#c5951f",gold600:"#a67a14",gold700:"#87620f",gold800:"#6e4f0c",cream50:"#fdfbf5",cream100:"#f8f3e5",cream200:"#f0e6cc",bgPage:"#fdfbf5",bgSurface:"#ffffff",bgInverseValue:"#111d47",textPrimary:"#0c1430",textSecondary:"#2a4a99",textDisabled:"#8199d4",textInverse:"#f0e6cc",textLink:"#c5951f",textLinkHover:"#a67a14",borderSubtle:"#f0e6cc",borderDefault:"#e9ce5e",borderStrong:"#1c3680",brandPrimary:"#1c3680",brandPrimaryHover:"#162559",brandPrimaryActive:"#111d47",colorSuccess:"#2f9e44",colorWarning:"#c5951f",colorDanger:"#f03e3e",colorInfo:"#2a4a99"},m={name:"TGV 001",id:"tgv-001",orange50:"#fff8f0",orange100:"#ffecd8",orange200:"#ffd1a0",orange300:"#ffb05c",orange400:"#f88a22",orange500:"#e06800",orange600:"#c05500",orange700:"#9e4600",orange800:"#823a00",orange900:"#6b3000",anthracite50:"#f3f4f6",anthracite100:"#e5e7eb",anthracite200:"#c8ccd2",anthracite300:"#9ca3ac",anthracite400:"#6e7880",anthracite500:"#4e5862",anthracite600:"#3a4350",anthracite700:"#2c3542",anthracite800:"#1f2633",anthracite900:"#151c28",bgPage:"#f3f4f6",bgSurface:"#ffffff",bgInverseValue:"#2c3542",textPrimary:"#151c28",textSecondary:"#4e5862",textDisabled:"#9ca3ac",textInverse:"#ffffff",textLink:"#c05500",textLinkHover:"#9e4600",borderSubtle:"#e5e7eb",borderDefault:"#c8ccd2",borderStrong:"#e06800",brandPrimary:"#e06800",brandPrimaryHover:"#c05500",brandPrimaryActive:"#9e4600",colorSuccess:"#2f9e44",colorWarning:"#f59f00",colorDanger:"#f03e3e",colorInfo:"#1c7ed6"},w={title:"Design Tokens/Themes",tags:["autodocs"],parameters:{docs:{description:{component:`
Global colour themes inspired by iconic European train liveries.

Each theme overrides the semantic design tokens (backgrounds, text, borders, brand colour)
and is applied via a \`data-theme\` attribute on any container element:

\`\`\`html
<!-- Apply theme to entire page -->
<body data-theme="corail"> … </body>

<!-- Or scope it to a single section -->
<div data-theme="orient-express"> … </div>
\`\`\`

After importing \`themes.css\`, the overrides are active:

\`\`\`js
import '@maximekuntz/livery/dist/livery.css'
import '@maximekuntz/livery/dist/themes.css'
\`\`\`

Theme IDs: \`tee-grand-comfort\` · \`corail\` · \`orient-express\` · \`tgv-001\`
        `}}}},e={props:["themeId","themeMeta"],template:`
    <div
      :data-theme="themeId"
      style="
        font-family: var(--font-sans);
        background: var(--bg-page);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        overflow: hidden;
        max-width: 420px;
      "
    >
      <!-- Header bar -->
      <div
        style="
          background: var(--brand-primary);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        "
      >
        <div style="
          width: 36px; height: 36px;
          border-radius: var(--radius-md);
          background: var(--text-inverse);
          opacity: 0.15;
        " />
        <div>
          <div style="font-weight: var(--font-bold); color: var(--text-inverse); font-size: var(--text-md);">
            {{ themeMeta.name }}
          </div>
          <div style="font-size: var(--text-xs); color: var(--text-inverse); opacity: 0.75; letter-spacing: var(--tracking-wide); text-transform: uppercase;">
            data-theme="{{ themeId }}"
          </div>
        </div>
      </div>

      <!-- Body -->
      <div style="padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem;">

        <!-- Text colours -->
        <div>
          <p style="font-size: var(--text-xs); font-weight: var(--font-semibold); letter-spacing: var(--tracking-widest); text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.5rem;">
            Typography
          </p>
          <p style="color: var(--text-primary); font-size: var(--text-md); margin-bottom: 0.25rem;">Primary text — clear aspect</p>
          <p style="color: var(--text-secondary); font-size: var(--text-sm); margin-bottom: 0.25rem;">Secondary text — platform annotation</p>
          <a href="#" style="color: var(--text-link); font-size: var(--text-sm); text-decoration: none;">Link — timetable reference ↗</a>
        </div>

        <!-- Brand swatches -->
        <div>
          <p style="font-size: var(--text-xs); font-weight: var(--font-semibold); letter-spacing: var(--tracking-widest); text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.5rem;">
            Brand
          </p>
          <div style="display: flex; gap: 0.5rem;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
              <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-md); background: var(--brand-primary);" />
              <span style="font-size: 0.6rem; color: var(--text-secondary);">primary</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
              <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-md); background: var(--brand-primary-hover);" />
              <span style="font-size: 0.6rem; color: var(--text-secondary);">hover</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
              <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-md); background: var(--brand-primary-active);" />
              <span style="font-size: 0.6rem; color: var(--text-secondary);">active</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
              <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-md); background: var(--bg-inverse);" />
              <span style="font-size: 0.6rem; color: var(--text-secondary);">inverse</span>
            </div>
          </div>
        </div>

        <!-- Feedback swatches -->
        <div>
          <p style="font-size: var(--text-xs); font-weight: var(--font-semibold); letter-spacing: var(--tracking-widest); text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.5rem;">
            Feedback
          </p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 0.375rem;">
              <div style="width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--color-success);" />
              <span style="font-size: var(--text-xs); color: var(--text-secondary);">success</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.375rem;">
              <div style="width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--color-warning);" />
              <span style="font-size: var(--text-xs); color: var(--text-secondary);">warning</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.375rem;">
              <div style="width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--color-danger);" />
              <span style="font-size: var(--text-xs); color: var(--text-secondary);">danger</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.375rem;">
              <div style="width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--color-info);" />
              <span style="font-size: var(--text-xs); color: var(--text-secondary);">info</span>
            </div>
          </div>
        </div>

        <!-- Button preview -->
        <div style="display: flex; gap: 0.75rem; align-items: center;">
          <button style="
            background: var(--brand-primary);
            color: var(--text-inverse);
            border: none;
            padding: 0.5rem 1.25rem;
            border-radius: var(--radius-md);
            font-family: var(--font-sans);
            font-size: var(--text-sm);
            font-weight: var(--font-semibold);
            cursor: pointer;
          ">Board train</button>
          <button style="
            background: transparent;
            color: var(--brand-primary);
            border: 1.5px solid var(--brand-primary);
            padding: 0.5rem 1.25rem;
            border-radius: var(--radius-md);
            font-family: var(--font-sans);
            font-size: var(--text-sm);
            font-weight: var(--font-semibold);
            cursor: pointer;
          ">Timetable</button>
        </div>
      </div>
    </div>
  `},r={name:"All themes",render:()=>({components:{SampleCard:e},setup(){return{themePairs:[{id:d.id,meta:d},{id:o.id,meta:o},{id:s.id,meta:s},{id:m.id,meta:m}]}},template:`
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1rem; font-family: var(--font-sans);">
        <SampleCard
          v-for="t in themePairs"
          :key="t.id"
          :themeId="t.id"
          :themeMeta="t.meta"
        />
      </div>
    `})},a={name:"Trans-Europ-Express Grand Comfort",render:()=>({components:{SampleCard:e},setup(){return{id:d.id,meta:d}},template:'<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>'})},t={name:"Corail",render:()=>({components:{SampleCard:e},setup(){return{id:o.id,meta:o}},template:'<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>'})},n={name:"Orient Express",render:()=>({components:{SampleCard:e},setup(){return{id:s.id,meta:s}},template:'<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>'})},i={name:"TGV 001",render:()=>({components:{SampleCard:e},setup(){return{id:m.id,meta:m}},template:'<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>'})};var c,l,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'All themes',
  render: () => ({
    components: {
      SampleCard
    },
    setup() {
      const themePairs = [{
        id: themeTransEuropExpress.id,
        meta: themeTransEuropExpress
      }, {
        id: themeCorail.id,
        meta: themeCorail
      }, {
        id: themeOrientExpress.id,
        meta: themeOrientExpress
      }, {
        id: themeTgv001.id,
        meta: themeTgv001
      }];
      return {
        themePairs
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1rem; font-family: var(--font-sans);">
        <SampleCard
          v-for="t in themePairs"
          :key="t.id"
          :themeId="t.id"
          :themeMeta="t.meta"
        />
      </div>
    \`
  })
}`,...(f=(l=r.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var p,v,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Trans-Europ-Express Grand Comfort',
  render: () => ({
    components: {
      SampleCard
    },
    setup() {
      return {
        id: themeTransEuropExpress.id,
        meta: themeTransEuropExpress
      };
    },
    template: \`<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>\`
  })
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,y,u;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Corail',
  render: () => ({
    components: {
      SampleCard
    },
    setup() {
      return {
        id: themeCorail.id,
        meta: themeCorail
      };
    },
    template: \`<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>\`
  })
}`,...(u=(y=t.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var x,h,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Orient Express',
  render: () => ({
    components: {
      SampleCard
    },
    setup() {
      return {
        id: themeOrientExpress.id,
        meta: themeOrientExpress
      };
    },
    template: \`<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>\`
  })
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var k,E,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'TGV 001',
  render: () => ({
    components: {
      SampleCard
    },
    setup() {
      return {
        id: themeTgv001.id,
        meta: themeTgv001
      };
    },
    template: \`<div style="padding:1rem"><SampleCard :themeId="id" :themeMeta="meta" /></div>\`
  })
}`,...(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const I=["AllThemes","TransEuropExpress","Corail","OrientExpress","Tgv001"];export{r as AllThemes,t as Corail,n as OrientExpress,i as Tgv001,a as TransEuropExpress,I as __namedExportsOrder,w as default};
