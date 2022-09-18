import { Query, Field } from '@tilework/opus'

export const getAllCategoriesQuery = new Query('categories', true).addField(
  'name'
)

export const getCategoryProductsQuery = (name: string) =>
  new Query('category')
    .addArgument('input', 'CategoryInput', { title: name })
    .addField(
      new Field('products', true)
        .addFieldList(['brand', 'id', 'name', 'inStock', 'gallery'])
        .addField(
          new Field('attributes', true)
            .addFieldList(['id', 'name', 'type'])
            .addField(
              new Field('items', true).addFieldList([
                'id',
                'value',
                'displayValue',
              ])
            )
        )
        .addField(
          new Field('prices', true)
            .addField(new Field('currency').addFieldList(['label', 'symbol']))
            .addField('amount')
        )
    )

export const getDisplayProductQuery = (id: string) =>
  new Query('product')
    .addArgument('id', 'String!', id)
    .addFieldList([
      'brand',
      'id',
      'name',
      'inStock',
      'gallery',
      'description',
      'category',
    ])
    .addField(
      new Field('attributes', true)
        .addFieldList(['id', 'name', 'type'])
        .addField(
          new Field('items', true).addFieldList(['id', 'value', 'displayValue'])
        )
    )
    .addField(
      new Field('prices', true)
        .addField(new Field('currency').addFieldList(['label', 'symbol']))
        .addField('amount')
    )
