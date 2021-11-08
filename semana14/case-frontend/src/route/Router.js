import { HomePage } from "../pages/HomePage/HomePage"
import { SplashPage } from '../pages/SplashPage/SplashPage'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { BrowserRouter, Switch, Route } from "react-router-dom"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <SplashPage />
        </Route>

        <Route exact path={"/homepage"}>
          <HomePage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router