import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ContainerTop,
         ContainerRepo,
         ContainerButton 
          } from './Styles'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'

export const CardRepos = (props) => {  
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    const openRepo = (html_url) => {
      window.open(html_url, '_blank').focus()
    }

  return (
      <div>
    <Card sx={{ width: '20rem', height: '25rem', overflowY: 'scroll' }}>
    <ContainerTop>
    <Typography sx={{marginTop: '1rem'}} variant="h5" color="text.primary">
        {(props.name)?.split(" ")[0]}'s repositories
    </Typography>
      </ContainerTop>
      <CardContent>
        <Typography sx={{textAlign: 'justify', overflow: 'hidden'}} variant="body2" color="text.secondary">
          {(props?.repos).map(rep => (
              <ContainerRepo onClick={() => openRepo(rep?.html_url)} key={rep?.id}>
                  <h2>{rep?.name}</h2>
                  <p>{rep?.description}</p>
              </ContainerRepo>
          ))}
        </Typography>
      </CardContent>
    </Card>
    <ContainerButton>
    <Button onClick={goBack} variant="contained" color={"secondary"} startIcon={<ArrowBackIosRoundedIcon />}>
        Go back
      </Button>
      </ContainerButton>
    </div>
  )
}

export default CardRepos