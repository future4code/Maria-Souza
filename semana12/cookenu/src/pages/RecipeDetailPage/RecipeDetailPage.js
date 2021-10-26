import React from "react"
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/Urls'
import { ScreenContainer, RecipeContainer, RecipeImage } from "./Styled"
import Typography from '@mui/material/Typography'
import Loading from '../../components/Loading/Loading'
import { Button } from "@mui/material"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { useHistory } from "react-router"


const RecipeDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]
    const history = useHistory()

    const goBack = () => {
        history.goBack()
  }

    return (
        <ScreenContainer>
           {recipe ?
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
            <Button
                color="primary" 
                size="large"
                variant="contained"
                sx={{ marginTop: '1rem', width: '7rem', alignSelf: 'center'}}
                onClick={goBack}
                endIcon={<ArrowBackRoundedIcon />}
            >
                Voltar
            </Button>
            </RecipeContainer>
            : <Loading />}
        </ScreenContainer>
    )
}

export default RecipeDetailPage