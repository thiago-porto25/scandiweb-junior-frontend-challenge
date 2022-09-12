import { createAsyncThunk } from '@reduxjs/toolkit'
import { CurrencyService } from '../../services/currency.service'
import { ICurrency } from '../../types'

export const getCurrenciesThunk = createAsyncThunk(
  'currency/getCurrencies',
  async () => {
    try {
      const { currencies } = await CurrencyService.getAll()

      return Promise.resolve(currencies as ICurrency[])
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
