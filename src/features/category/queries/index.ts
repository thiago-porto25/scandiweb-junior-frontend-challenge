import { Field, Query } from '@tilework/opus'

export const getAllCategoriesQuery = new Query('categories', true)
  .addField(
    new Field('products', true)
      .addFieldList(['brand', 'id', 'name', 'inStock', 'gallery'])
      .addField(
        new Field('attributes')
          .addFieldList(['id', 'name', 'type'])
          .addField(
            new Field('items').addFieldList(['id', 'value', 'displayValue'])
          )
      )
      .addField(
        new Field('prices')
          .addField(new Field('currency').addField('label'))
          .addField('amount')
      )
  )
  .addField('name')
