import React from "react"
import styled from "styled-components"
import CriaPlaylist from "./components/CriaPlaylist"
import ListaPlaylist from "./components/ListaPlaylist"
import AdicionarMusica from "./components/AdicionarMusica"

const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a:hover {
    cursor: alias;
  }
`

const Header = styled.div `
  display: grid;
  background-color: pink;
  justify-content: space-between;
  height: 70px;
  margin-top: 0px;
  grid-column: 1/-1;
  grid-template-columns:  100vw;

`

const Titulo = styled.div `
    display: flex;
    align-items: center;
    color: #582E17;
    justify-content: space-between;
    margin-left: 20px;

`

const Caixinha = styled.div `
  border: 1px solid black;
  border-radius: 5px;
  justify-content: center;
  width: 350px;
  padding: 10px;
  margin: 30px
`


class App extends React.Component {

  state = {
    telaAtual: "criar playlist"
  }

  escolhaSuaTela = () => {
    switch (this.state.telaAtual) {
      case "criar playlist":
        return <CriaPlaylist irParaListaPlaylist={this.irParaListaPlaylist} />
        case "lista playlist":
          return <ListaPlaylist irParaCriarPlaylist={this.irParaCriarPlaylist} />
            default:
              return <div>Erro!</div>
    }
  }

  irParaCriarPlaylist = () => {
    this.setState({ telaAtual: "criar playlist"})
  }

  irParaListaPlaylist = () => {
    this.setState({ telaAtual: "lista playlist"})
  }

  irParaAdicionarMusica = () => {
    this.setState({ telaAtual: "adicionar musica"})
  }

  render () {
  return (
    <MainContainer>

      <Header>
        <Titulo>
      <h3>Labefy</h3>
      </Titulo>
      </Header>

      <Caixinha>
        {this.escolhaSuaTela()}
      </Caixinha>
    </MainContainer>
  );
}
}

export default App;
