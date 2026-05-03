import { ref } from 'vue'
import MultiSelectInput from './MultiSelectInput.vue'

const STATIONS = [
  { label: 'London Paddington', value: 'PAD' },
  { label: 'Bristol Temple Meads', value: 'BRI' },
  { label: 'Reading', value: 'RDG' },
  { label: 'Bath Spa', value: 'BTH' },
  { label: 'Swindon', value: 'SWI' },
  { label: 'Oxford', value: 'OXF' },
  { label: 'Chippenham', value: 'CPM', disabled: true },
  { label: 'Didcot Parkway', value: 'DID' },
]

export default {
  title: 'Components/MultiSelectInput',
  component: MultiSelectInput,
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
    components: { MultiSelectInput },
    setup() {
      const selected = ref([])
      return { selected, STATIONS }
    },
    template: `
      <div style="max-width:320px">
        <MultiSelectInput
          v-model="selected"
          :options="STATIONS"
          label="Calling points"
          placeholder="Select stations…"
          hint="Choose all stations this service calls at."
        />
        <p style="margin-top:1rem;font-size:var(--text-xs);color:var(--text-secondary)">
          Selected: {{ selected.join(', ') || '—' }}
        </p>
      </div>
    `,
  }),
}

export const WithError = {
  render: () => ({
    components: { MultiSelectInput },
    setup() { return { STATIONS } },
    template: `
      <div style="max-width:320px">
        <MultiSelectInput
          :modelValue="[]"
          :options="STATIONS"
          label="Calling points"
          error="Select at least one calling point."
        />
      </div>
    `,
  }),
}

export const Preselected = {
  render: () => ({
    components: { MultiSelectInput },
    setup() {
      const selected = ref(['PAD', 'RDG', 'BTH', 'BRI'])
      return { selected, STATIONS }
    },
    template: `
      <div style="max-width:320px">
        <MultiSelectInput
          v-model="selected"
          :options="STATIONS"
          label="Calling points"
        />
      </div>
    `,
  }),
}
