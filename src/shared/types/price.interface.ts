import { ICurrency } from '../../features/currency/types'

export interface IPrice {
  currency: ICurrency
  amount: number
}
