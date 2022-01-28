import * as C from './styles'
import axios from 'axios'
import { useState, useEffect } from 'react'
import BASE_URL from '../../constants/Url'
import DrawNumbers from '../DrawNumbers/DrawNumbers'

export const Mega = () => {
    const [initialDraws, setInitialDraws] = useState([])
    const [drawsID, setDrawsID] = useState("")
    const [draws, setDraws] = useState([])
  
    const getInitialData = () => {
      axios
        .get(`${BASE_URL}/loterias-concursos`)
        .then((res) => {
          setInitialDraws(res.data[0])
          
          if (initialDraws) {
            setDrawsID(res.data[0].concursoId)
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
      if (drawsID) {
        getDrawsByID(drawsID)
      }
    }, [initialDraws], [drawsID])
  
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

export default Mega