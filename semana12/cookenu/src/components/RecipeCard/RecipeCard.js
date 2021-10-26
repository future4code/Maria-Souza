import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ScreenContainer } from './Styled';

export const RecipeCard = (props) => {
  return (
    <ScreenContainer>
    <Card sx={{ minWidth: 250, maxWidth: 250, margin: '1rem' }}>
      <CardMedia
        sx={{ minHeight: 200, maxHeight: 200}}
        component="img"
        alt={props.title}
        image={props.image}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.title}
        </Typography>
      </CardContent>
    </Card>
    </ScreenContainer>
  )
}

export default RecipeCard