import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    background-color: #d97824;
`

export const Info = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d97824;
    color: #FFFFFF;
`

export const Title = styled.div `
    font-size: 23px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #FFFFFF;
    text-align: center;
    margin: 1.5rem;

    @media (max-width: 1024px) {
        font-size: 25px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 0 1rem 0;
    }
`

export const InfoText = styled.div `
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 200;
    text-align: justify;
    margin: 0 10rem 3rem 10rem;

    @media (max-width: 1024px) {
        font-size: 14px;
        margin: 0 3rem 3rem 3rem;
        letter-spacing: -0.29px;
    }
`

export const InfoText2 = styled.div `
    letter-spacing: -0.32px;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 400;
    text-align: center;
    margin-bottom: 1rem;

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

export const SideImage = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 30rem;
        margin: 2rem;
    }

    @media (max-width: 1024px) {
        img {
            width: 18rem;
        }
    }
`
