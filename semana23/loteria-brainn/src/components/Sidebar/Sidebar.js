import * as C from './styles'
import Background from '../../assets/Sidebar.svg'
import Logo from '../../assets/Logo_Sena.svg'

export const Sidebar = () => {
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
            <select>
                <option value="0">SELECIONE</option>
                <option value="0">MEGA-SENA</option>
                <option value="1">QUINA</option>
                <option value="1">LOTOFÁCIL</option>
                <option value="1">LOTOMANIA</option>
                <option value="1">TIMEMANIA</option>
                <option value="1">DIA DE SORTE</option>
            </select>
            </C.SelectContainer>
            <C.DrawContainer>
                Concurso
            </C.DrawContainer>
            <C.DrawDataContainer>
                4321 - 21/01/22
            </C.DrawDataContainer>
        </C.Container>
    )
}

export default Sidebar