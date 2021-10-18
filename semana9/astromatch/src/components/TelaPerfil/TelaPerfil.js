import React, { useState, useEffect } from "react"
import axios from "axios"
import { BotaoLimpar, Estiliza, LimpaLista, Container } from "./EstiloTelaPerfil"

export default function TelaPerfil(props) {
    
      const [matches, setMatches] = useState([])
      const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-souza-maryam/matches"
    
      useEffect (() => {
        pegaMatch(props.matches)
      }, [props.matches])

      const pegaMatch = () => {
        axios
        .get (url)
        .then((res) => 
            setMatches(res.data.matches),
        )
        .catch((err) => 
            alert("Ocorreu um erro!")
        )
      }
      const mostraMatches = matches.map((match) => {
          return (
              <div key={match.id}>
                  <i>{match.name}</i><br/>
                  <img src={match.photo} alt="Foto do perfil"/>
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
      return (
          <Container>
              <LimpaLista>
              <BotaoLimpar  
                onClick={deletaMatches}>
                Limpar lista
                </BotaoLimpar>
              </LimpaLista>

          <Estiliza>
              {mostraMatches}
          </Estiliza>
          </Container>
      )
    }

