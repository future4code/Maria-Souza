import axios from 'axios'
import { BASE_URL } from "../constants/Urls"

export const createRecipe = (body, clear, setIsLoading) => {
    setIsLoading(true)
    axios
    .post(`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        window.alert(res.data.message)
        clear()
        setIsLoading(false)
    })
    .catch((err) => {
        setIsLoading(false)
        window.alert(err.response.message)
    })
}