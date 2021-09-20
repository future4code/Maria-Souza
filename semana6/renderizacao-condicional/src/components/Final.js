import React from 'react';
import styled from 'styled-components';
import ThankYou from '../img/thank-you.gif'
import GitHub from '../img/github.png'

const Container = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Titulo = styled.div `
    display: flex;
    text-align: center;
    font-family: monospace;
    font-size: large;
    font-weight: bold;
`

const Agradecimento = styled.img `
  width: 20%;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 20px;
`

const Footer = styled.img`
  width: 40px;
  height: 40px;
  align-self: center;
`


function Final() {
  return (
    <Container>
      <Agradecimento img src={ThankYou} alt="Imagem de agradecimento" />      
        <Titulo>O formulário acabou!<br/>
        Muito obrigado por participar! Entraremos em contato!<br/><br/><br/>
        </Titulo>
        <a href="https://github.com/mhsouza88" target="_blank" rel="noreferrer"><Footer src={GitHub} alt="Link do GitHub" title="Feito por @mhsouza88" href="https://github.com/mhsouza88"/></a>
    </Container>
  );
}

export default Final;
