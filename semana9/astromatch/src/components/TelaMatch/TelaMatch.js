import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"


const Estiliza = styled.div `
    img {
        width: 120px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export default function TelaMatch(props) {
    
      const [listaDePerfis, setListaDePerfis] = useState({})
      const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-souza-maryam/person"
    
      useEffect (() => {
        pegaPerfil(props.listaDePerfis)
      }, [props.listaDePerfis])
    
        const pegaPerfil = () => {
        axios
        .get (url)
        .then((res) => 
            setListaDePerfis(res.data.profile),
        )
        .catch((err) => 
            alert("Você chegou ao fim da lista de perfis! Vá na sua lista de matches e clique em limpar para resetar. =)")
        )
      }

      const darMatch = (match) => {
        const headers = "Content-Type: application/json"  
        const body = {
              id: listaDePerfis.id,
              choice: match
          }
        axios
        .post ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-souza-maryam/choose-person",
        body, headers)
        .then((res) => 
            pegaPerfil()
        )
        .catch((err) => 
            alert("Ocorreu um erro! Tente novamente.")
        )
      }
     
     const renderizarTela = () => {
              return (
                  <div>
              Nome: {listaDePerfis.name}<br/>
              Idade: {listaDePerfis.age}<br/>
              Descrição: {listaDePerfis.bio}<br/>
              <img src={listaDePerfis.photo} alt="Foto do perfil"/><br/>
              <button option="false" onClick={()=> darMatch(false)}>Recusar</button><br/>
              <button option="true" onClick={()=> darMatch(true)}>Aceitar</button>
                  </div>
              )
      }
      return (
          <Estiliza>
              {renderizarTela()}
          </Estiliza>
      )
            }

