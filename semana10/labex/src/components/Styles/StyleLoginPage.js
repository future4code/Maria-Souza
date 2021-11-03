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

export const ContainerLogin = styledComponentsCjs.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  background-color: #673ab7;
  width: 15rem;
  border-radius: 2rem;
  padding: 2rem;
`

export const ContainerCabecalho = styledComponentsCjs.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #000000;
border-radius: 2rem;
margin-top: 2rem;
`

export const InputStyle = styledComponentsCjs.input `
    padding: 1rem;
    border-radius: 1rem;
    margin: 0.5rem;
    border: none;
`