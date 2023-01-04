import React from 'react'
import Layout from 'components/Layout/Layout'
import Content from 'components/SignIn'

const Page = () => (
  <Layout id="sign-in" loginRequired={false}>
    <Content />
  </Layout>
)

export default Page
export { Head } from 'components/Layout/Head'
