import styledComponentsCjs from "styled-components"

export const Container = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    margin-top: 2rem;
`

export const TarotContainer = styledComponentsCjs.div `
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`