import React from "react";
import { withRouter } from "react-router-dom";
import Row from "../row";
import {PersonList} from "../sw-components/item-lists";
import PersonDetails from "../person-details/person-details";

const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    return (
        <Row left={<PersonList onItemSelected={(id) => history.push(id)}/>}
             right={<PersonDetails itemId={id}/>}
        />
    )
};

export default withRouter(PeoplePage)
