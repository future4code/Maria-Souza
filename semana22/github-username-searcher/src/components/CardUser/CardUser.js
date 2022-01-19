import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import { GlobalContext } from '../../context/GlobalContext'
import { ContainerTop, 
         ContainerFollows,
         ContainerRepo } from './Styles'

const CustomizedAvatar = styled(CardHeader)(({ theme }) => ({
    '& .MuiCardHeader-title': {
      fontSize: 'larger'
    }
  }))

export const CardUser = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <ContainerTop>
      <CustomizedAvatar
        avatar={
          <Avatar
            src={props.url}
            sx={{ bgcolor: red[500], width: '3.5rem', height: '3.5rem' }} aria-label="avatar">
          </Avatar>
        }
        title="Nome"
        // title={props?.name}
        subheader="Último login"
        // subheader={props?.login}
      />
      </ContainerTop>
      <ContainerFollows>
      <Typography sx={{lineHeight: '1rem'}} variant="overline" color="text.primary">
          Followers: 129
          {/* {props?.followers} */}
      </Typography>
      <Typography sx={{lineHeight: '1rem'}} variant="overline" color="text.primary">
          Following: 293
          {/* {props?.following} */}
      </Typography>
      </ContainerFollows>
      <CardContent>
        <Typography sx={{textAlign: 'justify'}} variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at tortor augue. Integer iaculis pretium arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla in erat est. Sed elementum mi nec dui molestie facilisis. Aliquam ac lobortis arcu.
          {/* {props?.bio} */}
        </Typography>
      </CardContent>
      <ContainerRepo>
      <Typography sx={{lineHeight: '1rem'}} variant="overline" color="text.primary">
        Repositories: 23
        {/* {props?.repos} */}
    </Typography>
    </ContainerRepo>
    </Card>
  )
}

export default CardUser