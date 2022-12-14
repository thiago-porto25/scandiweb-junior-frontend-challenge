import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

import type { ICurrency, ICurrencyState } from '../types'
import { getCurrenciesThunk } from './thunks'

const initialState: ICurrencyState = {
  currentCurrency: { label: 'USD', symbol: '$' },
  currencyList: null,
  status: 'idle',
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrentCurrency: (state, action: PayloadAction<ICurrency>) => {
      state.currentCurrency = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrenciesThunk.pending, (state) => {
      state.status = 'pending'
    })

    builder.addCase(getCurrenciesThunk.rejected, (state) => {
      state.status = 'failed'
    })

    builder.addCase(
      getCurrenciesThunk.fulfilled,
      (state, action: PayloadAction<ICurrency[]>) => {
        state.currencyList = action.payload
        state.status = 'succeeded'
      }
    )
  },
})

export const { changeCurrentCurrency } = currencySlice.actions

export default currencySlice.reducer

export const currencyPersistConfig = {
  key: 'currency',
  storage,
  blacklist: ['status', 'currencyList'],
}
