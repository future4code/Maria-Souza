import * as C from './styles'
import axios from 'axios'
import { useState, useEffect } from 'react'
import BASE_URL from '../../constants/Url'
import DrawNumbers from '../DrawNumbers/DrawNumbers'

export const Quina = () => {
    const [initialDraws, setInitialDraws] = useState([])
    const [drawsID, setDrawsID] = useState("")
    const [draws, setDraws] = useState([])
  
    const getInitialData = () => {
      axios
        .get(`${BASE_URL}/loterias-concursos`)
        .then((res) => {
          setInitialDraws(res.data[1])
          
          if (initialDraws) {
            setDrawsID(res.data[1].concursoId)
          }
        })
        .catch((error) => {
          window.alert("Ocorreu um erro! Tente novamente.")
        })
    }
  
    const getDrawsByID = (id) => {
      axios
        .get(`${BASE_URL}/concursos/${id}`)
        .then((res) => {
          setDraws(res.data)
        })
        .catch((error) => {
          window.alert("Ocorreu um erro! Tente novamente.")
        })
    }
  
    useEffect(() => {
      getInitialData()
    }, [initialDraws])
  
    useEffect(() => {
      if (drawsID) {
        getDrawsByID(drawsID)
      }
    }, [drawsID])

    return(
      <div>
            <C.ContainerNumbers>
              <ul>
                {draws.numeros && draws.numeros.map((number) => (
                <DrawNumbers 
                  key={number}
                  numbers={number} 
                  />
                  ))
                }
              </ul>
            </C.ContainerNumbers>
      </div>
    )
}

export default Quina