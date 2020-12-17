import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {HomePage} from "./home";
import {AddIngredientPage} from "./ingredients";
import {RecipieSearchPage} from "./recipies";
import {ShoppingListPage} from "./shopping-list";

const routes = [
    {
        path: "/",
        Component: HomePage,
        exact: true,
    },
    {
        path: "/add-ingredient",
        Component: AddIngredientPage,
        exact: true,
    },
    {
        path: "/recipies",
        Component: RecipieSearchPage,
        exact: true,
    },
    {
        path: "/shopping-list",
        Component: ShoppingListPage,
        exact: true,
    }
];

export const Routes = () => (
    <Router>
        <Switch>
            {routes.map((route,index) => (
                <Route
                    key = {index}
                    path = {route.path}
                    exact = {route.exact}
                >
                    <route.Component/>
                </Route>
            ))}
        </Switch>
    </Router>
)