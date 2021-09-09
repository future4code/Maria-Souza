import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';
import iconeLogo from './img/logo.png'
import iconeFooter from './img/footer.png'


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`



class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <img src={iconeLogo} alt={'Logotipo'}/>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={''}
          fotoPost={''}
        />

        <Post2
          nomeUsuario={'jujuba88'}
          fotoUsuario={''}
          fotoPost={''}
        />

        <Post3
          nomeUsuario={'maria'}
          fotoUsuario={''}
          fotoPost={''}
        />
      <img src={iconeFooter} alt={'Imagem do footer'}/>
      </MainContainer>
    );
  }
}

export default App;
