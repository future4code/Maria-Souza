import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded'
import Cards from '../components/Cards/Cards'
import React from 'react'
import { useHistory } from "react-router"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Buttons from '../components/Styles/Buttons'
import { Container, ContainerButtons, ContainerCards, ContainerCabecalho } from '../components/Styles/StyleListTripsPage'
import TripList from '../imgs/triplist.png'

export const ListTripsPage = () => {

  const [trips, setTrips] = useState([])
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/trips"
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  const goToApplicationForm = () => {
    history.push("/application")
    }

  const getTrips = () => {
    axios
    .get(url)
    .then((res) => {
        setTrips(res.data.trips)
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
        onClick={goToApplicationForm}
        endIcon={<CreateRoundedIcon />}>
        Inscreva-se
        </Buttons>
        </ContainerButtons>

        <ContainerCabecalho>
        <img
        src={TripList}
        alt="Lista de viagens"
        />
        </ContainerCabecalho>

        <ContainerCards>
        {trips.map((trips) => {
          return <Cards trips={trips}/>
        })}
        </ContainerCards>
    
    </Container>
    )
}

export default ListTripsPage