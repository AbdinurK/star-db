import React, { Component } from "react";
import Header from "../header/header";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary";
import { PersonList, PlanetList, StarshipList } from "../sw-components/item-lists";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import "./app.css"

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header/>
                        <PersonList/>
                        <PlanetList/>
                        <StarshipList/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
};

