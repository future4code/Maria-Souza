import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ScreenContainer } from './Styled'
import CommentPostForm from './CommentPostForm'

export const PostingCard = (setRightButtonText) => {

  return (
    <ScreenContainer>
    <Card sx={{ minWidth: 320, maxWidth: 320, margin: '1rem', border: '1px solid #737373' }}>
      <CardContent>
        <Typography color="primary" variant="h4" component="div">
          Comente
          </Typography>
      <CommentPostForm
          setRightButtonText={setRightButtonText}
      />
      </CardContent>
    </Card>
    </ScreenContainer>
  )
}

export default PostingCard