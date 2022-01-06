import dotenv from 'dotenv'
import app from "./app"
import createUser from './endpoints/createUser'
import { getAddressInfo } from './services/getAddressInfo'

dotenv.config()

// 1)
getAddressInfo("05424150").then(console.log) // Retorna o endereço de qualquer CEP dentro da função

// 2)
app.post('/users/signup', createUser) // Cria o usuário com o endereço completo dele