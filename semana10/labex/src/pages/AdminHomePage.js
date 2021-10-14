import styledComponentsCjs from "styled-components"
import React from "react"
// import { useHistory } from "react-router-dom"
// import axios from "axios"
// import { useState } from "react"
// import { useEffect } from "react"
import { useProtectedPage } from '../components/Hooks/useProtectedPage'

const Testando = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
`

export const AdminHomePage = () => {
    useProtectedPage()

    return (
    <Testando>
    
    <h2>Oi, eu sou a página do admin!</h2>
    
    </Testando>
    )
}

export default AdminHomePage