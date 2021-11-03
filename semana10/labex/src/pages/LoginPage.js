import React from "react"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import { useHistory } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import Buttons from '../components/Styles/Buttons'
import { Container, ContainerButtons, ContainerLogin, ContainerCabecalho, InputStyle } from '../components/Styles/StyleLoginPage'
import Login from '../imgs/login.png'
 
export const LoginPage = () => {
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-souza-maryam/login"

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
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
        window.alert("Digite um e-mail ou senha válidos.")
      })
  }

    return (
    <Container>
      <ContainerCabecalho>
        <img
        src={Login}
        alt="Login"
        />
        </ContainerCabecalho>

        <ContainerLogin>
        <InputStyle
          required
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={handleEmail}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Digite um e-mail válido."
        />
        <InputStyle
          required
          id="outlined-password-input"
          placeholder="Senha"
          value={password}
          onChange={handlePassword}
          type="password"
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