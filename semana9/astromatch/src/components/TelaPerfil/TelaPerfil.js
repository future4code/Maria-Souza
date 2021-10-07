import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
// import Carregando from '../Loader/Carregando'

const Estiliza = styled.div `
    img {
        width: 60px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export default function TelaPerfil(props) {
    
      const [matches, setMatches] = useState([])
      const [loading, setLoading] = useState(false)
      const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-souza-maryam/matches"
    
      useEffect (() => {
        pegaMatch(props.matches)
      }, [props.matches])

      const pegaMatch = () => {
        axios
        .get (url)
        .then((res) => 
            setMatches(res.data.matches),
            setLoading(true)
        )
        .catch((err) => 
            alert("Ocorreu um erro!")
        )
      }
      const mostraMatches = matches.map((match) => {
          return (
              <div>
                  <p>{match.name}</p><br/>
                  <img src={match.photo} alt="Foto do perfil"/><br/>
              </div>
          )
      })

      const deletaMatches = () => {
        const headers = "Content-Type: application/json"
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-souza-maryam/clear"
        axios
        .put(url, headers)
        .then((res) =>
        pegaMatch(),
        alert("Você limpou a lista de matches! Volte a página principal para encontrar mais perfis!")
        )
        .catch((err) =>
        alert("Ocorreu um erro! Tente novamente.")
        )
      }

      useEffect(() => {
      }, [loading])

    //  const {carregaLoader} = loading 
      return (
          <Estiliza>
               <button onClick={deletaMatches}>Limpar lista</button>
              {mostraMatches}
              {/* {
                  carregaLoader ? mostraMatches() : <Carregando />
              } */}
          </Estiliza>
      )
    }

