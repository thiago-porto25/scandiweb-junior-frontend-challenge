import { Query } from '@tilework/opus'

export const getAllCurrenciesQuery = new Query('currencies', true).addFieldList(
  ['label', 'symbol']
)
