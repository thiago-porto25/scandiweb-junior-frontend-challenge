import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import currencyReducer, {
  currencyPersistConfig,
} from './features/currency/store/currency.slice'
import categoryReducer from './features/category/store/category.slice'

export const rootReducer = combineReducers({
  currency: persistReducer(currencyPersistConfig, currencyReducer),
  category: categoryReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
