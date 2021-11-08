import { Container, TarotContainer } from "./Styled"
import Button from '@mui/material/Button'
import { goToHome } from '../../route/Coordinator'
import { useHistory } from "react-router"
import { styled } from '@mui/material/styles'
import { useEffect, useContext } from 'react'
import Context from '../../global/Context'
import Cards from '../../components/Cards/Cards'
import Typography from '@mui/material/Typography'

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

export const HomePage = (props) => {
  const history = useHistory()
  const { states, setters, requests } = useContext(Context)

	useEffect (() => {
		requests.getAllCards()
	}, [])

    return (
        <Container>
          <StyledButton 
            size="large" 
            onClick={() => goToHome(history)} 
            variant="outlined"
          >
            Jogar
        </StyledButton>
        <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: '2em', sm: '2em' }, 
            color: '#212f7f', marginBottom: '1rem',
            marginTop: '1rem' }}
            >
              Baralho
        </Typography>
          <TarotContainer>
            {states.cards.map((card => {
              return <Cards 
                key={card.name}
                name={card.name}
                image={card.image}
              />
            }))}        
        </TarotContainer>
        </Container>
    )
}

export default HomePage