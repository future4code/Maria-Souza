import React from "react"
import Buttons from '../components/Styles/Buttons'
import { useProtectedPage } from '../components/Hooks/useProtectedPage'
import axios from "axios"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import { useHistory } from 'react-router-dom'
import { useState } from "react"
import CreateTrip from '../imgs/createtrip.png'
import { Container, ContainerButtons, ContainerTrips, ContainerCabecalho, InputForm } from '../components/Styles/StyleCreateTripPage'
import { planets } from "../constants/Planets"

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

  return (
    <Container>
      <ContainerCabecalho>
        <img
        src={CreateTrip}
        alt="Criar viagem"
        />
      </ContainerCabecalho>

      <ContainerTrips>
          <InputForm
            required
            name={"name"}
            placeholder={"Nome da viagem"}
            value={name}
            onChange={handleName}
            pattern={"^.{5,}$"}
            title={"O nome da sua viagem deve ter no mínimo 5 letras."}
             />

          <select
            required
            name={"planet"}
            defaultValue={""}
            onChange={handlePlanet}
          >
            <option value={""} disabled>Escolha um planeta</option>
            {planets.map((planet) => {
              return <option value={planet} key={planet}>{planet}</option>
            })}
          </select>

          <InputForm
            required
            type={"date"}
            name={"date"}
            value={date}
            onChange={handleDate}
            min={chooseToday} />

          <InputForm
            required
            placeholder={"Descrição"}
            name={"description"}
            value={description}
            onChange={handleDescription}
            pattern={"^.{30,}$"}
            title={"Sua descrição precisa ter no mínimo 30 letras."} />

          <InputForm
            required
            placeholder={"Duração (em dias)"}
            type={"number"}
            name={"durationInDays"}
            value={durationInDays}
            onChange={handleDurationInDays}
            min={50} />
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