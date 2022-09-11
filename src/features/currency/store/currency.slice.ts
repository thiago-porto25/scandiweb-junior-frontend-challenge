import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { ICurrency, ICurrencyState } from '../types'
import { getCurrenciesThunk } from './thunks/getCurrencies.thunk'

const initialState: ICurrencyState = {
  currentCurrency: null,
  currencyList: null,
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
    builder.addCase(
      getCurrenciesThunk.fulfilled,
      (state, action: PayloadAction<ICurrency[]>) => {
        state.currencyList = action.payload
      }
    )
  },
})

export const { changeCurrentCurrency } = currencySlice.actions

export default currencySlice.reducer
