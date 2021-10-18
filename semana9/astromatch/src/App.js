import React, { useState } from 'react'
import { AlinhaBotoes, Caixinha, MainContainer } from './EstiloApp'
import Logo from './components/imgs/logo.png'
import TelaMatch from './components/TelaMatch/TelaMatch'
import TelaPerfil from './components/TelaPerfil/TelaPerfil'

  const App = () => {
    const [pagina, setPagina] = useState("matches")

  const mudaPagina = (pagina) => {
    setPagina(pagina)
}

  const qualPagina = () => {
    switch (pagina) {
      case "matches":
        return (
        <TelaMatch
          mudaPagina={(pagina) => mudaPagina(pagina)} />)
      case "perfil":
        return (
        <TelaPerfil 
        mudaPagina={(pagina) => mudaPagina(pagina)}/>)
      default:
        return <b>Erro! Tente novamente.</b>
    }
  }

  const escolhePagina = qualPagina()  

  return (
    <MainContainer>
       <img src={Logo} alt="Logotipo" />
     <Caixinha>
       <AlinhaBotoes>
       <button onClick={()=>mudaPagina("perfil")}>Meus matches</button>
       <button onClick={()=>mudaPagina("matches")}>Voltar</button>
       </AlinhaBotoes>
          {escolhePagina}
        </Caixinha>
    </MainContainer>
  )
}

export default App
