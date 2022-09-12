import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { ICurrency, ICurrencyState } from '../types'
import { getCurrenciesThunk } from './thunks/getCurrencies.thunk'

const initialState: ICurrencyState = {
  currentCurrency: null,
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
