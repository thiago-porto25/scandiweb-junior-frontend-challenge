import { createAsyncThunk } from '@reduxjs/toolkit'

import type { GetCategoryProductsResponse } from '../../types'
import { CategoryService } from '../../services/category.service'

export const getCategoryProductsThunk = createAsyncThunk(
  'category/getCategoryProducts',
  async (name: string) => {
    try {
      const { category } = await CategoryService.getCategoryProducts(name)

      return Promise.resolve(category.products as GetCategoryProductsResponse[])
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
