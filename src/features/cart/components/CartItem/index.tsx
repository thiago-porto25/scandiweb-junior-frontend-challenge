import type { ConnectedProps } from 'react-redux'
import React from 'react'
import { connect } from 'react-redux'

import type { AppDispatch, RootState } from '../../../../shared/types'
import {
  AttributeItemsList,
  Button,
  Typography,
} from '../../../../shared/components'

import { selectCurrentCurrency } from '../../../currency/store/selectors'
import { priceInCurrentCurrency } from '../../../currency/helpers'

import type { ICartItem } from '../../types'
import {
  AttributeList,
  ButtonContainer,
  CartItemContainer,
  LeftContainer,
  RightContainer,
  QuantityContainer,
  Plus,
  Minus,
} from './styles'
import {
  decrementItemQuantity,
  incrementItemQuantity,
  updateItemAttribute,
} from '../../store/cart.slice'
import ImageGallery from '../ImageGallery'

type PropsFromRedux = ConnectedProps<typeof connector>

interface ICartItemProps extends PropsFromRedux {
  item: ICartItem
  isSmall?: boolean
  dispatch: AppDispatch
}

class CartItem extends React.Component<ICartItemProps> {
  handleAttributeSelect = (attributeId: string, itemId: string): void => {
    this.props.dispatch(
      updateItemAttribute({
        cartItemId: this.props.item.id,
        selectedItemId: itemId,
        selectedAttributeSetId: attributeId,
      })
    )
  }

  handleIncrement = (): void => {
    this.props.dispatch(incrementItemQuantity(this.props.item.id))
  }

  handleDecrement = (): void => {
    this.props.dispatch(decrementItemQuantity(this.props.item.id))
  }

  render(): React.ReactNode {
    const { item, currentCurrency, isSmall } = this.props

    return (
      <CartItemContainer isSmall={isSmall}>
        <LeftContainer>
          <Typography
            textStyle={isSmall ? 'productTitleSmall' : 'brandName'}
            as='h2'
          >
            {item.brand} <br />
            <Typography
              textStyle={isSmall ? 'productTitleSmall' : 'productTitleLarge'}
              as='span'
            >
              {item.name}
            </Typography>
          </Typography>

          <Typography textStyle={isSmall ? 'priceSmall' : 'priceLarge'} as='p'>
            {priceInCurrentCurrency(item.prices, currentCurrency)}
          </Typography>

          <AttributeList isSmall={isSmall}>
            {item.attributes.map((attribute) => (
              <li key={attribute.id}>
                <AttributeItemsList
                  attribute={attribute}
                  selectedId={
                    item.selectedAttributes.find(
                      (selectedAttribute) =>
                        selectedAttribute.attributeSetId === attribute.id
                    )?.id || ''
                  }
                  onSelect={this.handleAttributeSelect}
                  isSmall={isSmall}
                />
              </li>
            ))}
          </AttributeList>
        </LeftContainer>

        <RightContainer isSmall={isSmall}>
          <QuantityContainer>
            <ButtonContainer isSmall={isSmall}>
              <Button onClick={this.handleIncrement} variant='secondary'>
                <Plus isSmall={isSmall} />
              </Button>
            </ButtonContainer>

            <Typography textStyle={isSmall ? 'priceSmall' : 'quantityRegular'}>
              {item.quantity}
            </Typography>

            <ButtonContainer isSmall={isSmall}>
              <Button onClick={this.handleDecrement} variant='secondary'>
                <Minus isSmall={isSmall} />
              </Button>
            </ButtonContainer>
          </QuantityContainer>

          <ImageGallery
            gallery={item.gallery}
            brand={item.brand}
            name={item.name}
            isSmall={isSmall}
          />
        </RightContainer>
      </CartItemContainer>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  currentCurrency: selectCurrentCurrency(state),
})
const connector = connect(mapStateToProps)

export default connector(CartItem)
