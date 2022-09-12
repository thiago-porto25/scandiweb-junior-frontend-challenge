import type { Status } from '../../../shared/types'
import type { ICurrency } from './currency.interface'

export interface ICurrencyState {
  currentCurrency: ICurrency | null
  currencyList: ICurrency[] | null
  status: Status
}
