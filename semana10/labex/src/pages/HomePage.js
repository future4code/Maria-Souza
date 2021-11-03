import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import Main from '../imgs/main.png'
import { useHistory } from "react-router-dom"
import React from "react"
import Buttons from '../components/Styles/Buttons'
import { Container, ContainerImg, ContainerButtons } from '../components/Styles/StyleHomePage'

export const HomePage = () => {
  const history = useHistory()

  const goToTrips = () => {
    history.push("/list")
  }

  const goToLogin = () => {
    history.push("/login")
  }
    return (
      <Container>
          <ContainerImg>
            <img
            src={Main}
            alt="Main"
            />
            </ContainerImg>

          <ContainerButtons>

        <Buttons 
        variant="contained"
        size="large"
        onClick={goToTrips}
        endIcon={<AirplanemodeActiveRoundedIcon />}>
        Viagens
        </Buttons>

        <Buttons 
        variant="contained"
        size="large"
        onClick={goToLogin}
        endIcon={<PersonRoundedIcon />}>
        Login
        </Buttons>

        </ContainerButtons>

      </Container>
    )
  }
  
  export default HomePage