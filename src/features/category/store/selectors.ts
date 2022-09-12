import type { RootState } from '../../../shared/types'

export const selectCurrentCategory = (state: RootState) =>
  state.category.currentCategory

export const selectCategoryList = (state: RootState) =>
  state.category.CategoryList

export const selectCategoryIsError = (state: RootState) =>
  state.category.status === 'failed'
