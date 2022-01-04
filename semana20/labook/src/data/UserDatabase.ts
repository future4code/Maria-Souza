import { UserDatabase } from "../data/UserDatabase"
import { user } from "../model/User"

export class UserBusiness {

  getPostById = async (
    id: string
  ) : Promise<user | undefined> => {

    const user = await new UserDatabase().createUser(id)

    return user
  }
}