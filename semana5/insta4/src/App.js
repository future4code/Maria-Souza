import React from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'
import iconeLogo from './img/logo.png'
import iconeFooter from './img/footer.png'


const MainContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Formulario = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  border-radius: 10%;
  margin: 20px;
  padding: 30px;

  button {
    width: 100px;
    align-self: center;
  }
`

const TituloFormulario = styled.div `
  display: flex;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
`

const arrayDePosts = [
  {
    nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"
  },
  {
    nomeUsuario: "jujuba88",
    fotoUsuario: "https://picsum.photos/50/51",
    fotoPost: "https://picsum.photos/200/151"
  },
  {
    nomeUsuario: "maria",
    fotoUsuario: "https://picsum.photos/50/52",
    fotoPost: "https://picsum.photos/200/152"
  }
]


class App extends React.Component {
  
  state = {
    posts: arrayDePosts,
    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: ""
  };

  adicionaNome = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  adicionaAvatar = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  adicionaFoto = (event) => {
    this.setState({ fotoPost: event.target.value });
  };

  publicaPost = () => {
    const postNovo = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    };

    this.setState({
      posts: [postNovo, ...this.state.posts],
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: ""
    });
  }
  
  render() {

    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
      )
    })

    return (
      <MainContainer>
        <img src={iconeLogo} alt={'Logotipo'}/>
        <TituloFormulario>Crie um post!</TituloFormulario>
        <Formulario>
          <input
            placeholder={"Seu nome"}
            value={this.state.nomeUsuario}
            onChange={this.adicionaNome}
          />
          <input
            placeholder={"URL do avatar"}
            value={this.state.fotoUsuario}
            onChange={this.adicionaAvatar}
          />
          <input
            placeholder={"URL do post"}
            value={this.state.fotoPost}
            onChange={this.adicionaFoto}
          />
          <button onClick={this.publicaPost}>Publicar</button>
        </Formulario>
        {listaPosts}
      <img src={iconeFooter} alt={'Imagem do footer'}/>
      </MainContainer>
    );
  }
}

export default App;
