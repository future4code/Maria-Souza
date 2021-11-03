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
  justify-content: left;
  align-items: left;
  margin-top: 3rem;
  padding: 2rem;
  background-color: #673ab7;
  width: 15rem;
  border-radius: 2rem;

  select {
      padding: 0.5rem;
      border-radius: 0.5rem;
      margin: 0.5rem 0 0.5rem;

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

export const InputForm = styledComponentsCjs.input `
    padding: 0.7rem;
    margin: 0.5rem 0 0.5rem;
    border-radius: 0.5rem;
    border: none;
`