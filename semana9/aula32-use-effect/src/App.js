import React, { useEffect, useState } from "react"
import './styles.css'
import axios from "axios"
import PokeCard from "./components/PokeCard/PokeCard"
import Background from './components/imgs/pokedex.png'
import Logo from './components/imgs/logo.png'
import Audio from './components/imgs/audio.mp3'

const App = () => {

  const [listaDePokemons, setListaDePokemons] = useState([])
  const [nomeDosPokemons, setNomeDosPokemons] = useState("")
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=151"


  useEffect (() => {
    const pegaPokemons = () => {
      axios
        .get(url)
        .then((res) => 
        setListaDePokemons (res.data.results))
        .catch((err) => 
        alert("Ocorrou um erro! Tente novamente."))
      }
      pegaPokemons()
    }, [setListaDePokemons, url])

const mudaNomeDosPokemons = (event) => {
  setNomeDosPokemons(event.target.value)
}

  return (
    <div className="MainContainer">
      <img src={Logo} alt="Logotipo" className="Logotipo" />
      <div className="PokeDex">
        <img src={Background} alt="Background" className="Background"/>
        <div className="SelecionaPokemon">
      <select onChange={mudaNomeDosPokemons}>
        <option value={""}>Selecione um pokémon</option>
        {listaDePokemons.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      <div className="MostraPokemon">
      {nomeDosPokemons && <PokeCard pokemon={nomeDosPokemons} />}
      </div>
      </div>
    </div>
    <div className="PlayList">
    <audio src={Audio} controls/>
    </div>
    </div>
  )
}


export default App
