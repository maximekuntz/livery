import { ref } from 'vue'
import SelectInput from './SelectInput.vue'

const STATIONS = [
  { label: 'London Paddington', value: 'PAD' },
  { label: 'Bristol Temple Meads', value: 'BRI' },
  { label: 'Reading', value: 'RDG' },
  { label: 'Bath Spa', value: 'BTH' },
  { label: 'Swindon', value: 'SWI' },
  { label: 'Chippenham', value: 'CPM', disabled: true },
]

export default {
  title: 'Components/Inputs/SelectInput',
  component: SelectInput,
  tags: ['autodocs'],
  argTypes: {
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    hint:        { control: 'text' },
    error:       { control: 'text' },
    disabled:    { control: 'boolean' },
    required:    { control: 'boolean' },
  },
}

export const Default = {
  render: () => ({
    components: { SelectInput },
    setup() {
      const v = ref('')
      return { v, STATIONS }
    },
    template: `
      <SelectInput
        v-model="v"
        label="Destination"
        placeholder="Select a station"
        :options="STATIONS"
        hint="Choose your destination station."
        style="max-width:280px"
      />
    `,
  }),
}

export const WithError = {
  render: () => ({
    components: { SelectInput },
    setup() { return { STATIONS } },
    template: `
      <SelectInput
        label="Destination"
        placeholder="Select a station"
        :options="STATIONS"
        error="Please select a destination."
        style="max-width:280px"
      />
    `,
  }),
}

export const Disabled = {
  render: () => ({
    components: { SelectInput },
    setup() { return { STATIONS } },
    template: `
      <SelectInput
        modelValue="PAD"
        label="Origin"
        :options="STATIONS"
        disabled
        style="max-width:280px"
      />
    `,
  }),
}
