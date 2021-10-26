import React from "react"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/Urls'
import { RecipeListContainer, AddRecipeButton, AlignLogo } from "./Styled"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import RecipesLogo from '../../assets/recipes.png'
import { goToAddRecipes, goToRecipeDetail } from "../../routes/Coordinator"
import { useHistory } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'

const RecipesListPage = () => {
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    const history = useHistory()
    useProtectedPage()

    const onClickCard = (id) => {
        goToRecipeDetail(history, id)
    }

    const recipeCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClickCard(recipe.recipe_id)}
                />
        )
    })

    return (
        <div>
        <AlignLogo>
            <img src={RecipesLogo} alt="Receitas" />
            </AlignLogo>
        <RecipeListContainer>
            {recipeCards.length > 0 ? recipeCards : <Loading />}
        <AddRecipeButton
            color={"primary"}
            onClick={() => goToAddRecipes(history)}
            >
            <AddCircleRoundedIcon
            fontSize="large" />
        </AddRecipeButton>
        
        </RecipeListContainer>
        </div>
    )
}

export default RecipesListPage