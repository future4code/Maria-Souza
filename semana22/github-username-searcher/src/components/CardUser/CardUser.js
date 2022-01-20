import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { ContainerTop, 
         ContainerFollows,
         ContainerRepo } from './Styles'
import { useHistory } from 'react-router-dom'

const CustomizedAvatar = styled(CardHeader)(({ theme }) => ({
    '& .MuiCardHeader-title': {
      fontSize: 'larger'
    }
  }))

export const CardUser = (props) => {
  const history = useHistory()
  const handleClickOn = route => history.push(route)

  return (
    <Card sx={{ width: '20rem' }}>
    <ContainerTop>

      <CustomizedAvatar
        avatar={
          <Avatar
            src={props?.url}
            alt={props?.altText}
            title={props?.titleText}
            sx={{ width: '3.5rem', height: '3.5rem' }} aria-label="avatar">
          </Avatar>
        }
        title={props?.nameText}
        subheader={props?.loginText}
      />
      </ContainerTop>
      <ContainerFollows>
      <Typography sx={{lineHeight: '1rem'}} variant="overline" color="text.primary">
          Followers: {props?.followersText}
      </Typography> 
      <Typography sx={{lineHeight: '1rem'}} variant="overline" color="text.primary">
          Following: {props?.followingText}
      </Typography>
      </ContainerFollows>
      <CardContent>
        <Typography sx={{textAlign: 'justify', overflow: 'hidden'}} variant="body2" color="text.secondary">
          {props?.bioText}
        </Typography>
      </CardContent>
      <ContainerRepo onClick={() => handleClickOn("/repositories")}>
      <Typography sx={{lineHeight: '1rem'}} variant="overline" color="text.primary">
        Repositories: {props?.reposText}
    </Typography>
    </ContainerRepo>
    </Card>
  )
}

export default CardUser