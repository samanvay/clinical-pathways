import React, {Component} from 'react';
import {FieldIcon} from "./FieldList";
import {updateField} from "../actions/fields";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

class CodedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {tags: [], mandatory: false}
    }

    onChangeFieldName(event) {
        const fieldName = event.target.value;
        this.props.updateField(this.props.groupId, this.props.field.id, fieldName, this.props.dataType,
            this.props.field.fieldKeyValues, this.props.field.answers, this.state.mandatory);
    }

    onChangeAnswers(tags) {
        this.setState(...this.state, {tags});
        const keyValues = [{'key': 'Select', 'value': this.props.selectType}];
        this.props.updateField(this.props.groupId, this.props.field.id, this.props.field.name, this.props.dataType,
            keyValues, tags, this.state.mandatory);
    }

    onChangeMandatory(event) {
        this.setState(...this.state, {mandatory: !this.state.mandatory});
        this.props.updateField(this.props.groupId, this.props.field.id, this.props.field.name, this.props.dataType,
            this.props.field.fieldKeyValues, tags, this.state.mandatory);
    }

    render() {
        const collapseId = "collapse_" + this.props.field.id;
        const headerId = "heading_" + this.props.field.id;
        const tags = this.props.field.answers || [];
        const tagsFieldId = this.props.field.id + "_tags";
        const mandatoryFieldId = this.props.field.id + "_mandatory";
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
                        <div className="form-group">
                            <label htmlFor={tagsFieldId}>Type your choices. Press enter after each choice.</label>
                            <TagsInput value={tags} onChange={this.onChangeAnswers.bind(this)} id={tagsFieldId}
                                       inputProps={{placeholder: "Answer"}}/>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" name={mandatoryFieldId}
                                    required={this.state.mandatory} onChange={this.onChangeMandatory.bind(this)}/> Required
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CodedComponent.propTypes = {
    groupId: PropTypes.string.isRequired,
    field: PropTypes.object,
    selectType: PropTypes.oneOf(['Single', 'Multi']),
    fieldMetadata: PropTypes.object,
    collapse: PropTypes.string
};

export default connect((state) => {
    return {dataType: 'Coded'};
}, {updateField})(CodedComponent);