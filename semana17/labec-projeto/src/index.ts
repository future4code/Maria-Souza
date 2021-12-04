import express, { Express, Request, Response} from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { 
   getCreateUser, 
   getAllUsers, 
   getCreateProduct, 
   getAllProducts, 
   getRegisterPurchase, 
   getUserPurchases } from "./endpoints/allEndpoints"

export const app: Express = express()

app.use(express.json())
app.use(cors())

// Endpoints
app.post("/users", getCreateUser) // Criar usuário
app.get("/users", getAllUsers) // Busca todos os usuários
app.post("/products", getCreateProduct) // Cadastro um novo produto
app.get("/products", getAllProducts) // Busca todos os produtos
app.post("/purchases", getRegisterPurchase) // Registra compra
app.get("/users/:user_id/purchases", getUserPurchases) // Busca as compras de um usuário
 
// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor ativo em http://localhost:${address.port}`)
   } else {
      console.error("Houve uma falha ao iniciar o servidor.")
   }
})