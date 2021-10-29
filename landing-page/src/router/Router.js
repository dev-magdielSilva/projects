import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage/LandingPage"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import ErrorPage from "../pages/ErroPage/ErrorPage"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Router = () => {
    return(
        <BrowserRouter>
        <Header />
        <Footer />
        <Switch>
        <Route exact path="/">
            <LandingPage />
        </Route>
        <Route exact path="/produtos">
            <ProductsPage />
        </Route>
        <Route>
            <ErrorPage/>
        </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router



