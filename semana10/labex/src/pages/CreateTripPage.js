import styledComponentsCjs from "styled-components"
import React from "react"
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useProtectedPage } from '../components/Hooks/useProtectedPage'
import axios from "axios"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import { useHistory } from 'react-router-dom'
import { useState } from "react"
// import TextField from '@mui/material/TextField'


const Buttons = styled(Button)(({ theme }) => ({
    '&.Mui-selected, &.css-18gz5c0-MuiButtonBase-root-MuiBottomNavigationAction-root, &:hover': {
      color: '#FFFFFF',
      backgroundColor: '#673ab7'
    },
    backgroundColor: '#482880',
    margin: '1rem'
  }))

  // const Inputs = styled(TextField)(({ theme }) => ({
  //   '&:hover': {
  //     borderBox: 'purple',

  //   },
  //   margin: '0.6rem',
  //   borderRadius: '1rem',
  //   border: '#482880'
  // }))

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
    margin: 3rem;
    padding: 2rem;
    background-color: #673ab7;
    width: 15rem;
    border-radius: 2rem;
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

export function CreateTripPage() {
  const [name, setName] = useState("")
  const [planet, setPlanet] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [durationInDays, setDurationInDays] = useState("")
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/trips"

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handlePlanet = (event) => {
    setPlanet(event.target.value)
  }

  const handleDate = (event) => {
    setDate(event.target.value)
  }

  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleDurationInDays = (event) => {
    setDurationInDays(event.target.value)
  }

  useProtectedPage()

  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  const today = new Date()
  const chooseToday = today.getFullYear() + "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) + "-"
    + ("0" + today.getDate()).substr(-2)

  const headers = {
    headers: {
      'Content-Type': 'application/json',
      auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhUYjlZd0pGZnA1bmtOMU5RVU43IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MzQyMTQ1NjV9._1s5hkHP3n98zImoZkSI__4kOKhe7zGBcHveUbFi7NY'
    }
  }
    

  const goToCreateNewTrip = () => {
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: Number(durationInDays)
    }
    axios
      .post(url, body, headers)
      .then((res) => {
        window.alert("Sua viagem foi criada!")
        history.push('/list')
      })
      .catch((err) => {
        window.alert("Ocorreu um erro! Tente novamente.")
      })
  }

  const planets = [
    "Mercúrio",
    "Vênus",
    "Terra",
    "Marte",
    "Jupiter",
    "Saturno",
    "Urano",
    "Netuno",
    "Plutão"
  ]


  return (
    <Container>
      <Cabecalho>
        <h1>Criar viagem</h1>
      </Cabecalho>

      <ContainerTrips>
        <form>
          <input
            placeholder={"Nome"}
            name={"name"}
            value={name}
            onChange={handleName}
            pattern={"^.{5,}$"}
            title={"O nome da viagem deve ter no mínimo 5 caracteres"}
            required />

          <select
            placeholder={"Planeta"}
            name={"planet"}
            defaultValue={""}
            onChange={handlePlanet}
            required
          >
            <option value={""} disabled>Escolha um Planeta</option>
            {planets.map((planet) => {
              return <option value={planet} key={planet}>{planet}</option>
            })}
          </select>

          <input
            placeholder={"Data"}
            type={"date"}
            name={"date"}
            value={date}
            onChange={handleDate}
            required
            min={chooseToday} />

          <input
            placeholder={"Descrição"}
            name={"description"}
            value={description}
            onChange={handleDescription}
            required
            pattern={"^.{30,}$"}
            title={"O nome deve ter no mínimo 30 caracteres"} />

          <input
            placeholder={"Duração em dias"}
            type={"number"}
            name={"durationInDays"}
            value={durationInDays}
            onChange={handleDurationInDays}
            required
            min={50} />


        </form>
      </ContainerTrips>

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
      </ContainerButtons>

    </Container>
  )
}

export default CreateTripPage