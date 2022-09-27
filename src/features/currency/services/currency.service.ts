import { client } from '@tilework/opus'

import type { ICurrency } from '../types'

import { getAllCurrenciesQuery } from '../queries'

export class CurrencyService {
  public static async getAll() {
    return await client.post<'currencies', ICurrency, boolean>(
      getAllCurrenciesQuery
    )
  }
}
