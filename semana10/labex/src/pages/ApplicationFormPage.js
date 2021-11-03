import * as React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from '../components/Hooks/useForm'
import { useHistory } from "react-router"
import Countries from '../constants/Countries'
import Application from '../imgs/application.png'
import Buttons from '../components/Styles/Buttons'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { Container, ContainerButtons, ContainerTrips, ContainerCabecalho, InputForm } from '../components/Styles/StyleApplicationFormPage'

export const ApplicationFormPage = () => {
    const [ form, onChange ] = useForm({
        name: "",
        age: 0,
        applicationText: "",
        profession: "",
        country: "",
        chosentrip: null
    })
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
        })
        .catch((err) => {
            window.alert("Ocorreu um erro! Tente novamente.")
        })
    }

    const handleInput = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    const goToApplicate = (event) => {
        event.preventDefault()
        const body = {
            name: form.name,
            age: Number(form.age),
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/trips/${form.chosentrip}/apply`, body)
        .then((res) => {
            window.alert("Inscrição recebida com sucesso!")
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
        src={Application}
        alt="Inscreva-se"
        />
      </ContainerCabecalho>

      <ContainerTrips>

          <select 
          required
          placeholder={"Escolha a viagem"} 
          name={"chosentrip"} 
          value={form.chosentrip} 
          onClick={getTrips} 
          onChange={handleInput}>
              {trips.map((trip) => {
                return <option value={trip.id}>{trip.name} - {trip.planet}</option>
                })}</select>

          <InputForm
            required
            type={"text"}
            name={"name"}
            placeholder={"Nome"}
            value={form.name}
            onChange={handleInput}
            pattern={"^.{3,}$"}
            title={"Seu nome precisa ter no mínimo 3 letras."}
             />

            <InputForm
            required
            type={"number"}
            name={"age"}
            placeholder={"Idade"}
            value={form.age}
            onChange={handleInput}
            min='18'
            />

            <InputForm
            required
            type={"text"}
            name={"applicationText"}
            placeholder={"Texto de candidatura"}
            value={form.applicationText}
            onChange={handleInput}
            min='30'
            />

            <InputForm
            required
            type={"text"}
            name={"profession"}
            placeholder={"Profissão"}
            value={form.profession}
            onChange={handleInput}
            min='10'
            />

          <select
            required
            name={"country"}
            defaultValue={""}
            onChange={handleInput}
            >
            <option value={""} disabled>Escolha um país</option>
            {Countries.map((country) => {
              return <option value={country} key={country}>{country}</option>
            })}
          </select>
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
          onClick={goToApplicate}
          endIcon={<SendRoundedIcon />}>
          Enviar
        </Buttons>
      </ContainerButtons>

        </Container>
)}

export default ApplicationFormPage