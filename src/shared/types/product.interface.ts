import { IAttributeSet } from './attributeSet.interface'
import { IPrice } from './price.interface'

export interface IProduct {
  id: string
  name: string
  inStock: boolean
  gallery: string[]
  description: string
  category: string
  attributes: IAttributeSet[]
  prices: IPrice[]
  brand: string
}
