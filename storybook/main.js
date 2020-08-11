module.exports = {
  stories: ['../stories/**/*.stories.js'],
  webpackFinal (config, options) {
    config = options.nuxtStorybookConfig.webpackFinal(config, options)
    return config
  }
}