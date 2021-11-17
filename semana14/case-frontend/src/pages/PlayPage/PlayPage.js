import { Container, TarotContainer } from "./Styled"
import Button from '@mui/material/Button'
import { goToHome } from '../../route/Coordinator'
import { useHistory } from "react-router"
import { styled } from '@mui/material/styles'
import { useEffect, useContext } from 'react'
import Context from '../../global/Context'
import PickCard from '../../components/PickCard/PickCard'
import Typography from '@mui/material/Typography'
import Loading from '../../pages/Loading/Loading'

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

export const PlayPage = (props) => {
  const history = useHistory()
  const { states, setters, requests } = useContext(Context)

	useEffect (() => {
		requests.getAllCards()
	}, [])

  const renderCards = states.cards.map((card) => {
    return (
        <PickCard 
          key={card.name}
          name={card.name}
          image={card.image}
        />            
      )
  })

    return (
        <Container>
          <StyledButton 
            size="large" 
            onClick={() => goToHome(history)} 
            variant="outlined"
          >
            Voltar
          </StyledButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 2, display: { xs: '2em', sm: '2em' }, 
              color: '#212f7f', marginBottom: '1rem',
              marginTop: '1rem', lineHeight: '1.4rem' }}
            >
              Mentalize a sua pergunta<br/>
               e clique em uma carta.
            </Typography>
          <TarotContainer>
            { renderCards.length > 0 ? renderCards : <Loading /> }     
          </TarotContainer>
        </Container>
    )
}

export default PlayPage