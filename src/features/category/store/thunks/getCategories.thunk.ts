import { createAsyncThunk } from '@reduxjs/toolkit'
import { CategoryService } from '../../services/category.service'
import { ICategory } from '../../types'

export const getCategoriesThunk = createAsyncThunk(
  'category/getCategories',
  async () => {
    try {
      const { categories } = await CategoryService.getAll()

      return Promise.resolve(categories as ICategory[])
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
