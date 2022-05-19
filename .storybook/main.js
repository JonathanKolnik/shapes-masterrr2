module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  staticDirs: ['../public'],
  refs: {
   'design-system': {
     title: "Storybook Design System",
     url: "https://627e598cf1be54789d528524-ngkakhukkp.dev-chromatic.com",
     expanded: false // optional, true by default
   }
  }

};
