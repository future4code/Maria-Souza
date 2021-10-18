import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerTela = styled.div `
    img {
        width: 9rem;
        border-radius: 1rem;
        align-content: center;
        }
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Poppins;
    line-height: 1.2rem;
    font-size: small;
`

export const BotoesCoracao = styled.div `
    display: flex;
    justify-content: space-between;
    align-content: center;
    position: fixed;
    margin-top: 20rem;
    
    img {
    width: 3rem;
    transition: transform .2s;
    filter: none;
    :hover {
    transform: scale(1.5);
    }
    :active {
    transform: scale(0.5);
    transition: transform .4s;
    }
}
`

export const Aceitar = styled.button `
    border: none;
    background-color: transparent;
    margin-top: 1rem;
    margin-left: 6rem;
    margin-right: 6rem;
`

export const Recusar = styled.button `
    border: none;
    background-color: transparent;
    margin-top: 1rem;
    margin-left: 6rem;
    margin-right: 6rem;
`