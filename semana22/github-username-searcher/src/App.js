import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"
import GlobalState from "./context/GlobalState"

export const App = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GlobalState>
  )
}

export default App