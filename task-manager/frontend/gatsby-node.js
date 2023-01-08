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

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  console.log('Page - ' + page.page)
  if (page.path.match(/^\/add-assignee/)) {
    createPage({
      path: '/add-assignee',
      matchPath: '/add-assignee/:id',
      component: path.resolve('src/pages/add-assignee.js'),
    })
  }
  if (page.path.match(/^\/detail-task/)) {
    createPage({
      path: '/detail-task',
      matchPath: '/detail-task/:id',
      component: path.resolve('src/pages/detail-task.js'),
    })
  }
}
