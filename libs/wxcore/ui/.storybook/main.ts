import type { StorybookConfig } from '@storybook/react-vite';
// import { searchForWorkspaceRoot } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../src/stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  ],
  addons: [
    '@storybook/addon-a11y', 
    '@storybook/addon-essentials', 
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-themes'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // Speeds up Storybook build time
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },
  async viteFinal(config, { configType }) {
    const { mergeConfig, searchForWorkspaceRoot } = await import('vite');
 
    // if (configType === 'DEVELOPMENT') {
    //   // Your development configuration goes here
    // }
    // if (configType === 'PRODUCTION') {
    //   // Your production configuration goes here.
    // }
    return mergeConfig(config, {
      // Your environment configuration here
      server: {
        fs: {
          allow: [
            // search up for workspace root
            searchForWorkspaceRoot(process.cwd()),
            // your custom rules
            '/Users/mtrang/dev/tech-okr/wxcore/node_modules/@fontsource/roboto/files',
          ],
        },
      },
    });
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
