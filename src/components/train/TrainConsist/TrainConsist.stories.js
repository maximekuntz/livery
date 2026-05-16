import { ref } from 'vue'
import TrainConsist from './TrainConsist.vue'

// ── Shared fixture data ───────────────────────────────────────────────────────

const intercityConsist = [
  { id: 'loco',  type: 'locomotive', shape: 'nose-left' },
  { id: 'c1',    type: 'carriage',   shape: 'rectangular', travelClass: 'first',    number: '1' },
  { id: 'c2',    type: 'carriage',   shape: 'rectangular', travelClass: 'first',    number: '2' },
  { id: 'c3',    type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: '3' },
  { id: 'c4',    type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: '4' },
  { id: 'c5',    type: 'carriage',   shape: 'rectangular', travelClass: 'mixed',    number: '5' },
  { id: 'c6',    type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: '6' },
  { id: 'c7',    type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: '7' },
  { id: 'brake', type: 'power-car',  shape: 'nose-right' },
]

const platformZones = [
  { label: 'A', from: 0, to: 1 },
  { label: 'B', from: 2, to: 4 },
  { label: 'C', from: 5, to: 7 },
  { label: 'D', from: 8, to: 8 },
]

const dmuConsist = [
  { id: 'd1', type: 'locomotive', shape: 'nose-left',  travelClass: 'standard', number: 'A' },
  { id: 'd2', type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: 'B' },
  { id: 'd3', type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: 'C' },
  { id: 'd4', type: 'locomotive', shape: 'nose-right',  travelClass: 'standard', number: 'D' },
]

const twoIntercityEmuConsist = [
  { id: 'e1-a', type: 'locomotive', shape: 'nose-left',  travelClass: 'first',    number: '1' },
  { id: 'e1-b', type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: '2' },
  { id: 'e1-c', type: 'locomotive', shape: 'nose-right',  travelClass: 'standard', number: '3' },
  { id: 'e2-a', type: 'locomotive', shape: 'nose-left',  travelClass: 'first',    number: '4' },
  { id: 'e2-b', type: 'carriage',   shape: 'rectangular', travelClass: 'standard', number: '5' },
  { id: 'e2-c', type: 'locomotive', shape: 'nose-right',  travelClass: 'standard', number: '6' },
]

// ── Meta ──────────────────────────────────────────────────────────────────────

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/Train/TrainConsist',
  component: TrainConsist,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'Which end of the `carriages` array is the front of the train',
      table: { defaultValue: { summary: 'ltr' } },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the `<region>` landmark',
    },
  },
}

// ── Stories ───────────────────────────────────────────────────────────────────

/** Full intercity formation with locomotive, mixed-class coaches, and a brake/power car */
export const Intercity = {
  args: {
    carriages: intercityConsist,
    platformZones,
    direction: 'ltr',
  },
  render: (args) => ({
    components: { TrainConsist },
    setup: () => ({ args }),
    template: '<TrainConsist v-bind="args" />',
  }),
}

/** Four-car DMU with cabs at both ends */
export const DMUFourCar = {
  args: {
    carriages: dmuConsist,
    platformZones: [
      { label: 'A', from: 0, to: 1 },
      { label: 'B', from: 2, to: 3 },
    ],
    direction: 'ltr',
  },
  render: (args) => ({
    components: { TrainConsist },
    setup: () => ({ args }),
    template: '<TrainConsist v-bind="args" />',
  }),
}

/** Two coupled 3-car Intercity EMUs (6 cars total) */
export const TwoIntercityEMUs = {
  args: {
    carriages: twoIntercityEmuConsist,
    platformZones: [
      { label: 'A', from: 0, to: 1 },
      { label: 'B', from: 2, to: 3 },
      { label: 'C', from: 4, to: 5 },
    ],
    direction: 'ltr',
  },
  render: (args) => ({
    components: { TrainConsist },
    setup: () => ({ args }),
    template: '<TrainConsist v-bind="args" />',
  }),
}

/** Without platform zone bands */
export const NoZones = {
  args: {
    carriages: intercityConsist,
    direction: 'ltr',
  },
  render: (args) => ({
    components: { TrainConsist },
    setup: () => ({ args }),
    template: '<TrainConsist v-bind="args" />',
  }),
}

/**
 * Interactive: click a carriage to select it.
 * The selected carriage is highlighted with a brand outline.
 */
export const Interactive = {
  render: () => ({
    components: { TrainConsist },
    setup() {
      const selectedId = ref(null)
      function onSelect({ carriage }) {
        selectedId.value = selectedId.value === carriage.id ? null : carriage.id
      }
      return { selectedId, onSelect, intercityConsist, platformZones }
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:flex-start">
        <TrainConsist
          :carriages="intercityConsist"
          :platform-zones="platformZones"
          :selected-id="selectedId"
          @select="onSelect"
        />
        <p style="font-family:var(--font-sans);font-size:var(--text-sm);color:var(--text-secondary);margin:0">
          {{ selectedId ? 'Selected: ' + selectedId : 'Click a carriage to select it' }}
        </p>
      </div>
    `,
  }),
}
