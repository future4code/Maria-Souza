import styled from "styled-components"

export const Container = styled.div `
    position: absolute;
    left: 53.62%;
    right: 11.75%;
    top: 45.17%;
    bottom: 8.98%;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: #000000;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
        line-height: 1.12rem;
        left: 0%;
        right: 0%;
        text-align: center;
    }
`