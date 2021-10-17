import styledComponentsCjs from "styled-components"
import React from "react"
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useHistory } from "react-router-dom"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import { useProtectedPage } from '../components/Hooks/useProtectedPage'
import { useTrips } from '../components/Hooks/useTrips'
import { Link } from "react-router-dom"

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

const ContainerTrips = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    background-color: #673ab7;
    width: 15rem;
    border-radius: 2rem;
    padding: 1rem;

    a {
      color: #FFFFFF;
      text-decoration: none;
    }
    a:hover {
      color: #8561c5;
      transition: 500ms;
    }
    a:active {
      color: #000000;
    }
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

export const AdminHomePage = () => {
    
    useProtectedPage()

    const history = useHistory()

    const goBack = () => {
    history.goBack()
  }

  const goToLogout = () => {
    window.localStorage.clear()
    history.push("/")
  }

  const goToCreateNewTrip = () => {
    history.push("/create")
    }

    const trips = useTrips()

    return (
        <Container>
        <Cabecalho>
          <h1>Painel Administrativo</h1>
          </Cabecalho>

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
        onClick={goToCreateNewTrip}
        endIcon={<AddCircleOutlineRoundedIcon />}>
        Criar
        </Buttons>

        <Buttons 
        variant="contained"
        size="large"
        onClick={goToLogout}
        endIcon={<LogoutRoundedIcon />}>
        Logout
        </Buttons>
        </ContainerButtons>

        <ContainerTrips>
        {trips.map((trip) => {
        return <Link to={`/details/${trip.id}`} key={trip.id}>
            {trip.name}
            </Link>
        })}
        </ContainerTrips>

        </Container>
    )
}

export default AdminHomePage