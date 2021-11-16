import { BASE_URL } from '../constants/Urls'
import axios from "axios"
import { goToRecipesList } from '../routes/Coordinator'

export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToRecipesList(history)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        setIsLoading(false)
        window.alert(err.response.data.message)
    })
}

export const signUp = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        window.alert("Cadastro efetuado com sucesso! Redirecionando para a sua lista de receitas...")
        clear()
        setIsLoading(false)
        goToRecipesList(history)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        setIsLoading(false)
        window.alert(err.response.data.message)
    })
}