import useMedia from 'hooks/use-media'

const findImage = (name) => {
  let images = useMedia()
  const filter = (image) => {
    return (image['parent'] && image.parent.name == name) || image.name == name
  }

  return images.filter(filter)[0]
}

export default findImage
