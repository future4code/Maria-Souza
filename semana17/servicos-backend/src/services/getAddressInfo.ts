import axios from "axios"
import { Address } from "../types"

export const getAddressInfo = async (cep: string)
    : Promise<Address | false> => {

    try {

        const result = await axios
            .get(`https://viacep.com.br/ws/${cep}/json/`)

        return {
            street: result.data.logradouro,
            neighborhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf,
        }
    } catch (error) {
        return false
    } 
}
