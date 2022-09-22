import React from 'react'

import type { ICartItem } from '../../types'

interface ICartItemProps {
  item: ICartItem
  isSmall?: boolean
}

class CartItem extends React.Component<ICartItemProps> {
  render(): React.ReactNode {
    const { item } = this.props

    return (
      <div>
        <div>{item.name}</div>
        <div>{item.quantity}</div>
      </div>
    )
  }
}

export default CartItem
