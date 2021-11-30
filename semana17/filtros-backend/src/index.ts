import express, { Express, Request, Response} from "express"
import cors from "cors"
import connection from './data/connection'
import { AddressInfo } from "net"
import selectAllUsers from "./endpoints/selectAllUsers"

export const app: Express = express()
app.use(express.json())
app.use(cors())


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor ativo em http://localhost:${address.port}`)
   } else {
      console.error(`Falha ao iniciar o servidor.`)
   }
})

// A) 

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users = await selectAllUsers()

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}