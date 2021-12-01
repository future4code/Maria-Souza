import dotenv from 'dotenv'
import app from "./app"
import createUser from './endpoints/createUser'
import passRecovery from './endpoints/passRecovery'
import { getAddressInfo } from './services/getAddressInfo'
import { mailTransporter } from './services/mailTransporter'

dotenv.config()

app.post('/users/signup', createUser)