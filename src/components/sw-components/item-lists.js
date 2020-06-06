import React from "react";
import ItemList from "../item-list/item-list";
import { withData } from "../hoc-helpers/with-data";
import { withSwapiService } from "../hoc-helpers/with-swapi-service";
import { withChildFunction } from "../hoc-helpers/with-child-function";
import compose from "../hoc-helpers/compose"

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => <span>{name} ({model})</span>;

const mapPersonToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};
const mapStarshipToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList = withSwapiService(mapPersonToProps)(withData(withChildFunction(renderName)(ItemList)));
const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const StarshipList = withSwapiService(mapStarshipToProps)(withData(withChildFunction(renderModelAndName)(ItemList)));



export { PlanetList, PersonList, StarshipList }
