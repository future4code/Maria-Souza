import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'


const CardStyle = styled(CardContent)(({ theme }) => ({
    backgroundColor: '#673ab7',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    borderRadius: '1rem',
    width: '20rem',
    margin: '0.5rem'
  }))

 const Cards = (props) => {

  return (
  <React.Fragment>
    <CardStyle>
      <Typography sx={{ fontSize: 16 }}>
        <b>Nome:</b> <i>{props.trips.name}</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Descrição:</b> <i>{props.trips.description}</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Planeta:</b> <i>{props.trips.planet}</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Duração:</b> <i>{props.trips.durationInDays}</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Data:</b> <i>{props.trips.date}</i>
      </Typography>
      
    </CardStyle>
  </React.Fragment>
)}

 const render = () => {

  return (
  <Box sx={{ minWidth: 275, maxWidth: 370 }}>
      <Card variant="outlined">{Cards}</Card>
    </Box>
  )
}

export default Cards