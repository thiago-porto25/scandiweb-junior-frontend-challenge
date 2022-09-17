import type { RootState } from '../../../shared/types'

export const selectCurrentCategoryName = (state: RootState) =>
  state.category.currentCategory?.name

export const selectCategoryList = (state: RootState) =>
  state.category.CategoryList

export const selectCurrentCategoryProductList = (state: RootState) =>
  state.category.currentCategoryProductList

export const selectCategoryIsError = (state: RootState) =>
  state.category.status === 'failed'
