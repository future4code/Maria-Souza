import styledComponentsCjs from "styled-components"
import React from "react"
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useProtectedPage } from '../components/Hooks/useProtectedPage'
import Cards from "../components/Cards/Cards"

const Buttons = styled(Button)(({ theme }) => ({
    '&.Mui-selected, &.css-18gz5c0-MuiButtonBase-root-MuiBottomNavigationAction-root, &:hover': {
      color: '#FFFFFF',
      backgroundColor: '#673ab7'
    },
    backgroundColor: '#482880',
    margin: '1rem'
  }))

  const Container = styledComponentsCjs.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100%;
`

const ContainerButtons = styledComponentsCjs.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`

const ContainerLogin = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    background-color: #673ab7;
    width: 15rem;
    border-radius: 2rem;
    padding: 2rem;
`

const Cabecalho = styledComponentsCjs.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  margin-top: 3rem;
  background-color:white;
  width: 20rem;
  h1 {
    line-height: 1.5rem;
}
`

export const TripDetailsPage = () => {
  const history = useHistory()
  const goBack = () => {
  history.goBack()
  }
    useProtectedPage()

    const [trip, setTrip] = useState()
    const params = useParams()


    const getTripDetail = () => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/trip/${params.tripId}`,{
            headers: {
                'Content-Type': 'application/json',
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhUYjlZd0pGZnA1bmtOMU5RVU43IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MzQyMTQ1NjV9._1s5hkHP3n98zImoZkSI__4kOKhe7zGBcHveUbFi7NY'
              }
        })
        .then((res) => {
            setTrip(res.data.trip)
        })
        .catch((err) => {
            window.alert("Ocorreu um erro! Tente novamente.")
        })
    }

    useEffect(() =>{
        getTripDetail()
    }, [])
    
    return (
    <Container>
        <Cabecalho>
          <h1>Detalhes da viagem</h1>
          </Cabecalho>
  
          <ContainerLogin>
          oiii
          </ContainerLogin>
  
          <ContainerButtons>
          <Buttons 
          variant="contained"
          size="large"
          onClick={goBack}
          endIcon={<ArrowBackRoundedIcon />}>
          Voltar
          </Buttons>
          </ContainerButtons>
      
      </Container>
    )
}

export default TripDetailsPage