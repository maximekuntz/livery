import { computed as r, openBlock as a, createBlock as G, resolveDynamicComponent as pe, mergeProps as oe, withCtx as Z, createElementBlock as l, createCommentVNode as o, renderSlot as k, createElementVNode as n, normalizeClass as S, createVNode as M, ref as N, createTextVNode as Q, toDisplayString as c, Fragment as R, renderList as W, onMounted as de, onUnmounted as re, withKeys as ae, withDirectives as me, vModelText as He, vShow as we, nextTick as he, watch as ue, withModifiers as ce, Transition as ye, unref as te, normalizeStyle as xe, Teleport as Ee, TransitionGroup as qe, reactive as Re, useCssVars as ge, resolveComponent as Le } from "vue";
const P = (e, i) => {
  const t = e.__vccOpts || e;
  for (const [s, h] of i)
    t[s] = h;
  return t;
}, We = {
  key: 0,
  class: "lv-button__spinner",
  "aria-hidden": "true"
}, Fe = {
  key: 1,
  class: "lv-button__icon",
  "aria-hidden": "true"
}, Ke = { class: "lv-button__label" }, je = {
  key: 2,
  class: "lv-button__icon",
  "aria-hidden": "true"
}, Ye = {
  __name: "LvButton",
  props: {
    /** Visual treatment */
    variant: {
      type: String,
      default: "filled",
      validator: (e) => ["filled", "outlined", "ghost", "danger"].includes(e)
    },
    /** Size scale */
    size: {
      type: String,
      default: "md",
      validator: (e) => ["sm", "md", "lg"].includes(e)
    },
    /** Render as a different element (e.g. 'a' for links) */
    tag: {
      type: String,
      default: "button"
    },
    /** Native button type */
    type: {
      type: String,
      default: "button"
    },
    /** Disabled state */
    disabled: {
      type: Boolean,
      default: !1
    },
    /** Shows spinner and disables interaction */
    loading: {
      type: Boolean,
      default: !1
    },
    /** Icon slot position */
    iconPosition: {
      type: String,
      default: "left",
      validator: (e) => ["left", "right"].includes(e)
    }
  },
  setup(e) {
    const i = e, t = r(() => [
      "lv-button",
      `lv-button--${i.variant}`,
      `lv-button--${i.size}`,
      {
        "lv-button--disabled": i.disabled,
        "lv-button--loading": i.loading
      }
    ]);
    return (s, h) => (a(), G(pe(e.tag), oe({
      type: e.tag === "button" ? e.type : void 0,
      disabled: e.disabled || e.loading,
      "aria-disabled": e.disabled || e.loading,
      "aria-busy": e.loading,
      class: t.value
    }, s.$attrs), {
      default: Z(() => [
        e.loading ? (a(), l("span", We)) : o("", !0),
        s.$slots.icon && e.iconPosition === "left" ? (a(), l("span", Fe, [
          k(s.$slots, "icon", {}, void 0, !0)
        ])) : o("", !0),
        n("span", Ke, [
          k(s.$slots, "default", {}, void 0, !0)
        ]),
        s.$slots.icon && e.iconPosition === "right" ? (a(), l("span", je, [
          k(s.$slots, "icon", {}, void 0, !0)
        ])) : o("", !0)
      ]),
      _: 3
    }, 16, ["type", "disabled", "aria-disabled", "aria-busy", "class"]));
  }
}, Ge = /* @__PURE__ */ P(Ye, [["__scopeId", "data-v-2f0566f5"]]), Je = {
  __name: "LvBadge",
  props: {
    /** Colour variant mapped to rail signal aspects */
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "success", "warning", "danger", "info", "inverse"].includes(e)
    },
    /** Pill shape */
    pill: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const i = e, t = r(() => [
      "lv-badge",
      `lv-badge--${i.variant}`,
      { "lv-badge--pill": i.pill }
    ]);
    return (s, h) => (a(), l("span", {
      class: S(t.value),
      role: "status"
    }, [
      k(s.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, Ue = /* @__PURE__ */ P(Je, [["__scopeId", "data-v-ec03d7cd"]]), Xe = ["aria-label"], Qe = {
  key: 0,
  class: "lv-card__header"
}, Ze = { class: "lv-card__body" }, et = {
  key: 1,
  class: "lv-card__footer"
}, tt = {
  __name: "LvCard",
  props: {
    /** Elevation level */
    elevation: {
      type: String,
      default: "md",
      validator: (e) => ["none", "sm", "md", "lg"].includes(e)
    },
    /** Removes padding for flush content (e.g. full-bleed images) */
    flush: {
      type: Boolean,
      default: !1
    },
    /** Accessible label for the card group */
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  setup(e) {
    const i = e, t = r(() => [
      "lv-card",
      `lv-card--elevation-${i.elevation}`,
      { "lv-card--flush": i.flush }
    ]);
    return (s, h) => (a(), l("div", {
      class: S(t.value),
      role: "group",
      "aria-label": e.ariaLabel
    }, [
      s.$slots.header ? (a(), l("div", Qe, [
        k(s.$slots, "header", {}, void 0, !0)
      ])) : o("", !0),
      n("div", Ze, [
        k(s.$slots, "default", {}, void 0, !0)
      ]),
      s.$slots.footer ? (a(), l("div", et, [
        k(s.$slots, "footer", {}, void 0, !0)
      ])) : o("", !0)
    ], 10, Xe));
  }
}, at = /* @__PURE__ */ P(tt, [["__scopeId", "data-v-dd7e70d3"]]), lt = ["aria-orientation"], nt = {
  __name: "LvDivider",
  props: {
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => ["horizontal", "vertical"].includes(e)
    },
    /** Decorative — hides from assistive tech when true */
    decorative: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const i = e, t = r(() => [
      "lv-divider",
      `lv-divider--${i.orientation}`
    ]);
    return (s, h) => (a(), l("hr", {
      class: S(t.value),
      "aria-orientation": e.orientation,
      role: "separator"
    }, null, 10, lt));
  }
}, it = /* @__PURE__ */ P(nt, [["__scopeId", "data-v-3d2d3ce2"]]), st = ["width", "height", "aria-hidden", "aria-label", "role", "innerHTML"], Se = {
  check: '<path d="M4.5 12.75l6 6 9-13.5"/>',
  close: '<path d="M6 18L18 6M6 6l12 12"/>',
  "chevron-down": '<path d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>',
  "chevron-up": '<path d="M4.5 15.75l7.5-7.5 7.5 7.5"/>',
  "chevron-left": '<path d="M15.75 19.5L8.25 12l7.5-7.5"/>',
  "chevron-right": '<path d="M8.25 4.5l7.5 7.5-7.5 7.5"/>',
  eye: '<path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
  "eye-off": '<path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>',
  search: '<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>',
  info: '<path d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>',
  warning: '<path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>',
  "arrow-left": '<path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>',
  "arrow-right": '<path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>',
  plus: '<path d="M12 4.5v15m7.5-7.5h-15"/>',
  minus: '<path d="M19.5 12h-15"/>',
  menu: '<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>',
  settings: '<path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
  user: '<path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>',
  logout: '<path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>',
  "external-link": '<path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>',
  "check-circle": '<path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  "x-circle": '<path d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  calendar: '<path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008zm0 3h.008v.008H12V15zm-3-3h.008v.008H9v-.008zm0 3h.008v.008H9V15zm6-3h.008v.008H15v-.008z"/>',
  clock: '<path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>'
}, ot = {
  __name: "LvBaseIcon",
  props: {
    /** Icon name — must be one of the available icons */
    name: {
      type: String,
      required: !0,
      validator: (e) => Object.keys(Se).includes(e)
    },
    /** T-shirt size */
    size: {
      type: String,
      default: "md",
      validator: (e) => ["xs", "sm", "md", "lg", "xl"].includes(e)
    },
    /** Accessible label — omit for decorative icons */
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  setup(e) {
    const i = e, t = { xs: 12, sm: 16, md: 20, lg: 24, xl: 32 }, s = r(() => Se[i.name] ?? "");
    return (h, f) => (a(), l("svg", {
      width: t[e.size],
      height: t[e.size],
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.75",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": !e.ariaLabel,
      "aria-label": e.ariaLabel,
      role: e.ariaLabel ? "img" : void 0,
      class: "lv-icon",
      innerHTML: s.value
    }, null, 8, st));
  }
}, I = /* @__PURE__ */ P(ot, [["__scopeId", "data-v-69ff74d8"]]), dt = ["disabled", "aria-disabled", "aria-label", "title"], rt = {
  __name: "LvClickableIcon",
  props: {
    /** Icon to display */
    icon: {
      type: String,
      required: !0
    },
    /** Accessible label (required for icon-only buttons) */
    ariaLabel: {
      type: String,
      required: !0
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ["sm", "md", "lg"].includes(e)
    },
    variant: {
      type: String,
      default: "ghost",
      validator: (e) => ["ghost", "outlined", "filled", "danger"].includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const i = e, t = { sm: "sm", md: "md", lg: "lg" }, s = r(() => [
      "lv-clickable-icon",
      `lv-clickable-icon--${i.size}`,
      `lv-clickable-icon--${i.variant}`,
      { "lv-clickable-icon--disabled": i.disabled }
    ]);
    return (h, f) => (a(), l("button", oe({
      type: "button",
      class: s.value,
      disabled: e.disabled,
      "aria-disabled": e.disabled,
      "aria-label": e.ariaLabel,
      title: e.ariaLabel
    }, h.$attrs), [
      M(I, {
        name: e.icon,
        size: t[e.size],
        "aria-hidden": "true"
      }, null, 8, ["name", "size"])
    ], 16, dt));
  }
}, Ce = /* @__PURE__ */ P(rt, [["__scopeId", "data-v-61c8e5af"]]), ut = ["for"], ct = {
  key: 0,
  class: "lv-text-input__required",
  "aria-hidden": "true"
}, vt = { class: "lv-text-input__wrapper" }, ft = {
  key: 0,
  class: "lv-text-input__addon lv-text-input__addon--leading",
  "aria-hidden": "true"
}, bt = ["id", "type", "value", "placeholder", "disabled", "readonly", "required", "autocomplete", "aria-describedby", "aria-invalid"], mt = {
  key: 1,
  class: "lv-text-input__addon lv-text-input__addon--trailing"
}, pt = {
  key: 2,
  class: "lv-text-input__addon lv-text-input__addon--trailing",
  "aria-hidden": "true"
}, ht = ["id"], yt = ["id"], gt = {
  __name: "LvTextInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    /** Input type — password gets a built-in reveal toggle */
    type: {
      type: String,
      default: "text",
      validator: (e) => ["text", "email", "password", "number", "tel", "url", "search"].includes(e)
    },
    label: { type: String, default: void 0 },
    placeholder: { type: String, default: void 0 },
    hint: { type: String, default: void 0 },
    /** Renders error style and announces message via role="alert" */
    error: { type: String, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    autocomplete: { type: String, default: void 0 },
    /** Explicit id — auto-generated if omitted */
    id: { type: String, default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const i = e, t = Math.random().toString(36).slice(2, 8), s = r(() => i.id ?? `lv-input-${t}`), h = r(() => `${s.value}-desc`), f = N(!1), _ = r(() => i.type === "password" ? f.value ? "text" : "password" : i.type), m = r(() => [
      "lv-text-input",
      {
        "lv-text-input--disabled": i.disabled,
        "lv-text-input--error": !!i.error
      }
    ]);
    return (g, w) => (a(), l("div", {
      class: S(m.value)
    }, [
      e.label ? (a(), l("label", {
        key: 0,
        for: s.value,
        class: "lv-text-input__label"
      }, [
        Q(c(e.label) + " ", 1),
        e.required ? (a(), l("span", ct, "*")) : o("", !0)
      ], 8, ut)) : o("", !0),
      n("div", vt, [
        g.$slots.leading ? (a(), l("span", ft, [
          k(g.$slots, "leading", {}, void 0, !0)
        ])) : o("", !0),
        n("input", oe({
          id: s.value,
          type: _.value,
          value: e.modelValue,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          required: e.required,
          autocomplete: e.autocomplete,
          "aria-describedby": h.value,
          "aria-invalid": !!e.error,
          class: ["lv-text-input__input", {
            "lv-text-input__input--has-leading": g.$slots.leading,
            "lv-text-input__input--has-trailing": g.$slots.trailing || e.type === "password"
          }]
        }, g.$attrs, {
          onInput: w[0] || (w[0] = (T) => g.$emit("update:modelValue", T.target.value))
        }), null, 16, bt),
        e.type === "password" ? (a(), l("span", mt, [
          M(Ce, {
            icon: f.value ? "eye-off" : "eye",
            ariaLabel: f.value ? "Hide password" : "Show password",
            size: "sm",
            variant: "ghost",
            onClick: w[1] || (w[1] = (T) => f.value = !f.value)
          }, null, 8, ["icon", "ariaLabel"])
        ])) : g.$slots.trailing ? (a(), l("span", pt, [
          k(g.$slots, "trailing", {}, void 0, !0)
        ])) : o("", !0)
      ]),
      e.error ? (a(), l("p", {
        key: 1,
        id: h.value,
        class: "lv-text-input__hint lv-text-input__hint--error",
        role: "alert"
      }, c(e.error), 9, ht)) : e.hint ? (a(), l("p", {
        key: 2,
        id: h.value,
        class: "lv-text-input__hint"
      }, c(e.hint), 9, yt)) : o("", !0)
    ], 2));
  }
}, _t = /* @__PURE__ */ P(gt, [["__scopeId", "data-v-0e936745"]]), $t = ["id", "type", "checked", "disabled", "indeterminate", "aria-describedby", "aria-invalid", "name", "value"], St = {
  key: 0,
  class: "lv-boolean-input__box",
  "aria-hidden": "true"
}, kt = {
  key: 1,
  class: "lv-boolean-input__track",
  "aria-hidden": "true"
}, wt = {
  key: 2,
  class: "lv-boolean-input__radio",
  "aria-hidden": "true"
}, xt = {
  key: 0,
  class: "lv-boolean-input__radio-dot"
}, Lt = {
  key: 3,
  class: "lv-boolean-input__label"
}, Ct = ["id"], zt = ["id"], Mt = {
  __name: "LvBooleanInput",
  props: {
    modelValue: {
      default: !1
    },
    /** Visual and semantic type */
    type: {
      type: String,
      default: "checkbox",
      validator: (e) => ["checkbox", "toggle", "radio"].includes(e)
    },
    /** Radio option value */
    value: {
      default: void 0
    },
    label: { type: String, default: void 0 },
    hint: { type: String, default: void 0 },
    error: { type: String, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    /** Checkbox indeterminate state */
    indeterminate: { type: Boolean, default: !1 },
    name: { type: String, default: void 0 },
    id: { type: String, default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: i }) {
    const t = e, s = i, h = Math.random().toString(36).slice(2, 8), f = r(() => t.id ?? `lv-bool-${h}`), _ = r(() => `${f.value}-desc`), m = r(() => t.type === "toggle" ? "checkbox" : t.type), g = r(
      () => t.type === "radio" ? t.modelValue === t.value : !!t.modelValue
    );
    function w(x) {
      t.type === "radio" ? s("update:modelValue", t.value) : s("update:modelValue", x.target.checked);
    }
    const T = r(() => [
      "lv-boolean-input",
      `lv-boolean-input--${t.type}`,
      {
        "lv-boolean-input--disabled": t.disabled,
        "lv-boolean-input--error": !!t.error,
        "lv-boolean-input--checked": g.value
      }
    ]);
    return (x, b) => (a(), l("div", {
      class: S(T.value)
    }, [
      n("label", {
        class: S(["lv-boolean-input__control", { "lv-boolean-input__control--toggle": e.type === "toggle" }])
      }, [
        n("input", oe({
          id: f.value,
          type: m.value,
          checked: g.value,
          disabled: e.disabled,
          indeterminate: e.type === "checkbox" && e.indeterminate,
          "aria-describedby": e.hint || e.error ? _.value : void 0,
          "aria-invalid": !!e.error,
          name: e.name,
          value: e.value,
          class: "lv-boolean-input__native"
        }, x.$attrs, { onChange: w }), null, 16, $t),
        e.type === "checkbox" ? (a(), l("span", St, [
          g.value ? (a(), G(I, {
            key: 0,
            name: "check",
            size: "xs"
          })) : e.indeterminate ? (a(), G(I, {
            key: 1,
            name: "minus",
            size: "xs"
          })) : o("", !0)
        ])) : o("", !0),
        e.type === "toggle" ? (a(), l("span", kt, [...b[0] || (b[0] = [
          n("span", { class: "lv-boolean-input__thumb" }, null, -1)
        ])])) : o("", !0),
        e.type === "radio" ? (a(), l("span", wt, [
          g.value ? (a(), l("span", xt)) : o("", !0)
        ])) : o("", !0),
        e.label ? (a(), l("span", Lt, c(e.label), 1)) : o("", !0)
      ], 2),
      e.error ? (a(), l("p", {
        key: 0,
        id: _.value,
        class: "lv-boolean-input__hint lv-boolean-input__hint--error",
        role: "alert"
      }, c(e.error), 9, Ct)) : e.hint ? (a(), l("p", {
        key: 1,
        id: _.value,
        class: "lv-boolean-input__hint"
      }, c(e.hint), 9, zt)) : o("", !0)
    ], 2));
  }
}, It = /* @__PURE__ */ P(Mt, [["__scopeId", "data-v-199bb982"]]), Vt = ["for"], Dt = {
  key: 0,
  class: "lv-select-input__required",
  "aria-hidden": "true"
}, Tt = { class: "lv-select-input__wrapper" }, Bt = ["id", "value", "disabled", "required", "aria-describedby", "aria-invalid"], Pt = ["selected"], Nt = ["value", "disabled"], Ot = {
  class: "lv-select-input__chevron",
  "aria-hidden": "true"
}, At = ["id"], Ht = ["id"], Et = {
  __name: "LvSelectInput",
  props: {
    modelValue: {
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    label: { type: String, default: void 0 },
    placeholder: { type: String, default: void 0 },
    hint: { type: String, default: void 0 },
    error: { type: String, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    id: { type: String, default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const i = e, t = Math.random().toString(36).slice(2, 8), s = r(() => i.id ?? `lv-select-${t}`), h = r(() => `${s.value}-desc`), f = r(
      () => i.options.map(
        (m) => typeof m == "string" ? { label: m, value: m } : m
      )
    ), _ = r(() => [
      "lv-select-input",
      {
        "lv-select-input--disabled": i.disabled,
        "lv-select-input--error": !!i.error
      }
    ]);
    return (m, g) => (a(), l("div", {
      class: S(_.value)
    }, [
      e.label ? (a(), l("label", {
        key: 0,
        for: s.value,
        class: "lv-select-input__label"
      }, [
        Q(c(e.label) + " ", 1),
        e.required ? (a(), l("span", Dt, "*")) : o("", !0)
      ], 8, Vt)) : o("", !0),
      n("div", Tt, [
        n("select", oe({
          id: s.value,
          value: e.modelValue,
          disabled: e.disabled,
          required: e.required,
          "aria-describedby": e.hint || e.error ? h.value : void 0,
          "aria-invalid": !!e.error,
          class: "lv-select-input__select"
        }, m.$attrs, {
          onChange: g[0] || (g[0] = (w) => m.$emit("update:modelValue", w.target.value))
        }), [
          e.placeholder ? (a(), l("option", {
            key: 0,
            value: "",
            disabled: "",
            selected: !e.modelValue
          }, c(e.placeholder), 9, Pt)) : o("", !0),
          (a(!0), l(R, null, W(f.value, (w) => (a(), l("option", {
            key: w.value,
            value: w.value,
            disabled: w.disabled
          }, c(w.label), 9, Nt))), 128))
        ], 16, Bt),
        n("span", Ot, [
          M(I, {
            name: "chevron-down",
            size: "sm"
          })
        ])
      ]),
      e.error ? (a(), l("p", {
        key: 1,
        id: h.value,
        class: "lv-select-input__hint lv-select-input__hint--error",
        role: "alert"
      }, c(e.error), 9, At)) : e.hint ? (a(), l("p", {
        key: 2,
        id: h.value,
        class: "lv-select-input__hint"
      }, c(e.hint), 9, Ht)) : o("", !0)
    ], 2));
  }
}, qt = /* @__PURE__ */ P(Et, [["__scopeId", "data-v-344b16a4"]]), Rt = ["id"], Wt = {
  key: 0,
  class: "lv-multi-select__required",
  "aria-hidden": "true"
}, Ft = ["aria-expanded", "aria-labelledby", "aria-describedby", "aria-invalid", "disabled"], Kt = { class: "lv-multi-select__trigger-text" }, jt = {
  key: 0,
  class: "lv-multi-select__placeholder"
}, Yt = { key: 1 }, Gt = { key: 2 }, Jt = { class: "lv-multi-select__overflow-count" }, Ut = ["aria-labelledby"], Xt = { class: "lv-multi-select__search" }, Qt = {
  class: "lv-multi-select__list",
  role: "presentation"
}, Zt = ["aria-selected", "aria-disabled", "onClick"], ea = {
  class: "lv-multi-select__option-check",
  "aria-hidden": "true"
}, ta = {
  key: 0,
  class: "lv-multi-select__empty"
}, aa = {
  key: 0,
  class: "lv-multi-select__footer"
}, la = { class: "lv-multi-select__count" }, na = ["id"], ia = ["id"], sa = {
  __name: "LvMultiSelectInput",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    label: { type: String, default: void 0 },
    placeholder: { type: String, default: "Select options…" },
    hint: { type: String, default: void 0 },
    error: { type: String, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    id: { type: String, default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: i }) {
    const t = e, s = i, h = Math.random().toString(36).slice(2, 8), f = r(() => `lv-ms-label-${h}`), _ = r(() => `lv-ms-desc-${h}`), m = N(!1), g = N(""), w = N(null), T = N(null), x = r(
      () => t.options.map(
        (d) => typeof d == "string" ? { label: d, value: d } : d
      )
    ), b = r(() => {
      if (!g.value) return x.value;
      const d = g.value.toLowerCase();
      return x.value.filter((B) => B.label.toLowerCase().includes(d));
    }), u = r(
      () => x.value.filter((d) => t.modelValue.includes(d.value))
    );
    function L(d) {
      return t.modelValue.includes(d);
    }
    function H(d) {
      if (typeof d == "string" || typeof d == "number") {
        const B = L(d) ? t.modelValue.filter((C) => C !== d) : [...t.modelValue, d];
        s("update:modelValue", B);
      } else {
        if (t.disabled) return;
        m.value = !m.value, m.value && (g.value = "", he(() => {
          var B;
          return (B = T.value) == null ? void 0 : B.focus();
        }));
      }
    }
    function O() {
      m.value = !1;
    }
    function D() {
      s("update:modelValue", []);
    }
    function $(d) {
      w.value && !w.value.contains(d.target) && O();
    }
    de(() => document.addEventListener("mousedown", $)), re(() => document.removeEventListener("mousedown", $));
    const j = r(() => [
      "lv-multi-select",
      {
        "lv-multi-select--open": m.value,
        "lv-multi-select--disabled": t.disabled,
        "lv-multi-select--error": !!t.error
      }
    ]);
    return (d, B) => (a(), l("div", {
      class: S(j.value),
      ref_key: "rootRef",
      ref: w
    }, [
      e.label ? (a(), l("label", {
        key: 0,
        class: "lv-multi-select__label",
        id: f.value
      }, [
        Q(c(e.label) + " ", 1),
        e.required ? (a(), l("span", Wt, "*")) : o("", !0)
      ], 8, Rt)) : o("", !0),
      n("button", {
        type: "button",
        class: "lv-multi-select__trigger",
        "aria-haspopup": "listbox",
        "aria-expanded": m.value,
        "aria-labelledby": e.label ? f.value : void 0,
        "aria-describedby": e.hint || e.error ? _.value : void 0,
        "aria-invalid": !!e.error,
        disabled: e.disabled,
        onClick: H,
        onKeydown: [
          ae(O, ["escape"]),
          ae(O, ["tab"])
        ]
      }, [
        n("span", Kt, [
          u.value.length === 0 ? (a(), l("span", jt, c(e.placeholder), 1)) : u.value.length <= 2 ? (a(), l("span", Yt, c(u.value.map((C) => C.label).join(", ")), 1)) : (a(), l("span", Gt, [
            Q(c(u.value[0].label) + ", " + c(u.value[1].label) + " ", 1),
            n("span", Jt, "+" + c(u.value.length - 2), 1)
          ]))
        ]),
        M(I, {
          name: m.value ? "chevron-up" : "chevron-down",
          size: "sm",
          "aria-hidden": "true"
        }, null, 8, ["name"])
      ], 40, Ft),
      me(n("div", {
        class: "lv-multi-select__dropdown",
        role: "listbox",
        "aria-multiselectable": !0,
        "aria-labelledby": e.label ? f.value : void 0
      }, [
        n("div", Xt, [
          M(I, {
            name: "search",
            size: "sm",
            class: "lv-multi-select__search-icon",
            "aria-hidden": "true"
          }),
          me(n("input", {
            ref_key: "searchRef",
            ref: T,
            "onUpdate:modelValue": B[0] || (B[0] = (C) => g.value = C),
            type: "text",
            class: "lv-multi-select__search-input",
            placeholder: "Filter…",
            "aria-label": "Filter options",
            onKeydown: ae(O, ["escape"])
          }, null, 544), [
            [He, g.value]
          ])
        ]),
        n("ul", Qt, [
          (a(!0), l(R, null, W(b.value, (C) => (a(), l("li", {
            key: C.value,
            role: "option",
            "aria-selected": L(C.value),
            "aria-disabled": C.disabled,
            class: S(["lv-multi-select__option", {
              "lv-multi-select__option--selected": L(C.value),
              "lv-multi-select__option--disabled": C.disabled
            }]),
            onClick: (K) => !C.disabled && H(C.value)
          }, [
            n("span", ea, [
              L(C.value) ? (a(), G(I, {
                key: 0,
                name: "check",
                size: "xs"
              })) : o("", !0)
            ]),
            Q(" " + c(C.label), 1)
          ], 10, Zt))), 128)),
          b.value.length === 0 ? (a(), l("li", ta, ' No options match "' + c(g.value) + '" ', 1)) : o("", !0)
        ]),
        e.modelValue.length > 0 ? (a(), l("div", aa, [
          n("button", {
            type: "button",
            class: "lv-multi-select__clear",
            onClick: D
          }, " Clear all "),
          n("span", la, c(e.modelValue.length) + " selected", 1)
        ])) : o("", !0)
      ], 8, Ut), [
        [we, m.value]
      ]),
      e.error ? (a(), l("p", {
        key: 1,
        id: _.value,
        class: "lv-multi-select__hint lv-multi-select__hint--error",
        role: "alert"
      }, c(e.error), 9, na)) : e.hint ? (a(), l("p", {
        key: 2,
        id: _.value,
        class: "lv-multi-select__hint"
      }, c(e.hint), 9, ia)) : o("", !0)
    ], 2));
  }
}, oa = /* @__PURE__ */ P(sa, [["__scopeId", "data-v-392cbc1a"]]), da = ["for"], ra = {
  key: 0,
  class: "lv-date-input__required",
  "aria-hidden": "true"
}, ua = { class: "lv-date-input__wrapper" }, ca = ["id", "disabled", "aria-expanded", "aria-describedby", "aria-invalid", "onKeydown"], va = {
  key: 0,
  class: "lv-date-input__panel",
  role: "dialog",
  "aria-label": "Choose a date"
}, fa = { class: "lv-date-input__nav" }, ba = { class: "lv-date-input__month-label" }, ma = ["aria-label"], pa = ["disabled", "aria-selected", "aria-current", "aria-label", "onClick"], ha = { class: "lv-date-input__actions" }, ya = {
  __name: "LvDateInput",
  props: {
    modelValue: { type: String, default: null },
    label: { type: String, default: void 0 },
    placeholder: { type: String, default: "Select date" },
    hint: { type: String, default: void 0 },
    error: { type: String, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    id: { type: String, default: void 0 },
    /** ISO date string — dates before this are disabled */
    min: { type: String, default: void 0 },
    /** ISO date string — dates after this are disabled */
    max: { type: String, default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: i }) {
    const t = e, s = i, h = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], f = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ], _ = Math.random().toString(36).slice(2, 8), m = r(() => t.id ?? `lv-date-${_}`), g = `lv-date-desc-${_}`, w = N(null), T = N(!1);
    function x() {
      if (t.modelValue) {
        const [A, V] = t.modelValue.split("-").map(Number);
        return { year: A, month: V - 1 };
      }
      const v = /* @__PURE__ */ new Date();
      return { year: v.getFullYear(), month: v.getMonth() };
    }
    const b = N(x());
    ue(() => t.modelValue, (v) => {
      if (v) {
        const [A, V] = v.split("-").map(Number);
        b.value = { year: A, month: V - 1 };
      }
    });
    function u(v) {
      return `${v.getFullYear()}-${String(v.getMonth() + 1).padStart(2, "0")}-${String(v.getDate()).padStart(2, "0")}`;
    }
    const L = u(/* @__PURE__ */ new Date()), H = r(() => {
      const { year: v, month: A } = b.value, V = new Date(v, A, 1), ie = new Date(v, A + 1, 0), U = [], ve = (V.getDay() + 6) % 7;
      for (let Y = ve - 1; Y >= 0; Y--)
        U.push(O(new Date(v, A, -Y), !0));
      for (let Y = 1; Y <= ie.getDate(); Y++)
        U.push(O(new Date(v, A, Y), !1));
      const fe = (7 - U.length % 7) % 7;
      for (let Y = 1; Y <= fe; Y++)
        U.push(O(new Date(v, A + 1, Y), !0));
      return U;
    });
    function O(v, A) {
      const V = u(v), ie = A || t.min && V < t.min || t.max && V > t.max;
      return {
        iso: V,
        day: v.getDate(),
        isToday: V === L,
        isSelected: V === t.modelValue,
        isOutside: A,
        isDisabled: ie,
        ariaLabel: v.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
      };
    }
    const D = r(() => `${f[b.value.month]} ${b.value.year}`), $ = r(() => {
      if (!t.modelValue) return t.placeholder;
      const [v, A, V] = t.modelValue.split("-").map(Number);
      return new Date(v, A - 1, V).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    });
    function j() {
      t.readonly || (T.value ? d() : T.value = !0);
    }
    function d() {
      T.value = !1;
    }
    function B() {
      b.value.month === 0 ? b.value = { year: b.value.year - 1, month: 11 } : b.value = { ...b.value, month: b.value.month - 1 };
    }
    function C() {
      b.value.month === 11 ? b.value = { year: b.value.year + 1, month: 0 } : b.value = { ...b.value, month: b.value.month + 1 };
    }
    function K(v) {
      v.isDisabled || (s("update:modelValue", v.iso), d());
    }
    function ee() {
      const v = L;
      t.min && v < t.min || t.max && v > t.max || (s("update:modelValue", v), b.value = { year: (/* @__PURE__ */ new Date()).getFullYear(), month: (/* @__PURE__ */ new Date()).getMonth() }, d());
    }
    function ne() {
      s("update:modelValue", null), d();
    }
    function q(v) {
      T.value && w.value && !w.value.contains(v.target) && d();
    }
    de(() => document.addEventListener("mousedown", q)), re(() => document.removeEventListener("mousedown", q));
    const F = r(() => [
      "lv-date-input",
      {
        "lv-date-input--disabled": t.disabled,
        "lv-date-input--readonly": t.readonly,
        "lv-date-input--error": !!t.error
      }
    ]);
    return (v, A) => (a(), l("div", {
      ref_key: "rootEl",
      ref: w,
      class: S(F.value)
    }, [
      e.label ? (a(), l("label", {
        key: 0,
        for: m.value,
        class: "lv-date-input__label"
      }, [
        Q(c(e.label), 1),
        e.required ? (a(), l("span", ra, " *")) : o("", !0)
      ], 8, da)) : o("", !0),
      n("div", ua, [
        n("button", {
          type: "button",
          id: m.value,
          class: "lv-date-input__trigger",
          disabled: e.disabled,
          "aria-expanded": T.value,
          "aria-haspopup": "dialog",
          "aria-describedby": e.hint || e.error ? g : void 0,
          "aria-invalid": e.error ? !0 : void 0,
          onClick: j,
          onKeydown: ae(ce(d, ["stop"]), ["esc"])
        }, [
          M(I, {
            name: "calendar",
            size: "sm",
            class: "lv-date-input__icon",
            "aria-hidden": "true"
          }),
          n("span", {
            class: S(["lv-date-input__value", { "lv-date-input__value--placeholder": !e.modelValue }])
          }, c($.value), 3),
          M(I, {
            name: "chevron-down",
            size: "sm",
            class: S(["lv-date-input__chevron", { "lv-date-input__chevron--open": T.value }]),
            "aria-hidden": "true"
          }, null, 8, ["class"])
        ], 40, ca),
        M(ye, { name: "lv-date-panel" }, {
          default: Z(() => [
            T.value ? (a(), l("div", va, [
              n("div", fa, [
                n("button", {
                  type: "button",
                  class: "lv-date-input__nav-btn",
                  "aria-label": "Previous month",
                  onClick: B
                }, [
                  M(I, {
                    name: "chevron-left",
                    size: "sm",
                    "aria-hidden": "true"
                  })
                ]),
                n("span", ba, c(D.value), 1),
                n("button", {
                  type: "button",
                  class: "lv-date-input__nav-btn",
                  "aria-label": "Next month",
                  onClick: C
                }, [
                  M(I, {
                    name: "chevron-right",
                    size: "sm",
                    "aria-hidden": "true"
                  })
                ])
              ]),
              n("div", {
                class: "lv-date-input__grid",
                role: "grid",
                "aria-label": D.value
              }, [
                (a(), l(R, null, W(h, (V) => n("div", {
                  key: V,
                  class: "lv-date-input__weekday",
                  role: "columnheader",
                  "aria-hidden": "true"
                }, c(V), 1)), 64)),
                (a(!0), l(R, null, W(H.value, (V) => (a(), l("button", {
                  key: V.iso,
                  type: "button",
                  role: "gridcell",
                  class: S(["lv-date-input__day", {
                    "lv-date-input__day--today": V.isToday,
                    "lv-date-input__day--selected": V.isSelected,
                    "lv-date-input__day--outside": V.isOutside,
                    "lv-date-input__day--disabled": V.isDisabled
                  }]),
                  disabled: V.isDisabled,
                  "aria-selected": V.isSelected || void 0,
                  "aria-current": V.isToday ? "date" : void 0,
                  "aria-label": V.ariaLabel,
                  onClick: (ie) => K(V)
                }, c(V.day), 11, pa))), 128))
              ], 8, ma),
              n("div", ha, [
                n("button", {
                  type: "button",
                  class: "lv-date-input__action-btn",
                  onClick: ee
                }, "Today"),
                e.modelValue ? (a(), l("button", {
                  key: 0,
                  type: "button",
                  class: "lv-date-input__action-btn lv-date-input__action-btn--muted",
                  onClick: ne
                }, "Clear")) : o("", !0)
              ])
            ])) : o("", !0)
          ]),
          _: 1
        })
      ]),
      e.error ? (a(), l("p", {
        key: 1,
        id: g,
        class: "lv-date-input__hint lv-date-input__hint--error",
        role: "alert"
      }, c(e.error), 1)) : e.hint ? (a(), l("p", {
        key: 2,
        id: g,
        class: "lv-date-input__hint"
      }, c(e.hint), 1)) : o("", !0)
    ], 2));
  }
}, ga = /* @__PURE__ */ P(ya, [["__scopeId", "data-v-dd0b90b8"]]), _a = ["for"], $a = {
  key: 0,
  class: "lv-time-input__required",
  "aria-hidden": "true"
}, Sa = { class: "lv-time-input__wrapper" }, ka = ["id", "disabled", "aria-expanded", "aria-describedby", "aria-invalid", "onKeydown"], wa = {
  key: 0,
  class: "lv-time-input__panel"
}, xa = { class: "lv-time-input__columns" }, La = ["aria-activedescendant"], Ca = ["id", "aria-selected", "onClick"], za = ["aria-activedescendant"], Ma = ["id", "aria-selected", "onClick"], Ia = {
  key: 0,
  class: "lv-time-input__actions"
}, Va = {
  __name: "LvTimeInput",
  props: {
    modelValue: { type: String, default: null },
    label: { type: String, default: void 0 },
    placeholder: { type: String, default: "Select time" },
    hint: { type: String, default: void 0 },
    error: { type: String, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    id: { type: String, default: void 0 },
    /** Interval between minute options (1–30) */
    minuteStep: { type: Number, default: 5 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: i }) {
    const t = e, s = i, h = Array.from({ length: 24 }, (q, F) => F), f = Math.random().toString(36).slice(2, 8), _ = r(() => t.id ?? `lv-time-${f}`), m = `lv-time-desc-${f}`, g = N(null), w = N(null), T = N(null), x = N(!1), b = r(() => {
      const q = Math.max(1, Math.min(30, t.minuteStep)), F = [];
      for (let v = 0; v < 60; v += q) F.push(v);
      return F;
    }), u = r(() => t.modelValue ? parseInt(t.modelValue.split(":")[0], 10) : null), L = r(() => t.modelValue ? parseInt(t.modelValue.split(":")[1], 10) : null), H = r(() => t.modelValue ? t.modelValue : t.placeholder);
    function O() {
      t.readonly || (x.value ? D() : (x.value = !0, he($)));
    }
    function D() {
      x.value = !1;
    }
    function $() {
      j(w.value, u.value, `lv-time-h-${f}`), j(T.value, L.value, `lv-time-m-${f}`);
    }
    function j(q, F, v) {
      if (!q || F === null) return;
      const A = q.querySelector(`#${v}-${F}`);
      A && A.scrollIntoView({ block: "center", behavior: "instant" });
    }
    function d(q, F) {
      const v = q ?? u.value ?? 0, A = F ?? L.value ?? 0;
      return `${String(v).padStart(2, "0")}:${String(A).padStart(2, "0")}`;
    }
    function B(q) {
      s("update:modelValue", d(q, null));
    }
    function C(q) {
      s("update:modelValue", d(null, q));
    }
    function K() {
      s("update:modelValue", null), D();
    }
    function ee(q) {
      x.value && g.value && !g.value.contains(q.target) && D();
    }
    de(() => document.addEventListener("mousedown", ee)), re(() => document.removeEventListener("mousedown", ee));
    const ne = r(() => [
      "lv-time-input",
      {
        "lv-time-input--disabled": t.disabled,
        "lv-time-input--readonly": t.readonly,
        "lv-time-input--error": !!t.error
      }
    ]);
    return (q, F) => (a(), l("div", {
      ref_key: "rootEl",
      ref: g,
      class: S(ne.value)
    }, [
      e.label ? (a(), l("label", {
        key: 0,
        for: _.value,
        class: "lv-time-input__label"
      }, [
        Q(c(e.label), 1),
        e.required ? (a(), l("span", $a, " *")) : o("", !0)
      ], 8, _a)) : o("", !0),
      n("div", Sa, [
        n("button", {
          type: "button",
          id: _.value,
          class: "lv-time-input__trigger",
          disabled: e.disabled,
          "aria-expanded": x.value,
          "aria-haspopup": "listbox",
          "aria-describedby": e.hint || e.error ? m : void 0,
          "aria-invalid": e.error ? !0 : void 0,
          onClick: O,
          onKeydown: ae(ce(D, ["stop"]), ["esc"])
        }, [
          M(I, {
            name: "clock",
            size: "sm",
            class: "lv-time-input__icon",
            "aria-hidden": "true"
          }),
          n("span", {
            class: S(["lv-time-input__value", { "lv-time-input__value--placeholder": !e.modelValue }])
          }, c(H.value), 3),
          M(I, {
            name: "chevron-down",
            size: "sm",
            class: S(["lv-time-input__chevron", { "lv-time-input__chevron--open": x.value }]),
            "aria-hidden": "true"
          }, null, 8, ["class"])
        ], 40, ka),
        M(ye, { name: "lv-time-panel" }, {
          default: Z(() => [
            x.value ? (a(), l("div", wa, [
              n("div", xa, [
                n("div", {
                  ref_key: "hoursColEl",
                  ref: w,
                  class: "lv-time-input__column",
                  role: "listbox",
                  "aria-label": "Hour",
                  "aria-activedescendant": u.value !== null ? `lv-time-h-${te(f)}-${u.value}` : void 0
                }, [
                  (a(!0), l(R, null, W(te(h), (v) => (a(), l("button", {
                    key: v,
                    id: `lv-time-h-${te(f)}-${v}`,
                    type: "button",
                    role: "option",
                    class: S(["lv-time-input__option", { "lv-time-input__option--selected": v === u.value }]),
                    "aria-selected": v === u.value,
                    onClick: (A) => B(v)
                  }, c(String(v).padStart(2, "0")), 11, Ca))), 128))
                ], 8, La),
                F[0] || (F[0] = n("div", {
                  class: "lv-time-input__separator",
                  "aria-hidden": "true"
                }, ":", -1)),
                n("div", {
                  ref_key: "minsColEl",
                  ref: T,
                  class: "lv-time-input__column",
                  role: "listbox",
                  "aria-label": "Minute",
                  "aria-activedescendant": L.value !== null ? `lv-time-m-${te(f)}-${L.value}` : void 0
                }, [
                  (a(!0), l(R, null, W(b.value, (v) => (a(), l("button", {
                    key: v,
                    id: `lv-time-m-${te(f)}-${v}`,
                    type: "button",
                    role: "option",
                    class: S(["lv-time-input__option", { "lv-time-input__option--selected": v === L.value }]),
                    "aria-selected": v === L.value,
                    onClick: (A) => C(v)
                  }, c(String(v).padStart(2, "0")), 11, Ma))), 128))
                ], 8, za)
              ]),
              e.modelValue ? (a(), l("div", Ia, [
                n("button", {
                  type: "button",
                  class: "lv-time-input__action-btn",
                  onClick: K
                }, "Clear")
              ])) : o("", !0)
            ])) : o("", !0)
          ]),
          _: 1
        })
      ]),
      e.error ? (a(), l("p", {
        key: 1,
        id: m,
        class: "lv-time-input__hint lv-time-input__hint--error",
        role: "alert"
      }, c(e.error), 1)) : e.hint ? (a(), l("p", {
        key: 2,
        id: m,
        class: "lv-time-input__hint"
      }, c(e.hint), 1)) : o("", !0)
    ], 2));
  }
}, Da = /* @__PURE__ */ P(Va, [["__scopeId", "data-v-b941c70d"]]), Ta = ["for"], Ba = {
  key: 0,
  class: "lv-dt-input__required",
  "aria-hidden": "true"
}, Pa = { class: "lv-dt-input__wrapper" }, Na = ["id", "disabled", "aria-expanded", "aria-describedby", "aria-invalid", "onKeydown"], Oa = {
  key: 0,
  class: "lv-dt-input__panel",
  role: "dialog",
  "aria-label": "Choose date and time"
}, Aa = { class: "lv-dt-input__body" }, Ha = { class: "lv-dt-input__calendar" }, Ea = { class: "lv-dt-input__nav" }, qa = { class: "lv-dt-input__month-label" }, Ra = ["aria-label"], Wa = ["disabled", "aria-selected", "aria-current", "aria-label", "onClick"], Fa = { class: "lv-dt-input__actions" }, Ka = { class: "lv-dt-input__time" }, ja = { class: "lv-dt-input__time-columns" }, Ya = ["id", "aria-selected", "onClick"], Ga = ["id", "aria-selected", "onClick"], Ja = {
  __name: "LvDateTimeInput",
  props: {
    modelValue: { type: String, default: null },
    label: { type: String, default: void 0 },
    placeholder: { type: String, default: "Select date and time" },
    hint: { type: String, default: void 0 },
    error: { type: String, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    id: { type: String, default: void 0 },
    /** ISO date string — dates before this are disabled */
    min: { type: String, default: void 0 },
    /** ISO date string — dates after this are disabled */
    max: { type: String, default: void 0 },
    /** Interval between minute options */
    minuteStep: { type: Number, default: 5 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: i }) {
    const t = e, s = i, h = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], f = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ], _ = Array.from({ length: 24 }, (p, z) => z), m = Math.random().toString(36).slice(2, 8), g = r(() => t.id ?? `lv-dt-${m}`), w = `lv-dt-desc-${m}`, T = N(null), x = N(null), b = N(null), u = N(!1), L = r(() => {
      var p;
      return ((p = t.modelValue) == null ? void 0 : p.split("T")[0]) ?? null;
    }), H = r(() => {
      var p;
      return ((p = t.modelValue) == null ? void 0 : p.split("T")[1]) ?? null;
    }), O = r(() => H.value ? parseInt(H.value.split(":")[0], 10) : null), D = r(() => H.value ? parseInt(H.value.split(":")[1], 10) : null), $ = r(() => {
      const p = Math.max(1, Math.min(30, t.minuteStep)), z = [];
      for (let y = 0; y < 60; y += p) z.push(y);
      return z;
    });
    function j() {
      if (L.value) {
        const [z, y] = L.value.split("-").map(Number);
        return { year: z, month: y - 1 };
      }
      const p = /* @__PURE__ */ new Date();
      return { year: p.getFullYear(), month: p.getMonth() };
    }
    const d = N(j());
    ue(L, (p) => {
      if (p) {
        const [z, y] = p.split("-").map(Number);
        d.value = { year: z, month: y - 1 };
      }
    });
    function B(p) {
      return `${p.getFullYear()}-${String(p.getMonth() + 1).padStart(2, "0")}-${String(p.getDate()).padStart(2, "0")}`;
    }
    const C = B(/* @__PURE__ */ new Date()), K = r(() => {
      const { year: p, month: z } = d.value, y = new Date(p, z, 1), X = new Date(p, z + 1, 0), le = [], Oe = (y.getDay() + 6) % 7;
      for (let J = Oe - 1; J >= 0; J--) le.push(ee(new Date(p, z, -J), !0));
      for (let J = 1; J <= X.getDate(); J++) le.push(ee(new Date(p, z, J), !1));
      const Ae = (7 - le.length % 7) % 7;
      for (let J = 1; J <= Ae; J++) le.push(ee(new Date(p, z + 1, J), !0));
      return le;
    });
    function ee(p, z) {
      const y = B(p), X = z || t.min && y < t.min.slice(0, 10) || t.max && y > t.max.slice(0, 10);
      return {
        iso: y,
        day: p.getDate(),
        isToday: y === C,
        isSelected: y === L.value,
        isOutside: z,
        isDisabled: X,
        ariaLabel: p.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
      };
    }
    const ne = r(() => `${f[d.value.month]} ${d.value.year}`), q = r(() => {
      if (!t.modelValue) return t.placeholder;
      const [p, z] = t.modelValue.split("T"), [y, X, le] = p.split("-").map(Number), be = new Date(y, X - 1, le).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
      return z ? `${be}, ${z}` : be;
    });
    function F() {
      t.readonly || (u.value ? v() : (u.value = !0, he(A)));
    }
    function v() {
      u.value = !1;
    }
    function A() {
      if (x.value && O.value !== null) {
        const p = x.value.querySelector(`#lv-dt-h-${m}-${O.value}`);
        p == null || p.scrollIntoView({ block: "center", behavior: "instant" });
      }
      if (b.value && D.value !== null) {
        const p = b.value.querySelector(`#lv-dt-m-${m}-${D.value}`);
        p == null || p.scrollIntoView({ block: "center", behavior: "instant" });
      }
    }
    function V() {
      d.value.month === 0 ? d.value = { year: d.value.year - 1, month: 11 } : d.value = { ...d.value, month: d.value.month - 1 };
    }
    function ie() {
      d.value.month === 11 ? d.value = { year: d.value.year + 1, month: 0 } : d.value = { ...d.value, month: d.value.month + 1 };
    }
    function U(p, z) {
      const y = p ?? L.value, X = z ?? H.value ?? "00:00";
      return y ? `${y}T${X}` : null;
    }
    function _e(p) {
      p.isDisabled || s("update:modelValue", U(p.iso, null));
    }
    function ve() {
      s("update:modelValue", U(C, null)), d.value = { year: (/* @__PURE__ */ new Date()).getFullYear(), month: (/* @__PURE__ */ new Date()).getMonth() };
    }
    function fe(p) {
      const z = `${String(p).padStart(2, "0")}:${String(D.value ?? 0).padStart(2, "0")}`;
      s("update:modelValue", U(null, z));
    }
    function Y(p) {
      const z = `${String(O.value ?? 0).padStart(2, "0")}:${String(p).padStart(2, "0")}`;
      s("update:modelValue", U(null, z));
    }
    function Pe() {
      s("update:modelValue", null), v();
    }
    function $e(p) {
      u.value && T.value && !T.value.contains(p.target) && v();
    }
    de(() => document.addEventListener("mousedown", $e)), re(() => document.removeEventListener("mousedown", $e));
    const Ne = r(() => [
      "lv-dt-input",
      {
        "lv-dt-input--disabled": t.disabled,
        "lv-dt-input--readonly": t.readonly,
        "lv-dt-input--error": !!t.error
      }
    ]);
    return (p, z) => (a(), l("div", {
      ref_key: "rootEl",
      ref: T,
      class: S(Ne.value)
    }, [
      e.label ? (a(), l("label", {
        key: 0,
        for: g.value,
        class: "lv-dt-input__label"
      }, [
        Q(c(e.label), 1),
        e.required ? (a(), l("span", Ba, " *")) : o("", !0)
      ], 8, Ta)) : o("", !0),
      n("div", Pa, [
        n("button", {
          type: "button",
          id: g.value,
          class: "lv-dt-input__trigger",
          disabled: e.disabled,
          "aria-expanded": u.value,
          "aria-haspopup": "dialog",
          "aria-describedby": e.hint || e.error ? w : void 0,
          "aria-invalid": e.error ? !0 : void 0,
          onClick: F,
          onKeydown: ae(ce(v, ["stop"]), ["esc"])
        }, [
          M(I, {
            name: "calendar",
            size: "sm",
            class: "lv-dt-input__icon",
            "aria-hidden": "true"
          }),
          n("span", {
            class: S(["lv-dt-input__value", { "lv-dt-input__value--placeholder": !e.modelValue }])
          }, c(q.value), 3),
          M(I, {
            name: "chevron-down",
            size: "sm",
            class: S(["lv-dt-input__chevron", { "lv-dt-input__chevron--open": u.value }]),
            "aria-hidden": "true"
          }, null, 8, ["class"])
        ], 40, Na),
        M(ye, { name: "lv-dt-panel" }, {
          default: Z(() => [
            u.value ? (a(), l("div", Oa, [
              n("div", Aa, [
                n("div", Ha, [
                  n("div", Ea, [
                    n("button", {
                      type: "button",
                      class: "lv-dt-input__nav-btn",
                      "aria-label": "Previous month",
                      onClick: V
                    }, [
                      M(I, {
                        name: "chevron-left",
                        size: "sm",
                        "aria-hidden": "true"
                      })
                    ]),
                    n("span", qa, c(ne.value), 1),
                    n("button", {
                      type: "button",
                      class: "lv-dt-input__nav-btn",
                      "aria-label": "Next month",
                      onClick: ie
                    }, [
                      M(I, {
                        name: "chevron-right",
                        size: "sm",
                        "aria-hidden": "true"
                      })
                    ])
                  ]),
                  n("div", {
                    class: "lv-dt-input__grid",
                    role: "grid",
                    "aria-label": ne.value
                  }, [
                    (a(), l(R, null, W(h, (y) => n("div", {
                      key: y,
                      class: "lv-dt-input__weekday",
                      role: "columnheader",
                      "aria-hidden": "true"
                    }, c(y), 1)), 64)),
                    (a(!0), l(R, null, W(K.value, (y) => (a(), l("button", {
                      key: y.iso,
                      type: "button",
                      role: "gridcell",
                      class: S(["lv-dt-input__day", {
                        "lv-dt-input__day--today": y.isToday,
                        "lv-dt-input__day--selected": y.isSelected,
                        "lv-dt-input__day--outside": y.isOutside,
                        "lv-dt-input__day--disabled": y.isDisabled
                      }]),
                      disabled: y.isDisabled,
                      "aria-selected": y.isSelected || void 0,
                      "aria-current": y.isToday ? "date" : void 0,
                      "aria-label": y.ariaLabel,
                      onClick: (X) => _e(y)
                    }, c(y.day), 11, Wa))), 128))
                  ], 8, Ra),
                  n("div", Fa, [
                    n("button", {
                      type: "button",
                      class: "lv-dt-input__action-btn",
                      onClick: ve
                    }, "Today"),
                    L.value ? (a(), l("button", {
                      key: 0,
                      type: "button",
                      class: "lv-dt-input__action-btn lv-dt-input__action-btn--muted",
                      onClick: Pe
                    }, "Clear")) : o("", !0)
                  ])
                ]),
                n("div", Ka, [
                  z[1] || (z[1] = n("div", { class: "lv-dt-input__time-heading" }, "Time", -1)),
                  n("div", ja, [
                    n("div", {
                      ref_key: "hoursColEl",
                      ref: x,
                      class: "lv-dt-input__time-column",
                      role: "listbox",
                      "aria-label": "Hour"
                    }, [
                      (a(!0), l(R, null, W(te(_), (y) => (a(), l("button", {
                        key: y,
                        id: `lv-dt-h-${te(m)}-${y}`,
                        type: "button",
                        role: "option",
                        class: S(["lv-dt-input__time-option", { "lv-dt-input__time-option--selected": y === O.value }]),
                        "aria-selected": y === O.value,
                        onClick: (X) => fe(y)
                      }, c(String(y).padStart(2, "0")), 11, Ya))), 128))
                    ], 512),
                    z[0] || (z[0] = n("div", {
                      class: "lv-dt-input__time-sep",
                      "aria-hidden": "true"
                    }, ":", -1)),
                    n("div", {
                      ref_key: "minsColEl",
                      ref: b,
                      class: "lv-dt-input__time-column",
                      role: "listbox",
                      "aria-label": "Minute"
                    }, [
                      (a(!0), l(R, null, W($.value, (y) => (a(), l("button", {
                        key: y,
                        id: `lv-dt-m-${te(m)}-${y}`,
                        type: "button",
                        role: "option",
                        class: S(["lv-dt-input__time-option", { "lv-dt-input__time-option--selected": y === D.value }]),
                        "aria-selected": y === D.value,
                        onClick: (X) => Y(y)
                      }, c(String(y).padStart(2, "0")), 11, Ga))), 128))
                    ], 512)
                  ])
                ])
              ])
            ])) : o("", !0)
          ]),
          _: 1
        })
      ]),
      e.error ? (a(), l("p", {
        key: 1,
        id: w,
        class: "lv-dt-input__hint lv-dt-input__hint--error",
        role: "alert"
      }, c(e.error), 1)) : e.hint ? (a(), l("p", {
        key: 2,
        id: w,
        class: "lv-dt-input__hint"
      }, c(e.hint), 1)) : o("", !0)
    ], 2));
  }
}, Ua = /* @__PURE__ */ P(Ja, [["__scopeId", "data-v-c3bff209"]]), Xa = { class: "lv-section-header" }, Qa = { class: "lv-section-header__content" }, Za = {
  key: 0,
  class: "lv-section-header__description"
}, el = {
  key: 0,
  class: "lv-section-header__actions"
}, tl = {
  __name: "LvSectionHeader",
  props: {
    /** Description text below the title */
    description: {
      type: String,
      default: void 0
    },
    /** Heading element level — choose to maintain correct document outline */
    tag: {
      type: String,
      default: "h2",
      validator: (e) => ["h2", "h3", "h4", "h5", "h6"].includes(e)
    }
  },
  setup(e) {
    return (i, t) => (a(), l("div", Xa, [
      n("div", Qa, [
        (a(), G(pe(e.tag), { class: "lv-section-header__title" }, {
          default: Z(() => [
            k(i.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })),
        e.description ? (a(), l("p", Za, c(e.description), 1)) : o("", !0)
      ]),
      i.$slots.actions ? (a(), l("div", el, [
        k(i.$slots, "actions", {}, void 0, !0)
      ])) : o("", !0)
    ]));
  }
}, al = /* @__PURE__ */ P(tl, [["__scopeId", "data-v-41b9e60b"]]), ll = { class: "lv-page-header" }, nl = {
  key: 0,
  class: "lv-page-header__breadcrumb"
}, il = { class: "lv-page-header__main" }, sl = { class: "lv-page-header__content" }, ol = {
  key: 0,
  class: "lv-page-header__eyebrow"
}, dl = {
  key: 1,
  class: "lv-page-header__subtitle"
}, rl = {
  key: 0,
  class: "lv-page-header__actions"
}, ul = {
  key: 1,
  class: "lv-page-header__meta"
}, cl = {
  __name: "LvPageHeader",
  props: {
    /** Small label above the title — e.g. route or category */
    eyebrow: {
      type: String,
      default: void 0
    },
    /** Supporting text below the title */
    subtitle: {
      type: String,
      default: void 0
    },
    /** HTML heading element */
    tag: {
      type: String,
      default: "h1",
      validator: (e) => ["h1", "h2", "h3"].includes(e)
    }
  },
  setup(e) {
    return (i, t) => (a(), l("header", ll, [
      i.$slots.breadcrumb ? (a(), l("div", nl, [
        k(i.$slots, "breadcrumb", {}, void 0, !0)
      ])) : o("", !0),
      n("div", il, [
        n("div", sl, [
          e.eyebrow ? (a(), l("div", ol, c(e.eyebrow), 1)) : o("", !0),
          (a(), G(pe(e.tag), { class: "lv-page-header__title" }, {
            default: Z(() => [
              k(i.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          })),
          e.subtitle ? (a(), l("p", dl, c(e.subtitle), 1)) : o("", !0)
        ]),
        i.$slots.actions ? (a(), l("div", rl, [
          k(i.$slots, "actions", {}, void 0, !0)
        ])) : o("", !0)
      ]),
      i.$slots.meta ? (a(), l("div", ul, [
        k(i.$slots, "meta", {}, void 0, !0)
      ])) : o("", !0)
    ]));
  }
}, vl = /* @__PURE__ */ P(cl, [["__scopeId", "data-v-1e15bd01"]]), fl = ["aria-label"], bl = {
  class: "lv-pagination__summary",
  "aria-live": "polite",
  "aria-atomic": "true"
}, ml = { class: "lv-pagination__controls" }, pl = {
  key: 0,
  class: "lv-pagination__size"
}, hl = ["value"], yl = ["value"], gl = ["disabled"], _l = {
  key: 0,
  class: "lv-pagination__ellipsis",
  "aria-hidden": "true"
}, $l = ["aria-current", "aria-label", "onClick"], Sl = ["disabled"], kl = {
  __name: "LvPagination",
  props: {
    /** Current page (1-based). Bind with v-model:page. */
    page: {
      type: Number,
      default: 1
    },
    /** Rows per page. Bind with v-model:page-size. */
    pageSize: {
      type: Number,
      default: 10
    },
    /** Total number of rows across all pages */
    totalRows: {
      type: Number,
      required: !0
    },
    /** Options shown in the page-size selector */
    pageSizeOptions: {
      type: Array,
      default: () => [10, 25, 50, 100]
    },
    /** Show the rows-per-page selector */
    showPageSize: {
      type: Boolean,
      default: !0
    },
    /** Accessible label for the <nav> landmark */
    ariaLabel: {
      type: String,
      default: "Table pagination"
    }
  },
  emits: ["update:page", "update:pageSize"],
  setup(e, { emit: i }) {
    const t = e, s = i, f = `lv-pagination-size-${Math.random().toString(36).slice(2, 7)}`, _ = r(() => Math.max(1, Math.ceil(t.totalRows / t.pageSize))), m = r(() => {
      if (t.totalRows === 0) return "No results";
      const x = (t.page - 1) * t.pageSize + 1, b = Math.min(t.page * t.pageSize, t.totalRows);
      return `${x}–${b} of ${t.totalRows}`;
    }), g = r(() => {
      const x = _.value, b = t.page;
      if (x <= 7)
        return Array.from({ length: x }, (D, $) => $ + 1);
      const u = /* @__PURE__ */ new Set([1, x]);
      for (let D = Math.max(1, b - 1); D <= Math.min(x, b + 1); D++)
        u.add(D);
      const L = [...u].sort((D, $) => D - $), H = [];
      let O = 0;
      for (const D of L) {
        const $ = D - O;
        $ > 2 ? H.push(O === 0 ? "ellipsis-start" : `ellipsis-${O}-${D}`) : $ === 2 && H.push(O + 1), H.push(D), O = D;
      }
      return H;
    });
    function w(x) {
      const b = Math.max(1, Math.min(_.value, x));
      b !== t.page && s("update:page", b);
    }
    function T(x) {
      const b = Number(x.target.value), u = (t.page - 1) * t.pageSize, L = Math.max(1, Math.floor(u / b) + 1);
      s("update:pageSize", b), s("update:page", L);
    }
    return (x, b) => (a(), l("nav", {
      class: "lv-pagination",
      "aria-label": e.ariaLabel,
      role: "navigation"
    }, [
      n("span", bl, c(m.value), 1),
      n("div", ml, [
        e.showPageSize ? (a(), l("div", pl, [
          n("label", {
            for: f,
            class: "lv-pagination__size-label"
          }, "Rows per page"),
          n("select", {
            id: f,
            class: "lv-pagination__select",
            value: e.pageSize,
            onChange: T
          }, [
            (a(!0), l(R, null, W(e.pageSizeOptions, (u) => (a(), l("option", {
              key: u,
              value: u
            }, c(u), 9, yl))), 128))
          ], 40, hl)
        ])) : o("", !0),
        n("button", {
          type: "button",
          class: "lv-pagination__btn lv-pagination__btn--nav",
          disabled: e.page <= 1,
          "aria-label": "Previous page",
          onClick: b[0] || (b[0] = (u) => w(e.page - 1))
        }, [
          M(I, {
            name: "chevron-left",
            size: "sm",
            "aria-hidden": "true"
          })
        ], 8, gl),
        (a(!0), l(R, null, W(g.value, (u) => (a(), l(R, {
          key: u === "ellipsis-start" || u === "ellipsis-end" ? u : `p${u}`
        }, [
          typeof u == "string" ? (a(), l("span", _l, "…")) : (a(), l("button", {
            key: 1,
            type: "button",
            class: S(["lv-pagination__btn", "lv-pagination__btn--page", { "lv-pagination__btn--active": u === e.page }]),
            "aria-current": u === e.page ? "page" : void 0,
            "aria-label": `Page ${u}`,
            onClick: (L) => w(u)
          }, c(u), 11, $l))
        ], 64))), 128)),
        n("button", {
          type: "button",
          class: "lv-pagination__btn lv-pagination__btn--nav",
          disabled: e.page >= _.value,
          "aria-label": "Next page",
          onClick: b[1] || (b[1] = (u) => w(e.page + 1))
        }, [
          M(I, {
            name: "chevron-right",
            size: "sm",
            "aria-hidden": "true"
          })
        ], 8, Sl)
      ])
    ], 8, fl));
  }
}, ze = /* @__PURE__ */ P(kl, [["__scopeId", "data-v-f19bf003"]]), wl = {
  key: 0,
  class: "lv-table__toolbar"
}, xl = { class: "lv-table__scroll" }, Ll = ["aria-labelledby", "aria-describedby"], Cl = {
  key: 0,
  class: "lv-table__head"
}, zl = ["aria-sort", "onClick"], Ml = { class: "lv-table__th-content" }, Il = {
  key: 0,
  class: "lv-table__sort-icon",
  "aria-hidden": "true"
}, Vl = { class: "lv-table__body" }, Dl = {
  key: 1,
  class: "lv-table__row lv-table__row--empty"
}, Tl = ["colspan"], Bl = { class: "lv-table__empty-text" }, Pl = ["tabindex", "aria-selected", "onClick", "onKeydown"], Nl = {
  key: 1,
  class: "lv-table__foot"
}, Ol = ["colspan"], Al = {
  key: 1,
  class: "lv-table__pagination-bar"
}, Hl = {
  __name: "LvTable",
  props: {
    /** Column definitions */
    columns: {
      type: Array,
      default: () => []
    },
    /** Row data — each item should have a unique key field */
    rows: {
      type: Array,
      default: () => []
    },
    /** Property name to use as the row's unique key */
    rowKey: {
      type: String,
      default: "id"
    },
    /** Accessible caption / visible table title */
    caption: {
      type: String,
      default: void 0
    },
    /** Show loading skeleton rows */
    loading: {
      type: Boolean,
      default: !1
    },
    /** Number of skeleton rows to render while loading */
    skeletonRows: {
      type: Number,
      default: 5
    },
    /** Text shown when rows is empty */
    emptyText: {
      type: String,
      default: "No data to display."
    },
    /** Alternate row background */
    striped: {
      type: Boolean,
      default: !1
    },
    /** Reduce cell padding */
    dense: {
      type: Boolean,
      default: !1
    },
    /** Draw borders between all cells */
    bordered: {
      type: Boolean,
      default: !1
    },
    /** Row is keyboard/click navigable — emit row-click */
    selectable: {
      type: Boolean,
      default: !1
    },
    /** Currently selected row key value(s) — single value or array */
    selected: {
      type: [String, Number, Array],
      default: void 0
    },
    /** Called when a row is clicked — (row, index) => void */
    onRowClick: {
      type: Function,
      default: void 0
    },
    // ── Pagination ────────────────────────────────────────────────────────────
    /** Enable pagination. Client-side when `totalRows` is omitted. */
    paginate: {
      type: Boolean,
      default: !1
    },
    /** Current page (1-based). Use v-model:page for two-way binding. */
    page: {
      type: Number,
      default: 1
    },
    /** Rows per page */
    pageSize: {
      type: Number,
      default: 10
    },
    /** Page-size dropdown options */
    pageSizeOptions: {
      type: Array,
      default: () => [10, 25, 50, 100]
    },
    /** Show the rows-per-page selector inside the pagination bar */
    showPageSize: {
      type: Boolean,
      default: !0
    },
    /**
     * Total row count for server-side pagination.
     * When provided the table renders `rows` as-is and emits page/size changes
     * for the consumer to handle. When omitted, the table slices `rows` itself.
     */
    totalRows: {
      type: Number,
      default: void 0
    }
  },
  emits: [
    /** { key, dir: 'asc' | 'desc' } */
    "sort",
    /** row object */
    "row-click",
    /** new page number */
    "update:page",
    /** new page size */
    "update:pageSize"
  ],
  setup(e, { emit: i }) {
    const t = e, s = i, h = Math.random().toString(36).slice(2, 7), f = `lv-table-caption-${h}`, _ = `lv-table-footer-${h}`, m = N(t.page), g = N(t.pageSize);
    ue(() => t.page, ($) => {
      m.value = $;
    }), ue(() => t.pageSize, ($) => {
      g.value = $;
    });
    const w = r(
      () => t.totalRows !== void 0 ? t.totalRows : t.rows.length
    );
    function T($) {
      m.value = $, s("update:page", $);
    }
    function x($) {
      g.value = $, m.value = 1, s("update:pageSize", $), s("update:page", 1);
    }
    const b = N(null), u = N("asc");
    function L($) {
      b.value === $ ? u.value = u.value === "asc" ? "desc" : "asc" : (b.value = $, u.value = "asc"), s("sort", { key: b.value, dir: u.value });
    }
    function H($) {
      if (!t.selected) return !1;
      const j = $[t.rowKey];
      return Array.isArray(t.selected) ? t.selected.includes(j) : t.selected === j;
    }
    const O = r(() => {
      if (!t.paginate || t.totalRows !== void 0) return t.rows;
      const $ = (m.value - 1) * g.value;
      return t.rows.slice($, $ + g.value);
    }), D = r(() => [
      "lv-table-wrapper",
      { "lv-table-wrapper--bordered": t.bordered },
      { "lv-table-wrapper--dense": t.dense },
      { "lv-table-wrapper--striped": t.striped }
    ]);
    return ($, j) => (a(), l("div", {
      class: S(D.value)
    }, [
      $.$slots.toolbar || e.caption ? (a(), l("div", wl, [
        e.caption ? (a(), l("p", {
          key: 0,
          class: "lv-table__caption-text",
          id: f
        }, c(e.caption), 1)) : o("", !0),
        k($.$slots, "toolbar", {}, void 0, !0)
      ])) : o("", !0),
      n("div", xl, [
        n("table", {
          class: "lv-table",
          "aria-labelledby": e.caption ? f : void 0,
          "aria-describedby": $.$slots.footer ? _ : void 0
        }, [
          e.columns.length ? (a(), l("thead", Cl, [
            n("tr", null, [
              (a(!0), l(R, null, W(e.columns, (d) => (a(), l("th", {
                key: d.key,
                scope: "col",
                class: S([
                  "lv-table__th",
                  d.align ? `lv-table__cell--${d.align}` : "",
                  d.sortable ? "lv-table__th--sortable" : "",
                  b.value === d.key ? "lv-table__th--sorted" : ""
                ]),
                style: xe(d.width ? { width: d.width } : void 0),
                "aria-sort": d.sortable ? b.value === d.key ? u.value === "asc" ? "ascending" : "descending" : "none" : void 0,
                onClick: (B) => d.sortable ? L(d.key) : void 0
              }, [
                n("span", Ml, [
                  Q(c(d.label) + " ", 1),
                  d.sortable ? (a(), l("span", Il, [
                    M(I, {
                      name: b.value === d.key && u.value === "asc" ? "chevron-up" : "chevron-down",
                      size: "xs"
                    }, null, 8, ["name"])
                  ])) : o("", !0)
                ])
              ], 14, zl))), 128))
            ])
          ])) : o("", !0),
          n("tbody", Vl, [
            e.loading ? (a(!0), l(R, { key: 0 }, W(e.skeletonRows, (d) => (a(), l("tr", {
              key: `skeleton-${d}`,
              class: "lv-table__row lv-table__row--skeleton"
            }, [
              (a(!0), l(R, null, W(e.columns, (B) => (a(), l("td", {
                key: B.key,
                class: "lv-table__td"
              }, [...j[0] || (j[0] = [
                n("span", { class: "lv-table__skeleton-cell" }, null, -1)
              ])]))), 128))
            ]))), 128)) : e.rows.length ? (a(!0), l(R, { key: 2 }, W(O.value, (d, B) => (a(), l("tr", {
              key: d[e.rowKey] ?? B,
              class: S([
                "lv-table__row",
                { "lv-table__row--clickable": !!e.onRowClick },
                { "lv-table__row--selected": H(d) },
                { "lv-table__row--striped": e.striped && B % 2 !== 0 }
              ]),
              tabindex: e.onRowClick ? 0 : void 0,
              "aria-selected": e.selectable ? H(d) : void 0,
              onClick: (C) => {
                var K;
                return (K = e.onRowClick) == null ? void 0 : K.call(e, d, B);
              },
              onKeydown: [
                ae((C) => {
                  var K;
                  return (K = e.onRowClick) == null ? void 0 : K.call(e, d, B);
                }, ["enter"]),
                ae(ce((C) => {
                  var K;
                  return (K = e.onRowClick) == null ? void 0 : K.call(e, d, B);
                }, ["prevent"]), ["space"])
              ]
            }, [
              (a(!0), l(R, null, W(e.columns, (C) => (a(), l("td", {
                key: C.key,
                class: S([
                  "lv-table__td",
                  C.align ? `lv-table__cell--${C.align}` : ""
                ])
              }, [
                k($.$slots, `cell(${C.key})`, {
                  value: d[C.key],
                  row: d,
                  index: B
                }, () => [
                  Q(c(d[C.key] ?? "—"), 1)
                ], !0)
              ], 2))), 128))
            ], 42, Pl))), 128)) : (a(), l("tr", Dl, [
              n("td", {
                colspan: e.columns.length || 1,
                class: "lv-table__td lv-table__empty-cell"
              }, [
                k($.$slots, "empty", {}, () => [
                  n("span", Bl, c(e.emptyText), 1)
                ], !0)
              ], 8, Tl)
            ]))
          ]),
          $.$slots.footer ? (a(), l("tfoot", Nl, [
            n("tr", null, [
              n("td", {
                colspan: e.columns.length || 1,
                class: "lv-table__td",
                id: _
              }, [
                k($.$slots, "footer", {}, void 0, !0)
              ], 8, Ol)
            ])
          ])) : o("", !0)
        ], 8, Ll)
      ]),
      e.paginate ? (a(), l("div", Al, [
        M(ze, {
          page: m.value,
          "page-size": g.value,
          "total-rows": w.value,
          "page-size-options": e.pageSizeOptions,
          "show-page-size": e.showPageSize,
          "onUpdate:page": T,
          "onUpdate:pageSize": x
        }, null, 8, ["page", "page-size", "total-rows", "page-size-options", "show-page-size"])
      ])) : o("", !0)
    ], 2));
  }
}, El = /* @__PURE__ */ P(Hl, [["__scopeId", "data-v-b64c7958"]]), ql = ["aria-live"], Rl = {
  class: "lv-alert__icon",
  "aria-hidden": "true"
}, Wl = { class: "lv-alert__body" }, Fl = {
  key: 0,
  class: "lv-alert__title"
}, Kl = { class: "lv-alert__description" }, jl = {
  __name: "LvAlert",
  props: {
    variant: {
      type: String,
      default: "info",
      validator: (e) => ["success", "warning", "danger", "info"].includes(e)
    },
    title: {
      type: String,
      default: void 0
    },
    dismissible: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["dismiss"],
  setup(e) {
    const i = e, t = {
      success: "check-circle",
      warning: "warning",
      danger: "x-circle",
      info: "info"
    }, s = r(() => t[i.variant]), h = r(() => [
      "lv-alert",
      `lv-alert--${i.variant}`,
      { "lv-alert--dismissible": i.dismissible }
    ]);
    return (f, _) => (a(), l("div", {
      class: S(h.value),
      role: "alert",
      "aria-live": e.variant === "danger" ? "assertive" : "polite"
    }, [
      n("span", Rl, [
        M(I, {
          name: s.value,
          size: "md"
        }, null, 8, ["name"])
      ]),
      n("div", Wl, [
        e.title ? (a(), l("p", Fl, c(e.title), 1)) : o("", !0),
        n("div", Kl, [
          k(f.$slots, "default", {}, void 0, !0)
        ])
      ]),
      e.dismissible ? (a(), l("button", {
        key: 0,
        type: "button",
        class: "lv-alert__close",
        "aria-label": "Dismiss",
        onClick: _[0] || (_[0] = (m) => f.$emit("dismiss"))
      }, [
        M(I, {
          name: "close",
          size: "sm",
          "aria-hidden": "true"
        })
      ])) : o("", !0)
    ], 10, ql));
  }
}, Yl = /* @__PURE__ */ P(jl, [["__scopeId", "data-v-bf86e048"]]), Gl = ["aria-live"], Jl = {
  class: "lv-toast__icon",
  "aria-hidden": "true"
}, Ul = { class: "lv-toast__body" }, Xl = {
  key: 0,
  class: "lv-toast__title"
}, Ql = { class: "lv-toast__message" }, Zl = {
  __name: "LvToast",
  props: {
    id: { type: Number, required: !0 },
    message: { type: String, required: !0 },
    title: { type: String, default: void 0 },
    variant: {
      type: String,
      default: "info",
      validator: (e) => ["info", "success", "warning", "danger"].includes(e)
    },
    /** Auto-dismiss duration in ms. 0 = persistent. */
    duration: { type: Number, default: 4e3 }
  },
  emits: ["remove"],
  setup(e) {
    const i = e, t = {
      info: "info",
      success: "check-circle",
      warning: "warning",
      danger: "x-circle"
    }, s = r(() => t[i.variant]), h = r(() => [
      "lv-toast",
      `lv-toast--${i.variant}`
    ]), f = r(() => ({
      animationDuration: `${i.duration}ms`
    }));
    return (_, m) => (a(), l("div", {
      class: S(h.value),
      role: "alert",
      "aria-live": e.variant === "danger" ? "assertive" : "polite"
    }, [
      n("span", Jl, [
        M(I, {
          name: s.value,
          size: "sm"
        }, null, 8, ["name"])
      ]),
      n("div", Ul, [
        e.title ? (a(), l("p", Xl, c(e.title), 1)) : o("", !0),
        n("p", Ql, c(e.message), 1)
      ]),
      n("button", {
        type: "button",
        class: "lv-toast__close",
        "aria-label": "Dismiss notification",
        onClick: m[0] || (m[0] = (g) => _.$emit("remove", e.id))
      }, [
        M(I, {
          name: "close",
          size: "xs",
          "aria-hidden": "true"
        })
      ]),
      e.duration > 0 ? (a(), l("div", {
        key: 0,
        class: "lv-toast__progress",
        style: xe(f.value),
        "aria-hidden": "true"
      }, null, 4)) : o("", !0)
    ], 10, Gl));
  }
}, Me = /* @__PURE__ */ P(Zl, [["__scopeId", "data-v-419597d1"]]), en = {
  __name: "LvToastContainer",
  props: {
    /** Array of toast objects from useToast() */
    toasts: {
      type: Array,
      default: () => []
    },
    position: {
      type: String,
      default: "bottom-right",
      validator: (e) => [
        "top-right",
        "top-left",
        "top-center",
        "bottom-right",
        "bottom-left",
        "bottom-center"
      ].includes(e)
    }
  },
  emits: ["remove"],
  setup(e) {
    const i = e, t = r(() => [
      "lv-toast-container",
      `lv-toast-container--${i.position}`
    ]);
    return (s, h) => (a(), G(Ee, { to: "body" }, [
      n("div", {
        class: S(t.value),
        "aria-label": "Notifications",
        role: "region"
      }, [
        M(qe, {
          name: "lv-toast",
          tag: "div",
          class: "lv-toast-container__stack"
        }, {
          default: Z(() => [
            (a(!0), l(R, null, W(e.toasts, (f) => (a(), G(Me, oe({
              key: f.id
            }, { ref_for: !0 }, f, {
              onRemove: h[0] || (h[0] = (_) => s.$emit("remove", _))
            }), null, 16))), 128))
          ]),
          _: 1
        })
      ], 2)
    ]));
  }
}, tn = /* @__PURE__ */ P(en, [["__scopeId", "data-v-c5bb86d7"]]), se = Re([]);
let an = 0;
function ln({ message: e, title: i, variant: t = "info", duration: s = 4e3 }) {
  const h = ++an;
  return se.push({ id: h, message: e, title: i, variant: t }), s > 0 && setTimeout(() => Ie(h), s), h;
}
function Ie(e) {
  const i = se.findIndex((t) => t.id === e);
  i !== -1 && se.splice(i, 1);
}
function nn() {
  se.splice(0, se.length);
}
function ni() {
  return { toasts: se, add: ln, remove: Ie, clear: nn };
}
const sn = ["aria-label", "aria-hidden"], on = {
  key: 0,
  class: "lv-sidebar-layout__sidebar-header"
}, dn = {
  class: "lv-sidebar-layout__nav",
  "aria-label": "Primary navigation"
}, rn = {
  key: 1,
  class: "lv-sidebar-layout__sidebar-footer"
}, un = { class: "lv-sidebar-layout__main" }, cn = {
  key: 0,
  class: "lv-sidebar-layout__topbar"
}, vn = ["aria-expanded"], fn = {
  class: "lv-sidebar-layout__content",
  id: "main-content",
  tabindex: "-1"
}, bn = {
  __name: "LvSidebarLayout",
  props: {
    /** Width of the sidebar */
    sidebarWidth: {
      type: String,
      default: "240px"
    },
    /** Collapsed (icon-only) width when `collapsible` is true */
    collapsedWidth: {
      type: String,
      default: "64px"
    },
    /** Whether the sidebar can be collapsed to icon-only mode on desktop */
    collapsible: {
      type: Boolean,
      default: !1
    },
    /** Start in collapsed state */
    collapsed: {
      type: Boolean,
      default: !1
    },
    /** Accessible label for the sidebar landmark */
    sidebarLabel: {
      type: String,
      default: "Sidebar"
    },
    /** px value at which the sidebar goes off-canvas */
    mobileBreakpoint: {
      type: Number,
      default: 768
    }
  },
  emits: ["update:collapsed"],
  setup(e, { expose: i, emit: t }) {
    ge((u) => ({
      afeb283e: x.value,
      v5a3053de: e.sidebarWidth
    }));
    const s = e, h = t, f = N(s.collapsed), _ = N(!1), m = N(!1);
    function g() {
      m.value = window.innerWidth < s.mobileBreakpoint, m.value || (_.value = !1);
    }
    de(() => {
      g(), window.addEventListener("resize", g);
    }), re(() => window.removeEventListener("resize", g));
    const w = r(() => m.value);
    function T() {
      f.value = !f.value, h("update:collapsed", f.value);
    }
    const x = r(
      () => f.value ? s.collapsedWidth : s.sidebarWidth
    ), b = r(() => [
      "lv-sidebar-layout",
      {
        "lv-sidebar-layout--collapsed": f.value,
        "lv-sidebar-layout--mobile-open": _.value,
        "lv-sidebar-layout--collapsible": s.collapsible
      }
    ]);
    return i({ toggleCollapsed: T, isCollapsed: f, mobileOpen: _ }), (u, L) => (a(), l("div", {
      class: S(b.value)
    }, [
      n("aside", {
        class: "lv-sidebar-layout__sidebar",
        "aria-label": e.sidebarLabel,
        "aria-hidden": _.value ? void 0 : m.value ? "true" : void 0
      }, [
        u.$slots["sidebar-header"] ? (a(), l("div", on, [
          k(u.$slots, "sidebar-header", {}, void 0, !0)
        ])) : o("", !0),
        n("nav", dn, [
          k(u.$slots, "sidebar", {}, void 0, !0)
        ]),
        u.$slots["sidebar-footer"] ? (a(), l("div", rn, [
          k(u.$slots, "sidebar-footer", {}, void 0, !0)
        ])) : o("", !0)
      ], 8, sn),
      _.value ? (a(), l("div", {
        key: 0,
        class: "lv-sidebar-layout__backdrop",
        "aria-hidden": "true",
        onClick: L[0] || (L[0] = (H) => _.value = !1)
      })) : o("", !0),
      n("div", un, [
        u.$slots.topbar || w.value ? (a(), l("header", cn, [
          w.value ? (a(), l("button", {
            key: 0,
            type: "button",
            class: "lv-sidebar-layout__hamburger",
            "aria-expanded": _.value,
            "aria-controls": "lv-sidebar",
            "aria-label": "Toggle navigation",
            onClick: L[1] || (L[1] = (H) => _.value = !_.value)
          }, [
            M(I, {
              name: _.value ? "close" : "menu",
              size: "md",
              "aria-hidden": "true"
            }, null, 8, ["name"])
          ], 8, vn)) : o("", !0),
          k(u.$slots, "topbar", {}, void 0, !0)
        ])) : o("", !0),
        n("main", fn, [
          k(u.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, mn = /* @__PURE__ */ P(bn, [["__scopeId", "data-v-9df60b5f"]]), pn = { class: "lv-top-nav-layout" }, hn = {
  class: "lv-top-nav-layout__navbar",
  role: "banner"
}, yn = { class: "lv-top-nav-layout__navbar-inner" }, gn = { class: "lv-top-nav-layout__brand" }, _n = {
  key: 0,
  class: "lv-top-nav-layout__actions"
}, $n = ["aria-expanded"], Sn = {
  key: 0,
  class: "lv-top-nav-layout__subbar"
}, kn = {
  __name: "LvTopNavLayout",
  props: {
    /** Constrains the content area to a max-width and centres it */
    contained: {
      type: Boolean,
      default: !1
    },
    /** Max-width when `contained` is true */
    maxWidth: {
      type: String,
      default: "1280px"
    },
    /** Height of the navbar */
    navbarHeight: {
      type: String,
      default: "3.5rem"
    }
  },
  setup(e) {
    ge((t) => ({
      v5e247ff9: e.navbarHeight,
      v34b92a64: e.maxWidth
    }));
    const i = N(!1);
    return (t, s) => (a(), l("div", pn, [
      n("header", hn, [
        n("div", yn, [
          n("div", gn, [
            k(t.$slots, "brand", {}, void 0, !0)
          ]),
          n("nav", {
            class: S(["lv-top-nav-layout__nav", { "lv-top-nav-layout__nav--open": i.value }]),
            "aria-label": "Primary navigation"
          }, [
            k(t.$slots, "nav", {}, void 0, !0)
          ], 2),
          t.$slots.actions ? (a(), l("div", _n, [
            k(t.$slots, "actions", {}, void 0, !0)
          ])) : o("", !0),
          n("button", {
            type: "button",
            class: "lv-top-nav-layout__hamburger",
            "aria-expanded": i.value,
            "aria-label": "Toggle navigation",
            onClick: s[0] || (s[0] = (h) => i.value = !i.value)
          }, [
            M(I, {
              name: i.value ? "close" : "menu",
              size: "md",
              "aria-hidden": "true"
            }, null, 8, ["name"])
          ], 8, $n)
        ]),
        me(n("nav", {
          class: "lv-top-nav-layout__mobile-nav",
          "aria-label": "Mobile navigation",
          onClick: s[1] || (s[1] = (h) => i.value = !1)
        }, [
          k(t.$slots, "nav", {}, void 0, !0)
        ], 512), [
          [we, i.value]
        ])
      ]),
      t.$slots.subbar ? (a(), l("div", Sn, [
        k(t.$slots, "subbar", {}, void 0, !0)
      ])) : o("", !0),
      n("main", {
        class: S(["lv-top-nav-layout__content", { "lv-top-nav-layout__content--contained": e.contained }]),
        id: "main-content",
        tabindex: "-1"
      }, [
        k(t.$slots, "default", {}, void 0, !0)
      ], 2)
    ]));
  }
}, wn = /* @__PURE__ */ P(kn, [["__scopeId", "data-v-3153278c"]]), xn = {
  key: 0,
  class: "lv-template-view__chrome"
}, Ln = {
  key: 0,
  class: "lv-template-view__header"
}, Cn = {
  key: 1,
  class: "lv-template-view__toolbar"
}, zn = { class: "lv-template-view__body" }, Mn = {
  class: "lv-template-view__main",
  tabindex: "-1"
}, In = ["aria-label"], Vn = {
  __name: "LvTemplateView",
  props: {
    /**
     * Adds standard horizontal padding (`--space-6`) to all zones.
     * Set to `false` for full-bleed content such as data tables.
     */
    padding: {
      type: Boolean,
      default: !0
    },
    /**
     * Maximum width of the entire view. Use to constrain wide viewports.
     * Accepts any valid CSS length (`1280px`, `90ch`, etc.)
     * or `'none'` for full-width.
     */
    maxWidth: {
      type: String,
      default: "none"
    },
    /**
     * Width of the aside panel. Accepts any valid CSS length.
     */
    asideWidth: {
      type: String,
      default: "320px"
    },
    /**
     * Stick the header + toolbar chrome to the top of the scroll container.
     */
    stickyChrome: {
      type: Boolean,
      default: !1
    },
    /**
     * Which side the aside panel appears on.
     */
    asidePosition: {
      type: String,
      default: "right",
      validator: (e) => ["left", "right"].includes(e)
    },
    /**
     * Accessible label for the aside landmark element.
     */
    asideLabel: {
      type: String,
      default: "Side panel"
    }
  },
  setup(e) {
    ge((s) => ({
      ed6135fe: e.maxWidth,
      v034f1426: e.asideWidth
    }));
    const i = e, t = r(() => ({
      "lv-template-view--padded": i.padding,
      "lv-template-view--constrained": i.maxWidth !== "none",
      "lv-template-view--sticky-chrome": i.stickyChrome,
      "lv-template-view--aside-left": i.asidePosition === "left"
    }));
    return (s, h) => (a(), l("div", {
      class: S(["lv-template-view", t.value])
    }, [
      s.$slots.header || s.$slots.toolbar ? (a(), l("div", xn, [
        s.$slots.header ? (a(), l("div", Ln, [
          k(s.$slots, "header", {}, void 0, !0)
        ])) : o("", !0),
        s.$slots.toolbar ? (a(), l("div", Cn, [
          k(s.$slots, "toolbar", {}, void 0, !0)
        ])) : o("", !0)
      ])) : o("", !0),
      n("div", zn, [
        n("main", Mn, [
          k(s.$slots, "default", {}, void 0, !0)
        ]),
        s.$slots.aside ? (a(), l("aside", {
          key: 0,
          class: "lv-template-view__aside",
          "aria-label": e.asideLabel
        }, [
          k(s.$slots, "aside", {}, void 0, !0)
        ], 8, In)) : o("", !0)
      ])
    ], 2));
  }
}, Dn = /* @__PURE__ */ P(Vn, [["__scopeId", "data-v-c61f7877"]]), Tn = {
  key: 0,
  class: "lv-nav-item__icon",
  "aria-hidden": "true"
}, Bn = { class: "lv-nav-item__label" }, Pn = {
  key: 1,
  class: "lv-nav-item__badge",
  "aria-label": ", {{ badge }} notifications"
}, Nn = ["href", "aria-current"], On = {
  key: 0,
  class: "lv-nav-item__icon",
  "aria-hidden": "true"
}, An = { class: "lv-nav-item__label" }, Hn = {
  key: 1,
  class: "lv-nav-item__badge"
}, En = {
  __name: "LvNavItem",
  props: {
    /** Router-link `to` target */
    to: { type: [String, Object], default: void 0 },
    /** Fallback href for non-router usage */
    href: { type: String, default: void 0 },
    /** Icon name from LvBaseIcon */
    icon: { type: String, default: void 0 },
    /** Mark this item as the current page */
    active: { type: Boolean, default: !1 },
    /** Numeric badge — e.g. unread count */
    badge: { type: [Number, String], default: void 0 },
    /** Sidebar-specific: apply collapsed (icon-only) styling */
    collapsed: { type: Boolean, default: !1 }
  },
  setup(e) {
    const i = e, t = r(() => [
      "lv-nav-item",
      { "lv-nav-item--active": i.active },
      { "lv-nav-item--collapsed": i.collapsed }
    ]);
    return (s, h) => {
      const f = Le("router-link");
      return e.to ? (a(), G(f, {
        key: 0,
        to: e.to,
        class: S(t.value),
        "aria-current": e.active ? "page" : void 0
      }, {
        default: Z(() => [
          e.icon ? (a(), l("span", Tn, [
            M(I, {
              name: e.icon,
              size: "sm"
            }, null, 8, ["name"])
          ])) : o("", !0),
          n("span", Bn, [
            k(s.$slots, "default", {}, void 0, !0)
          ]),
          e.badge ? (a(), l("span", Pn, c(e.badge), 1)) : o("", !0)
        ]),
        _: 3
      }, 8, ["to", "class", "aria-current"])) : (a(), l("a", {
        key: 1,
        href: e.href ?? "#",
        class: S(t.value),
        "aria-current": e.active ? "page" : void 0
      }, [
        e.icon ? (a(), l("span", On, [
          M(I, {
            name: e.icon,
            size: "sm"
          }, null, 8, ["name"])
        ])) : o("", !0),
        n("span", An, [
          k(s.$slots, "default", {}, void 0, !0)
        ]),
        e.badge ? (a(), l("span", Hn, c(e.badge), 1)) : o("", !0)
      ], 10, Nn));
    };
  }
}, qn = /* @__PURE__ */ P(En, [["__scopeId", "data-v-ff24abd8"]]), Rn = { class: "lv-nav-group" }, Wn = {
  key: 1,
  class: "lv-nav-group__divider",
  "aria-hidden": "true"
}, Fn = {
  __name: "LvNavGroup",
  props: {
    /** Section heading — e.g. "Operations", "Settings" */
    label: { type: String, default: void 0 },
    /** Mirrors the parent sidebar's collapsed state to hide labels */
    collapsed: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (i, t) => (a(), l("div", Rn, [
      e.label ? (a(), l("div", {
        key: 0,
        class: S(["lv-nav-group__label", { "lv-nav-group__label--hidden": e.collapsed }])
      }, [
        n("span", null, c(e.label), 1)
      ], 2)) : e.collapsed ? o("", !0) : (a(), l("div", Wn)),
      k(i.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Kn = /* @__PURE__ */ P(Fn, [["__scopeId", "data-v-b42e440b"]]), jn = ["href", "aria-current"], Yn = {
  __name: "LvTopNavItem",
  props: {
    to: { type: [String, Object], default: void 0 },
    href: { type: String, default: void 0 },
    icon: { type: String, default: void 0 },
    active: { type: Boolean, default: !1 }
  },
  setup(e) {
    const i = e, t = r(() => [
      "lv-top-nav-item",
      { "lv-top-nav-item--active": i.active }
    ]);
    return (s, h) => {
      const f = Le("router-link");
      return e.to ? (a(), G(f, {
        key: 0,
        to: e.to,
        class: S(t.value),
        "aria-current": e.active ? "page" : void 0
      }, {
        default: Z(() => [
          e.icon ? (a(), G(I, {
            key: 0,
            name: e.icon,
            size: "sm",
            "aria-hidden": "true"
          }, null, 8, ["name"])) : o("", !0),
          k(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["to", "class", "aria-current"])) : (a(), l("a", {
        key: 1,
        href: e.href ?? "#",
        class: S(t.value),
        "aria-current": e.active ? "page" : void 0
      }, [
        e.icon ? (a(), G(I, {
          key: 0,
          name: e.icon,
          size: "sm",
          "aria-hidden": "true"
        }, null, 8, ["name"])) : o("", !0),
        k(s.$slots, "default", {}, void 0, !0)
      ], 10, jn));
    };
  }
}, Gn = /* @__PURE__ */ P(Yn, [["__scopeId", "data-v-c88bd59d"]]), E = {
  // Slate — track ballast, concrete platform
  slate50: "#f8f9fa",
  slate100: "#f1f3f5",
  slate200: "#e9ecef",
  slate300: "#dee2e6",
  slate400: "#ced4da",
  slate500: "#adb5bd",
  slate600: "#6c757d",
  slate700: "#495057",
  slate800: "#343a40",
  slate900: "#212529",
  slate950: "#0d0f11",
  // Signal Red — stop board, danger
  red50: "#fff5f5",
  red100: "#ffe3e3",
  red200: "#ffc9c9",
  red300: "#ffa8a8",
  red400: "#ff6b6b",
  red500: "#fa5252",
  red600: "#f03e3e",
  red700: "#c92a2a",
  red800: "#a61e1e",
  red900: "#7b1010",
  // Amber — caution, proceed with care
  amber50: "#fff9db",
  amber100: "#fff3bf",
  amber200: "#ffec99",
  amber300: "#ffe066",
  amber400: "#ffd43b",
  amber500: "#fcc419",
  amber600: "#fab005",
  amber700: "#f59f00",
  amber800: "#e67700",
  amber900: "#d9480f",
  // Green — proceed, clear aspect
  green50: "#ebfbee",
  green100: "#d3f9d8",
  green200: "#b2f2bb",
  green300: "#8ce99a",
  green400: "#69db7c",
  green500: "#51cf66",
  green600: "#40c057",
  green700: "#2f9e44",
  green800: "#2b8a3e",
  green900: "#1b5e20",
  // Steel Blue — enamel signs, livery stripe
  blue50: "#e7f5ff",
  blue100: "#d0ebff",
  blue200: "#a5d8ff",
  blue300: "#74c0fc",
  blue400: "#4dabf7",
  blue500: "#339af0",
  blue600: "#228be6",
  blue700: "#1c7ed6",
  blue800: "#1971c2",
  blue900: "#1864ab",
  white: "#ffffff",
  black: "#000000"
}, Jn = {
  // Geometric grotesque — echoes station signage
  fontFamilySans: '"Inter", "Helvetica Neue", Arial, sans-serif',
  fontFamilyMono: '"JetBrains Mono", "Fira Code", monospace',
  fontSizeXs: "0.75rem",
  // 12px
  fontSizeSm: "0.875rem",
  // 14px
  fontSizeMd: "1rem",
  // 16px
  fontSizeLg: "1.125rem",
  // 18px
  fontSizeXl: "1.25rem",
  // 20px
  fontSize2xl: "1.5rem",
  // 24px
  fontSize3xl: "1.875rem",
  // 30px
  fontSize4xl: "2.25rem",
  // 36px
  fontWeightRegular: "400",
  fontWeightMedium: "500",
  fontWeightSemibold: "600",
  fontWeightBold: "700",
  lineHeightTight: "1.25",
  lineHeightNormal: "1.5",
  lineHeightRelaxed: "1.75",
  letterSpacingTight: "-0.02em",
  letterSpacingNormal: "0",
  letterSpacingWide: "0.04em",
  letterSpacingWidest: "0.12em"
  // station nameboards
}, Un = {
  0: "0",
  1: "0.25rem",
  // 4px
  2: "0.5rem",
  // 8px
  3: "0.75rem",
  // 12px
  4: "1rem",
  // 16px
  5: "1.25rem",
  // 20px
  6: "1.5rem",
  // 24px
  8: "2rem",
  // 32px
  10: "2.5rem",
  // 40px
  12: "3rem",
  // 48px
  16: "4rem",
  // 64px
  20: "5rem",
  // 80px
  24: "6rem"
  // 96px
}, Xn = {
  none: "0",
  sm: "0.125rem",
  // 2px — intentionally tight, industrial feel
  md: "0.25rem",
  // 4px
  lg: "0.5rem",
  // 8px
  xl: "0.75rem",
  // 12px
  full: "9999px"
}, Qn = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.08)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.10), 0 8px 10px -6px rgb(0 0 0 / 0.10)"
}, Zn = {
  instant: "0ms",
  fast: "100ms",
  normal: "200ms",
  slow: "350ms"
}, ei = {
  linear: "linear",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
}, ti = {
  // Backgrounds
  bgPage: E.slate50,
  bgSurface: E.white,
  bgSurfaceRaised: E.white,
  bgOverlay: E.slate900,
  bgInverse: E.slate900,
  // Text
  textPrimary: E.slate900,
  textSecondary: E.slate600,
  textDisabled: E.slate400,
  textInverse: E.white,
  textLink: E.blue700,
  textLinkHover: E.blue900,
  // Border
  borderSubtle: E.slate200,
  borderDefault: E.slate300,
  borderStrong: E.slate500,
  // Brand / interactive
  brandPrimary: E.blue700,
  brandPrimaryHover: E.blue800,
  brandPrimaryActive: E.blue900,
  // Feedback
  colorSuccess: E.green700,
  colorWarning: E.amber700,
  colorDanger: E.red600,
  colorInfo: E.blue600
}, ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  color: E,
  duration: Zn,
  easing: ei,
  radius: Xn,
  semantic: ti,
  shadow: Qn,
  spacing: Un,
  typography: Jn
}, Symbol.toStringTag, { value: "Module" })), Ve = {
  name: "Trans-Europ-Express Grand Comfort",
  id: "tee-grand-comfort",
  // Primitives
  crimson50: "#fdf2f3",
  crimson100: "#fbe0e2",
  crimson200: "#f6bcc0",
  crimson300: "#ef8c94",
  crimson400: "#e55663",
  crimson500: "#d42b3a",
  crimson600: "#b41c2b",
  // ← signature TEE crimson
  crimson700: "#961724",
  crimson800: "#7d131e",
  crimson900: "#6b131d",
  cream50: "#fdfaf3",
  cream100: "#f8f0d8",
  cream200: "#f2e6c4",
  // ← signature TEE cream
  cream300: "#e8d49a",
  cream400: "#d9bc6a",
  // Semantic overrides
  bgPage: "#fdfaf3",
  // warm cream page background
  bgSurface: "#ffffff",
  bgInverse: "#96172400",
  // deep crimson
  bgInverseValue: "#96172a",
  textPrimary: "#2d0c10",
  // near-black with warm red tint
  textSecondary: "#6b3038",
  textDisabled: "#b8858c",
  textInverse: "#fdf2f3",
  textLink: "#b41c2b",
  textLinkHover: "#7d131e",
  borderSubtle: "#f2e6c4",
  borderDefault: "#e8d49a",
  borderStrong: "#b41c2b",
  brandPrimary: "#b41c2b",
  brandPrimaryHover: "#96172a",
  brandPrimaryActive: "#7d131e",
  colorSuccess: "#2f9e44",
  colorWarning: "#f59f00",
  colorDanger: "#b41c2b",
  colorInfo: "#1c7ed6"
}, De = {
  name: "Corail",
  id: "corail",
  // Primitives
  coral50: "#fff5f0",
  coral100: "#ffe6d8",
  coral200: "#ffc9a8",
  coral300: "#ffa070",
  coral400: "#f57036",
  coral500: "#e0540f",
  // ← signature Corail orange
  coral600: "#c24508",
  coral700: "#a13806",
  coral800: "#852e06",
  coral900: "#6e2707",
  silver50: "#f4f5f6",
  silver100: "#e8eaec",
  silver200: "#cdd1d6",
  silver300: "#b0b7be",
  // ← signature Corail silver-grey
  silver400: "#8c959e",
  silver500: "#6a7480",
  silver600: "#505a64",
  silver700: "#3d4550",
  // Semantic overrides
  bgPage: "#f4f5f6",
  // silver-grey platform
  bgSurface: "#ffffff",
  bgInverseValue: "#3d4550",
  textPrimary: "#1a1d20",
  textSecondary: "#505a64",
  textDisabled: "#b0b7be",
  textInverse: "#ffffff",
  textLink: "#c24508",
  textLinkHover: "#a13806",
  borderSubtle: "#e8eaec",
  borderDefault: "#cdd1d6",
  borderStrong: "#e0540f",
  brandPrimary: "#e0540f",
  brandPrimaryHover: "#c24508",
  brandPrimaryActive: "#a13806",
  colorSuccess: "#2f9e44",
  colorWarning: "#f59f00",
  colorDanger: "#f03e3e",
  colorInfo: "#1c7ed6"
}, Te = {
  name: "Orient Express",
  id: "orient-express",
  // Primitives
  navy50: "#f0f3fa",
  navy100: "#dce3f4",
  navy200: "#b6c3e7",
  navy300: "#8199d4",
  navy400: "#4e6cbc",
  navy500: "#2a4a99",
  navy600: "#1c3680",
  // ← Wagon-Lits midnight blue (lighter tone)
  navy700: "#1a2e6e",
  navy800: "#162559",
  navy900: "#111d47",
  // ← deep navy body
  navy950: "#0c1430",
  gold50: "#fdfbf0",
  gold100: "#faf3d0",
  gold200: "#f3e49a",
  gold300: "#e9ce5e",
  gold400: "#d9b432",
  gold500: "#c5951f",
  // ← burnished gold lettering
  gold600: "#a67a14",
  gold700: "#87620f",
  gold800: "#6e4f0c",
  cream50: "#fdfbf5",
  cream100: "#f8f3e5",
  cream200: "#f0e6cc",
  // ← Wagon-Lits cream interior
  // Semantic overrides
  bgPage: "#fdfbf5",
  // aged cream parchment
  bgSurface: "#ffffff",
  bgInverseValue: "#111d47",
  textPrimary: "#0c1430",
  textSecondary: "#2a4a99",
  textDisabled: "#8199d4",
  textInverse: "#f0e6cc",
  textLink: "#c5951f",
  textLinkHover: "#a67a14",
  borderSubtle: "#f0e6cc",
  borderDefault: "#e9ce5e",
  borderStrong: "#1c3680",
  brandPrimary: "#1c3680",
  brandPrimaryHover: "#162559",
  brandPrimaryActive: "#111d47",
  colorSuccess: "#2f9e44",
  colorWarning: "#c5951f",
  colorDanger: "#f03e3e",
  colorInfo: "#2a4a99"
}, Be = {
  name: "TGV 001",
  id: "tgv-001",
  // Primitives
  orange50: "#fff8f0",
  orange100: "#ffecd8",
  orange200: "#ffd1a0",
  orange300: "#ffb05c",
  orange400: "#f88a22",
  orange500: "#e06800",
  // ← signature TGV 001 orange
  orange600: "#c05500",
  orange700: "#9e4600",
  orange800: "#823a00",
  orange900: "#6b3000",
  anthracite50: "#f3f4f6",
  anthracite100: "#e5e7eb",
  anthracite200: "#c8ccd2",
  anthracite300: "#9ca3ac",
  anthracite400: "#6e7880",
  anthracite500: "#4e5862",
  anthracite600: "#3a4350",
  anthracite700: "#2c3542",
  // ← deep anthracite bogies
  anthracite800: "#1f2633",
  anthracite900: "#151c28",
  // Semantic overrides
  bgPage: "#f3f4f6",
  // clean platform grey
  bgSurface: "#ffffff",
  bgInverseValue: "#2c3542",
  textPrimary: "#151c28",
  textSecondary: "#4e5862",
  textDisabled: "#9ca3ac",
  textInverse: "#ffffff",
  textLink: "#c05500",
  textLinkHover: "#9e4600",
  borderSubtle: "#e5e7eb",
  borderDefault: "#c8ccd2",
  borderStrong: "#e06800",
  brandPrimary: "#e06800",
  brandPrimaryHover: "#c05500",
  brandPrimaryActive: "#9e4600",
  colorSuccess: "#2f9e44",
  colorWarning: "#f59f00",
  colorDanger: "#f03e3e",
  colorInfo: "#1c7ed6"
}, ke = {
  "tee-grand-comfort": Ve,
  corail: De,
  "orient-express": Te,
  "tgv-001": Be
}, si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ke,
  themeCorail: De,
  themeOrientExpress: Te,
  themeTgv001: Be,
  themeTransEuropExpress: Ve,
  themes: ke
}, Symbol.toStringTag, { value: "Module" })), ai = {
  LvButton: Ge,
  LvBadge: Ue,
  LvCard: at,
  LvDivider: it,
  LvBaseIcon: I,
  LvClickableIcon: Ce,
  LvTextInput: _t,
  LvBooleanInput: It,
  LvSelectInput: qt,
  LvMultiSelectInput: oa,
  LvDateInput: ga,
  LvTimeInput: Da,
  LvDateTimeInput: Ua,
  LvSectionHeader: al,
  LvPageHeader: vl,
  LvTable: El,
  LvPagination: ze,
  LvAlert: Yl,
  LvToast: Me,
  LvToastContainer: tn,
  LvSidebarLayout: mn,
  LvTopNavLayout: wn,
  LvTemplateView: Dn,
  LvNavItem: qn,
  LvNavGroup: Kn,
  LvTopNavItem: Gn
}, oi = {
  install(e) {
    for (const [i, t] of Object.entries(ai))
      e.component(i, t);
  }
};
export {
  oi as Livery,
  Yl as LvAlert,
  Ue as LvBadge,
  I as LvBaseIcon,
  It as LvBooleanInput,
  Ge as LvButton,
  at as LvCard,
  Ce as LvClickableIcon,
  ga as LvDateInput,
  Ua as LvDateTimeInput,
  it as LvDivider,
  oa as LvMultiSelectInput,
  Kn as LvNavGroup,
  qn as LvNavItem,
  vl as LvPageHeader,
  ze as LvPagination,
  al as LvSectionHeader,
  qt as LvSelectInput,
  mn as LvSidebarLayout,
  El as LvTable,
  Dn as LvTemplateView,
  _t as LvTextInput,
  Da as LvTimeInput,
  Me as LvToast,
  tn as LvToastContainer,
  Gn as LvTopNavItem,
  wn as LvTopNavLayout,
  oi as default,
  si as themes,
  ii as tokens,
  ni as useToast
};
