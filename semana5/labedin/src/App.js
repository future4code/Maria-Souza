import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle `
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`

const DivApp = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PageSectionContainer = styled.div `
  width: 40vw;
  margin: 10px 0;
`

const TituloH2 = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <DivApp>
    <GlobalStyle/>
      <PageSectionContainer>
        <TituloH2>Dados pessoais</TituloH2>
        <CardGrande 
          imagem="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/222795859_4066274093426959_5880412198792104107_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RKitrxulQ-0AX-qN4IQ&_nc_ht=scontent-gig2-1.xx&oh=29c992f504acbe119ff00383436fd4dc&oe=615CEA17" 
          nome="Maria Helena Souza" 
          descricao="Oi, eu sou a Maria! Sou formada em Relações Internacionais e estou em transição de carreira para a área de tecnologia. Gosto de HTML, CSS e PHP. 🐷✨"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <CardPequeno 
        imagem="https://image.flaticon.com/icons/png/512/972/972560.png"
        icon="E-mail: bolo@deaipim.com.br"
       />
        <CardPequeno 
        imagem="https://image.flaticon.com/icons/png/512/4820/4820122.png"
        icon="Local: Rio de Janeiro / BR"
        />

      <PageSectionContainer>
        <TituloH2>Experiências profissionais</TituloH2>
        <CardGrande 
          imagem="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/55564368_409371656291104_243275928422055936_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Drg7pJUfuDwAX_Oslw8&_nc_ht=scontent-gig2-1.xx&oh=91de2cc9c923338e83338ce087532f25&oe=615D6A0B" 
          nome="Pet Center Seropédica" 
          descricao="Recepcionista em consultório veterinário." 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQF1DwauaIYWRw/company-logo_200_200/0/1626712721996?e=2159024400&v=beta&t=mVL_SSj56oMxcA9OQ02OJHn6zjKJJrSJalxOVOHIKUk" 
          nome="NTL Nova Tecnologia" 
          descricao="Assistente de logística." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <TituloH2>Minhas redes sociais</TituloH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </DivApp>
  );
}

export default App;
