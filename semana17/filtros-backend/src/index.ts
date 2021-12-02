import express, { Express, Request, Response} from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getUserByName, getUsersByType, getASCOrder, getByPage } from './endpoints/allEndpoints'

export const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/user", getUserByName)
app.get("/user/:type", getUsersByType)
app.get("/users", getASCOrder)
app.get("/users/pg", getByPage)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor ativo em http://localhost:${address.port}`)
   } else {
      console.error(`Falha ao iniciar o servidor.`)
   }
})