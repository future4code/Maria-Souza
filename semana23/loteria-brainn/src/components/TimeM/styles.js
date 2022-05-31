import styled from "styled-components"

export const ContainerNumbers = styled.div `
  display: flex;
  flex-direction: row;
  margin-top: 15rem;
  margin-left: 27rem;
  
  ul {
    display: flex;
    flex-direction: row;
    margin-top: 0rem;
    margin-left: -0.8rem;
    margin-right: 1.25rem;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 1.68rem;
    line-height: 2.06rem;
    color: #333333;
  }

  @media (max-width: 800px) {
    margin-top: 22rem;
    margin-left: 0;
    ul {
      right: 0%;
    }
  }

`