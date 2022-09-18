import { client } from '@tilework/opus'

import {
  getAllCategoriesQuery,
  getCategoryProductsQuery,
  getDisplayProductQuery,
} from '../queries'

export class CategoryService {
  public static async getAll() {
    return await client.post(getAllCategoriesQuery)
  }

  public static async getCategoryProducts(name: string) {
    return await client.post(getCategoryProductsQuery(name))
  }

  public static async getDisplayProduct(id: string) {
    return await client.post(getDisplayProductQuery(id))
  }
}
