import React from "react"
import Buttons from '../components/Styles/Buttons'
import { useHistory } from "react-router-dom"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import { useProtectedPage } from '../components/Hooks/useProtectedPage'
import { useTrips } from '../components/Hooks/useTrips'
import { Link } from "react-router-dom"
import Admin from '../imgs/admin.png'
import { Container, ContainerButtons, ContainerTrips, ContainerCabecalho } from '../components/Styles/StyleAdminHomePage'

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
        <ContainerCabecalho>
          <img
          src={Admin}
          alt="Painel Administrativo"
          />
        </ContainerCabecalho>

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