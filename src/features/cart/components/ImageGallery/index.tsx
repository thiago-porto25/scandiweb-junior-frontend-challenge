import React from 'react'

import {
  GalleryButton,
  GalleryButtonsContainer,
  ImageGalleryContainer,
} from './styles'

interface IImageGalleryProps {
  gallery: string[]
  brand: string
  name: string
  isSmall?: boolean
}

interface IImageGalleryState {
  selectedImage: number
}

class ImageGallery extends React.Component<
  IImageGalleryProps,
  IImageGalleryState
> {
  state = {
    selectedImage: 0,
  }

  handleNextImage = (): void => {
    this.setState({
      selectedImage:
        this.state.selectedImage === this.props.gallery.length - 1
          ? 0
          : this.state.selectedImage + 1,
    })
  }

  handlePreviousImage = (): void => {
    this.setState({
      selectedImage:
        this.state.selectedImage === 0
          ? this.props.gallery.length - 1
          : this.state.selectedImage - 1,
    })
  }

  render(): React.ReactNode {
    const { gallery, name, brand, isSmall } = this.props
    const { selectedImage } = this.state

    return (
      <ImageGalleryContainer isSmall={isSmall}>
        <img src={gallery[selectedImage]} alt={`${brand} ${name}`} />

        {gallery.length > 1 && !isSmall && (
          <GalleryButtonsContainer>
            <GalleryButton onClick={this.handlePreviousImage}>
              &lt;
            </GalleryButton>
            <GalleryButton onClick={this.handleNextImage}>&gt;</GalleryButton>
          </GalleryButtonsContainer>
        )}
      </ImageGalleryContainer>
    )
  }
}

export default ImageGallery
