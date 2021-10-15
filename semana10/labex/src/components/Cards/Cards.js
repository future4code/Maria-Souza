import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'


const CardStyle = styled(CardContent)(({ theme }) => ({
    backgroundColor: '#673ab7',
    color: '#FFFFFF',
    fontFamily: 'Roboto'
  }))

const card = (props) => (
  <React.Fragment>
    <CardStyle>
      <Typography sx={{ fontSize: 16 }}>
        <b>Nome:</b> {props.trip.name}
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Descrição:</b> <i>{props.trip.description}</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Planeta:</b> <i>{props.trip.planet}</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Duração:</b> <i>{props.trip.durationInDays}</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Data:</b> <i>{props.trip.date}</i>
      </Typography>
      
    </CardStyle>
  </React.Fragment>
)

const Cards = () => {

  return (
    <Box sx={{ minWidth: 275, maxWidth: 370 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}

export default Cards