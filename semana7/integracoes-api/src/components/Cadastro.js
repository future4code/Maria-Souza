import React from "react"
import styled from "styled-components"
import axios from "axios"

const headers = {
  headers: {
    Authorization: "maria-souza-maryam"
  }
}

const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    font-family: monospace;
    font-size: x-large;
  }

`

class Cadastro extends React.Component {
  state = {
    name: "",
    email: ""
  }

  handleName = (event) => {
    this.setState({ name: event.target.value })
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    const body = {
      name: this.state.name,
      email: this.state.email
    }

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ name: "", email: "" })
        alert('Usuário cadastrado com sucesso!')
      })
      .catch((err) => {
        alert('Erro ao cadastrar! Tente novamente!')
      })
  }

render() {
    return (
        <MainContainer>
        <h3>Crie a sua conta</h3>

        <input
          placeholder="Nome"
          value={this.state.name}
          onChange={this.handleName}
        />

        <input
        placeholder="E-mail"
        value={this.state.email}
        onChange={this.handleEmail}
        />
        
        <button onClick={this.createUser}>Enviar</button>

        <button onClick={this.props.irParaLista}>Lista de Usuários</button>
        </MainContainer>
    )
    }
}
export default Cadastro;