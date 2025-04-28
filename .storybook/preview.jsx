import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
  },
};

const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;