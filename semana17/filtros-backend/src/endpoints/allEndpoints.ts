import connection from "../data/connection"
import express, { Request, Response} from "express"

export default async function selectAllUsers() : Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula49_exercicio;
   `)

   return result[0]
}

export const getAllUsers = async(req: Request,res: Response) : Promise<void> => {
   try {
       
      const users = await selectAllUsers()

      if(!users.length) {
         res
            .status(404)
            throw new Error("Não há usuários para mostrar.")
      }

      res
       .status(200)
       .send(users)
      
   } catch (error) {
      res
       .send("Ocorreu um erro!")
   }
}

const filterUserByName = async (name: string) : Promise<any> => {
    try {
        const result = await connection("aula49_exercicio")
            .where({ name })
 
        return result

    } catch (error) {
        return console.log("Ocorreu um erro!")
    }
 }

const filterUserByType = async (type: string) : Promise<any> => {
    try {
        const result = await connection("aula49_exercicio")
            .where({ type })

        return result

    } catch (error) {
        return console.log("Ocorreu um erro!")
    }
}

const orderByASC = async (sort: string, order: string) : Promise<any> => {

    try {
        const result = await connection("aula49_exercicio")
            .orderBy(sort, order)

        return result

    } catch (error) {
        return console.log("Ocorreu um erro!")
    }
}

async function orderByPage (limit: number, offset: number) : Promise<any> {

    const result = await connection
    ('aula49_exercicio')
        .limit(limit)
        .offset(offset)

    return result
 }

// 1 A)

export const getUserByName = async (req: Request, res: Response) : Promise<void> => {
   try {

       const byName = req.query.name as string

       if (!byName) {
           res
            .status(422)
            throw new Error("Ocorreu um erro, tente novamente.")
       }

       const users = await filterUserByName(byName)

       if (!users.length) {
           res
            .status(404)
            throw new Error("Não há usuários para mostrar.")
       }

       res
        .status(200)
        .send(users)

   } catch (error) {
       res
        .status(400)
        .send("Ocorreu um erro!")
   }
}

// 1 B)

export const getUsersByType = async (req: Request, res: Response) : Promise<void> => {
    try {
        const byType = req.params.type as string

        if (!byType) {
            res
                .status(422)
                throw new Error("Ocorreu um erro, tente novamente.")
        }

        const users = await filterUserByType(byType)

        if (!users.length) {
            res
                .status(422)
                throw new Error("Não há usuários para mostrar.")
        }

        res
            .status(200)
            .send(users)

    } catch (error) {
        res
            .send("Ocorreu um erro!")
    }
}

// 2)

export const getASCOrder = async (req: Request, res: Response) : Promise<void> => {
    try {
        let sort = req.query.sort ? req.query.sort : "email"
        let order = req.query.order ? req.query.order : "ASC"

        if (sort !== "name" && sort !== "type") {
            sort = "email"
        }

        if (order !== "ASC" && order !== "DESC") {
            order = "ASC"
        }

        const users = await orderByASC(sort, order)

        if (!users.length) {
            res
                .send(422)
            throw new Error("Não há usuários para mostrar.")
        }

        res
            .status(200)
            .send(users)

    } catch (error) {
        res
            .send("Ocorreu um erro!")
    }
}


// 3)

export async function getByPage (req: Request, res: Response) : Promise<void> {

    let page: number = Number(req.params.page)

    try {
        if (page < 1 || isNaN(page)) {
            page = 1
            }

        const limit: number = 5
        const offset: number = limit * (page - 1)

        const users = await orderByPage(limit, offset)

        if (!users.length) {
            res
                .status(422)
            throw new Error("Nenhum usuário encontrado.")
        }

        res
            .status(200)
            .send(users)

    } catch (error) {
        res
        .status(400)
        .send("Ocorreu um erro!")
    }
}