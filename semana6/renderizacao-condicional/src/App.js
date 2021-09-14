import React from 'react';
import Logo from './img/logo.png';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';


const MainContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

const SomeInfeliz = styled.button `
  display: none;
`

class App extends React.Component {

  state = {
    etapa: 1, 
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1 />;
      case 2: 
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
        default:
        return <SomeInfeliz/>;
    }
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  render() {    
  return (
    <MainContainer>
      <img src={Logo} alt="Logotipo do LabenuForms"/>
      {this.renderizaEtapa()}<br />
      {this.state.etapa < 4 ? (
     <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
      ) : (
        <SomeInfeliz/>
      )}
    </MainContainer>
  );
}
}

export default App;
