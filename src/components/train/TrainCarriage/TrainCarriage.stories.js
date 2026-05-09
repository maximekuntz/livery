import TrainCarriage from './TrainCarriage.vue'

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: 'Components/Train/TrainCarriage',
  component: TrainCarriage,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['carriage', 'locomotive', 'power-car'],
      description: 'Rolling stock category — semantic only; all types share the same colour',
      table: { defaultValue: { summary: 'carriage' } },
    },
    shape: {
      control: { type: 'select' },
      options: ['rectangular', 'nose-left', 'nose-right', 'locomotive'],
      description:
        '`locomotive` — symmetric trapezoid for standalone locos (couplers both ends). `nose-left` / `nose-right` — rectangle with one angled end for MU cab cars (coupler on the straight end).',
      table: { defaultValue: { summary: 'rectangular' } },
    },
    travelClass: {
      control: { type: 'select' },
      options: [null, 'first', 'standard', 'mixed'],
      description: 'Adds a coloured roof stripe and window tint to identify travel class',
      table: { defaultValue: { summary: 'null' } },
    },
    number: {
      control: 'text',
      description: 'Vehicle identifier rendered inside the body',
    },
    selected: {
      control: 'boolean',
      description: 'Highlights the unit with a brand-coloured outline',
    },
    disabled: {
      control: 'boolean',
      description: 'Dims the unit and disables interaction (not in service)',
    },
  },
}

/** Default coach with no class designation */
export const Default = {
  args: { type: 'carriage', shape: 'rectangular', number: '3' },
  render: (args) => ({
    components: { TrainCarriage },
    setup: () => ({ args }),
    template: '<TrainCarriage v-bind="args" />',
  }),
}

/** First-class coach — amber stripe and tinted windows */
export const FirstClass = {
  args: { type: 'carriage', shape: 'rectangular', travelClass: 'first', number: '1' },
  render: (args) => ({
    components: { TrainCarriage },
    setup: () => ({ args }),
    template: '<TrainCarriage v-bind="args" />',
  }),
}

/** Standard-class coach — blue stripe */
export const StandardClass = {
  args: { type: 'carriage', shape: 'rectangular', travelClass: 'standard', number: '4' },
  render: (args) => ({
    components: { TrainCarriage },
    setup: () => ({ args }),
    template: '<TrainCarriage v-bind="args" />',
  }),
}

/** Standalone locomotive — symmetric trapezoid with couplers at both ends */
export const LocomotiveStandalone = {
  args: { type: 'locomotive', shape: 'locomotive' },
  render: (args) => ({
    components: { TrainCarriage },
    setup: () => ({ args }),
    template: '<TrainCarriage v-bind="args" />',
  }),
}

/** Locomotive with a left-pointing cab (head of an LTR formation) */
export const LocomotiveFront = {
  args: { type: 'locomotive', shape: 'nose-left' },
  render: (args) => ({
    components: { TrainCarriage },
    setup: () => ({ args }),
    template: '<TrainCarriage v-bind="args" />',
  }),
}

/** Power car at the rear of a formation */
export const PowerCarRear = {
  args: { type: 'power-car', shape: 'nose-right' },
  render: (args) => ({
    components: { TrainCarriage },
    setup: () => ({ args }),
    template: '<TrainCarriage v-bind="args" />',
  }),
}

/** Selected state — brand outline indicates the active carriage */
export const Selected = {
  args: { type: 'carriage', shape: 'rectangular', travelClass: 'standard', number: '2', selected: true },
  render: (args) => ({
    components: { TrainCarriage },
    setup: () => ({ args }),
    template: '<TrainCarriage v-bind="args" />',
  }),
}

/** Not in service — dimmed and non-interactive */
export const Disabled = {
  args: { type: 'carriage', shape: 'rectangular', number: '5', disabled: true },
  render: (args) => ({
    components: { TrainCarriage },
    setup: () => ({ args }),
    template: '<TrainCarriage v-bind="args" />',
  }),
}

/** All three shapes side by side */
export const AllShapes = {
  render: () => ({
    components: { TrainCarriage },
    template: `
      <div style="display:flex;align-items:flex-end;gap:4px;padding:1rem;background:var(--bg-page);border-radius:8px">
        <TrainCarriage type="locomotive" shape="locomotive" />
        <TrainCarriage type="carriage"   shape="rectangular" number="1" />
        <TrainCarriage type="carriage"   shape="rectangular" number="2" />
        <TrainCarriage type="locomotive" shape="nose-left" />
        <TrainCarriage type="carriage"   shape="rectangular" number="A" />
        <TrainCarriage type="power-car"  shape="nose-right" />
      </div>
    `,
  }),
}
