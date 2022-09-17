import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from '../../../../shared/components'

import type { ICurrency } from '../../../currency/types'
import { priceInCurrentCurrency } from '../../../currency/helpers'

import type { GetCategoryProductsResponse } from '../../types'
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardImageContainer,
  ProductCardInfoContainer,
} from './styles'
import { CartIcon } from '../../../../shared/svg'

interface IProductCardProps {
  product: GetCategoryProductsResponse
  currentCurrency: ICurrency | null
}

class ProductCard extends React.Component<IProductCardProps> {
  handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    console.log('Add to cart')
    // TODO: dispatch Add to cart action
  }

  render(): React.ReactNode {
    const { product, currentCurrency } = this.props

    return (
      <ProductCardContainer isOutOfStock={!product.inStock}>
        <div className='add-to-cart-btn-container'>
          <Button round onClick={this.handleAddToCart}>
            <CartIcon />
          </Button>
        </div>

        <Link to={`/product/${product.id}`}>
          <ProductCardImageContainer isOutOfStock={!product.inStock}>
            <ProductCardImage src={product.gallery[0]} />
          </ProductCardImageContainer>

          <ProductCardInfoContainer>
            <Typography textStyle='productTitleRegular' as='h2'>
              {product.brand} {product.name}
            </Typography>

            <Typography textStyle='priceRegular' as='h3'>
              {priceInCurrentCurrency(product.prices, currentCurrency)}
            </Typography>
          </ProductCardInfoContainer>
        </Link>
      </ProductCardContainer>
    )
  }
}

export default ProductCard
