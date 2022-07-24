import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    background-color: #8d1c31;

`

export const Info = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8d1c31;
`

export const Title = styled.div `
    font-size: 50px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #d97824;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 28px;
    }
`

export const SubTitle = styled.div `
    letter-spacing: -0.32px;
    font-size: 24px;
    color: #FFFFFF;
    font-weight: 400;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 14px;
    }
`

export const SubTitle2 = styled.div `
    letter-spacing: -0.32px;
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 100;
    text-align: center;

    @media (max-width: 1024px) {
        img {
            margin-top: 0.5rem;
            width: 2rem;
        }
    }
`

export const SocialMedia = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8d1c31;
`