import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Purchase, User, Product } from "../types"

// Criar usuário
const id = Date.now()
const idToString = id.toString()

const createUser = async (
    id: any,
    name: string,
    email: string,
    password: string
  ) : Promise<void> => {
    try {
        await connection.raw(`
           INSERT INTO labecommerce_users (id, name, email, password)
           VALUES (
               '${idToString}',
               '${name}',
               '${email}',
               '${password}'
           );
       `)
    } catch (error) {
        console.log("Ocorreu um erro!")
    }
}

 export const getCreateUser = async (req: Request, res: Response) => {
        let errorCode = 400
        try {

            const { name, email, password } = req.body

            if (!name|| !email || !password) {
                errorCode = 422
                throw new Error("Ocorreu um erro pois você não preencheu todos os campos corretamente.")
            }

        await createUser(
            req.body.id,
            req.body.name,
            req.body.email,
            req.body.password
        )
    
        res
            .status(200)
            .send("Usuário criado com sucesso!")

        } catch (err) {
        res
            .status(errorCode)
            .send("Ocorreu um erro!")
        }
  }


// Pegar todos os usuários
export default async function selectAllUsers() : Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, password
      FROM labecommerce_users;
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


// Cadastrar produto
const idProduct = Date.now()
const idToStringProduct = idProduct.toString()

const createProduct = async (
    id: any,
    name: string,
    price: number,
    image_url: string
  ) : Promise<void> => {
    try {
        await connection.raw(`
           INSERT INTO labecommerce_products (id, name, price, image_url)
           VALUES (
               '${idToStringProduct}',
               '${name}',
               '${price}',
               '${image_url}'
           );
       `)
    } catch (error) {
        console.log("Ocorreu um erro!")
    }
}

 export const getCreateProduct = async (req: Request, res: Response) => {
        let errorCode = 400
        try {

            const { name, price, image_url } = req.body

            if (!name|| !price || !image_url) {
                errorCode = 422
                throw new Error("Ocorreu um erro pois você não preencheu todos os campos corretamente.")
            }

        await createProduct(
            req.body.id,
            req.body.name,
            req.body.price,
            req.body.image_url
        )
    
        res
            .status(200)
            .send("Produto cadastrado com sucesso!")

        } catch (err) {
        res
            .status(errorCode)
            .send("Ocorreu um erro!")
        }
  }


// Pegar todos os produtos
export async function selectAllProducts() : Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, price, image_url
      FROM labecommerce_products;
   `)

   return result[0]
}

export const getAllProducts = async(req: Request,res: Response) : Promise<void> => {
   try {
       
      const products = await selectAllProducts()

      if(!products.length) {
         res
            .status(404)
            throw new Error("Não há produtos para mostrar.")
      }

      res
       .status(200)
       .send(products)
      
   } catch (error) {
      res
       .send("Ocorreu um erro!")
   }
}


// Registrar compra
export const getRegisterPurchase = async (req: Request, res: Response) => {
   try {
       const { user_id, product_id, quantity } = req.body

       const [product]: Product[] = await connection("labecommerce_products")
           .select()
           .where({ id: product_id })

       if (!product) {
           throw new Error("Produto não encontrado(product_id)")
       }

       const total_price = product.price * quantity

       const purchase: Purchase = {
           id: Date.now().toString(),
           user_id,
           product_id,
           quantity,
           total_price
       }

       await connection("labecommerce_purchases")
         .insert(purchase)

       res
         .status(200)
         .send("Compra realizada com sucesso!")
   } catch (error) {
       res
         .status(400)
         .send("Ocorreu um erro!")
   }
}


// Buscar compras de um usuário
export const getUserPurchases = async (req: Request, res: Response) => {
   try {
       const { user_id } = req.params

       const result: User[] = await connection("labecommerce_users")
           .where({ id: user_id })

       const user = result[0]
       if (!user) {
           throw new Error("Usuário não encontrado(user_id)")
       }

       const data = await connection("labecommerce_purchases")
           .select(
               "labecommerce_purchases.id as purchase_id",
               "labecommerce_purchases.product_id",
               "labecommerce_products.name as product_name",
               "labecommerce_products.image_url",
               "labecommerce_products.price as product_price",
               "labecommerce_purchases.quantity",
               "labecommerce_purchases.total_price"
           )
           .innerJoin(
               "labecommerce_users",
               "labecommerce_users.id",
               "labecommerce_purchases.user_id"
           )
           .innerJoin(
               "labecommerce_products",
               "labecommerce_products.id",
               "labecommerce_purchases.product_id"
           )
           .where({ user_id })

       res
         .status(200)
         .send({ compras: data })

   } catch (error) {
       res
         .status(400)
         .send("Ocorreu um erro!")
   }
}