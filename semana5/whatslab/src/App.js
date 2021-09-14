import React from 'react'
import styled from 'styled-components'
import Post from './components/Post'
import Logo from './img/logo.png'

const MainContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
  
  state = {
    pessoas: [
      {
        nome: "",
        mensagem: "",
      }
    ],
    valorInputUsuario: "",
    valorInputMensagem: ""
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  }

  adicionaPessoa = () => {
    const novaPessoa = {
      nome: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    }

    this.setState({
      pessoas: [...this.state.pessoas, novaPessoa],
      valorInputUsuario: "",
      valorInputMensagem: "",
    })
  }
  
  render() {

    const listaPosts = this.state.pessoas.map((post) => {
      return (
        <Post
        nome={post.nome}
        mensagem={post.mensagem}
      />
      )
    })

    return (
      <MainContainer>
        <img src={Logo} alt="Logotipo do WhatsLab"/>
        {listaPosts}
      </MainContainer>
    );
  }
}

export default App;