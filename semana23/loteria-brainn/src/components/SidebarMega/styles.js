import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BGContainer = styled.div `
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0%;
    right: 61.69%;
    top: 0%;
    bottom: 0%;
    overflow: hidden;
    
    @media (max-width: 800px) {
            left: 0%;
            right: 0%;
            position: fixed;
            transform: rotate(90deg);
            top: 0%;
            margin-top: -19rem;
            margin-left: -10rem;
            width: 100vw;
    }
`

export const LogoContainer = styled.div `
    position: absolute;
    left: 5.99%;
    right: 90.31%;
    top: 47.41%;
    bottom: 47.47%;

    @media (max-width: 800px) {
        position: absolute;
        left: 43.91%;
        right: 43.88%;
        top: 21.9%;
        bottom: 71.19%;
    }
`

export const TitleContainer = styled.div `
    position: absolute;
    left: 11.11%;
    right: 73.57%;
    top: 49.43%;
    bottom: 48.52%;
    font-style: normal;
    font-weight: 700;
    font-size: 1.87rem;
    line-height: 2.31rem;
    color: #FFFFFF;

        @media (max-width: 800px) {
            position: absolute;
            left: 27.68%;
            right: 31.68%;
            top: 32.12%;
            bottom: 65.78%;
            font-style: normal;
            font-weight: bold;
            font-size: 1.87rem;
            line-height: 1.70rem;
            width: 13rem;      
        }
`

export const SelectContainer = styled.div `
    position: absolute;
    left: 6%;
    right: 80.51%;
    top: 8.52%;
    bottom: 87.3%;
    color: #333333;
    font-style: normal;
    font-weight: 500;
    font-size: 0.93rem;
    line-height: 1.12rem;

    select {
        width: 13.43rem;
        height: 2.82rem;
        border-radius: 0.5rem;
        padding: 1rem;
        padding-right: 2rem;
        border: 0;
        color: #333333;
    }

    option {
        position: absolute;
        left: 7.43%;
        right: 85.43%;
        top: 9.83%;
        bottom: 88.69%;
    }

    @media (max-width: 500px) {
        position: absolute;
        left: 23.67%;
        right: 27.86%;
        top: 6.98%;
        bottom: 87.38%;
    }
`

export const DrawContainer = styled.div `
    position: absolute;
    left: 6%;
    right: 84.83%;
    top: 86.76%;
    bottom: 11.84%;
    font-style: normal;
    font-weight: 500;
    font-size: 0.87rem;
    line-height: 1.06rem;
    letter-spacing: 0.134rem;
    color: #FFFFFF;

    @media (max-width: 800px) {
        position: absolute;
        top: 38%;
        margin-left: 8rem;
        font-size: 1rem;
    }
`

export const DrawDataContainer = styled.div `
    position: absolute;
    left: 6%;
    right: 77.69%;
    top: 89.49%;
    bottom: 8.59%;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: #FFFFFF;

    @media (max-width: 800px) {
        position: absolute;
        top: 42%;
        margin-left: 7rem;
        font-size: 1rem;
        line-height: 0.62rem;
        width: 10rem;
    }
`