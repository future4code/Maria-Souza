import React from "react"
import styled from "styled-components"

const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  button {
    border-radius: 0.5em;
    border: 0.5px solid #405D5C;
    }
`


class Usuarios extends React.Component {
render() {

    return (
        <MainContainer>
            <button onClick={this.props.usersComponents}>Lista de usuários</button>
            {this.props.usersComponents}
        </MainContainer>
        
    )
    }
}

export default Usuarios