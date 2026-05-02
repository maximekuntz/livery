// ─── Livery Design System ─────────────────────────────────────────────────────
// Rail-inspired Vue 3 component library

// CSS design tokens & themes (bundled into dist/livery.css)
import './tokens/tokens.css'
import './tokens/themes.css'

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
export { default as LvDateInput }        from './components/LvDateInput/LvDateInput.vue'
export { default as LvTimeInput }        from './components/LvTimeInput/LvTimeInput.vue'
export { default as LvDateTimeInput }    from './components/LvDateTimeInput/LvDateTimeInput.vue'
export { default as LvSectionHeader }    from './components/LvSectionHeader/LvSectionHeader.vue'
export { default as LvPageHeader }       from './components/LvPageHeader/LvPageHeader.vue'
export { default as LvTable }            from './components/LvTable/LvTable.vue'
export { default as LvPagination }       from './components/LvPagination/LvPagination.vue'
export { default as LvAlert }            from './components/notification/LvAlert/LvAlert.vue'
export { default as LvToast }            from './components/notification/LvToast/LvToast.vue'
export { default as LvToastContainer }   from './components/notification/LvToastContainer/LvToastContainer.vue'
export { useToast }                      from './components/notification/useToast.js'
export { default as LvSidebarLayout }   from './components/layout/LvSidebarLayout/LvSidebarLayout.vue'
export { default as LvTopNavLayout }    from './components/layout/LvTopNavLayout/LvTopNavLayout.vue'
export { default as LvTemplateView }    from './components/layout/LvTemplateView/LvTemplateView.vue'
export { default as LvNavItem }         from './components/layout/LvNavItem/LvNavItem.vue'
export { default as LvNavGroup }        from './components/layout/LvNavGroup/LvNavGroup.vue'
export { default as LvTopNavItem }      from './components/layout/LvTopNavItem/LvTopNavItem.vue'
export { default as LvTrainCarriage }   from './components/train/LvTrainCarriage/LvTrainCarriage.vue'
export { default as LvTrainConsist }    from './components/train/LvTrainConsist/LvTrainConsist.vue'
export { default as LvCarriageInfo }    from './components/train/LvCarriageInfo/LvCarriageInfo.vue'
export { default as LvExpandableText }  from './components/LvExpandableText/LvExpandableText.vue'
export { default as LvExpandableSection } from './components/LvExpandableSection/LvExpandableSection.vue'
export { default as LvPageSection }     from './components/LvPageSection/LvPageSection.vue'

// Design tokens (JS values)
export * as tokens from './tokens/index.js'

// Train livery themes
export * as themes from './tokens/themes.js'

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
import LvDateInput        from './components/LvDateInput/LvDateInput.vue'
import LvTimeInput        from './components/LvTimeInput/LvTimeInput.vue'
import LvDateTimeInput    from './components/LvDateTimeInput/LvDateTimeInput.vue'
import LvSectionHeader    from './components/LvSectionHeader/LvSectionHeader.vue'
import LvPageHeader       from './components/LvPageHeader/LvPageHeader.vue'
import LvTable            from './components/LvTable/LvTable.vue'
import LvPagination       from './components/LvPagination/LvPagination.vue'
import LvAlert            from './components/notification/LvAlert/LvAlert.vue'
import LvToast            from './components/notification/LvToast/LvToast.vue'
import LvToastContainer   from './components/notification/LvToastContainer/LvToastContainer.vue'
import LvSidebarLayout   from './components/layout/LvSidebarLayout/LvSidebarLayout.vue'
import LvTopNavLayout    from './components/layout/LvTopNavLayout/LvTopNavLayout.vue'
import LvTemplateView    from './components/layout/LvTemplateView/LvTemplateView.vue'
import LvNavItem         from './components/layout/LvNavItem/LvNavItem.vue'
import LvNavGroup        from './components/layout/LvNavGroup/LvNavGroup.vue'
import LvTopNavItem      from './components/layout/LvTopNavItem/LvTopNavItem.vue'
import LvTrainCarriage  from './components/train/LvTrainCarriage/LvTrainCarriage.vue'
import LvTrainConsist   from './components/train/LvTrainConsist/LvTrainConsist.vue'
import LvCarriageInfo   from './components/train/LvCarriageInfo/LvCarriageInfo.vue'
import LvExpandableText    from './components/LvExpandableText/LvExpandableText.vue'
import LvExpandableSection from './components/LvExpandableSection/LvExpandableSection.vue'
import LvPageSection       from './components/LvPageSection/LvPageSection.vue'

const components = {
  LvButton, LvBadge, LvCard, LvDivider,
  LvBaseIcon, LvClickableIcon,
  LvTextInput, LvBooleanInput, LvSelectInput, LvMultiSelectInput,
  LvDateInput, LvTimeInput, LvDateTimeInput,
  LvSectionHeader, LvPageHeader, LvTable, LvPagination,
  LvAlert, LvToast, LvToastContainer,
  LvSidebarLayout, LvTopNavLayout, LvTemplateView,
  LvNavItem, LvNavGroup, LvTopNavItem,
  LvTrainCarriage, LvTrainConsist, LvCarriageInfo,
  LvExpandableText, LvExpandableSection, LvPageSection,
}

export const Livery = {
  install(app) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  },
}

export default Livery
