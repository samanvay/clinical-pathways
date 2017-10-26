import React, {Component} from 'react';
import {FieldIcon} from "./FieldList";
import {updateField} from "../actions/addField";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class TextComponent extends Component {
    constructor(props) {
        super(props);
    }

    onChangeField(event) {
        const fieldName = event.target.value;
        this.props.updateField(this.props.groupId, this.props.field.id, fieldName, this.props.field.type);
    }

    render() {
        const collapseId = "collapse" + this.props.field.id;
        const headerId = "heading_" + this.props.field.id;
        return (
            <div className="row">
                <div className="card col-12">
                    <div className="card-header py-2" role="tab" id={headerId}>
                        <a data-toggle="collapse" href={"#" + collapseId} aria-expanded="true"
                           aria-controls={collapseId}>
                            {this.props.field.name || 'Question'}
                        </a>
                    </div>
                    <div id={collapseId} className={this.props.collapse} role="tabpanel" aria-labelledby={headerId}
                         data-parent="#accordion">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-10">
                                    <input type="text" className="form-control" id={this.props.field.id}
                                           placeholder="Question Title" onChange={this.onChangeField.bind(this)}
                                           defaultValue={this.props.field.name}/>
                                </div>
                                <div className="form-group col-md-2">
                                    <FieldIcon fieldMetadata={this.props.fieldMetadata}/>{" " + this.props.fieldMetadata.label}
                                </div>
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
            </div>
        );
    }
}

TextComponent.propTypes = {
    groupId: PropTypes.string.isRequired,
    field: PropTypes.object,
    fieldMetadata: PropTypes.object,
    collapse: PropTypes.string
};

export default connect((state) => {
    return {};
}, {updateField})(TextComponent);