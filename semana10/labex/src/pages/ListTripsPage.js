import styledComponentsCjs from "styled-components"
import React from "react"

const Testando = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
`

export const ListTripsPage = () => {
    return (
    <Testando>
    
    <h2>Oi, eu sou a lista de viagens!</h2>
    
    </Testando>
    )
}

export default ListTripsPage