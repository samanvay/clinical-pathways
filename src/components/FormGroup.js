import React, {Component} from 'react';
import {connect} from "react-redux";
import addField from "../actions/addField";
import fields from './configFields';
import PropTypes from 'prop-types';
import _ from 'lodash';

class FormGroup extends Component {
    constructor(props) {
        super(props);
    }

    renderGroup() {
        return (
            <div className="row">
                <div className="col-12 form-inline">
                    <label htmlFor="groupName" className="mr-sm-2">Group: </label>
                    <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id={this.props.id + '_groupName'}
                           placeholder="Enter group" value={this.props.name}/>
                    <label htmlFor="groupDisplay" className="mr-sm-2">Display:</label>
                    <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0"
                           id={this.props.id + '_groupDisplay'}
                           placeholder="Enter display" value={this.props.displayName}/>
                </div>
            </div>);
    }

    renderFields() {
        const inputFields = [];
        let i = 0;
        const collapse = "collapse";
        _.forEach(this.props.fields, (inputField) => {
            i++;
            const fieldCfg = _.find(fields, (field) => {
                return inputField.icon === field.icon;
            });
            const collapseClass = this.props.collapse === true ? collapse : (this.props.fields.length === i ? collapse + " show" : collapse);
            const fieldComponent = fieldCfg.component(inputField.id, collapseClass);
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

//id={group.groupId} name={group.groupName} displayName={group.groupDisplayName} fields={group.fields}
export default connect((state) => {
    return {}
}, {addField})(FormGroup);