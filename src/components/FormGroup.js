import React, {Component} from 'react';
import {connect} from "react-redux";
import {updateGroup} from "../actions/addField";
import fieldsMetadata from './configFields';
import PropTypes from 'prop-types';
import _ from 'lodash';

class FormGroup extends Component {
    constructor(props) {
        super(props);
    }

    onChangeField(event) {
        this.props.updateGroup(this.props.id, event.target.name, event.target.value);
    }

    renderGroup() {
        return (
            <div className="form-row">
                <div className="form-inline mb-2">
                    <label htmlFor="groupName" className="mr-sm-2">Group: </label>
                    <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id={this.props.id + '_groupName'}
                           placeholder="Enter group" defaultValue={this.props.name} name="groupName"
                           onChange={this.onChangeField.bind(this)}/>
                    <label htmlFor="groupDisplay" className="mr-sm-2">Display:</label>
                    <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0"
                           id={this.props.id + '_groupDisplay'} name="groupDisplayName"
                           placeholder="Enter display" defaultValue={this.props.displayName}
                           onChange={this.onChangeField.bind(this)}/>
                </div>
            </div>);
    }

    renderFields() {
        const inputFields = [];
        let i = 0;
        const collapse = "collapse";
        _.forEach(this.props.fields, (inputField) => {
            i++;
            const fieldMetadata = _.find(fieldsMetadata, (field) => {
                return inputField.icon === field.icon;
            });
            const collapseClass = this.props.collapse === true ? collapse : (this.props.fields.length === i ? collapse + " show" : collapse);
            const fieldComponent = fieldMetadata.component(this.props.id, inputField, collapseClass);
            inputFields.push(
                <div className="row" key={inputField.id}>
                    <div className="col-12">
                        {fieldComponent}
                    </div>
                </div>
            );
        });
        return inputFields;
    }

    render() {
        return (
            <div>
                {this.renderGroup()}
                <div id="accordion" role="tablist">
                    {this.renderFields()}
                </div>
            </div>
        );
    }
}

FormGroup.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    displayName: PropTypes.string,
    fields: PropTypes.array,
    collapse: PropTypes.bool
};

export default connect((state) => {
    return {}
}, {updateGroup})(FormGroup);