import styledComponentsCjs from "styled-components"
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ControlPointDuplicateRoundedIcon from '@mui/icons-material/ControlPointDuplicateRounded'
import Cards from '../components/Cards/Cards'
import React from 'react'
import useProtectedPage from '../components/Hooks/useProtectedPage'

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

    return (
    <Container>
    
    <ContainerButtons>
        <Buttons 
        variant="contained"
        size="large"
        // onClick={goToTrips}
        endIcon={<ArrowBackRoundedIcon />}>
        Voltar
        </Buttons>

        <Buttons 
        variant="contained"
        size="large"
        // onClick={goToLogin}
        endIcon={<ControlPointDuplicateRoundedIcon />}>
        Inscreva-se
        </Buttons>
        </ContainerButtons>

        <ContainerCards>
            <Cards />
        </ContainerCards>
    
    </Container>
    )
}

export default ListTripsPage