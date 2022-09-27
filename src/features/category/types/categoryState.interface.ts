import type { IProduct, Status } from '../../../shared/types'

import type { GetAllCategoriesResponse } from './responses.interface'

export interface ICategoryState {
  currentCategory: GetAllCategoriesResponse | null
  currentCategoryProductList: IProduct[] | null
  categoryList: GetAllCategoriesResponse[] | null
  displayProduct: IProduct | null
  getCategoriesStatus: Status
  getCategoryProductsStatus: Status
  getDisplayProductStatus: Status
}
