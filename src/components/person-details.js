import { withSwapiService } from "./hoc-helper/with-swapi-service"
import ItemDetails, {Record} from "./item-details";
import React from "react";


const PersonDetails = ({ itemId, swapiService }) => {
    const { getPerson, getPersonImage } = swapiService;
    return (
        <ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender"/>
            <Record field="gender" label="Gender"/>
        </ItemDetails>
    )
};

export default withSwapiService(PersonDetails)
