import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Context from '../../global/Context'
import { useContext} from 'react'
import { CardContainer } from './Styled'

const CardStyle = styled(CardContent)(({ theme }) => ({
    backgroundColor: '#e3d5a5',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    borderRadius: '1rem',
    width: '12rem',
    margin: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }))

  const Cards = (props) => {
  const { states, setters, requests } = useContext(Context)

  return (
  <React.Fragment>
    <CardStyle>
      <Typography sx={{ fontSize: 16, color: '#212f7f' }}>
        <b>{props.name}</b>
      </Typography>
      <Typography>
        <CardContainer
          src={`${states.cardFront}/${props.image}`} 
          alt="Carta" 
        />
      </Typography>
    </CardStyle>
  </React.Fragment>
)}

 const render = () => {

  return (
  <Box sx={{ minWidth: 275, maxWidth: 275 }}>
      <Card variant="outlined">{Cards}</Card>
    </Box>
  )
}

export default Cards