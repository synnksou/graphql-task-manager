'use strict'
require('dotenv').config()

const subtitle = 'Task Manager GraphQL Example'

module.exports = {
  url: `http://${process.env.DOMAIN || 'localhost'}`,
  title: 'Task Manager',
  subtitle,
  copyright: '© 2023 All rights reserved.',
  menu: [
    {
      label: 'Home',
      path: '/',
    },
  ],
  author: {
    name: 'Efficom Tech D',
    contacts: {
      email: 'cyril@lepagnot.fr',
    },
  },
}
