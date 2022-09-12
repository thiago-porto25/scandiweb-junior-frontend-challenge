import { client } from '@tilework/opus'

import { getAllCategoriesQuery } from '../queries'

export class CategoryService {
  public static async getAll() {
    return await client.post(getAllCategoriesQuery)
  }
}
