import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ScreenContainer, Username, Features, AlignFeatures, AlignVotes } from './Styled'
import { convertDate } from '../../constants/ConvertDate'
import { Button } from "@mui/material"
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import { voteOnPost } from '../../services/Post'
import useForm from '../../hooks/useForm'
import { useParams } from "react-router"



export const PostCard = (props) => {

  const [form, onChange, clear] = useForm({ 
    direction: +1
  })
  const params = useParams()
  const id = params.id

  const onSubmitVote = (event) => {
      voteOnPost(form, id, clear)
  }

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
        Votos: ( {props.voteSum} ) ● Comentários: ( {props.commentCount} )
        </Features>
        </AlignFeatures>
        <AlignVotes>
        <Button
                color="primary"
                size="small"
                sx={{ marginRight: '1rem'}}
                variant="outlined"
                endIcon={<ArrowUpwardRoundedIcon />}
                onClick={onSubmitVote}
                >
                    Upvote
            
            </Button>
            <Button
                color="primary"
                size="small"
                variant="outlined"
                endIcon={<ArrowDownwardRoundedIcon />}
                >
                    Downvote
            
            </Button>
        </AlignVotes>
      </CardContent>
      <Username>
        <Typography fontSize="small">
          Enviado por {props.username} ● {convertDate(props.createdAt)}
        </Typography>
        </Username>
    </Card>
    </ScreenContainer>
  )
}

export default PostCard