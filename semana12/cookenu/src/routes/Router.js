import React from "react"
import { Switch, Route } from "react-router-dom"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = ({setRightButtonText}) => {
    return (
            <Switch>
                <Route exact path="/login">
                    <LoginPage
                        setRightButtonText={setRightButtonText}
                    />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage
                        setRightButtonText={setRightButtonText}

                    />
                </Route>
                <Route exact path="/">
                    <RecipesListPage />
                </Route>
                <Route exact path="/adicionar-receita">
                    <AddRecipesPage />
                </Route>
                <Route exact path="/detalhe/:id">
                    <RecipeDetailPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
    )
}

export default Router