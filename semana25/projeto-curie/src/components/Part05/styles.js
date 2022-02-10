import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    background-color: #f2f2f2;
`

export const Info = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    color: #45525b;
`

export const Title = styled.div `
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #45525b;
    text-align: center;
    margin: 1.5rem;

    @media (max-width: 1024px) {
        font-size: 24px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1.5rem 0 1rem 0;
    }
`

export const InfoText = styled.div `
    font-size: 16px;
    color: #45525b;
    font-weight: 200;
    text-align: justify;
    margin: 0 10rem 3rem 10rem;

    @media (max-width: 1024px) {
        font-size: 14px;
        margin: 0 3rem 1rem 3rem;
        letter-spacing: -0.29px;
    }
`

export const InfoText2 = styled.div `
    letter-spacing: -0.32px;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 400;
    text-align: center;
    margin-bottom: 3rem;

    a {
        text-decoration: none;
        color: '#bf213e';
    }

    a:visited {
        color: '#8d1c31';
    
    }

    a:hover {
        transition: 0.5s;
        color: white;
    }

    @media (max-width: 1024px) {
        font-size: 16px;
    }
`

export const ProjectImage = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    
    img {
        border-radius: 1rem;
    }

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }
`

export const ButtonAlign = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

    @media (max-width: 1024px) {
        margin-bottom: 3rem;
    }
`

export const AlignRepositories = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 3rem 0;

    @media (max-width: 1024px) {
        margin: 0 0 3rem 0;

        hr {
        color: #45525b;
        width: 12rem;
        margin: 0 0 2rem 0;
    }    }
`
