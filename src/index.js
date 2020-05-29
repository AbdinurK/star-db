import React from "react";
import ReactDOM from "react-dom"
import App from "./components/app/app";



ReactDOM.render(<App/>, document.getElementById('root'));

// import SwapiService from "./services/swapi-service";
//
// const swapi = new SwapiService();
// swapi.getAllPeople()
//     .then((people) => {
//         people.forEach((p) => {
//             console.log(p.name)
//         })
//     })
//     .catch((err) => {
//         console.error('error', err)
//     });
//
// swapi.getPerson(1)
//     .then((p) => {
//         console.log(p.name)
//     })
//     .catch((err) => {
//         console.error('error', err)
//     });

