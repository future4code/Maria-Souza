import styled from "styled-components"

export const MainContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
`

export const Caixinha = styled.div `
    border: 2px solid #FF5757;
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;
    width: 350px;
    height: 450px;
    background-color: white;
`

export const AlinhaBotoes = styled.div `
    display: flex;
    justify-content: center;
    align-content: center;
    
    button {
        padding: 0.5rem 0.5rem;
        border-radius: 0.5rem;
        margin: 0 5px 0 5px;
        border: 1px solid #FF5757;
        font-family: Roboto;
        font-weight: 500;
        background-color: #FFE5E1;

        :active {
        background-color: #FF5757;
        border: 1px solid #FFE5E1;
        color: white;

        }
    }
`