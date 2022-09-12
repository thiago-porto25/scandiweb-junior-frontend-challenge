import type { Status } from '../../../shared/types'

import type { ICategory } from './category.interface'

export interface ICategoryState {
  status: Status
  currentCategory: ICategory | null
  CategoryList: ICategory[] | null
}
