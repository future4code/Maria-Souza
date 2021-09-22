import React from "react"
import styled from "styled-components"
import axios from "axios"

const headers = {
    headers: {
      Authorization: "maria-souza-maryam"
    }
  }

const CardUser = styled.div `
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`

const BotaoDeletar = styled.button `
  border: 0.5px solid #FF914D;
  border-radius: 4px;
  padding: 0;
`

class Usuarios extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
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
            alert('Erro ao mostrar usuários! Tente novamente!')
          })
      }
    
      deleteUser = (id) => {
        const url =
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
          axios
          .delete(url, headers)
          .then((res) => {
            this.getAllUsers()
            return alert('Usuário deletado com sucesso!')
          })
          .catch((err) => {
            return alert('Erro ao deletar usuário! Tente novamente!')
          })
      }

    render() {

    const usersComponents = this.state.users.map((theUser) => {
        return <CardUser key={theUser.id}> {theUser.name} <BotaoDeletar onClick={() => this.deleteUser(theUser.id)}>X</BotaoDeletar> </CardUser>
      })

    return (
        <div>

            <h3>Lista de Usuários</h3>

            {usersComponents}

            <button onClick={this.props.irParaCadastro}>Voltar</button>

        </div>
    )
    }
}
export default Usuarios