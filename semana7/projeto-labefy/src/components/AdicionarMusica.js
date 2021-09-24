import React from "react"
import styled from "styled-components"
import axios from "axios"

const headers = {
  headers: {
    Authorization: "maria-souza-maryam"
  }
}

const DivInterna = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const CardLista = styled.div `
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`

class AdicionarMusica extends React.Component {

  state = {
    nomeMusica: "",
    artistaMusica: "",
    urlMusica: "",
    listaDeMusicas: [],
    idPlaylists: ""
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.idPlaylists}/tracks`

    axios
    .get(url, headers)
    .then((res) => {
      this.setState({ listaDeMusicas: res.data.result.tracks })
    })
    .catch((err) => {
      alert('Erro ao mostrar músicas! Tente novamente!')
    })
}

  


  render () {
  return (
    <DivInterna>
      <h3>Adicione a sua música</h3>
      <CardLista>
        
      <input
      placeholder="Nome da música"
      onChange={this.handleNomeMusica}
      value= {this.state.nomeMusica}              
      />
              
      <input
      placeholder="Nome do artista ou banda"
      onChange={this.handleArtistaMusica}
      value= {this.state.artistaMusica}
      />

      <input
      placeholder="URL da música"
      onChange={this.handleUrlMusica}
      value= {this.state.urlMusica}
      />

      <button onClick={this.adicionaMusica}> Adicionar</button>

      </CardLista>

    </DivInterna>
  );
}
}

export default AdicionarMusica;
