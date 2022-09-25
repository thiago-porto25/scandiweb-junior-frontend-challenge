import type { RootState } from '../../../shared/types'

export const selectIsCartEmpty = (state: RootState) =>
  state.cart.items.length === 0

export const selectCartItems = (state: RootState) => state.cart.items

export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.items.reduce((acc, item) => acc + item.quantity, 0)

export const selectCartTotalPrice = (state: RootState) => {
  const currentCurrency = state.currency.currentCurrency

  const total = state.cart.items.reduce((acc, item) => {
    const currentCurrencyIndex = item.prices.findIndex(
      (price) => price.currency.label === currentCurrency?.label
    )

    return acc + item.quantity * item.prices[currentCurrencyIndex].amount
  }, 0)

  return {
    taxAmount: currentCurrency!.symbol + (total * 0.21).toFixed(2),
    formattedAmount: currentCurrency?.symbol + total.toFixed(2),
  }
}
