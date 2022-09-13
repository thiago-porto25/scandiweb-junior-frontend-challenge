import { createAsyncThunk } from '@reduxjs/toolkit'

import { CategoryService } from '../../services/category.service'
import { IProduct } from '../../../../shared/types'

export const getCategoryProductsThunk = createAsyncThunk(
  'category/getCategoryProducts',
  async (name: string) => {
    try {
      const { category } = await CategoryService.getCategoryProducts(name)

      return Promise.resolve(category.products as any as IProduct[])
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
