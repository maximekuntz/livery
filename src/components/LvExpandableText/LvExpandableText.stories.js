import LvExpandableText from './LvExpandableText.vue'

const LOREM =
  'The 09:42 service from Edinburgh Waverley calls at Haymarket, Falkirk High, Larbert, Stirling, Bridge of Allan, Dunblane, Gleneagles, Perth, Pitlochry, Blair Atholl, Dalwhinnie, Newtonmore, Kingussie, Aviemore, Carrbridge, Inverness and terminates at Inverness. First class accommodation is available throughout the service. Passengers requiring assistance should make themselves known to the on-board supervisor. All coaches are accessible. Cycle reservations are required on this service.'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/ExpandableText',
  component: LvExpandableText,
  tags: ['autodocs'],
  argTypes: {
    maxLines: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Number of visible lines when collapsed',
      table: { defaultValue: { summary: '3' } },
    },
    expandLabel: {
      control: 'text',
      description: 'Toggle label — collapsed state',
      table: { defaultValue: { summary: 'Show more' } },
    },
    collapseLabel: {
      control: 'text',
      description: 'Toggle label — expanded state',
      table: { defaultValue: { summary: 'Show less' } },
    },
  },
}

export const Default = {
  args: { maxLines: 3 },
  render: (args) => ({
    components: { LvExpandableText },
    setup: () => ({ args, text: LOREM }),
    template: '<LvExpandableText v-bind="args">{{ text }}</LvExpandableText>',
  }),
}

export const TwoLines = {
  args: { maxLines: 2 },
  render: (args) => ({
    components: { LvExpandableText },
    setup: () => ({ args, text: LOREM }),
    template: '<LvExpandableText v-bind="args">{{ text }}</LvExpandableText>',
  }),
}

export const ShortText = {
  name: 'Short text (no toggle)',
  render: () => ({
    components: { LvExpandableText },
    template:
      '<LvExpandableText>The 10:05 is on time.</LvExpandableText>',
  }),
}
