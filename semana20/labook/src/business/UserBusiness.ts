import { UserDatabase } from "../data/UserDatabase"
import { userCredentials } from "../model/User"

export class UserBusiness {

  createUser = async (
    id: string
  ) : Promise <userCredentials | undefined> => {

    const user = await new UserDatabase().createUser()

    return user
  }
}