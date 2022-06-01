const { mergeConfig } = require("vite");
const vue = require('@vitejs/plugin-vue');
const { quasar, transformAssetUrls } = require('@quasar/vite-plugin');
const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(previousConfig) {
    return mergeConfig(previousConfig, {
      server: {
        hmr: {
          overlay: false
        }
      },
      plugins: [
        vue({
          template: { transformAssetUrls }
        }),
    
        quasar({
          sassVariables: 'src/quasar-variables.sass'
        })
      ]
    });
  },
}