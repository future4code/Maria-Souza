import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Estiliza = styled.div `
img {
    width: 60px;
    border-radius: 5px;
}
    display: grid;
    grid-template-rows: 3fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    font-size: x-small;
`

export const LimpaLista = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const BotaoLimpar = styled.button `
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
`
