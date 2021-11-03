import { AdminHomePage } from "../pages/AdminHomePage"
import { ApplicationFormPage } from "../pages/ApplicationFormPage"
import { CreateTripPage } from "../pages/CreateTripPage"
import { HomePage } from "../pages/HomePage"
import { ListTripsPage } from "../pages/ListTripsPage"
import { LoginPage } from "../pages/LoginPage"
import { TripDetailsPage } from "../pages/TripDetailsPage"
import { BrowserRouter, Switch, Route } from "react-router-dom"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/list"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/admin"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/application"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/create"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/details/:tripId"}>
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
