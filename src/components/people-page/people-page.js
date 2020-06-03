// import React, { Component } from "react";
// import ItemList from "../item-list/item-list";
// import PersonDetails from "../person-details/person-details";
// import ErrorIndicator from "../error-indicator/error-indicator";
// import SwapiService from "../../services/swapi-service";
// import ErrorBoundary from "../error-boundary";
// import { Row } from "../row";
// import "./people-page.css"
//
//
// const itemList = (
//     <ItemList
//         onItemSelected={this.onPersonSelected}
//         getData={this.swapiService.getAllPlanets}>
//         { (i) => (
//             `${i.name} (${i.birthYear})`
//         ) }
//     </ItemList>
// );
// const personDetails = (
//     <PersonDetails personId={this.state.selectedPerson}/>
// );
//
//
//
// export default class PeoplePage extends Component {
//
//
//     swapiService = new SwapiService();
//
//     state = {
//         selectedPerson: 3,
//         hasError: false
//     };
//
//     onPersonSelected = (selectedPerson) => {
//         this.setState({ selectedPerson });
//     };
//
//     componentDidCatch(error, errorInfo) {
//         this.setState({
//             hasError: true
//         })
//     }
//
//
//
//     render() {
//         if (this.state.hasError) {
//             return <ErrorIndicator/>;
//         }
//         return (
//             <ErrorBoundary>
//                 <Row left={itemList} right={personDetails}/>
//             </ErrorBoundary>
//         )
//     }
//
// }
