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
  width: 300px;
`


class ListaPlaylist extends React.Component {

  state = {
    listasDePlaylists: [],
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
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios
    .get(url, headers)
    .then((res) => {
      this.setState({ listasDePlaylists: res.data.result.list })
    })
    .catch((err) => {
      alert('Erro ao mostrar playlists! Tente novamente!')
    })
}

  deletePlaylist = (id) => {
    const url =
    `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
    .delete(url, headers)
    .then((res) => {
      this.getAllPlaylists()
      return alert('Playlist deletada com sucesso!')
    })
    .catch((err) => {
      return alert('Erro ao deletar playlist! Tente novamente!')
    })
}

  selecionaPlaylist = (id) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
  axios
  .get(url, headers)
  .then((res)=>{
    this.setState({
      listaDeMusicas: res.data.result.tracks,
      idPlaylists: res.data.result.tracks.id
    })
  })
  .catch((err)=>{
    return alert('Erro ao acessar playlist! Tente novamente!')
  })
}

  adicionaMusica = () => {
  const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylists}/tracks` 
  const body = { 
    name: `${this.state.nomeMusica}`, 
    artist: `${this.state.artistaMusica}`,
    url: `${this.state.urlMusica}`
  }
  axios.post(URL, body, headers)
  .then((res)=>{
    this.selectPlay(this.state.idPlaylists)
    this.setState({
      nomeMusica: "",
      artistaMusica: "",
      urlMusica: ""
      })
  })
  .catch((err)=>{
    return alert('Erro ao adicionar música! Tente novamente!')
    })
}

  render () {

    const mostraPlaylists = this.state.listasDePlaylists.map((playlist) => {
      return <CardLista key={playlist.id}> {playlist.name} <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
      </CardLista>
    })

  return (
    <DivInterna>

    <h3>Lista de playlists</h3>

    {mostraPlaylists}

    <br/>
    <button onClick={this.props.irParaCriarPlaylist}>Voltar</button>
    </DivInterna>
  );
}
}

export default ListaPlaylist;
