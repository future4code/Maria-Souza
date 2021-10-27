import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ScreenContainer, Username, Features, AlignFeatures } from './Styled';
import { convertDate } from '../../constants/ConvertDate'

export const PostCard = (props) => {
  return (
    <ScreenContainer onClick={props.onClick}>
    <Card sx={{ minWidth: 320, maxWidth: 320, margin: '1rem', border: '1px solid #737373' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: "uppercase", color: "#FF5700" }}>
        {props.title}
        </Typography>
        <Typography align="justify" component="div">
          {props.body}
        </Typography>
        <AlignFeatures>
        <Features>
        ⬆️  - ⬇️  - 💬 ({props.commentCount})
        </Features>
        </AlignFeatures>
      </CardContent>
      <CardActions>
      <Username>
        <Typography fontSize="small">
          Enviado por u/{props.username} ● {convertDate(props.createdAt)}
        </Typography>
        </Username>
      </CardActions>
    </Card>
    </ScreenContainer>
  )
}

export default PostCard