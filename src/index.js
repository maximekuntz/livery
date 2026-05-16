// ─── Livery Design System ─────────────────────────────────────────────────────
// Rail-inspired Vue 3 component library

// CSS design tokens & themes (bundled into dist/livery.css)
import './tokens/tokens.css'
import './tokens/themes.css'

export { default as Button }           from './components/Button/Button.vue'
export { default as BaseBadge }        from './components/BaseBadge/BaseBadge.vue'
export { default as Card }             from './components/cards/Card/Card.vue'
export { default as BaseCard }         from './components/cards/BaseCard/BaseCard.vue'
export { default as Metric }           from './components/Metric/Metric.vue'
export { default as BaseHeader }       from './components/BaseHeader/BaseHeader.vue'
export { default as Divider }          from './components/Divider/Divider.vue'
export { default as BaseIcon }         from './components/BaseIcon/BaseIcon.vue'
export { default as ClickableIcon }    from './components/ClickableIcon/ClickableIcon.vue'
export { default as TextInput }        from './components/TextInput/TextInput.vue'
export { default as BooleanInput }     from './components/BooleanInput/BooleanInput.vue'
export { default as SelectInput }      from './components/SelectInput/SelectInput.vue'
export { default as MultiSelectInput } from './components/MultiSelectInput/MultiSelectInput.vue'
export { default as DateInput }        from './components/DateInput/DateInput.vue'
export { default as TimeInput }        from './components/TimeInput/TimeInput.vue'
export { default as DateTimeInput }    from './components/DateTimeInput/DateTimeInput.vue'
export { default as SectionHeader }    from './components/SectionHeader/SectionHeader.vue'
export { default as PageHeader }       from './components/PageHeader/PageHeader.vue'
export { default as Table }            from './components/Table/Table.vue'
export { default as Pagination }       from './components/Pagination/Pagination.vue'
export { default as Alert }            from './components/notification/Alert/Alert.vue'
export { default as Toast }            from './components/notification/Toast/Toast.vue'
export { default as ToastContainer }   from './components/notification/ToastContainer/ToastContainer.vue'
export { useToast }                      from './components/notification/useToast.js'
export { default as SidebarLayout }   from './components/layout/SidebarLayout/SidebarLayout.vue'
export { default as TopNavLayout }    from './components/layout/TopNavLayout/TopNavLayout.vue'
export { default as TemplateView }    from './components/layout/TemplateView/TemplateView.vue'
export { default as NavItem }         from './components/layout/NavItem/NavItem.vue'
export { default as NavGroup }        from './components/layout/NavGroup/NavGroup.vue'
export { default as TopNavItem }      from './components/layout/TopNavItem/TopNavItem.vue'
export { default as TrainCarriage }   from './components/train/TrainCarriage/TrainCarriage.vue'
export { default as TrainConsist }    from './components/train/TrainConsist/TrainConsist.vue'
export { default as CarriageInfo }    from './components/train/CarriageInfo/CarriageInfo.vue'
export { default as ExpandableText }  from './components/ExpandableText/ExpandableText.vue'
export { default as ExpandableSection } from './components/ExpandableSection/ExpandableSection.vue'
export { default as PageSection }     from './components/PageSection/PageSection.vue'
export { default as Modal }           from './components/Modal/Modal.vue'
export { default as ConfirmModal }    from './components/Modal/ConfirmModal.vue'

// Design tokens (JS values)
export * as tokens from './tokens/index.js'

// Train livery themes
export * as themes from './tokens/themes.js'

// Install plugin — registers all components globally
import Button           from './components/Button/Button.vue'
import BaseBadge        from './components/BaseBadge/BaseBadge.vue'
import Card             from './components/cards/Card/Card.vue'
import BaseCard         from './components/cards/BaseCard/BaseCard.vue'
import Metric           from './components/Metric/Metric.vue'
import BaseHeader       from './components/BaseHeader/BaseHeader.vue'
import Divider          from './components/Divider/Divider.vue'
import BaseIcon         from './components/BaseIcon/BaseIcon.vue'
import ClickableIcon    from './components/ClickableIcon/ClickableIcon.vue'
import TextInput        from './components/TextInput/TextInput.vue'
import BooleanInput     from './components/BooleanInput/BooleanInput.vue'
import SelectInput      from './components/SelectInput/SelectInput.vue'
import MultiSelectInput from './components/MultiSelectInput/MultiSelectInput.vue'
import DateInput        from './components/DateInput/DateInput.vue'
import TimeInput        from './components/TimeInput/TimeInput.vue'
import DateTimeInput    from './components/DateTimeInput/DateTimeInput.vue'
import SectionHeader    from './components/SectionHeader/SectionHeader.vue'
import PageHeader       from './components/PageHeader/PageHeader.vue'
import Table            from './components/Table/Table.vue'
import Pagination       from './components/Pagination/Pagination.vue'
import Alert            from './components/notification/Alert/Alert.vue'
import Toast            from './components/notification/Toast/Toast.vue'
import ToastContainer   from './components/notification/ToastContainer/ToastContainer.vue'
import SidebarLayout   from './components/layout/SidebarLayout/SidebarLayout.vue'
import TopNavLayout    from './components/layout/TopNavLayout/TopNavLayout.vue'
import TemplateView    from './components/layout/TemplateView/TemplateView.vue'
import NavItem         from './components/layout/NavItem/NavItem.vue'
import NavGroup        from './components/layout/NavGroup/NavGroup.vue'
import TopNavItem      from './components/layout/TopNavItem/TopNavItem.vue'
import TrainCarriage  from './components/train/TrainCarriage/TrainCarriage.vue'
import TrainConsist   from './components/train/TrainConsist/TrainConsist.vue'
import CarriageInfo   from './components/train/CarriageInfo/CarriageInfo.vue'
import ExpandableText    from './components/ExpandableText/ExpandableText.vue'
import ExpandableSection from './components/ExpandableSection/ExpandableSection.vue'
import PageSection       from './components/PageSection/PageSection.vue'
import Modal             from './components/Modal/Modal.vue'
import ConfirmModal      from './components/Modal/ConfirmModal.vue'

const components = {
  BaseBadge, Card, BaseCard, Metric, BaseHeader, Button, 
  Divider, BaseIcon, ClickableIcon,
  TextInput, BooleanInput, SelectInput, MultiSelectInput,
  DateInput, TimeInput, DateTimeInput,
  SectionHeader, PageHeader, Table, Pagination,
  Alert, Toast, ToastContainer,
  SidebarLayout, TopNavLayout, TemplateView,
  NavItem, NavGroup, TopNavItem,
  TrainCarriage, TrainConsist, CarriageInfo,
  ExpandableText, ExpandableSection, PageSection,
  Modal, ConfirmModal,
}

export const Livery = {
  install(app) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  },
}

export default Livery
