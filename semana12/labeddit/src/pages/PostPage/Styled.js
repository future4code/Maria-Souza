import styled from 'styled-components'

export const ScreenContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    font-family: 'Roboto';
`

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 40rem;
    min-width: 10rem;
`

export const AlignLogo = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem;

    img {
        width: 15rem;
    }
`

export const AlignVotes = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`