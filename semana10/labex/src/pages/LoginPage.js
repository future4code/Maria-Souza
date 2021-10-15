import styledComponentsCjs from "styled-components"
import React from "react"
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import TextField from '@mui/material/TextField'
import { useHistory } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

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

// const inputProps = {
//   pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$',
// };

export const LoginPage = () => {
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/login"

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const submitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: email,
      password: password
    }
    axios
      .post(
        url,
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
          <form>
        <Inputs
          required
          id="outlined-required"
          label="E-mail"
          type="email"
          value={email}
          onChange={onChangeEmail}
          color="secondary"
          // inputProps={inputProps}
          title="Digite um e-mail válido."
        />
        <Inputs
          required
          id="outlined-password-input"
          label="Senha"
          value={password}
          onChange={onChangePassword}
          type="password"
          color="secondary"
          autoComplete="current-password"
        />
        </form>
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