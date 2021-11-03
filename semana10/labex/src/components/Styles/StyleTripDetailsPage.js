import styledComponentsCjs from "styled-components"

export const Container = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100%;
`

export const ContainerButtons = styledComponentsCjs.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`

export const ContainerTrips = styledComponentsCjs.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerCabecalho = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    background-color: #000000;
    border-radius: 2rem;
    width: 20rem;
`