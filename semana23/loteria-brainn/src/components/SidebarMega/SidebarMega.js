import * as C from './styles'
import Background from '../../assets/Sidebar-megasena.svg'
import Logo from '../../assets/Logo_Sena.svg'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import BASE_URL from '../../constants/Url'

export const Sidebar = () => {
    const navigate = useNavigate()
    const [initialDraws, setInitialDraws] = useState([])
    const [drawsID, setDrawsID] = useState("")
    const [draws, setDraws] = useState([])
    const date = new Date(draws.data)
    const newDate = date.toLocaleDateString("pt-br", { timeZone: "UTC" })
  
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
    }, [initialDraws])
  
    useEffect(() => {
      if (drawsID) {
        getDrawsByID(drawsID)
      }
    }, [drawsID])
    
    const handleSelect = (event) => {
        navigate(`/${event.target.value}`)
    }

    return (
        <C.Container>
            <C.BGContainer>
            <img src={Background} alt="Background" />
            </C.BGContainer>
            <C.LogoContainer>
            <img src={Logo} alt="Logo" />
            </C.LogoContainer>
            <C.TitleContainer>
                MEGA-SENA
            </C.TitleContainer>
            <C.SelectContainer>
            <select onChange={handleSelect}>
                <option value="">SELECIONE</option>
                <option value="megasena">MEGA-SENA</option>
                <option value="quina">QUINA</option>
                <option value="lotofacil">LOTOF??CIL</option>
                <option value="lotomania">LOTOMANIA</option>
                <option value="timemania">TIMEMANIA</option>
                <option value="diadesorte">DIA DE SORTE</option>
            </select>
            </C.SelectContainer>
            <C.DrawContainer>
                Concurso
            </C.DrawContainer>
            <C.DrawDataContainer>
            {draws.id} - {date && newDate}
            </C.DrawDataContainer>
        </C.Container>
    )
}

export default Sidebar