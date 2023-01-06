import React from 'react'
import Layout from 'components/Layout/Layout'
import Content from 'components/AddTask'

const Page = () => (
  <Layout id="add-task" loginRequired={true}>
    <Content />
  </Layout>
)

export default Page
export { Head } from 'components/Layout/Head'
