import React, {Component} from 'react';

class FormGroup extends Component {
    render() {
        return <div className="row">
            <div className="col-12">
                <form className="form-inline">
                    <label htmlFor="groupName">Group: </label>
                    <input type="text" className="form-control" id="groupName" placeholder="Enter group"/>
                    <label htmlFor="groupDisplay">Display:</label>
                    <input type="text" className="form-control" id="groupDisplay" placeholder="Enter display"/>
                </form>
            </div>
        </div>;
    }
}

export default FormGroup;