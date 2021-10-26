import React from "react"
import { ScreenContainer, AlignLogo } from "./Styled"
import AddRecipesForm from "./AddRecipesForm"
import AddRecipeLogo from '../../assets/addrecipe.png'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'

const AddRecipesPage = ({setRightButtonText}) => {
    useProtectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <AlignLogo>
            <img src={AddRecipeLogo} alt="Adicione a sua receita" />
            </AlignLogo>
            <AddRecipesForm
                setRightButtonText={setRightButtonText}

            />
        </ScreenContainer>
    )
}

export default AddRecipesPage