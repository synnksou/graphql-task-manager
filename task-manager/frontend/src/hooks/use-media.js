import { useStaticQuery, graphql } from 'gatsby'
import { each, concat } from 'lodash'

const useMedia = () => {
  const { images, svgs } = useStaticQuery(
    graphql`
      query GetAllMedias {
        images: allImageSharp {
          nodes {
            parent {
              ... on File {
                name: base
              }
            }
            gatsbyImageData(
              formats: [AUTO, WEBP]
              breakpoints: [300, 480, 750, 1080, 1366, 1920]
            )
          }
        }
        svgs: allFile(filter: { extension: { eq: "svg" } }) {
          nodes {
            src: publicURL
            name: base
          }
        }
      }
    `,
  )

  if (typeof images == 'undefined') {
    return []
  }

  if (typeof svgs == 'undefined') {
    return []
  }

  each(svgs.nodes, (node) => {
    node['aspectRatio'] = 1
    node['srcSet'] = ''
    node['sizes'] = ''
    node['images'] = {}
  })

  return concat(images.nodes, svgs.nodes)
}

export default useMedia
