import { ThemeProvider, CssBaseline } from "@mui/material";
import * as bigwToken from '@woolworthslimited/core-tokens/dist/bigw/js/tokens';
import * as everydayToken from '@woolworthslimited/core-tokens/dist/everyday/js/tokens';
import * as woolworthsToken from '@woolworthslimited/core-tokens/dist/woolworths/js/tokens';
import { createTheme } from "../src/themes";

type Brand = 'woolworths' | 'everyday' | 'bigw';
const brandTokens: Record<Brand, any>= {
  woolworths: woolworthsToken,
  everyday: everydayToken,
  bigw: bigwToken,
};

const withTheme = (Story: any, context: any) => {
  const theme: Brand = context.parameters.theme || context.globals.theme || 'woolworths';
  const selectedTheme = createTheme(brandTokens[theme]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const globalDecorators = [
  withTheme,
]

// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { withThemeFromJSXProvider } from '@storybook/addon-themes';
// import * as bigwToken from '@woolworthslimited/core-tokens/dist/bigw/js/tokens';
// import * as everydayToken from '@woolworthslimited/core-tokens/dist/everyday/js/tokens';
// import * as woolworthsToken from '@woolworthslimited/core-tokens/dist/woolworths/js/tokens';
// import { createTheme } from "../src/themes";

// const withTheme = withThemeFromJSXProvider({
//   themes: {
//     woolworths: createTheme(woolworthsToken),
//     everyday: createTheme(everydayToken),
//     bigw: createTheme(bigwToken),
//   },
//   defaultTheme: 'light',
//   Provider: ThemeProvider,
//   GlobalStyles: CssBaseline,
// });

// export const globalDecorators = [
//   withTheme,
// ]
