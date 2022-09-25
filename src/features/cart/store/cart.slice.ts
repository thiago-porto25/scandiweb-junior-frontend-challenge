import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { isEqual } from 'lodash'
import storage from 'redux-persist/lib/storage'

import type { ICartState, ICartItem, ISelectedAttribute } from '../types'

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
    updateItemAttribute: (
      state,
      action: PayloadAction<{
        cartItemId: string
        selectedItemId: string
        selectedAttributeSetId: string
      }>
    ) => {
      const cartItem = state.items.find(
        (cartItem) => cartItem.cartItemId === action.payload.cartItemId
      )

      if (cartItem) {
        const selectedAttributeSet = cartItem.attributes.find(
          (attributeSet) =>
            attributeSet.id === action.payload.selectedAttributeSetId
        )!

        const selectedAttribute = selectedAttributeSet.items.find(
          (attribute) => attribute.id === action.payload.selectedItemId
        )!

        const newAttribute: ISelectedAttribute = {
          attributeSetId: action.payload.selectedAttributeSetId,
          displayValue: selectedAttribute.displayValue,
          id: selectedAttribute.id,
          value: selectedAttribute.value,
        }

        const newSelectedAttributes = cartItem.selectedAttributes.map(
          (attribute) =>
            attribute.attributeSetId === action.payload.selectedAttributeSetId
              ? newAttribute
              : attribute
        )

        const itemWithSameSelectedAttributes = state.items.find(
          (item) =>
            cartItem.id === item.id &&
            isEqual(cartItem.selectedAttributes, newSelectedAttributes)
        )

        if (itemWithSameSelectedAttributes) {
          itemWithSameSelectedAttributes.quantity += cartItem.quantity
          state.items = state.items.filter(
            (cartItem) => cartItem.cartItemId !== action.payload.cartItemId
          )
        } else {
          cartItem.selectedAttributes = newSelectedAttributes
        }
      }
    },
  },
})

export const {
  addItemToCart,
  incrementItemQuantity,
  decrementItemQuantity,
  updateItemAttribute,
} = cartSlice.actions

export default cartSlice.reducer

export const cartPersistConfig = {
  key: 'cart',
  storage,
}
