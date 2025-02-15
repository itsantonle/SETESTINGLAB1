/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming'
import '../src/index.css'
const preview = {
  parameters: {
    docs: { theme: themes.dark },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
