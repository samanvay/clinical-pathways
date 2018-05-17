import _ from "lodash";
import {Component} from 'react';

class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this.setState = this.setState.bind(this);
    }

    cloneState(cloneableAttributes = []) {
        let newState = Object.assign({}, this.state);
        cloneableAttributes.forEach((cloneableAttribute) => {
            newState[cloneableAttribute] = Object.assign({}, this.state[cloneableAttribute]);
        });
        return newState;
    }
}

export default BaseComponent;