import React from 'react'
import Layout from 'components/Layout/Layout'
import Content from 'components/SignUp'

const Page = () => (
  <Layout id="sign-up" loginRequired={false}>
    <Content />
  </Layout>
)

export default Page
export { Head } from 'components/Layout/Head'
