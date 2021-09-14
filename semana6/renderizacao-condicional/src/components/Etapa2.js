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

function Etapa2() {
  return (
    <FormContainer>
        <TituloForm>
            <h2>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        </TituloForm>

        <Fieldset>
            <label for="curso">5. Qual o seu curso?</label> <br />
            <input 
            type="text"
            placeholder="Insira o seu curso"
            name="curso"
            /><br/><br/>

            <label for="faculdade">6. Qual a sua instituição de ensino?</label> <br />
            <input
            type="text"
            placeholder="Insira o nome da sua faculdade"
            name="faculdade"
            /><br/>
            
        </Fieldset>
    </FormContainer>
  );
}

export default Etapa2;
