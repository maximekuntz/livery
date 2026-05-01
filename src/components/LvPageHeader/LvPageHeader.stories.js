import LvPageHeader from './LvPageHeader.vue'
import LvButton from '../LvButton/LvButton.vue'
import LvBadge from '../LvBadge/LvBadge.vue'
import LvClickableIcon from '../LvClickableIcon/LvClickableIcon.vue'

export default {
  title: 'Components/PageHeader',
  component: LvPageHeader,
  tags: ['autodocs'],
  argTypes: {
    eyebrow:  { control: 'text' },
    subtitle: { control: 'text' },
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3'],
      table: { defaultValue: { summary: 'h1' } },
    },
  },
}

export const Default = {
  render: () => ({
    components: { LvPageHeader },
    template: '<LvPageHeader>Timetable</LvPageHeader>',
  }),
}

export const WithEyebrowAndSubtitle = {
  render: () => ({
    components: { LvPageHeader },
    template: `
      <LvPageHeader
        eyebrow="GWR · Long-distance"
        subtitle="Browse, filter, and export scheduled services across the Great Western main line."
      >
        Services
      </LvPageHeader>
    `,
  }),
}

export const WithActions = {
  render: () => ({
    components: { LvPageHeader, LvButton, LvClickableIcon },
    template: `
      <LvPageHeader
        eyebrow="Platform management"
        subtitle="View and manage current platform allocations."
      >
        Platform overview
        <template #actions>
          <LvButton variant="outlined" size="md">Export</LvButton>
          <LvButton variant="filled"   size="md">Add service</LvButton>
        </template>
      </LvPageHeader>
    `,
  }),
}

export const WithBreadcrumbAndMeta = {
  render: () => ({
    components: { LvPageHeader, LvButton, LvBadge },
    template: `
      <LvPageHeader
        eyebrow="GWR · 1A23"
        subtitle="London Paddington → Bristol Temple Meads, calling at Reading, Didcot, Swindon, Bath Spa."
      >
        <template #breadcrumb>
          <a href="#" style="color:var(--text-link)">Services</a>
          <span>›</span>
          <span>1A23</span>
        </template>

        Service 1A23

        <template #actions>
          <LvButton variant="outlined" size="sm">Edit</LvButton>
          <LvButton variant="danger"   size="sm">Cancel service</LvButton>
        </template>
        <template #meta>
          <LvBadge variant="success" pill>On time</LvBadge>
          <LvBadge variant="default">Intercity 125</LvBadge>
          <LvBadge variant="info">First class available</LvBadge>
        </template>
      </LvPageHeader>
    `,
  }),
}
