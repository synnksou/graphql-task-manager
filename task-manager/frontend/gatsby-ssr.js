import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { getClient } from 'store/GraphqlQueries'
import SSRProvider from 'react-bootstrap/SSRProvider'
import fetch from 'isomorphic-fetch'

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={getClient()}>
    <SSRProvider>{element}</SSRProvider>
  </ApolloProvider>
)
