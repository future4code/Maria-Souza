import styled from "styled-components"

export const Container = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const StyleDrawNumbers = styled.li `
  background-color: #FFFFFF;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  margin: 0.5rem;
  font-size: 1.7rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 800px) {
    top: 0%;
    height: 2.75rem;
    width: 2.75rem;
    font-size: 1.2rem;
    margin: 1rem 0.5rem 0.5rem 0.5rem;
  }
`