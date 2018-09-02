import React from 'react';
import BaseComponent from "./BaseComponent";

export default class AdminHeader extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="background">
            <div className="container header">
                <h1>Clinical pathways</h1>
            </div>
        </div>;
    }
};