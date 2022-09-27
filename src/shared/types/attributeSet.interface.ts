import { IAttribute } from './attribute.interface'

export interface IAttributeSet {
  id: string
  name: string
  type: string
  items: IAttribute[]
}
