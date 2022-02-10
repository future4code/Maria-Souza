import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ContainerText = styled.div `
    position: absolute;
    bottom: 1rem;
    margin-left: 35rem;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.06rem;
    color: #000000;
    width: 40.62rem;
    height: 1.25rem;

    @media (max-width: 800px) {
        display: flex;
        position: absolute;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1rem;
        text-align: center;
        width: 100vw;
        right: 0%;
        bottom: 2rem;
        margin-left: 10rem;
        
    }
`