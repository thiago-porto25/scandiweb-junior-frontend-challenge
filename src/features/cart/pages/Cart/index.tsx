import type { ConnectedProps } from 'react-redux'
import React from 'react'
import { connect } from 'react-redux'

import type { AppDispatch, RootState } from '../../../../shared/types'
import { Button, Typography } from '../../../../shared/components'

import { selectCurrentCurrency } from '../../../currency/store/selectors'

import {
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalQuantity,
  selectIsCartEmpty,
} from '../../store/selectors'
import { CartItem } from '../../components'
import {
  CartPageContainer,
  TotalContainer,
  ButtonContainer,
  TotalGridItem,
  ItemsList,
  Divider,
} from './styles'

type PropsFromRedux = ConnectedProps<typeof connector>

interface ICartProps extends PropsFromRedux {
  dispatch: AppDispatch
}

class CartPage extends React.Component<ICartProps> {
  handleOrder = () => {
    alert('Order placed!')
  }

  render(): React.ReactNode {
    const { totalPrice, currentCurrency, isCartEmpty, totalQuantity } =
      this.props

    return (
      <CartPageContainer>
        <Typography textStyle='cartHeading' as='h1'>
          CART
        </Typography>

        {isCartEmpty ? (
          <Typography
            textStyle='productTitleRegular'
            textAlign='center'
            as='h1'
          >
            Your Bag is empty
          </Typography>
        ) : (
          <>
            <ItemsList>
              {this.props.cartItems.map((item, i) => (
                <li key={`${item.id}-${i}`}>
                  <Divider />
                  <CartItem item={item} />
                  {i === this.props.cartItems.length - 1 && <Divider />}
                </li>
              ))}
            </ItemsList>

            <TotalContainer>
              <TotalGridItem>
                <Typography textStyle='priceLarge' fontWeight={400} as='h4'>
                  Tax 21%:
                </Typography>

                <Typography textStyle='priceLarge' as='p'>
                  {currentCurrency!.symbol + (totalPrice * 0.21).toFixed(2)}
                </Typography>
              </TotalGridItem>

              <TotalGridItem>
                <Typography textStyle='priceLarge' fontWeight={400} as='h4'>
                  Quantity:
                </Typography>

                <Typography textStyle='priceLarge' as='p'>
                  {totalQuantity}
                </Typography>
              </TotalGridItem>

              <TotalGridItem>
                <Typography textStyle='priceLarge' fontWeight={500} as='h3'>
                  Total:
                </Typography>

                <Typography textStyle='priceLarge' as='p'>
                  {currentCurrency!.symbol + totalPrice}
                </Typography>
              </TotalGridItem>

              <ButtonContainer>
                <Button onClick={this.handleOrder}>Order</Button>
              </ButtonContainer>
            </TotalContainer>
          </>
        )}
      </CartPageContainer>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  isCartEmpty: selectIsCartEmpty(state),
  cartItems: selectCartItems(state),
  totalQuantity: selectCartTotalQuantity(state),
  totalPrice: selectCartTotalPrice(state),
  currentCurrency: selectCurrentCurrency(state),
})
const connector = connect(mapStateToProps)

export default connector(CartPage)
