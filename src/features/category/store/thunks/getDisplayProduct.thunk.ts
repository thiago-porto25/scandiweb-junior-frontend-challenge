import { createAsyncThunk } from '@reduxjs/toolkit'

import type { IProduct } from '../../../../shared/types'

import { CategoryService } from '../../services/category.service'

export const getDisplayProductThunk = createAsyncThunk(
  'category/getDisplayProduct',
  async (id: string) => {
    try {
      const { product } = await CategoryService.getDisplayProduct(id)

      return Promise.resolve(product as IProduct)
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
