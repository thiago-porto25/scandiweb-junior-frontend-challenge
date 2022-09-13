import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { GetAllCategoriesResponse, ICategoryState } from '../types'
import { getCategoriesThunk, getCategoryProductsThunk } from './thunks'
import { IProduct } from '../../../shared/types'

const initialState: ICategoryState = {
  currentCategory: null,
  CategoryList: null,
  currentCategoryProductList: null,
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
        state.CategoryList = action.payload
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
      (state, action: PayloadAction<IProduct[]>) => {
        state.currentCategoryProductList = action.payload
        state.status = 'succeeded'
      }
    )
  },
})

export const { changeCurrentCategory } = CategorySlice.actions

export default CategorySlice.reducer
