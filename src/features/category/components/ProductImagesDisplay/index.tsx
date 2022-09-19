import React from 'react'

import {
  FocusedImage,
  ImagesList,
  ProductImagesDisplayContainer,
  SmallImage,
  FocusedImageContainer,
} from './styles'

interface IProductImagesDisplayProps {
  gallery: string[]
  name: string
}

class ProductImagesDisplay extends React.Component<IProductImagesDisplayProps> {
  state = {
    selectedImage: 0,
  }

  handleImageClick = (index: number) => {
    this.setState({ selectedImage: index })
  }

  render(): React.ReactNode {
    const { gallery, name } = this.props
    const { selectedImage } = this.state

    return (
      <ProductImagesDisplayContainer>
        <ImagesList>
          {gallery.map((image, i) => (
            <li
              key={`${image.slice(0, 8)}-${i}`}
              onMouseEnter={() => this.handleImageClick(i)}
            >
              <SmallImage src={image} alt={name} />
            </li>
          ))}
        </ImagesList>

        <FocusedImageContainer>
          <FocusedImage
            key={`${gallery[selectedImage].slice(0, 8)}-${selectedImage}`}
            src={gallery[selectedImage]}
            alt={name}
          />
        </FocusedImageContainer>
      </ProductImagesDisplayContainer>
    )
  }
}

export default ProductImagesDisplay
