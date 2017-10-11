import React, {Component} from 'react';
import FormGroup from "./FormGroup";
import UpdateForm from "./UpdateForm";
import FieldList from "./FieldList";
import {connect} from "react-redux";
import addField from "../actions/addField";
import fields from "./configFields";
import PropTypes from 'prop-types';

class FormDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {formFields: props.formFieldsComponent};
        this.onSelectField = this.onSelectField.bind( this );
    }

    form() {
        return (
            <div className="col-8">
                <FormGroup/>
                {this.formFieldsComponent()}
            </div>);
    }

    onSelectField(e) {
        const field = fields.get(e.target.name);
        const name = e.target.name + (fields.length === 0 ? 1 : fields.length + 1);
        this.props.formFields.push(field.component(name));
        this.setState({formFields: this.props.formFields})
    }

    formFieldsComponent() {
        if (this.props.formFields && this.props.formFields.length > 0) {
            return this.props.formFields;
        } else {
            return <FieldList {...this.props} onClick={this.onSelectField.bind(this)}/>
        }
    }

    render() {
        return (
            <div className="row">
                {this.form()}
                <div className="col-4">
                    <UpdateForm/>
                </div>
            </div>
        );
    }
}

FormDetails.defaultProps = {
    formFields: []
};

FormDetails.propTypes = {
    formFields: PropTypes.array
};

export default connect((state) => {
    return {formFields: state.formFieldsComponent}
}, {addField})(FormDetails);