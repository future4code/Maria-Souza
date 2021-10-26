import React from "react"
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/Urls'
import { ScreenContainer, RecipeContainer, RecipeImage } from "./Styled"
import Typography from '@mui/material/Typography'


const RecipeDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]

    return (
        <ScreenContainer>
           {recipe &&
            <RecipeContainer>
                <RecipeImage src={recipe.image}/>
                <Typography 
                color={'primary'} 
                variant={'h5'} 
                align={'center'}>
                    {recipe && recipe.title}
            </Typography>
            <Typography align={"justify"} marginTop={"1rem"}>
                {recipe.description}
            </Typography>
            </RecipeContainer>}
        </ScreenContainer>
    )
}

export default RecipeDetailPage