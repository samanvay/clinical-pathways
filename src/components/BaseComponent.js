import _ from "lodash";
import {Component} from 'react';

class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this.setState = this.setState.bind(this);
    }
}

export default BaseComponent;