import PageHeader from './PageHeader.vue'
import Button from '../Button/Button.vue'
import Badge from '../Badge/Badge.vue'
import ClickableIcon from '../ClickableIcon/ClickableIcon.vue'

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
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
    components: { PageHeader },
    template: '<PageHeader>Timetable</PageHeader>',
  }),
}

export const WithEyebrowAndSubtitle = {
  render: () => ({
    components: { PageHeader },
    template: `
      <PageHeader
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
          <Button variant="outlined" size="md">Export</Button>
          <Button variant="filled"   size="md">Add service</Button>
        </template>
      </PageHeader>
    `,
  }),
}

export const WithBreadcrumbAndMeta = {
  render: () => ({
    components: { PageHeader, Button, Badge },
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
          <Button variant="outlined" size="sm">Edit</Button>
          <Button variant="danger"   size="sm">Cancel service</Button>
        </template>
        <template #meta>
          <Badge variant="success" pill>On time</Badge>
          <Badge variant="default">Intercity 125</Badge>
          <Badge variant="info">First class available</Badge>
        </template>
      </PageHeader>
    `,
  }),
}
