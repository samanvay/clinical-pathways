import React, {Component} from 'react';
import {FieldIcon} from "./FieldList";
import {updateField} from "../actions/addField";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import _ from "lodash";

class DateComponent extends Component {
    constructor(props) {
        super(props);
    }

    onChangeFieldName(event) {
        this.props.updateField(this.props.groupId, this.props.field.id, event.target.value, this.props.field.type,
            this.props.field.keyValues, this.props.field.answers);
    }

    renderDateField(dateSubField) {
        const dateSubFieldId = dateSubField.id + this.props.field.id;
        if (this.isChecked(dateSubField)) {
            return (<div className="form-check form-check-inline" key={dateSubFieldId}>
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" id={dateSubFieldId}
                           defaultValue={dateSubField.value} checked
                           onChange={this.onChangeDateField.bind(this)}/>{dateSubField.label}
                </label>
            </div>);
        } else {
            return (<div className="form-check form-check-inline" key={dateSubFieldId}>
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" id={dateSubFieldId}
                           defaultValue={dateSubField.value}
                           onChange={this.onChangeDateField.bind(this)}/>{dateSubField.label}
                </label>
            </div>);
        }
    }

    isChecked(dateSubField) {
        const dateFields = this.dateSubFields();
        return dateFields && dateFields.includes(dateSubField.value);
    }

    dateSubFields(){
        return this.props.field.keyValues &&
            this.props.field.keyValues[0] &&
            this.props.field.keyValues[0]["value"];
    }

    renderDateSubFields() {
        let dateSubFieldE = [];
        dateFields.forEach((dateSubField) =>(dateSubFieldE.push(this.renderDateField(dateSubField))));
        return (<div className="form-group">
            {dateSubFieldE}
        </div>);
    }

    onChangeDateField(event) {
        const subField = event.target.defaultValue;
        let subFields = this.dateSubFields();
        if (!subFields) {
            subFields = []
        }
        if (subFields && subFields.includes(subField)) {
            _.remove(subFields, (e) => (e === subField));
        } else {
            subFields.push(subField);
        }
        const keyValues = subFields ? [{"key": "durationOptions", "value": subFields}] : [];
        this.props.updateField(this.props.groupId, this.props.field.id, this.props.field.name, this.props.field.type,
            keyValues, this.props.field.answers);
    }

    render() {
        const collapseId = "collapse_" + this.props.field.id;
        const headerId = "heading_" + this.props.field.id;

        return (
            <div className="card">
                <div className="card-header py-2" id={headerId}>
                    <a data-toggle="collapse" href={"#" + collapseId} aria-expanded="true"
                       aria-controls={collapseId}>
                        {this.props.field.name || 'Question'}
                    </a>
                </div>
                <div id={collapseId} className={this.props.collapse} aria-labelledby={headerId}
                     data-parent="#accordion">
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col-md-10">
                                <input type="text" className="form-control" id={this.props.field.id}
                                       placeholder="Question Title" onChange={this.onChangeFieldName.bind(this)}
                                       defaultValue={this.props.field.name}/>
                            </div>
                            <div className="form-group col-md-2">
                                <FieldIcon
                                    fieldMetadata={this.props.fieldMetadata}/>{" " + this.props.fieldMetadata.label}
                            </div>
                        </div>
                        {this.renderDateSubFields()}
                    </div>
                </div>
            </div>
        );
    }
}

const dateFields = [
    {id: "days_cb", value: "days", label: "Days"},
    {id: "weeks_cb", value: "weeks", label: "Weeks"},
    {id: "months_cb", value: "months", label: "Months"},
    {id: "years_cb", value: "years", label: "Years"},
    ];

DateComponent.propTypes = {
    groupId: PropTypes.string.isRequired,
    field: PropTypes.object,
    fieldMetadata: PropTypes.object,
    collapse: PropTypes.string
};

export default connect((state) => {
    return {};
}, {updateField})(DateComponent);