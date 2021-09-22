import React from "react"
import styled from "styled-components"

const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    font-family: monospace;
    font-size: x-large;
  }

  button {
    margin: 10px;
    border-radius: 0.5em;
    border: 0.5px solid #405D5C;
    padding: 0.3em 0.3em;
  }
`

class Cadastro extends React.Component {

render() {

    
    return (
        <MainContainer>
        <h3>Crie a sua conta</h3>
        <input
          placeholder="Nome"
          value={this.props.name}
          onChange={this.props.handleName}
        />

        <input
        placeholder="E-mail"
        value={this.props.email}
        onChange={this.props.handleEmail}
        />
        
        <button onClick={this.props.createUser}>Enviar</button>
        </MainContainer>
    )
    }
}

export default Cadastro;