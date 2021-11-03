import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { ScreenContainer } from './Styled'
import useProtectedPage from '../../hooks/useProtectedPage'
import PostingCardForm from './PostingCardForm'

export const PostingCard = (setRightButtonText) => {
    useProtectedPage()

  return (
    <ScreenContainer>
    <Card sx={{ minWidth: 320, maxWidth: 320, margin: '1rem', border: '1px solid #737373' }}>
      <CardContent>
      <PostingCardForm
          setRightButtonText={setRightButtonText}
      />
      </CardContent>
    </Card>
    </ScreenContainer>
  )
}

export default PostingCard