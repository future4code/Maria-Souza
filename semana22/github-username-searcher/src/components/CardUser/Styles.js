import styledComponents from "styled-components"

export const ContainerTop = styledComponents.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ContainerFollows = styledComponents.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem 0 3rem;
`

export const ContainerRepo = styledComponents.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    &:hover {
        cursor: pointer;
    }
`