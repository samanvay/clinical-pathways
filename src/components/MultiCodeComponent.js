import React, {Component} from 'react';
import {FieldIcon} from "./FieldList";
import {updateField} from "../actions/addField";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

class MultiCodeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {tags: []}
    }

    onChangeFieldName(event) {
        const fieldName = event.target.value;
        this.props.updateField(this.props.groupId, this.props.field.id, fieldName, this.props.field.type, selectMulti, this.props.field.answers);
    }

    onChangeAnswers(tags) {
        this.setState({tags});
        this.props.updateField(this.props.groupId, this.props.field.id, this.props.field.name, this.props.field.type, selectMulti, tags);
    }

    render() {
        const collapseId = "collapse_" + this.props.field.id;
        const headerId = "heading_" + this.props.field.id;
        const tags = this.props.field.answers || [];
        const tagsFieldId = this.props.field.id + "_tags";
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
                            <TagsInput value={tags} onChange={this.onChangeAnswers.bind(this)} id={tagsFieldId} inputProps={{placeholder: "Answer"}}/>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"/> Required
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const selectMulti = [{
    "key": "Select",
    "value": "Multi"
}];

MultiCodeComponent.propTypes = {
    groupId: PropTypes.string.isRequired,
    field: PropTypes.object,
    fieldMetadata: PropTypes.object,
    collapse: PropTypes.string
};

export default connect((state) => {
    return {};
}, {updateField})(MultiCodeComponent);