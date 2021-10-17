import styledComponentsCjs from "styled-components"
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';import Cards from '../components/Cards/Cards'
import React from 'react'
import { useHistory } from "react-router"
import { useProtectedPage } from '../components/Hooks/useProtectedPage'
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

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
  margin-bottom: 2rem;
`

const ContainerCards = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ListTripsPage = () => {
  useProtectedPage()

  const [trips, setTrips] = useState([])
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/trips"
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  const getTrips = () => {
    axios
    .get(url)
    .then((res) => {
        setTrips(res.data.trips)
        console.log(res.data.trips)
    })
    .catch((err) => {
        window.alert("Ocorreu um erro! Tente novamente.")
    })
}

  useEffect(() => {
    getTrips()
  }, [history])


    return (
    <Container>
    
    <ContainerButtons>
        <Buttons 
        variant="contained"
        size="large"
        onClick={goBack}
        endIcon={<ArrowBackRoundedIcon />}>
        Voltar
        </Buttons>

        <Buttons 
        variant="contained"
        size="large"
        // onClick={goToLogin}
        endIcon={<CreateRoundedIcon />}>
        Inscreva-se
        </Buttons>
        </ContainerButtons>

        <ContainerCards>
        {trips.map((trips) => {
          return <Cards trips={trips}/>
                })}
        </ContainerCards>
    
    </Container>
    )
}

export default ListTripsPage