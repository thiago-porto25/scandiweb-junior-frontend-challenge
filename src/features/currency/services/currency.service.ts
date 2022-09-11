import { Query, client } from '@tilework/opus'
import { ICurrency } from '../types'

export class CurrencyService {
  private static currenciesQuery = new Query('currencies', true).addFieldList([
    'label',
    'symbol',
  ])

  public static async getAll() {
    return await client.post<'currencies', ICurrency, boolean>(
      this.currenciesQuery
    )
  }
}
