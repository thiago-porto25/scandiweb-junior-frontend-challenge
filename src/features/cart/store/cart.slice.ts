import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { isEqual } from 'lodash'
import storage from 'redux-persist/lib/storage'

import type { ICartState, ICartItem } from '../types'

const initialState: ICartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<Omit<ICartItem, 'cartItemId'>>
    ) => {
      const cartItemIndex = state.items.findIndex(
        (cartItem) =>
          cartItem.id === action.payload.id &&
          isEqual(
            cartItem.selectedAttributes,
            action.payload.selectedAttributes
          )
      )

      if (cartItemIndex === -1) {
        state.items.push({
          ...action.payload,
          cartItemId: uuid(),
        })
      } else {
        state.items[cartItemIndex].quantity += action.payload.quantity
      }
    },
    incrementItemQuantity: (state, action: PayloadAction<string>) => {
      const cartItem = state.items.find(
        (cartItem) => cartItem.cartItemId === action.payload
      )

      if (cartItem) cartItem.quantity++
    },
    decrementItemQuantity: (state, action: PayloadAction<string>) => {
      const cartItem = state.items.find(
        (cartItem) => cartItem.cartItemId === action.payload
      )

      if (cartItem) {
        if (cartItem.quantity === 1) {
          state.items = state.items.filter(
            (cartItem) => cartItem.cartItemId !== action.payload
          )
        } else {
          cartItem.quantity--
        }
      }
    },
  },
})

export const { addItemToCart, incrementItemQuantity, decrementItemQuantity } =
  cartSlice.actions

export default cartSlice.reducer

export const cartPersistConfig = {
  key: 'cart',
  storage,
}
