import styledComponentsCjs from "styled-components"
import { useProtectedPage } from '../components/Hooks/useProtectedPage'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Testando = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
`

export const TripDetailsPage = () => {
    useProtectedPage()

    const [trip, setTrip] = useState()
    const params = useParams()

    const GetTripDetail = () => {
        useEffect(() => {
        const token = localStorage.getItem("token")
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/trip/${params.id}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setTrip(res.data.trip)
        })
        .catch((err) => {
            window.alert("Ocorreu um erro! Tente novamente.")
        })
    })

    useEffect(() =>{
        GetTripDetail()
    }, [])
}
    
    return (
    <Testando>
    
    <h2>Oi, eu sou a página dos detalhes das viagens!</h2>

    
    </Testando>
    )
}

export default TripDetailsPage