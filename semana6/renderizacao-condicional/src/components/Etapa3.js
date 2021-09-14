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


function Etapa3() {
  return (
    <FormContainer>
    <TituloForm>
        <h2>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
    </TituloForm>

    <Fieldset>
        <label for="motivo">7. Por que você não terminou um curso de graduação?</label> <br/>
        <input 
        type="text"
        placeholder="Insira o motivo"
        name="motivo"
        /><br/><br/>

        <label for="complementar">8. Você fez algum curso complementar?</label> <br />
        <select name="complementar">
              <option value="nenhum">Nenhum</option>
              <option value="tecnico">Curso técnico</option>
              <option value="ingles">Curso de inglês</option>
        </select>
        <br/>
    </Fieldset>
</FormContainer>
  );
}

export default Etapa3;
