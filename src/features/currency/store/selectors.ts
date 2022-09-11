import type { RootState } from '../../../shared/types'

export const selectCurrentCurrency = (state: RootState) =>
  state.currency.currentCurrency

export const selectCurrencyList = (state: RootState) =>
  state.currency.currencyList
