import { createAsyncThunk } from '@reduxjs/toolkit'

import type { GetAllCategoriesResponse } from '../../types'

import { CategoryService } from '../../services/category.service'

export const getCategoriesThunk = createAsyncThunk(
  'category/getCategories',
  async () => {
    try {
      const { categories } = await CategoryService.getAll()

      return Promise.resolve(categories as GetAllCategoriesResponse[])
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
