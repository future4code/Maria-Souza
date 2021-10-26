import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios
    .get(url , {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        window.alert("Faça login ou crie uma conta para visualizar as receitas!")
      })
  }, [url])

  return (data)
}

export default useRequestData
