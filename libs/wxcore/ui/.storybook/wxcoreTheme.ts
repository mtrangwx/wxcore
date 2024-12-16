import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Base colors
  colorSecondary: '#126C34', // color-action-background-primary-focus

  // UI
  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 8,

  // Text colors
  textColor: '#494949',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  // Tool
  // Wxcore assets
  brandTitle: 'Wx Core',
  brandUrl: 'https://core.woolworths.com.au',
  brandImage: 'https://core.woolworths.com.au/resources/logos/core-logo-full-size.svg',
});
