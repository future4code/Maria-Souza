import React, { useState, useEffect } from "react"
import axios from "axios"
import Yes from '../imgs/yes.png'
import No from '../imgs/no.png'
import { Aceitar,  BotoesCoracao,  Recusar, ContainerTela } from "./EstiloTelaMatch"

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
              <ContainerTela>
              Nome: {listaDePerfis.name}<br/>
              Idade: {listaDePerfis.age}<br/>
              Descrição: {listaDePerfis.bio}<br/><br/>
              <img src={listaDePerfis.photo} alt="Foto do perfil"/>
              <BotoesCoracao>
              <Recusar option="false" onClick={()=> darMatch(false)}><img src={No} alt="" /></Recusar>
              <Aceitar option="true" onClick={()=> darMatch(true)}><img src={Yes} alt=""/></Aceitar>
              </BotoesCoracao>
              
              </ContainerTela>
              )
      }
      return (
          <div>
              {renderizarTela()}
            </div>
      )
            }

