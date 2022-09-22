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
import { QuantityBadge } from './styles'

type PropsFromRedux = ConnectedProps<typeof connector>

interface ICartModalProps extends PropsFromRedux {
  dispatch: AppDispatch
}

interface ICartModalState {
  isOpen: boolean
}

class CartModal extends React.Component<ICartModalProps, ICartModalState> {
  state = {
    isOpen: false,
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

  render(): React.ReactNode {
    const { isOpen } = this.state
    const { cartItems, totalPrice, totalQuantity, isCartEmpty } = this.props

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
          overlayTopMargin={80}
        >
          {/* TODO: Add CartModalContent */}
          <div
            style={{
              position: 'absolute',
              right: '40px',
              backgroundColor: 'black',
              color: 'red',
              width: '200px',
              height: '500px',
            }}
          ></div>
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
})
const connector = connect(mapStateToProps)

export default connector(CartModal)
