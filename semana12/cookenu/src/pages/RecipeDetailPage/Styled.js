import styled from 'styled-components'

export const ScreenContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    font-family: 'Roboto';
`

export const RecipeContainer = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    min-width: 10rem;
`

export const RecipeImage = styled.img `
    max-width: 40rem;
    min-width: 10rem;
    border-radius: 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
`