import { addons } from '@storybook/manager-api';
// import { themes } from '@storybook/theming';
import wxcoreTheme from './wxcoreTheme';

addons.setConfig({
  theme: wxcoreTheme,
});
