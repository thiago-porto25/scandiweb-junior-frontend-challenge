import { IProduct } from '../../../shared/types'
import type { ICategory } from './category.interface'

export type GetAllCategoriesResponse = Pick<ICategory, 'name'>

export type GetCategoryProductsResponse = Omit<
  IProduct,
  'description' | 'category'
>
