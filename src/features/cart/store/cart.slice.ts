import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

import type { ICartState, ICartItem, ISelectedAttribute } from '../types'

const initialState: ICartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ICartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex === -1) {
        state.items.push(action.payload)
      } else {
        state.items[itemIndex].quantity += action.payload.quantity
      }
    },
    incrementItemQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload)

      if (item) item.quantity++
    },
    decrementItemQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload)

      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== action.payload)
        } else {
          item.quantity--
        }
      }
    },
    updateItemAttribute: (
      state,
      action: PayloadAction<{
        itemId: string
        selectedAttribute: ISelectedAttribute
      }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.itemId)

      if (item) {
        item.selectedAttributes = item.selectedAttributes.map((attribute) =>
          attribute.attributeSetId ===
          action.payload.selectedAttribute.attributeSetId
            ? action.payload.selectedAttribute
            : attribute
        )
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
