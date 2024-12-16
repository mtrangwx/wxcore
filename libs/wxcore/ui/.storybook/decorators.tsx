
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { lightTheme, darkTheme, acquaTheme } from '../src/themes';

const withTheme = withThemeFromJSXProvider({
  themes: {
    light: lightTheme,
    dark: darkTheme,
    aqua: acquaTheme,
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
});

export const globalDecorators = [
  withTheme,
]
