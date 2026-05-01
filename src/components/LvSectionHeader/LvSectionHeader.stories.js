import LvSectionHeader from './LvSectionHeader.vue'
import LvButton from '../LvButton/LvButton.vue'

export default {
  title: 'Components/SectionHeader',
  component: LvSectionHeader,
  tags: ['autodocs'],
  argTypes: {
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
    components: { LvSectionHeader },
    template: '<LvSectionHeader>Service information</LvSectionHeader>',
  }),
}

export const WithDescription = {
  render: () => ({
    components: { LvSectionHeader },
    template: `
      <LvSectionHeader description="All scheduled services for the selected date and route.">
        Today's services
      </LvSectionHeader>
    `,
  }),
}

export const WithActions = {
  render: () => ({
    components: { LvSectionHeader, LvButton },
    template: `
      <LvSectionHeader description="Manage the calling points for this service.">
        Calling points
        <template #actions>
          <LvButton variant="outlined" size="sm">Edit</LvButton>
        </template>
      </LvSectionHeader>
    `,
  }),
}
