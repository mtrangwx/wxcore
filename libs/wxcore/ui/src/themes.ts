import { createTheme as createMUITheme, Theme } from '@mui/material/styles';
import * as woolworthsToken from '@woolworthslimited/core-tokens/dist/woolworths/js/tokens'

export const createTheme = (designToken: Record<string, any>): Theme => {
  const token  = designToken ?? woolworthsToken;

  return createMUITheme({
    palette: {
      primary: {
        main: token.colorActionBackgroundPrimaryDefault
      }
    }
  });
};


// export const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#ff5252',
//     },
//   },
// });

// export const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#126C34', // color-action-background-primary-focus
//     },
//   },
// });

// export const acquaTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#1971ED',
//     },
//   },
// });
