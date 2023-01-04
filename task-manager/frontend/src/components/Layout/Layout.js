import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from '@apollo/client'

import AppNavbar from 'components/AppNavbar'

import { getClient } from 'store/GraphqlQueries'

const Page = ({ children, id /*loginRequired*/ }) => {
  const pageRef = useRef()

  useEffect(() => {
    if (pageRef.current !== undefined) {
      pageRef.current.scrollIntoView()
    }
  })

  return (
    <div id={`page-${id}`}>
      <ApolloProvider client={getClient()}>{children}</ApolloProvider>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
  loginRequired: PropTypes.bool,
}

const Layout = ({ children, id, loginRequired }) => (
  <Page id={id} loginRequired={loginRequired}>
    <div id="app" className="container">
      <div className="row">
        <AppNavbar />

        {children}
      </div>
    </div>
  </Page>
)

Layout.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any,
  loginRequired: PropTypes.bool,
}

Layout.defaultProps = {
  loginRequired: false,
}

export default Layout
