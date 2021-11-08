import { Container, ContainerImg } from "./Styled"
import Button from '@mui/material/Button'
import { goToHome } from '../../route/Coordinator'
import { useHistory } from "react-router"
import { styled } from '@mui/material/styles'
import Main from '../../assets/tarot.png'

export const StyledButton = styled(Button)(({ theme }) => ({
  '&.Mui-selected, &.css-18gz5c0-MuiButtonBase-root-MuiBottomNavigationAction-root, &:hover': {
    borderColor: '#212f7f',
    color: '#212f7f',
    backgroundColor: '#FFFFFF'
  },
  color: '#FFFFFF',
  backgroundColor: '#212f7f',
  border: 'none'
}))

export const SplashPage = () => {
    const history = useHistory()
    return (
        <Container>
          <ContainerImg>
            <img
              src={Main}
              alt="Main"
            />
            </ContainerImg>
              <StyledButton 
                size="large" 
                onClick={() => goToHome(history)} 
                variant="outlined"
              >
                Veja o seu futuro
              </StyledButton>
        </Container>
    )
}

export default SplashPage