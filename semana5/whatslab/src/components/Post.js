import React from 'react'
import styled from 'styled-components'
import Background from '../img/background.png'
import Enviar from '../img/enviar.png'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 365px;
  height: 490px;
  margin-bottom: 10px;
  margin-top: 5px;
  background-image: url(${Background});
  background-size: 90%;

`

const AvatarUsuario = styled.div `
  margin-bottom: 5px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    align-self: center;
  }
`

const Chat = styled.div `
  display: grid;
  grid-template-columns: 0.5fr 1.1fr;
  grid-gap: 2px;
  margin-top: 5px;
  margin-left: 7px;
  margin-right: 10px;
  margin-bottom: 5px;
  width: 350px;
  max-height: 480px;
  color: white;

  button {
    border-radius: 10%;
  }
`

const BalaoDeFala = styled.div `
  display: flex;
  word-wrap: break-word;
  max-height: 250px;
  flex-direction: row;
  background-color: #116163;
  border-radius: 1.0em;
  border: 0;
  padding: 0.5em 0.5em;
  position: relative;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

  i {
    overflow: hidden;
  }

  &:after {
	content: '';
  word-wrap: break-word;
	border: 15px solid transparent;
	border-bottom-color: #116163;
  position: absolute;
  max-height: 250px;
  bottom: 0px;
  left: -14px;
}
`

const BalaoDeUsuario = styled.div `
  display: grid;
  justify-content: center;
  align-content: center;
  align-self: center;
  text-align: center;
  background-color: #262d31;
  border-radius: 1.0em;
  border: 0;
  padding: 0.5em 0.5em;
  line-height: 1.0em;
  width: 80px;
  max-height: 450px;
  word-wrap: break-word;
  color: white;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

  b {
    line-height: 1.5em;
  }
`

const MandarMensagem = styled.div`
  height: 40px;
  display: flex;
  grid-column: 1/-1;
  bottom: 10px;
  position: fixed;
  align-items: center;
  padding-left: 5px;
  width: 360px;
  justify-content: space-between;
  background-color: #1d2327;

  button {
    border: 0;
    background-color: #1d2327;
  }

    img {
      padding-right: 10px;
    }
`

const InputMensagem = styled.input `
    padding: 0.5em 0.8em;
    border-radius: 1.0em;
    line-height: 0.6em;
    background-color: #32373a;
    width: 170px;
    max-width: 60%;
    min-width: 8%;
    max-height: 60%;
    border: 0;
    color: white;
`

const InputUsuario = styled.input `
    padding: 0.5em 0.8em;
    margin-left: 5px;
    border-radius: 1.0em;
    line-height: 0.6em;
    background-color: #32373a;
    width: 80px;
    border: 0;
    color: white;
`

class Post extends React.Component {
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

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  }

  render() {
  
    const listaDeNomes = this.state.pessoas.map((pessoa) => {
      return (
        <b>
          {pessoa.nome}
        </b>
    
      )
    })

    const listaDeMensagens = this.state.pessoas.map((pessoa) => {
      return (
        <i>
        {pessoa.mensagem}
        </i>
      )
    })

  


    return <PostContainer>

      <Chat>
        <BalaoDeUsuario>
        <AvatarUsuario>
          <img src='https://picsum.photos/50/50' alt='Seu avatar'/>
          </AvatarUsuario>
          {listaDeNomes}
          </BalaoDeUsuario>

      <BalaoDeFala>
      {listaDeMensagens} 
      <br/>
      </BalaoDeFala>
      </Chat>

      <MandarMensagem>
      <InputUsuario 
      value={this.state.valorInputUsuario}
      onChange={this.onChangeInputUsuario}
      placeholder={"Usuário"} 
      maxLength='8'
      />

      <InputMensagem 
      value={this.state.valorInputMensagem}
      onChange={this.onChangeInputMensagem}
      placeholder={"Sua mensagem"} 
      maxLength='250'
      />

      <button onClick={this.adicionaPessoa}>
      <img src={Enviar} alt="Enviar"/>
      </button>
      
      </MandarMensagem>
    </PostContainer>
    }
}

export default Post