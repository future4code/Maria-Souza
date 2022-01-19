import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Reps from '../pages/Reps/Reps'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/reps">
                    <Reps />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
    )
}

export default Router