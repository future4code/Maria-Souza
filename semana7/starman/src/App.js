import React from "react";
import styled from "styled-components";
import axios from "axios";
import Logo from '../src/logo.gif'
import Audio from '../src/sound.mp3'


const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Logotipo = styled.div `
  margin: 10px;
`

const Planetas = styled.div `
  display: flex;
  justify-content: center;
  align-content: center;
  @keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(20px);
	}
	100% {
		transform: translatey(0px);
	}
}
  img {
    transform: translatey(0px);
	  animation: float 4s ease-in-out infinite;
    width: 270px;
  }
`

const AudioControls = styled.audio `
  height: 20px;
`



class App extends React.Component {

  state = {
    arrayDePlanetas: [],
    imagensPlanetas: ""
    }

  componentDidMount() {
    this.pegarInfoDePlanetas()
  }

  pegarInfoDePlanetas = () => {
    axios
    .get("https://api-solar-system.herokuapp.com/planets")
    .then((res) => {
      this.setState({ arrayDePlanetas: res.data})
    })
    .catch((err) => {
    })
  }

  pegarImagensPlanetas = async (event) => {
    const image = event.target.value
    const res = await axios
    .get(`${image}`)
    this.setState({ imagensPlanetas: event.target.value })
  }

  render () {
    const listaPlanetas = this.state.arrayDePlanetas.map((imagem) => {
      return (
        <option key={imagem.id} value={imagem.image}>
          {imagem.name} - ({imagem.features.temperature})
        </option>
      )
    })
    return (
      <MainContainer>
        <Logotipo>
        <img src={Logo} alt="Logotipo" />
        </Logotipo>
        <AudioControls src={Audio} controls/>
        <h3>Selecione o seu destino, astronauta.</h3>
        <select onChange={this.pegarImagensPlanetas}>
          <option></option>
          {listaPlanetas}
        </select><br/><br/>
        <Planetas>
        {this.state.imagensPlanetas && 
        <img src={this.state.imagensPlanetas} alt="Imagem do planeta"></img> 
        }
      </Planetas>
      </MainContainer>
    )
  }
}

export default App
