import axios from 'axios'
import { BASE_URL } from "../constants/Urls"

export const createPost = (body, clear, setIsLoading) => {
    setIsLoading(true)
    axios
    .post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        window.alert("Seu post foi criado com sucesso! Atualize a página para visualizá-lo.")
        clear()
        setIsLoading(false)
    })
    .catch((err) => {
        setIsLoading(false)
        window.alert("Ocorreu um erro! Tente novamente.")
    })
}

export const createComment = (id, body, clear, setIsLoading) => {
    setIsLoading(true)
    axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        window.alert("Seu comentário foi postado com sucesso! Atualize a página para visualizá-lo.")
        clear()
        setIsLoading(false)
    })
    .catch((err) => {
        setIsLoading(false)
        window.alert("Ocorreu um erro! Tente novamente.")
    })
}