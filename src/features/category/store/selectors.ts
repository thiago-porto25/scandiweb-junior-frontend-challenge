import type { RootState } from '../../../shared/types'

export const selectCurrentCategoryName = (state: RootState) =>
  state.category.currentCategory?.name

export const selectCategoryList = (state: RootState) =>
  state.category.categoryList

export const selectCurrentCategoryProductList = (state: RootState) =>
  state.category.currentCategoryProductList

export const selectCategoryIsError = (state: RootState) =>
  state.category.getCategoriesStatus === 'failed' ||
  state.category.getDisplayProductStatus === 'failed' ||
  state.category.getCategoryProductsStatus === 'failed'

export const selectDisplayProduct = (state: RootState) =>
  state.category.displayProduct

export const selectGetCategoriesStatus = (state: RootState) =>
  state.category.getCategoriesStatus

export const selectGetDisplayProductStatus = (state: RootState) =>
  state.category.getDisplayProductStatus

export const selectGetCategoryProductsStatus = (state: RootState) =>
  state.category.getCategoryProductsStatus
