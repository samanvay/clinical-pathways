import React, {Component} from 'react';

class FormGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form-inline">
                <label htmlFor="groupName" className="mr-sm-2">Group: </label>
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="groupName"
                       placeholder="Enter group"/>
                <label htmlFor="groupDisplay" className="mr-sm-2">Display:</label>
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="groupDisplay"
                       placeholder="Enter display"/>
            </form>
        );
    }
}

export default FormGroup;