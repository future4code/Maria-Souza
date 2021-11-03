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

export const createComment = (body, id, clear) => {
    axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: window.localStorage.getItem("token")
        }
    })
    .then((res) => {
        window.alert("Seu comentário foi postado com sucesso! Atualize a página para visualizá-lo.")
        clear()
    })
    .catch((err) => {
        window.alert("Ocorreu um erro! Tente novamente.")
    })
}

export const voteOnPost = (body, id, clear) => {
    axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: window.localStorage.getItem("token")
        }
    },
         body = {
            direction: +1
        }
    )
    .then((res) => {
        window.alert("Seu comentário foi postado com sucesso! Atualize a página para visualizá-lo.")
        clear()
    })
    .catch((err) => {
        console.log(id)
    })
}

