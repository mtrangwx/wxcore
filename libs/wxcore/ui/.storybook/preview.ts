
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

import '@woolworthslimited/core-tokens/dist/core/css/tokens.css';

import { globalDecorators } from './decorators';

export const decorators = globalDecorators;

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

// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     description: 'Set the color theme',
//     defaultValue: 'light',
//     toolbar: {
//       // show the theme name once selected in the toolbar
//       dynamicTitle: true,
//       items: [
//         { value: 'light', right: '⚪️', title: 'Light' },
//         { value: 'dark', right: '⚫️', title: 'Dark' },
//         { value: 'acqua', right: '🔵', title: 'Acqua' },
//         // { value: 'fira', right: '🔴', title: 'Fira' },
//         // { value: 'terra', right: '🟠', title: 'Terra' },
//         // { value: 'side-by-side', icon: 'sidebaralt', title: 'all side by side' },
//         // { value: 'stacked', icon: 'bottombar', title: 'all stacked' },
//       ],
//     },
//   },
// }

const preview: Preview = {
  parameters
}

export default preview;
