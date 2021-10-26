import { BASE_URL } from '../constants/Urls'
import axios from "axios"
import { goToRecipesList } from '../routes/Coordinator'

export const login = (body, clear, history, setRightButtonText) => {
    axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipesList(history)
        setRightButtonText("Logout")
    })
    .catch((err) => 
        window.alert(err.response.data.message))
}

export const signUp = (body, clear, history, setRightButtonText) => {
    axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        window.alert("Cadastro efetuado com sucesso! Redirecionando para a sua lista de receitas...")
        clear()
        goToRecipesList(history)
        setRightButtonText("Logout")
    })
    .catch((err) => 
    window.alert(err.response.data.message))
}