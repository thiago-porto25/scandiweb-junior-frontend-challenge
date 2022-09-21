import { createAsyncThunk } from '@reduxjs/toolkit'

import type { IProduct } from '../../../../shared/types'

import { CategoryService } from '../../services/category.service'

export const getCategoryProductsThunk = createAsyncThunk(
  'category/getCategoryProducts',
  async (name: string) => {
    try {
      const { category } = await CategoryService.getCategoryProducts(name)
      console.log(category.products)
      return Promise.resolve(category.products as IProduct[])
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
