import styledComponentsCjs from "styled-components"
import React from "react"
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useProtectedPage } from '../components/Hooks/useProtectedPage'
import axios from "axios"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import { useState } from "react"
import { useHistory } from 'react-router-dom'
import { useForm } from '../components/Hooks/useForm'
import TextField from '@mui/material/TextField'


const Buttons = styled(Button)(({ theme }) => ({
    '&.Mui-selected, &.css-18gz5c0-MuiButtonBase-root-MuiBottomNavigationAction-root, &:hover': {
      color: '#FFFFFF',
      backgroundColor: '#673ab7'
    },
    backgroundColor: '#482880',
    margin: '1rem'
  }))

  const Inputs = styled(TextField)(({ theme }) => ({
    '&:hover': {
      borderBox: 'purple',

    },
    margin: '0.6rem',
    borderRadius: '1rem',
    border: '#482880'
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
    background-color: #d9c9f5;
    width: 15rem;
    height: 10.5rem;
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

export const CreateTripPage = () => {
    const { form, onChange, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/trips"

    useProtectedPage()
    const history = useHistory()
    const [date, setDate] = useState(new Date())

    const onSubmitForm = (event) => {
    event.preventDefault()
    onSubmitForm(form, clear)

    const today = new Date()
    const stringToday = today.getFullYear() + "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) + "-"
    + ("0" + today.getDate()).substr(-2)

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.duration
    }

    axios
    .post(url, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((res) => {
      history.push('/list')
    }).catch((err) => {
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
              <Inputs
                required
                id="outlined-required"
                label="Nome da viagem"
                type="email"
                value={form['name']}
                onChange={onChange}
                color="secondary"
             />

                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    defaultValue={""}
                    onChange={onChange}
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
                    value={form.date}
                    onChange={onChange}
                    required
                    // min={stringToday}
                />


              </form>
          </ContainerTrips>

          <ContainerButtons>
        <Buttons 
        variant="contained"
        size="large"
        // onClick={goBack}
        endIcon={<ArrowBackRoundedIcon />}>
        Voltar
        </Buttons>

        <Buttons 
        variant="contained"
        size="large"
        // onClick={goToCreateNewTrip}
        endIcon={<AddCircleOutlineRoundedIcon />}>
        Criar
        </Buttons>
        </ContainerButtons>
    
    </Container>
    )
}

export default CreateTripPage