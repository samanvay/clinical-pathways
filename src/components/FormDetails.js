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
        {groupId: '', groupName: '', groupDisplayName: '', fieldMetadata: [{id: '', name: '', type: '', icon: ''}]},
        {groupId: '', groupName: '', groupDisplayName: '', fieldMetadata: []}
    ]
     */
    constructor(props) {
        super(props);
        if (this.props.formFields.length === 0) {
            const firstGroup = createGroup('group_1');
            this.props.formFields.push(firstGroup);
            this.state = {formFields: this.props.formFields, currentGroup: firstGroup, showFields: true};
        } else if (this.props.formFields.length === 1) {
            this.state = {formFields: this.props.formFields, currentGroup: this.props.formFields[0], showFields: true};
        }
        else {
            this.state = {formFields: this.props.formFields, showFields: false, currentGroup: {}};
        }

        this.onSelectField = this.onSelectField.bind(this);
        this.addGroupField = this.addGroupField.bind(this);
    }

    renderForm() {
        return (
            <div className="col-9">
                <form>
                    {this.renderGroups()}
                </form>
            </div>);
    }

    onSelectField(field, groupId) {
        let currentGroup;
        let showFields;
        if (field.type === 'Group') {
            const groupId = "group_" + (this.props.formFields.length + 1);
            currentGroup = createGroup(groupId);
            addGroup(currentGroup);
            this.props.formFields.push(currentGroup);
            showFields = true;
        } else {
            currentGroup = _.find(this.props.formFields, (group) => {
                return group.groupId === groupId;
            });
            const groupFields = currentGroup.fields;
            const id = groupId + field.id + currentGroup.fields.length + 1;
            const groupField = {id, type: field.type, icon: field.icon};
            addField(groupField, currentGroup.groupId);
            groupFields.push(groupField);
            showFields = false;
        }
        this.setState({formFields: this.props.formFields, currentGroup, showFields});
    }

    /**
     * single group, no fields added show the fields panel
     * single group, selected a field, add field component and 'Add field' button. Except last field, all other fields
     * are collapsed.
     * single group, click on 'Add field'. Collapse all field, show fields panel
     * click on group in fields panel, a new group should be added, all other group fields collapsed. just the new group
     * will have the fields panel
     * @returns {Array}
     */
    renderGroups() {
        const formElements = [];
        _.forEach(this.props.formFields, (group) => {
            const isCurrentGroup = group.groupId === this.state.currentGroup.groupId;
            formElements.push(
                <FormGroup id={group.groupId} name={group.groupName} displayName={group.groupDisplayName}
                           fields={group.fields} key={group.groupId + group.fields.length} collapse={this.state.showFields || !isCurrentGroup}/>
            );
            if (this.state.showFields && isCurrentGroup) {
                formElements.push(this.showFields(group));
            } else {
                formElements.push(
                    <button type="button" className="btn btn-secondary btn-block"
                            onClick={() =>(this.addGroupField(group))} key={group.groupId}>
                        Add Fields
                    </button>);
            }
        });
        return formElements;
    }

    addGroupField(currentGroup) {
        this.setState({currentGroup, showFields: true});
    }

    showFields(group) {
        return <FieldList onClick={this.onSelectField.bind(this)} groupId={group.groupId}
                          key={group.groupId + '_fieldList'}/>;
    }

    render() {
        return (
            <div className="row">
                {this.renderForm()}
                <div className="col-3">
                    <UpdateForm/>
                </div>
            </div>
        );
    }
}

FormDetails.defaultProps = {
    formFields: [createGroup('group_1')]
};

FormDetails.propTypes = {
    formFields: PropTypes.array,
    currentGroup: PropTypes.object,
    showFields: PropTypes.bool
};

function createGroup(id) {
    return {groupId: id, groupName: '', groupDisplayName: '', fields: []}
}

export default connect((state) => {
    return {formFields: state.formFields}
}, {addField, addGroup})(FormDetails);