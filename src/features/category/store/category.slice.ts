import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { IProduct } from '../../../shared/types'

import type {
  GetAllCategoriesResponse,
  GetCategoryProductsResponse,
  ICategoryState,
} from '../types'
import {
  getCategoriesThunk,
  getCategoryProductsThunk,
  getDisplayProductThunk,
} from './thunks'

const initialState: ICategoryState = {
  currentCategory: null,
  categoryList: null,
  currentCategoryProductList: null,
  displayProduct: null,
  status: 'idle',
}

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCurrentCategory: (
      state,
      action: PayloadAction<GetAllCategoriesResponse>
    ) => {
      state.currentCategory = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoriesThunk.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(getCategoriesThunk.rejected, (state) => {
      state.status = 'failed'
    })
    builder.addCase(
      getCategoriesThunk.fulfilled,
      (state, action: PayloadAction<GetAllCategoriesResponse[]>) => {
        state.categoryList = action.payload
        state.currentCategory = action.payload[0]
        state.status = 'succeeded'
      }
    )

    builder.addCase(getCategoryProductsThunk.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(getCategoryProductsThunk.rejected, (state) => {
      state.status = 'failed'
    })
    builder.addCase(
      getCategoryProductsThunk.fulfilled,
      (state, action: PayloadAction<GetCategoryProductsResponse[]>) => {
        state.currentCategoryProductList = action.payload
        state.status = 'succeeded'
      }
    )

    builder.addCase(getDisplayProductThunk.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(getDisplayProductThunk.rejected, (state) => {
      state.status = 'failed'
    })
    builder.addCase(
      getDisplayProductThunk.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        state.status = 'succeeded'
        state.displayProduct = action.payload
      }
    )
  },
})

export const { changeCurrentCategory } = CategorySlice.actions

export default CategorySlice.reducer
