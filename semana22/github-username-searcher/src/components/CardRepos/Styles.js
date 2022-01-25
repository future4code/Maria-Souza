import styledComponents from "styled-components"

export const ContainerTop = styledComponents.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ContainerRepo = styledComponents.div `
    width: 17rem;
    background: rgba(0,0,0,.05);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;

    h2 {
        font-size: 12pt;
        width: 100%;
        overflow: hidden;
        color: #444444;
    }

    p {
        font-size: 9pt;
        color: #777777;
        width: 100%;
        overflow: hidden;
        line-height: 1.1;
    }

    &:hover {
        cursor: pointer;
    }
`

export const ContainerButton = styledComponents.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
`