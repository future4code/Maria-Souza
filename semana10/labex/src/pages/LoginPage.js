import styledComponentsCjs from "styled-components"
import React from "react"
import { Button } from "@mui/material"
import { useHistory } from "react-router-dom"

const Testando = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
`

export const LoginPage = () => {
    const history = useHistory()

  const goToAdminHome = () => {
    history.push("/admin")
  }

  const goToApplicationFormPage = () => {
    history.push("/application")
  }
  const goToCreateTripPage = () => {
      history.push("/create")
  }

  const goToTripDetailsPage = () => {
      history.push("/details")
  }

    return (
    <Testando>
    
    <h2>Oi, eu sou a página de login!</h2>

        <Button 
        variant="contained"
        size="large"
        onClick={goToAdminHome}>
        AdminHome
        </Button><br/>

        <Button 
        variant="contained"
        size="large"
        onClick={goToApplicationFormPage}>
        ApplicationFormPage
        </Button><br/>

        <Button 
        variant="contained"
        size="large"
        onClick={goToCreateTripPage}>
        CreateTripPage
        </Button><br/>

        <Button 
        variant="contained"
        size="large"
        onClick={goToTripDetailsPage}>
        TripDetailsPage
        </Button><br/>
    
    </Testando>
    )
}

export default LoginPage