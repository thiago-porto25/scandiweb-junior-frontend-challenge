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
  PersistConfig,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import type { RootState } from './shared/types'

import currencyReducer, {
  currencyPersistConfig,
} from './features/currency/store/currency.slice'

export const rootReducer = combineReducers({
  currency: persistReducer(currencyPersistConfig, currencyReducer),
})

const rootPersistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
}

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
