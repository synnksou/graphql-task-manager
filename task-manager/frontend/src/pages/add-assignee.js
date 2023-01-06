import React from 'react'
import Layout from 'components/Layout/Layout'
import Content from 'components/AddAssignee'

const Page = ({ location, params }) => {
  return (
    <Layout id="add-assignee" loginRequired={true}>
      <Content id={params?.id} />
    </Layout>
  )
}

export default Page
export { Head } from 'components/Layout/Head'
