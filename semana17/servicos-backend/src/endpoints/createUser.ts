import { Request, Response } from "express"
import { connection } from "../data/connection"
import { User } from "../types"

export default async function createUser(
   req: Request,
   res: Response
) : Promise<void> {
   try {

      const { name, nickname, email, zipcode, street, number, complement, neighborhood, city, state } = req.body

      if (!name || !nickname || !email || !zipcode || !street || !number || !neighborhood || !city || !state) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email', 'zipcode', 'street', 'number', 'neighborhood', 'city' e 'state' são obrigatórios."
      }

      const id: string = Date.now().toString()

      const newUser: User = { id, name, nickname, email, zipcode, street, number, complement, neighborhood, city, state }

      await connection('aula51_users').insert(newUser)

      res
         .status(201)
         .send("Usuário criado!")

   } catch (error: any) {

      if (typeof error === "string") {

         res
            .send(error)
      } else {
         
         console.log(error.sqlMessage || error.message)
         res
            .status(500)
            .send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}