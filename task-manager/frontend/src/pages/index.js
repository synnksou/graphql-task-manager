import React from 'react'
import Layout from 'components/Layout/Layout'
import Content from 'components/Tasks'

const Home = () => (
  <Layout id="home" loginRequired={true}>
    <Content />
  </Layout>
)

export default Home
export { Head } from 'components/Layout/Head'
