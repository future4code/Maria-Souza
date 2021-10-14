import styledComponentsCjs from "styled-components"
import React from "react"
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import TextField from '@mui/material/TextField'
import { useHistory } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

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

const ContainerLogin = styledComponentsCjs.div `
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
  width: 6rem;
`

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const goBack = () => {
    history.goBack()
  }

  const submitLogin = () => {
    const body = {
      email: email,
      password: password
    }
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        history.push('/admin')
      })
      .catch((err) => {
        window.alert("Ocorreu um erro! Tente novamente.")
      })
  }

    return (
    <Container>
      <Cabecalho>
        <h1>Login</h1>
        </Cabecalho>

        <ContainerLogin>
        <Inputs
          required
          id="outlined-required"
          label="E-mail"
          type="email"
          value={email}
          onChange={handleEmail}
          color="secondary"
        />

        <Inputs
          required
          id="outlined-password-input"
          label="Senha"
          value={password}
          onChange={handlePassword}
          type="password"
          color="secondary"
          autoComplete="current-password"
        />
        </ContainerLogin>

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
        onClick={submitLogin}
        endIcon={<LoginRoundedIcon />}>
        Entrar
        </Buttons>
        </ContainerButtons>
    
    </Container>
    )
}

export default LoginPage