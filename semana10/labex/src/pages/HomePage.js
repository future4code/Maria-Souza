import styledComponentsCjs from 'styled-components'
import { Button } from '@mui/material'
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import { styled } from '@mui/material/styles'
import Main from '../imgs/main.png'
import { useHistory } from "react-router-dom"
import React from "react"

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

const ContainerImg = styledComponentsCjs.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 15rem;
  margin-top: 6rem;
  background-color: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(93,9,121,0.7574370709382151) 37%, rgba(12,153,181,0.7287289915966386) 100%);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  @keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(20px);
	}
	100% {
		transform: translatey(0px);
	}
}


  img {
      width: 20rem;
      margin-top: -5rem;
      transform: translatey(0px);
	  animation: float 4s ease-in-out infinite;
  }
`

const ContainerButtons = styledComponentsCjs.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`

// const goToContactsPage = () => {
//   history.push("/contact");
// };

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