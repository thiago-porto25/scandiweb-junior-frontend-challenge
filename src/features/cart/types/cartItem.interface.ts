import type { IProduct } from '../../../shared/types'

import type { ISelectedAttribute } from './selectedAttribute.interface'

export interface ICartItem extends IProduct {
  quantity: number
  selectedAttributes: ISelectedAttribute[]
}
