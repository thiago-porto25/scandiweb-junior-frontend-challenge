import { client } from '@tilework/opus'

import { getAllCategoriesQuery, getCategoryProductsQuery } from '../queries'

export class CategoryService {
  public static async getAll() {
    return await client.post(getAllCategoriesQuery)
  }

  public static async getCategoryProducts(name: string) {
    return await client.post(getCategoryProductsQuery(name))
  }
}
