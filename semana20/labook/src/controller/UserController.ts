import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class PostController {

  getPostById = async (
    req: Request,
    res: Response
  ) => {
    try {

      const { id } = req.params

      const user = await new UserBusiness().createUser(id)

      res.send(user)

    } catch (error) {
      console.log(error)
      res.status(500).send("Ocorreu um erro, tente novamente.")
    }
  }

  createPost = () => { }
}