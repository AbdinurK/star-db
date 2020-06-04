import React, { Component } from "react";

export default class PeoplePage extends Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    };

    render() {
        const { selectedItem } = this.state;
        return (
            <div>

            </div>
        );
    }

}
