import React, { Component } from "react";
import Header from "../header/header";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary";
import ItemDetails, {Record} from "../item-details";
import { Row } from "../row";
import { PersonList, PlanetList, StarshipList } from "../sw-components/item-lists";
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
                <div className="stardb-app">
                    <Header/>
                    <PersonList/>
                    <PlanetList/>
                    <StarshipList/>
                </div>
            </ErrorBoundary>
        )
    }
};

