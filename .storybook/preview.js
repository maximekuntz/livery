import '../src/tokens/tokens.css'
import '../src/tokens/themes.css'

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      options: {
        "rail-platform": { name: 'rail-platform', value: '#f8f9fa' },
        dark: { name: 'dark',          value: '#212529' },
        white: { name: 'white',         value: '#ffffff' }
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'rail-platform'
    }
  }
}

export default preview
