import React from 'react';
import BaseComponent from "./BaseComponent";

export default class AdminHeader extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="background">
            <h3>Clinical pathways</h3>
        </div>;
    }
};