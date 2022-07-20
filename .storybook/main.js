module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials',
    // '@storybook/addon-interactions', // 👈 Register the addon

],
  staticDirs: ['../public'],
  refs: {
   'design-system': {
     title: "Storybook Design System",
     url: "https://main--628699487545d87bef27ee80.dev-chromatic.com",
   }
  }

};
