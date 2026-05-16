import PageHeader from './PageHeader.vue'
import Button from '../Button/Button.vue'
import BaseBadge from '../BaseBadge/BaseBadge.vue'
import ClickableIcon from '../ClickableIcon/ClickableIcon.vue'
import { ICONS } from '../BaseIcon/BaseIcon.vue'

export default {
  title: 'Components/Layout/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [undefined, ...Object.keys(ICONS)],
      description: 'Optional icon shown before the title',
    },
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
    components: { PageHeader },
    template: '<PageHeader>Timetable</PageHeader>',
  }),
}

export const WithEyebrowAndSubtitle = {
  render: () => ({
    components: { PageHeader },
    template: `
      <PageHeader
        icon="calendar"
        eyebrow="GWR · Long-distance"
        subtitle="Browse, filter, and export scheduled services across the Great Western main line."
      >
        Services
      </PageHeader>
    `,
  }),
}

export const WithActions = {
  render: () => ({
    components: { PageHeader, Button, ClickableIcon },
    template: `
      <PageHeader
        eyebrow="Platform management"
        subtitle="View and manage current platform allocations."
      >
        Platform overview
        <template #actions>
          <Button variant="outlined" size="md" label="Export" />
          <Button variant="filled"   size="md" label="Add service" />
        </template>
      </PageHeader>
    `,
  }),
}

export const WithBreadcrumbAndMeta = {
  render: () => ({
    components: { PageHeader, Button, BaseBadge },
    template: `
      <PageHeader
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
          <Button variant="outlined" size="sm" label="Edit" />
          <Button variant="danger"   size="sm" label="Cancel service" />
        </template>
        <template #meta>
          <BaseBadge variant="success" pill label="On time" />
          <BaseBadge variant="default" label="Intercity 125" />
          <BaseBadge variant="info" label="First class available" />
        </template>
      </PageHeader>
    `,
  }),
}
