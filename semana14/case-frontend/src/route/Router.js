import { HomePage } from "../pages/HomePage/HomePage"
import { PlayPage } from '../pages/PlayPage/PlayPage'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { BrowserRouter, Switch, Route } from "react-router-dom"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/jogar"}>
          <PlayPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}

export default Router