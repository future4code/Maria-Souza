import { useState, useEffect } from "react"
import axios from "axios"

export const useTrips = () => {
  const [trips, setTrips] = useState([])
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/trips'

  useEffect(() => {
    axios
    .get(url)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      setTrips(res.data.trips)
    })
  }, [])

  return trips
}

export default useTrips