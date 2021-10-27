import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ScreenContainer, Username, Features, AlignFeatures } from './Styled';
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router';
import PostingCardForm from './PostingCardForm'



export const PostingCard = (setRightButtonText) => {
    useProtectedPage()
    const history = useHistory()

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