import React from 'react'
import Layout from 'components/Layout/Layout'
import Content from 'components/LogOut'

const Page = () => (
  <Layout id="logout" loginRequired={false}>
    <Content />
  </Layout>
)

export default Page
export { Head } from 'components/Layout/Head'
