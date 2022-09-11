import { createAsyncThunk } from '@reduxjs/toolkit'
import { CurrencyService } from '../../services/currency.service'
import { ICurrency } from '../../types'

export const getCurrenciesThunk = createAsyncThunk(
  'currency/getCurrencies',
  async () => {
    try {
      const { currencies } = await CurrencyService.getAll()

      return currencies as ICurrency[]
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }
)
