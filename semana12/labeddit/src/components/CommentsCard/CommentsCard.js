import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ScreenContainer, Username, AlignVotes } from './Styled'
import { convertDate } from '../../constants/ConvertDate'
import { Button } from "@mui/material"
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'


export const PostCard = (props) => {

  return (
    <ScreenContainer>
    <Card sx={{ minWidth: 320, maxWidth: 320, margin: '1rem', border: '1px solid #737373' }}>
      <CardContent>
        <Typography align="justify" component="div">
          {props.body}
        </Typography>
      </CardContent>
     <Username>
        <Typography fontSize="small" align={"center"} marginTop={"1rem"} component="div">
          <b>{props.username}</b> ● {convertDate(props.createdAt)} ● Votos: ( {props.userVote} )
        </Typography>
        </Username>
        <AlignVotes>
        <Button
                color="primary"
                size="small"
                sx={{ marginRight: '1rem'}}
                variant="outlined"
                endIcon={<ArrowUpwardRoundedIcon />}
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
    </Card>
    </ScreenContainer>
  )
}

export default PostCard