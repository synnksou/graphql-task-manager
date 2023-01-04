import React from 'react'
import useSiteMetadata from 'hooks/use-site-metadata'

const Component = () => {
  const { title, subtitle } = useSiteMetadata()

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={subtitle} />
    </>
  )
}

export const Head = Component
