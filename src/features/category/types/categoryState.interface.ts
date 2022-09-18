import type { IProduct, Status } from '../../../shared/types'

import type {
  GetAllCategoriesResponse,
  GetCategoryProductsResponse,
} from './responses.interface'

export interface ICategoryState {
  status: Status
  currentCategory: GetAllCategoriesResponse | null
  currentCategoryProductList: GetCategoryProductsResponse[] | null
  categoryList: GetAllCategoriesResponse[] | null
  displayProduct: IProduct | null
}
