import { post } from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
  getPostById = async (
    id: string
  ) : Promise<post | undefined> => {

    const result = await this.connection("labook_posts").where({ id })

    return result[0]
  }
}