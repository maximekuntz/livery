import SectionHeader from './SectionHeader.vue'
import Button from '../Button/Button.vue'
import { ICONS } from '../BaseIcon/BaseIcon.vue'

export default {
  title: 'Components/Layout/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [undefined, ...Object.keys(ICONS)],
      description: 'Optional icon shown before the title',
    },
    description: { control: 'text' },
    tag: {
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      table: { defaultValue: { summary: 'h2' } },
    },
  },
}

export const Default = {
  render: () => ({
    components: { SectionHeader },
    template: '<SectionHeader>Service information</SectionHeader>',
  }),
}

export const WithDescription = {
  render: () => ({
    components: { SectionHeader },
    template: `
      <SectionHeader description="All scheduled services for the selected date and route.">
        Today's services
      </SectionHeader>
    `,
  }),
}

export const WithIcon = {
  render: () => ({
    components: { SectionHeader },
    template: `
      <SectionHeader
        icon="calendar"
        description="All scheduled services for the selected date and route."
      >
        Today's services
      </SectionHeader>
    `,
  }),
}

export const WithActions = {
  render: () => ({
    components: { SectionHeader, Button },
    template: `
      <SectionHeader description="Manage the calling points for this service.">
        Calling points
        <template #actions>
          <Button variant="outlined" size="sm" label="Edit" />
        </template>
      </SectionHeader>
    `,
  }),
}
