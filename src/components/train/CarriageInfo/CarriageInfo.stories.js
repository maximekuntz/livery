import { ref } from 'vue'
import CarriageInfo from './CarriageInfo.vue'
import TrainConsist from '../TrainConsist/TrainConsist.vue'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Train/CarriageInfo',
  component: CarriageInfo,
  tags: ['autodocs'],
  argTypes: {
    number: {
      control: 'text',
      description: 'Vehicle number / identifier',
    },
    travelClass: {
      control: { type: 'select' },
      options: [null, 'first', 'standard', 'mixed'],
      description: 'Travel class badge',
      table: { defaultValue: { summary: 'null' } },
    },
    platformZone: {
      control: 'text',
      description: 'Platform zone letter (A–E)',
    },
    services: {
      control: { type: 'check' },
      options: ['wifi', 'power', 'restaurant', 'buffet', 'accessible', 'quiet', 'bike', 'luggage', 'baby'],
      description: 'On-board services',
    },
    compact: {
      control: 'boolean',
      description: 'Compact layout with smaller number and tighter padding',
    },
  },
}

/** First-class carriage with all relevant services */
export const FirstClass = {
  args: {
    number: '1',
    travelClass: 'first',
    platformZone: 'A',
    services: ['wifi', 'power', 'restaurant', 'quiet', 'luggage'],
  },
  render: (args) => ({
    components: { CarriageInfo },
    setup: () => ({ args }),
    template: '<CarriageInfo v-bind="args" />',
  }),
}

/** Standard carriage with buffet and accessibility */
export const Standard = {
  args: {
    number: '4',
    travelClass: 'standard',
    platformZone: 'B',
    services: ['wifi', 'power', 'buffet', 'accessible', 'bike'],
  },
  render: (args) => ({
    components: { CarriageInfo },
    setup: () => ({ args }),
    template: '<CarriageInfo v-bind="args" />',
  }),
}

/** Carriage with no services listed */
export const NoServices = {
  args: {
    number: '7',
    travelClass: 'standard',
    platformZone: 'C',
    services: [],
  },
  render: (args) => ({
    components: { CarriageInfo },
    setup: () => ({ args }),
    template: '<CarriageInfo v-bind="args" />',
  }),
}

/** Compact variant — useful in sidebars or narrow containers */
export const Compact = {
  args: {
    number: '2',
    travelClass: 'first',
    platformZone: 'A',
    services: ['wifi', 'power', 'quiet'],
    compact: true,
  },
  render: (args) => ({
    components: { CarriageInfo },
    setup: () => ({ args }),
    template: '<CarriageInfo v-bind="args" />',
  }),
}

// ── Carriage data with service metadata ──────────────────────────────────────

const CONSIST = [
  { id: 'loco',  type: 'locomotive', shape: 'nose-left' },
  { id: 'c1',    type: 'carriage',   shape: 'rectangular', travelClass: 'first',    number: '1', platformZone: 'A', services: ['wifi', 'power', 'quiet', 'restaurant'] },
  { id: 'c2',    type: 'carriage',   shape: 'rectangular', travelClass: 'first',    number: '2', platformZone: 'A', services: ['wifi', 'power', 'quiet', 'luggage'] },
  { id: 'c3',    type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: '3', platformZone: 'B', services: ['wifi', 'power', 'accessible', 'bike'] },
  { id: 'c4',    type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: '4', platformZone: 'B', services: ['wifi', 'buffet'] },
  { id: 'c5',    type: 'carriage',   shape: 'rectangular', travelClass: 'mixed',    number: '5', platformZone: 'B', services: ['wifi', 'power', 'baby'] },
  { id: 'c6',    type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: '6', platformZone: 'C', services: ['wifi'] },
  { id: 'c7',    type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: '7', platformZone: 'C', services: ['wifi', 'luggage'] },
  { id: 'brake', type: 'power-car',  shape: 'nose-right' },
]

const ZONES = [
  { label: 'A', from: 0, to: 2 },
  { label: 'B', from: 3, to: 5 },
  { label: 'C', from: 6, to: 8 },
]

/**
 * Full composition demo — select a carriage in the consist to see its
 * detail panel update below.
 */
export const WithConsist = {
  render: () => ({
    components: { CarriageInfo, TrainConsist },
    setup() {
      const selectedId  = ref(null)
      const selectedCar = ref(null)

      function onSelect({ carriage }) {
        if (selectedId.value === carriage.id) {
          selectedId.value  = null
          selectedCar.value = null
        } else {
          selectedId.value  = carriage.id
          selectedCar.value = carriage
        }
      }

      return { selectedId, selectedCar, onSelect, CONSIST, ZONES }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start">
        <TrainConsist
          :carriages="CONSIST"
          :platform-zones="ZONES"
          :selected-id="selectedId"
          @select="onSelect"
        />
        <transition name="fade">
          <CarriageInfo
            v-if="selectedCar && selectedCar.number"
            :number="selectedCar.number"
            :travel-class="selectedCar.travelClass ?? null"
            :platform-zone="selectedCar.platformZone ?? null"
            :services="selectedCar.services ?? []"
          />
        </transition>
        <p
          v-if="!selectedCar || !selectedCar.number"
          style="font-family:var(--font-sans);font-size:var(--text-sm);color:var(--text-secondary);margin:0"
        >
          Select a numbered coach to view its details.
        </p>
      </div>
    `,
  }),
}
