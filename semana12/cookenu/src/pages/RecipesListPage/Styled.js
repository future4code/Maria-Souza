import styled from 'styled-components'
import Fab from '@mui/material/Fab'

export const RecipeListContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.5rem;
`

export const AlignLogo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`

export const AddRecipeButton = styled(Fab) `
    position: fixed !important;
    right: 1rem;
    bottom: 1rem;
    z-index: 3;
`