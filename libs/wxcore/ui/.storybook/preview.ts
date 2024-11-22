/* eslint-disable @nx/enforce-module-boundaries */
import type { Preview } from "@storybook/react";

// import '../../../../node_modules/@fontsource/roboto/300.css';
// import '../../../../node_modules/@fontsource/roboto/400.css';
// import '../../../../node_modules/@fontsource/roboto/500.css';
// import '../../../../node_modules/@fontsource/roboto/700.css';
// import '../../../../node_modules/@fontsource/material-icons';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';


import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { lightTheme, darkTheme } from '../src/themes';

/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview: Preview = {
  parameters
}

export default preview;