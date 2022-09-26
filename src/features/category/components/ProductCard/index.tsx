import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import type { AppDispatch, IProduct } from '../../../../shared/types'
import { Button, Typography, Toast } from '../../../../shared/components'
import { CartIcon } from '../../../../shared/svg'

import type { ICurrency } from '../../../currency/types'
import { priceInCurrentCurrency } from '../../../currency/helpers'

import type { ISelectedAttribute } from '../../../cart/types'
import { addItemToCart } from '../../../cart/store/cart.slice'
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardImageContainer,
  ProductCardInfoContainer,
} from './styles'

interface IProductCardProps {
  product: IProduct
  currentCurrency: ICurrency | null
  dispatch: AppDispatch
}

interface IProductCardState {
  isToastOpen: boolean
}

class ProductCard extends React.Component<
  IProductCardProps,
  IProductCardState
> {
  state = {
    isToastOpen: false,
  }

  handleAddToCart = (): void => {
    this.setState({ isToastOpen: true })

    const selectedAttributes: ISelectedAttribute[] =
      this.props.product.attributes.map((attribute) => ({
        attributeSetId: attribute.id,
        id: attribute.items[0].id,
        displayValue: attribute.items[0].displayValue,
        value: attribute.items[0].value,
      }))

    this.props.dispatch(
      addItemToCart({
        ...this.props.product,
        quantity: 1,
        selectedAttributes,
      })
    )
  }

  render(): React.ReactNode {
    const { product, currentCurrency } = this.props
    const { isToastOpen } = this.state

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

        <Toast
          text='Item added to bag!'
          duration={3000}
          isOpen={isToastOpen}
          close={() => this.setState({ isToastOpen: false })}
        />
      </ProductCardContainer>
    )
  }
}

export default connect()(ProductCard)
