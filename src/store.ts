import { configureStore } from '@reduxjs/toolkit'

import currencyReducer from './features/currency/store/currency.slice'
// import cartReducer from './features/cart/store/cart.slice'
// import categoryReducer from './features/category/store/category.slice'

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    // cart: cartReducer,
    // category: categoryReducer,
  },
})
