import { BASE_URL } from '../constants/Urls'
import axios from "axios"
import { goToFeed } from '../routes/Coordinator'

export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToFeed(history)
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
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        window.alert("Cadastro efetuado com sucesso!")
        clear()
        setIsLoading(false)
        goToFeed(history)
        setRightButtonText("Logout")
    })
    .catch((err) => {
        setIsLoading(false)
        window.alert("Redirecionando para o seu feed...")
    })
}