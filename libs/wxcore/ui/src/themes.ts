import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff5252',
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#126C34', // color-action-background-primary-focus
    },
  },
});

export const acquaTheme = createTheme({
  palette: {
    primary: {
      main: '#1971ED',
    },
  },
});
