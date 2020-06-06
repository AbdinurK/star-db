import React, { Component } from "react";
import Header from "../header/header";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary";
import { PersonList, PlanetList, StarshipList } from "../sw-components/item-lists";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import LoginPage from "../pages/login-page";
import SecretPage from "../pages/secret-page";
import "./app.css"

export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    };


    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    };

    swapiService = new SwapiService();

    render() {
        const { isLoggedIn } = this.state;
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header/>
                            <Switch>
                                <Route exact path="/" render={() => <h2>Welcome to Star DB!</h2>}/>
                                <Route path="/people" component={PersonList}/>
                                <Route path="/planets" component={PlanetList}/>
                                <Route path="/starships" component={StarshipList}/>
                                <Route path="/login" render={() => (<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>)}/>
                                <Route path="/secret" render={() => (<SecretPage isLoggedIn={isLoggedIn}/>)}/>
                                <Route render={() => <h2>Page not found!</h2>}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
};

