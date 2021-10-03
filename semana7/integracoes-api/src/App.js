import React from "react"
import styled from "styled-components"
import Cadastro from "./components/Cadastro"
import Usuarios from "./components/Usuarios"
import Logo from './logo.gif'
import GitHub from './github.png'

const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  a:hover {
    cursor: alias;
  }

`

const LoginForm = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #FF914D;
  border-radius: 4px;
  padding: 10px 30px 20px;
  margin-bottom: 10px;
  background-color: #FDE0CE;

  button {
    margin: 3px;
    border-radius: 0.5em;
    border: 0.5px solid #FF914D;
    padding: 0.3em 0.3em;

  }

  input {
    border: 1px solid #FF914D;
    border-radius: 0.5em;
    margin-bottom: 5px;
    padding: 0.5em 0.5em;
  }
`

const Logotipo = styled.img `
  margin-top: 10px;
`

const Footer = styled.img `
  width: 25px;
  height: 25px;
  margin: 10px;
`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolhaSuaTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <Usuarios irParaCadastro={this.irParaCadastro} />
      default:
          return <div>Erro! Página não encontrada. =/</div>
    }
  }

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({ telaAtual: "lista"})
  }

  render() {
    return (
      <MainContainer>

        <Logotipo 
        src={Logo} 
        alt="Logotipo" 
        />

        <br />

        <LoginForm>
          {this.escolhaSuaTela()}
        </LoginForm>
 
        <a 
        rel="noreferrer" 
        target="_blank" 
        href="https://github.com/mhsouza88">
        <Footer 
        src={GitHub} 
        alt="GitHub" 
        /> 
        </a>

      </MainContainer>
    )
  }
}
