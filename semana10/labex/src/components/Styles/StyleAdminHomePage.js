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
  margin-top: 3rem;
  margin-bottom: 2rem;
  background-color: #673ab7;
  width: 15rem;
  border-radius: 2rem;
  padding: 1rem;

  a {
    color: #FFFFFF;
    text-decoration: none;
  }
  a:hover {
    color: #8561c5;
    transition: 500ms;
  }
  a:active {
    color: #000000;
  }
`

export const ContainerCabecalho = styledComponentsCjs.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    background-color: #000000;
    border-radius: 2rem;
`