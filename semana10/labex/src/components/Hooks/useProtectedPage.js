import { useEffect } from "react"
import { useHistory } from "react-router-dom"

export const useProtectedPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token === null) {
      window.alert("Faça o login para visualizar este conteúdo.")
      history.push("/login")
    }
  }, [history])
}

export default useProtectedPage