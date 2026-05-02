const r={slate50:"#f8f9fa",slate100:"#f1f3f5",slate200:"#e9ecef",slate300:"#dee2e6",slate400:"#ced4da",slate500:"#adb5bd",slate600:"#6c757d",slate700:"#495057",slate800:"#343a40",slate900:"#212529",slate950:"#0d0f11",red50:"#fff5f5",red100:"#ffe3e3",red200:"#ffc9c9",red300:"#ffa8a8",red400:"#ff6b6b",red500:"#fa5252",red600:"#f03e3e",red700:"#c92a2a",red800:"#a61e1e",red900:"#7b1010",amber50:"#fff9db",amber100:"#fff3bf",amber200:"#ffec99",amber300:"#ffe066",amber400:"#ffd43b",amber500:"#fcc419",amber600:"#fab005",amber700:"#f59f00",amber800:"#e67700",amber900:"#d9480f",green50:"#ebfbee",green100:"#d3f9d8",green200:"#b2f2bb",green300:"#8ce99a",green400:"#69db7c",green500:"#51cf66",green600:"#40c057",green700:"#2f9e44",green800:"#2b8a3e",green900:"#1b5e20",blue50:"#e7f5ff",blue100:"#d0ebff",blue200:"#a5d8ff",blue300:"#74c0fc",blue400:"#4dabf7",blue500:"#339af0",blue600:"#228be6",blue700:"#1c7ed6",blue800:"#1971c2",blue900:"#1864ab",white:"#ffffff",black:"#000000"},c={0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem"},m={title:"Design Tokens/Overview",tags:["autodocs"],parameters:{docs:{description:{component:`
Design tokens are the single source of truth for all visual decisions in Livery.
They are available as **JS exports** (\`import { tokens } from 'livery'\`) and
as **CSS custom properties** (loaded via \`tokens.css\`).

Named after railway concepts: *slate* for ballast and concrete,
*signal red / amber / green* for status, *steel blue* for brand and enamel signage.
        `}}}},t={render:()=>({setup(){return{palettes:{Slate:Object.entries(r).filter(([e])=>e.startsWith("slate")),Red:Object.entries(r).filter(([e])=>e.startsWith("red")),Amber:Object.entries(r).filter(([e])=>e.startsWith("amber")),Green:Object.entries(r).filter(([e])=>e.startsWith("green")),Blue:Object.entries(r).filter(([e])=>e.startsWith("blue"))}}},template:`
      <div style="display:flex;flex-direction:column;gap:2rem;font-family:var(--font-sans)">
        <div v-for="(swatches, name) in palettes" :key="name">
          <h3 style="font-size:var(--text-sm);font-weight:var(--font-semibold);letter-spacing:var(--tracking-widest);text-transform:uppercase;color:var(--text-secondary);margin-bottom:0.75rem">{{ name }}</h3>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
            <div
              v-for="[key, val] in swatches"
              :key="key"
              style="display:flex;flex-direction:column;align-items:center;gap:0.25rem"
            >
              <div :style="{ width:'3rem', height:'3rem', background: val, borderRadius:'var(--radius-md)', border:'1px solid var(--border-subtle)' }" />
              <span style="font-size:0.65rem;color:var(--text-secondary);text-align:center">{{ key }}</span>
            </div>
          </div>
        </div>
      </div>
    `})},a={render:()=>({setup(){return{scale:Object.entries(c)}},template:`
      <div style="display:flex;flex-direction:column;gap:0.5rem;font-family:var(--font-sans)">
        <div
          v-for="[key, val] in scale"
          :key="key"
          style="display:flex;align-items:center;gap:1rem"
        >
          <span style="width:3rem;font-size:var(--text-xs);color:var(--text-secondary);text-align:right">{{ key }}</span>
          <div :style="{ width: val || '1px', height:'1.25rem', background:'var(--brand-primary)', borderRadius:'var(--radius-sm)', minWidth: key === '0' ? '1px' : undefined }" />
          <span style="font-size:var(--text-xs);color:var(--text-secondary)">{{ val }}</span>
        </div>
      </div>
    `})};var s,n,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      const palettes = {
        Slate: Object.entries(color).filter(([k]) => k.startsWith('slate')),
        Red: Object.entries(color).filter(([k]) => k.startsWith('red')),
        Amber: Object.entries(color).filter(([k]) => k.startsWith('amber')),
        Green: Object.entries(color).filter(([k]) => k.startsWith('green')),
        Blue: Object.entries(color).filter(([k]) => k.startsWith('blue'))
      };
      return {
        palettes
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:2rem;font-family:var(--font-sans)">
        <div v-for="(swatches, name) in palettes" :key="name">
          <h3 style="font-size:var(--text-sm);font-weight:var(--font-semibold);letter-spacing:var(--tracking-widest);text-transform:uppercase;color:var(--text-secondary);margin-bottom:0.75rem">{{ name }}</h3>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
            <div
              v-for="[key, val] in swatches"
              :key="key"
              style="display:flex;flex-direction:column;align-items:center;gap:0.25rem"
            >
              <div :style="{ width:'3rem', height:'3rem', background: val, borderRadius:'var(--radius-md)', border:'1px solid var(--border-subtle)' }" />
              <span style="font-size:0.65rem;color:var(--text-secondary);text-align:center">{{ key }}</span>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,o,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      const scale = Object.entries(spacing);
      return {
        scale
      };
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:0.5rem;font-family:var(--font-sans)">
        <div
          v-for="[key, val] in scale"
          :key="key"
          style="display:flex;align-items:center;gap:1rem"
        >
          <span style="width:3rem;font-size:var(--text-xs);color:var(--text-secondary);text-align:right">{{ key }}</span>
          <div :style="{ width: val || '1px', height:'1.25rem', background:'var(--brand-primary)', borderRadius:'var(--radius-sm)', minWidth: key === '0' ? '1px' : undefined }" />
          <span style="font-size:var(--text-xs);color:var(--text-secondary)">{{ val }}</span>
        </div>
      </div>
    \`
  })
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const p=["Colours","Spacing"];export{t as Colours,a as Spacing,p as __namedExportsOrder,m as default};
