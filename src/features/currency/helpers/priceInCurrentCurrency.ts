import type { IProduct } from '../../../shared/types'
import type { ICurrency } from '../types'

export const priceInCurrentCurrency = (
  prices: IProduct['prices'],
  currentCurrency: ICurrency | null
): string => {
  const price = prices.find(
    (price) => price.currency.label === currentCurrency?.label
  )

  return price
    ? `${price.currency.symbol}${price.amount.toFixed(2)}`
    : 'No Price'
}
