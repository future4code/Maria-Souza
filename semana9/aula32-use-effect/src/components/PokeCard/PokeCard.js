import React, {useEffect, useState} from "react"
import axios from "axios"
import './StylePokeCard.css'

export default function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
      pegaPokemon(props.pokemon)
    }, [props.pokemon])
  
    const pegaPokemon = nomeDoPokemon => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${nomeDoPokemon}`)
        .then(res => {
          setPokemon(res.data)
        })
        .catch(err => {
          alert("Ocorrou um erro! Tente novamente.")
        })
    }
  
    return (
          <div>
           <div className="Texto">
           <b>Name:</b> {pokemon.name}<br/>
           <b>Type:</b> {pokemon.types && <i>{pokemon.types[0].type.name}</i>}
           </div>
           {pokemon.sprites && (
             <img src={pokemon.sprites.front_default} alt={pokemon.name} />
           )}
         </div>
      )
    }

