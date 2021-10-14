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

const card = (
  <React.Fragment>
    <CardStyle>
      <Typography sx={{ fontSize: 16 }}>
        <b>Nome:</b> <i>Viagem de verão</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Descrição:</b> <i>Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite.</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Planeta:</b> <i>Vênus</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Duração:</b> <i>51</i>
      </Typography>

      <Typography sx={{ fontSize: 16 }}>
      <b>Data:</b> <i>2021-10-21</i>
      </Typography>
      
    </CardStyle>
  </React.Fragment>
)

export default function Cards() {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 370 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}