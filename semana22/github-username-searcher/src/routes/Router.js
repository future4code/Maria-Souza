import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Repositories from '../pages/Repositories/Repositories'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/repositories">
                    <Repositories />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
    )
}

export default Router