import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Context from '../../global/Context'
import { useContext} from 'react'
import { CardContainer, SelectedCardContainer } from './Styled'
import Modal from '@mui/material/Modal'

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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    border: '2px solid #212f7f',
    boxShadow: 24,
    borderRadius: '1rem',
    p: 3,
  };

  const PickCard = (props) => {
  const {states, setters, requests} = useContext(Context)
  const [open, setOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState([])
  
  const handleOpen = () => 
    setOpen(true)

  const handleClose = () => {
    setOpen(false)
    window.location.reload()
  }

  const clickCard = () => {
    handleOpen()
  }

  return (
  <React.Fragment>
    <CardStyle>
      <Typography>
        <CardContainer onClick={clickCard}
          src={`${states.cardBack}`} 
          alt="Carta" 
        />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', marginBottom: '0.5rem', color: '#212f7f'}}>
              {props.name}
            </Typography>
              <Typography sx={{ color: '#212f7f', textAlign: 'justify' }}>
              <SelectedCardContainer>
                <img 
                  src={`${states.cardFront}/${props.image}`} 
                  alt="Carta" 
                /> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor euismod sem, id egestas tellus. Cras tincidunt malesuada mollis. Pellentesque mollis velit erat.
              </SelectedCardContainer>
                <Typography id="modal-modal-description" sx={{ mt: 0.5 }}>
                  Maecenas sagittis magna elit, vitae dictum enim rutrum nec. In mollis eros posuere lacus lobortis placerat scelerisque quis nisl. Duis nisl tortor, pellentesque in fermentum in, tempor nec enim.
                </Typography>
            </Typography>
          </Box>
         </Modal>
      </Typography>
    </CardStyle>
  </React.Fragment>
)}

 const render = () => {
  return (
  <Box sx={{ minWidth: 275, maxWidth: 275 }}>
      <Card variant="outlined">{PickCard}</Card>
    </Box>
  )
}

export default PickCard