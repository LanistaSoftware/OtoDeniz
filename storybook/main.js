module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-backgrounds'
  ],
  
  webpackFinal (config, options) {
    config = options.nuxtStorybookConfig.webpackFinal(config, options)
    return config
  }
}