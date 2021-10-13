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

export const CreateTripPage = () => {
    return (
    <Testando>
    
    <h2>Oi, eu sou a página para criar a viagem!</h2>
    
    </Testando>
    )
}

export default CreateTripPage