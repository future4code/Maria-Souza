import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    width: 40vw;
`

const SmallCardContainerImg = styled.img `
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
`

const SmallCardContainerDIV = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <SmallCardContainerImg src={ props.imagem } />
            <SmallCardContainerDIV>
                <p>{ props.icon }</p>
            </SmallCardContainerDIV>
        </SmallCardContainer>
    )
}

export default CardPequeno;