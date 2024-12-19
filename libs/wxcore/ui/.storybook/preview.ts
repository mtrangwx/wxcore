
import type { Preview } from "@storybook/react";

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

type Brand = { brand: string, title: string; emoji: string };
const brands: Brand[]  = [
  {
    brand: 'woolworths',
    title: 'Woolworths',
    emoji: '🟢',
  },
  {
    brand: 'everyday',
    title: 'Everyday',
    emoji: '🟠',
  },
  {
    brand: 'bigw',
    title: 'BigW',
    emoji: '🔵',
  },
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Set the brand color theme',
    defaultValue: 'woolworths',
    toolbar: {
      icon: 'paintbrush',
      // show the theme name once selected in the toolbar
      dynamicTitle: true,
      items: brands.map(({brand, title, emoji}) => ({
        value: brand,
        title,
        right: emoji,
      })),
    },
  },
}

const preview: Preview = {
  parameters
}

export default preview;
