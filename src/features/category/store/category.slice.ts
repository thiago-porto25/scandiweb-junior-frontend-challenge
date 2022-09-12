import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { ICategory, ICategoryState } from '../types'
import { getCategoriesThunk } from './thunks'

const initialState: ICategoryState = {
  currentCategory: null,
  CategoryList: null,
  status: 'idle',
}

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCurrentCategory: (state, action: PayloadAction<ICategory>) => {
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
      (state, action: PayloadAction<ICategory[]>) => {
        state.CategoryList = action.payload
        state.currentCategory = action.payload[0]
        state.status = 'succeeded'
      }
    )
  },
})

export const { changeCurrentCategory } = CategorySlice.actions

export default CategorySlice.reducer
