import React from "react"
import axios from "axios"
import styled from "styled-components"
import Cadastro from "./components/Cadastro"
import Usuarios from "./components/Usuarios"
import Logo from './logo.gif'

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

  button {
    border-radius: 0.5em;
    border: 0.5px solid #405D5C;
    padding: 0.3em 0.3em;
  }

`

const LoginForm = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #405D5C;
  border-radius: 4px;
  padding: 10px 30px 20px;
  margin-bottom: 10px;
  background-color: #9CDDDA;

  button {
    margin: 10px;
    border-radius: 0.5em;
    border: 0.5px solid #405D5C;
    padding: 0.3em 0.3em;

  }

  input {
    border: 1px solid black;
    border-radius: 0.5em;
    margin-bottom: 5px;
    padding: 0.5em 0.5em;
  }
`

const Logotipo = styled.img `
  margin-top: 10px;
`

export default class App extends React.Component {
  state = {
    users: [],
    name: "",
    email: ""
  }

  componentDidMount() {
    this.getAllUsers()
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
        this.getAllUsers()
        return alert('Usuário criado com sucesso!')
      })
      .catch((err) => {
        return alert('Erro ao cadastrar!')
      })
  }

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
      axios
      .get(url, headers)
      .then((res) => {
        this.setState({ users: res.data })
      })
      .catch((err) => {
        return alert('Erro ao mostrar usuários!')
      })
  }

  deleteUser = (id) => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id";
      axios
      .delete(url, headers)
      .then((res) => {
        this.getAllUsers()
        return alert('Usuário deletado com sucesso!')
      })
      .catch((err) => {
        return alert('Erro ao deletar usuário!')
      })
  }

  render() {
    const usersComponents = this.state.users.map((theUser) => {
      return <li key={theUser.id}> {theUser.name} <button onClick={() => this.deleteUser(theUser.id)}>X</button> </li>
    })
    return (
      <MainContainer>
        <Logotipo 
        src={Logo} 
        alt="Logotip" 
        />
        <br />
        <LoginForm>

          <Cadastro
          name={this.state.name}
          handleName={this.handleName}
          email={this.state.email}
          handleEmail={this.handleEmail}
          users={this.state.users}
          createUser={this.createUser}
          />

        <Usuarios
          getAllUsers={this.getAllUsers}
          deleteUser={this.deleteUser}
          usersComponents={usersComponents}
        />
        </LoginForm>
        <button>Voltar</button>

      </MainContainer>
    )
  }
}
