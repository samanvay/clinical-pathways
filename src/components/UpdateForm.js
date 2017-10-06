import React, {Component} from 'react';
import addNewForm from "../actions/newForm";
import {connect} from "react-redux";

class UpdateForm extends Component {
    constructor(props) {
        super(props);
    }

    update() {
        this.props.addNewForm(this.state.formName, this.state.formType);
    };

    onChangeField(event) {
        this.setState(Object.assign({}, this.state, {[ event.target.name ]: event.target.value}));
    };

    render() {
        return <form>
            <div className="form-group">
                <label htmlFor="formName">Name</label>
                <input type="text" className="form-control  form-control-danger" id="formName"
                       aria-describedby="formNameHelp"
                       value={this.props.formName}
                       placeholder="Enter form name" onChange={this.onChangeField.bind(this)}/>
            </div>
            <div className="form-group">
                <label htmlFor="formType">Form Type</label>
                <select className="form-control" id="formTypeSelect"
                        onChange={this.onChangeField.bind(this)}
                        value={this.props.formType}>
                    <option>IndividualProfile</option>
                    <option>Encounter</option>
                    <option>ProgramEncounter</option>
                    <option>ProgramEnrolment</option>
                    <option>ProgramExit</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={this.update.bind(this)}>Update</button>
        </form>;
    }
};

export default connect((state) => {
    return {formName: state.currentForm.formName, formType: state.currentForm.formType}
}, {addNewForm})(UpdateForm);