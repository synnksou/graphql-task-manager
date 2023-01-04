const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions, plugins, getConfig }) => {
  let config = {}

  config['devtool'] = process.env.GATSBY_ENABLE_DEVTOOL == 'true'

  if (stage === 'build-javascript' || stage === 'develop') {
    config['plugins'] = [plugins.provide({ process: 'process/browser' })]
  }

  config['resolve'] = {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      path: require.resolve('path-browserify'),
    },
    fallback: {
      fs: false,
    },
  }

  const oldConfig = getConfig()

  const miniCss = oldConfig.plugins.find(
    (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
  )

  if (miniCss) {
    miniCss.options.ignoreOrder = true
  }

  actions.replaceWebpackConfig(oldConfig)
  actions.setWebpackConfig(config)
}
