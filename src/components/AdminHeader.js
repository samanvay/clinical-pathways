import React from 'react';
import BaseComponent from "./BaseComponent";

export default class AdminHeader extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="background">
            <div className="container header">
                <h1>Gunak</h1>
                {(this.props.location && this.props.location.state) ? <p>Welcome {this.props.location.state.user.firstName}</p> : null}
            </div>
        </div>;
    }
};