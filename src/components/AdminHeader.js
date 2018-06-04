import React from 'react';
import BaseComponent from "./BaseComponent";
import GlobalState from "../model/GlobalState";

export default class AdminHeader extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="background">
            <div className="container header">
                <h1>Gunak</h1>
                {GlobalState.isLoggedIn ? <p>Welcome {GlobalState.userName}</p> : null}
            </div>
        </div>;
    }
};