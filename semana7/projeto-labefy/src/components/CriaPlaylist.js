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


class CriaPlaylist extends React.Component {

  state = {
    playlist: ""
  }

  handleCriarPlaylist = (event) => {
    this.setState({ playlist: event.target.value })
  }

  createPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const body = {
      name: this.state.playlist
    }

    axios
    .post(url, body, headers)
    .then((res) => {
      this.setState({ playlist: "" })
      alert('Playlist criada com sucesso!')
    })
    .catch((err) => {
      alert('Erro ao cadastrar playlist! Tente colocar um nome diferente pois o nome que você inseriu pode ter sido cadastrado por outra pessoa.')
    })
  }

  render () {
  return (
    <DivInterna>
      <h3>Crie a sua playlist</h3>

      <input
          placeholder="Nome da playlist"
          value={this.state.playlist}
          onChange={this.handleCriarPlaylist}
        /><br/>

      <button onClick={this.createPlaylist}>Enviar</button><br/>

      <button onClick={this.props.irParaListaPlaylist}>Lista de Playlists</button>

    </DivInterna>
  );
}
}

export default CriaPlaylist;
