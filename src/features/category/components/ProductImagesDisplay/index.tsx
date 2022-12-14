import React from 'react'

import { Button } from '../../../../shared/components'

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
  brand: string
}

interface IProductImagesDisplayState {
  selectedImage: number
}

class ProductImagesDisplay extends React.Component<
  IProductImagesDisplayProps,
  IProductImagesDisplayState
> {
  state = {
    selectedImage: 0,
  }

  handleImageClick = (index: number) => {
    this.setState({ selectedImage: index })
  }

  render(): React.ReactNode {
    const { gallery, name, brand } = this.props
    const { selectedImage } = this.state

    return (
      <ProductImagesDisplayContainer>
        <ImagesList>
          {gallery.map((image, i) => (
            <li key={`${image.slice(0, 8)}-${i}`}>
              <Button
                variant='ghost'
                onMouseEnter={() => this.handleImageClick(i)}
                onClick={() => this.handleImageClick(i)}
              >
                <SmallImage src={image} alt={name} />
              </Button>
            </li>
          ))}
        </ImagesList>

        <FocusedImageContainer>
          <FocusedImage
            key={`${gallery[selectedImage].slice(0, 8)}-${selectedImage}`}
            src={gallery[selectedImage]}
            alt={`${brand} ${name}`}
          />
        </FocusedImageContainer>
      </ProductImagesDisplayContainer>
    )
  }
}

export default ProductImagesDisplay
