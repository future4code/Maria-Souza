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
    margin: '0.5rem'
  }))

 const CandidateCard = (props) => {

  return (
  <React.Fragment>
    <CardStyle>
      <Typography sx={{ fontSize: 16 }}>
        <b>Nome:</b> <i>{props.candidates.name}</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Idade:</b> <i>{props.candidates.age}</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>País:</b> <i>{props.candidates.country}</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Profissão:</b> <i>{props.candidates.profession}</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Motivo do interesse:</b> <i>{props.candidates.applicationText}</i>
      </Typography>
      
    </CardStyle>
  </React.Fragment>
)}

 const render = () => {

  return (
  <Box sx={{ minWidth: 275, maxWidth: 370 }}>
      <Card variant="outlined">{CandidateCard}</Card>
    </Box>
  )
}

export default CandidateCard