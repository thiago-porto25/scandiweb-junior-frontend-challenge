import type { ConnectedProps } from 'react-redux'
import React from 'react'
import { connect } from 'react-redux'

import type { AppDispatch, RootState } from '../../../../shared/types'
import { Button, Modal, Typography } from '../../../../shared/components'
import { CartIcon } from '../../../../shared/svg'

import {
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalQuantity,
  selectIsCartEmpty,
} from '../../store/selectors'
import CartItem from '../CartItem'
import {
  QuantityBadge,
  CartModalContentContainer,
  ItemsList,
  TotalContainer,
  ButtonsContainer,
} from './styles'
import { selectCurrentCurrency } from '../../../currency/store/selectors'
import { Link } from 'react-router-dom'

type PropsFromRedux = ConnectedProps<typeof connector>

interface ICartModalProps extends PropsFromRedux {
  dispatch: AppDispatch
}

interface ICartModalState {
  isOpen: boolean
  isMobile: boolean
}

class CartModal extends React.Component<ICartModalProps, ICartModalState> {
  state = {
    isOpen: false,
    isMobile: false,
  }

  componentDidMount(): void {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate(
    _: Readonly<ICartModalProps>,
    prevState: Readonly<ICartModalState>
  ): void {
    if (prevState.isOpen !== this.state.isOpen) {
      const rootHtmlElement = document.querySelector('html') as HTMLElement
      rootHtmlElement.style.overflowY = this.state.isOpen ? 'hidden' : 'auto'
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleResize)
  }

  close = (): void => {
    this.setState({ isOpen: false })
  }

  handleOrder = () => {
    alert('Order placed!')
  }

  handleResize = (): void => {
    const isMobile = window.innerWidth < 620
    this.setState({ isMobile })
  }

  render(): React.ReactNode {
    const { isOpen, isMobile } = this.state
    const {
      cartItems,
      totalPrice,
      totalQuantity,
      isCartEmpty,
      currentCurrency,
    } = this.props

    return (
      <>
        <Button variant='ghost' onClick={() => this.setState({ isOpen: true })}>
          <CartIcon />

          {totalQuantity > 0 && (
            <QuantityBadge>
              <Typography textStyle='badge' as='span'>
                {totalQuantity}
              </Typography>
            </QuantityBadge>
          )}
        </Button>

        <Modal
          isOpen={isOpen}
          close={() => this.setState({ isOpen: false })}
          overlayTopMargin={isMobile ? 148 : 80}
        >
          <CartModalContentContainer>
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
                <Typography textStyle='category' fontWeight={700} as='h3'>
                  My Bag,{' '}
                  <Typography textStyle='category' as='span'>
                    {totalQuantity} item{totalQuantity > 1 ? 's' : ''}
                  </Typography>
                </Typography>

                <ItemsList>
                  {cartItems.map((item, i) => (
                    <li key={`${item.id}-${i}`}>
                      <CartItem item={item} isSmall />
                    </li>
                  ))}
                </ItemsList>

                <TotalContainer>
                  <Typography textStyle='totalSmall' as='h4'>
                    Total
                  </Typography>
                  <Typography textStyle='priceSmall' fontWeight={700} as='h4'>
                    {currentCurrency!.symbol + totalPrice.toFixed(2)}
                  </Typography>
                </TotalContainer>

                <ButtonsContainer>
                  <Link to='/cart'>
                    <Button variant='secondary' onClick={this.close}>
                      View Bag
                    </Button>
                  </Link>
                  <Button variant='primary' onClick={this.handleOrder}>
                    Check Out
                  </Button>
                </ButtonsContainer>
              </>
            )}
          </CartModalContentContainer>
        </Modal>
      </>
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

export default connector(CartModal)
