import React, {Component} from 'react';
import FormGroup from "./FormGroup";
import UpdateForm from "./UpdateForm";
import FieldList from "./FieldList";
import {connect} from "react-redux";
import addField, {addGroup} from "../actions/addField";
import PropTypes from 'prop-types';
import _ from 'lodash';

class FormDetails extends Component {
    /*
    [
        {groupId: '', groupName: '', groupDisplayName: '', fields: [{id: '', name: '', type: '', icon: ''}]},
        {groupId: '', groupName: '', groupDisplayName: '', fields: []}
    ]
     */
    constructor(props) {
        super(props);
        if (this.props.formFields.length === 0) {
            this.props.formFields.push(createGroup('group_1'));
        }
        this.state = {formFields: this.props.formFields};
        this.onSelectField = this.onSelectField.bind(this);
    }

    renderForm() {
        return (
            <div className="col-8">
                <form>
                    {this.renderGroups()}
                </form>
            </div>);
    }

    onSelectField(field, groupId) {
        if (field.type === 'Group') {
            const groupId = "group_" + (this.props.formFields.length + 1);
            const group = createGroup(groupId);
            addGroup(group);
            this.state.formFields.push(group);
        } else {
            const formGroup = _.find(this.props.formFields, (formGroup) => {
                return formGroup.groupId === groupId;
            });
            const groupFields = formGroup.fields;
            const id = groupId + field.icon + formGroup.fields.length + 1;
            const groupField = {id, type: field.type, icon: field.icon};
            addField(groupField, formGroup.groupId);
            groupFields.push(groupField);
        }
        delete this.state.currentGroup;
        this.setState({formFields: this.props.formFields});
    }

    renderGroups() {
        const formElements = [];
        _.forEach(this.props.formFields, (group) => {
            formElements.push(
                <FormGroup id={group.groupId} name={group.groupName} displayName={group.groupDisplayName}
                           fields={group.fields} key={group.groupId + group.fields.length}/>
            );
            if (this.props.formFields.length >= 1 && this.props.formFields[0].fields.length > 0) {
                formElements.push(<button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => {
                    this.setState({currentGroup: group});
                }} key={group.groupId}>Add
                    Fields</button>);
            }
        });
        if (this.props.formFields.length === 1 && this.props.formFields[0].fields.length === 0) {
            formElements.push(<FieldList onClick={this.onSelectField.bind(this)} groupId='group_1'
                                         key='group_1_fieldList'/>);
        }
        return formElements;
    }

    showFields(group) {
        return <FieldList onClick={this.onSelectField.bind(this)} groupId={group.groupId}
                          key={group.groupId + '_fieldList'}/>;
    }

    render() {
        if (this.state.currentGroup) {
            return this.showFields(this.state.currentGroup);
        } else {
            return (
                <div className="row">
                    {this.renderForm()}
                    <div className="col-4">
                        <UpdateForm/>
                    </div>
                </div>
            );
        }
    }
}

FormDetails.defaultProps = {
    formFields: [createGroup('group_1')]
};

FormDetails.propTypes = {
    formFields: PropTypes.array
};

function createGroup(id) {
    return {groupId: id, groupName: '', groupDisplayName: '', fields: []}
}

export default connect((state) => {
    return {formFields: state.formFields}
}, {addField, addGroup})(FormDetails);