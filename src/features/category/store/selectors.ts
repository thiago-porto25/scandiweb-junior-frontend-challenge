import type { RootState } from '../../../shared/types'

export const selectCurrentCategoryName = (state: RootState) =>
  state.category.currentCategory?.name

export const selectCategoryList = (state: RootState) =>
  state.category.categoryList

export const selectCurrentCategoryProductList = (state: RootState) => {
  const currentCategoryName = state.category.currentCategory?.name

  return /all/i.test(currentCategoryName!)
    ? state.category.currentCategoryProductList
    : state.category.currentCategoryProductList?.filter(
        (product) => product.category === currentCategoryName
      )
}

export const selectCategoryIsError = (state: RootState) =>
  state.category.status === 'failed'

export const selectDisplayProduct = (state: RootState) =>
  state.category.displayProduct

export const selectCategoryStatus = (state: RootState) => state.category.status
