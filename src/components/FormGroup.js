import React, {Component} from 'react';

class FormGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <form className="form-inline">
            <label htmlFor="groupName">Group: </label>
            <input type="text" className="form-control form-control-danger" id="groupName"
                   placeholder="Enter group"/>
            <label htmlFor="groupDisplay">Display:</label>
            <input type="text" className="form-control" id="groupDisplay" placeholder="Enter display"/>
        </form>;
    }
}

export default FormGroup;