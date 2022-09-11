import { ICurrency } from './currency.interface'

export interface ICurrencyState {
  currentCurrency: ICurrency | null
  currencyList: ICurrency[] | null
}
