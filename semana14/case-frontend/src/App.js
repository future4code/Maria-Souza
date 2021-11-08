import Header from './components/Header/Header'
import Router from './route/Router'
import GlobalState from './global/GlobalState'

const App = () => {
  return (
    <GlobalState>
      <Header />
      <Router />
    </GlobalState>
  )
}

export default App