import React from 'react';
import styled from 'styled-components';


const FormContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const TituloForm = styled.div `
    display: flex;
    justify-content: center;
    font-family: monospace;
    font-size: large;
`

const Fieldset = styled.fieldset `
    margin-top: 10px;
    padding-top: 10px;
    border-radius: 5%;
    border: 1px dashed #7A3EB5;
    text-align: center;
    display: block;
`

class Etapa1 extends React.Component {
render() {

  return (
    <FormContainer>
        <TituloForm>
            <h2>Etapa 1 - DADOS GERAIS</h2>
        </TituloForm>

        <Fieldset>
            <label for="nome">1. Qual o seu nome?</label> <br />
            <input 
            type="text"
            placeholder="Seu nome"
            name="nome"
            /><br /><br />

            <label for="idade">2. Qual a sua idade?</label> <br />
            <input
            type="number"
            placeholder="Insira sua idade"
            name="idade"
            /><br /><br />

            <label for="email">3. Qual o seu e-mail?</label> <br />
            <input
            type="email"
            placeholder="Insira o seu e-mail"
            name="email"
            /><br /><br />

            <label for="escolaridade">4. Qual a sua escolaridade?</label><br />
            <select name="escolaridade">
              <option value="medio-in">Ensino médio incompleto</option>
              <option value="medio-con">Ensino médio completo</option>
              <option value="superior-in">Ensino superior incompleto</option>
              <option value="superior-con">Ensino superior completo</option>
              </select>
            <br />
            
        </Fieldset>
    </FormContainer>
  );
}
}

export default Etapa1;
