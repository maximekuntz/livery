// ─── Livery Design System ─────────────────────────────────────────────────────
// Rail-inspired Vue 3 component library

export { default as LvButton }           from './components/LvButton/LvButton.vue'
export { default as LvBadge }            from './components/LvBadge/LvBadge.vue'
export { default as LvCard }             from './components/LvCard/LvCard.vue'
export { default as LvDivider }          from './components/LvDivider/LvDivider.vue'
export { default as LvBaseIcon }         from './components/LvBaseIcon/LvBaseIcon.vue'
export { default as LvClickableIcon }    from './components/LvClickableIcon/LvClickableIcon.vue'
export { default as LvTextInput }        from './components/LvTextInput/LvTextInput.vue'
export { default as LvBooleanInput }     from './components/LvBooleanInput/LvBooleanInput.vue'
export { default as LvSelectInput }      from './components/LvSelectInput/LvSelectInput.vue'
export { default as LvMultiSelectInput } from './components/LvMultiSelectInput/LvMultiSelectInput.vue'
export { default as LvSectionHeader }    from './components/LvSectionHeader/LvSectionHeader.vue'
export { default as LvPageHeader }       from './components/LvPageHeader/LvPageHeader.vue'

// Design tokens (JS values)
export * as tokens from './tokens/index.js'

// Install plugin — registers all components globally
import LvButton           from './components/LvButton/LvButton.vue'
import LvBadge            from './components/LvBadge/LvBadge.vue'
import LvCard             from './components/LvCard/LvCard.vue'
import LvDivider          from './components/LvDivider/LvDivider.vue'
import LvBaseIcon         from './components/LvBaseIcon/LvBaseIcon.vue'
import LvClickableIcon    from './components/LvClickableIcon/LvClickableIcon.vue'
import LvTextInput        from './components/LvTextInput/LvTextInput.vue'
import LvBooleanInput     from './components/LvBooleanInput/LvBooleanInput.vue'
import LvSelectInput      from './components/LvSelectInput/LvSelectInput.vue'
import LvMultiSelectInput from './components/LvMultiSelectInput/LvMultiSelectInput.vue'
import LvSectionHeader    from './components/LvSectionHeader/LvSectionHeader.vue'
import LvPageHeader       from './components/LvPageHeader/LvPageHeader.vue'

const components = {
  LvButton, LvBadge, LvCard, LvDivider,
  LvBaseIcon, LvClickableIcon,
  LvTextInput, LvBooleanInput, LvSelectInput, LvMultiSelectInput,
  LvSectionHeader, LvPageHeader,
}

export const Livery = {
  install(app) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  },
}

export default Livery
