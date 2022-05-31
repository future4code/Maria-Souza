import * as C from './styles'
import Background from '../../assets/Sidebar-home.svg'
import Logo from '../../assets/Logo_Sena.svg'
import { useNavigate } from 'react-router-dom'

export const Sidebar = () => {
    const navigate = useNavigate()

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
                LOTERIAS
            </C.TitleContainer>
            <C.SelectContainer>
            <select onChange={handleSelect}>
                <option value="">SELECIONE</option>
                <option value="megasena">MEGA-SENA</option>
                <option value="quina">QUINA</option>
                <option value="lotofacil">LOTOFÁCIL</option>
                <option value="lotomania">LOTOMANIA</option>
                <option value="timemania">TIMEMANIA</option>
                <option value="diadesorte">DIA DE SORTE</option>
            </select>
            </C.SelectContainer>
            <C.DrawContainer>
                Concurso
            </C.DrawContainer>
            <C.DrawDataContainer>
                Número - Data
            </C.DrawDataContainer>
        </C.Container>
    )
}

export default Sidebar