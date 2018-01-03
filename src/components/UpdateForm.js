import React, {Component} from 'react';
import addNewForm from "../actions/newForm";
import {connect} from "react-redux";

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.name, formType: this.props.formType, programName: this.props.programName}
    }

    update() {
        this.props.addNewForm(this.state.name, this.state.formType, this.state.programName);
    };

    onChangeField(event) {
        this.setState(Object.assign({}, this.state, {[ event.target.name ]: event.target.value}));
    };

    render() {
        return (
            <form>
                <div className="form-group has-danger">
                    <label htmlFor="formName">Form Name</label>
                    <input type="text" className="form-control  form-control-danger" id="formName"
                           name="name"
                           aria-describedby="formNameHelp"
                           defaultValue={this.state.name}
                           placeholder="Enter form name" onChange={this.onChangeField.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formType">Form Type</label>
                    <select className="form-control" id="formTypeSelect"
                            name="formType"
                            onChange={this.onChangeField.bind(this)}
                            defaultValue={this.state.formType}>
                        <option>IndividualProfile</option>
                        <option>Encounter</option>
                        <option>ProgramEncounter</option>
                        <option>ProgramEnrolment</option>
                        <option>ProgramExit</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="programName">Program Name</label>
                    <select className="form-control" id="programNameSelect" name="programName"
                            onChange={this.onChangeField.bind(this)}
                            defaultValue={this.state.programName}>>
                        <option>Mother</option>
                        <option>Child</option>
                        <option>Diabetes</option>
                    </select>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.update.bind(this)}>Update</button>
            </form>
        );
    }
}

export default connect((state) => {
    return {name: state.currentForm.name, formType: state.currentForm.formType, programName: state.currentForm.programName}
}, {addNewForm})(UpdateForm);