import React, {Component} from 'react';
import FormGroup from "./FormGroup";
import UpdateForm from "./UpdateForm";
import FieldList from "./FieldList";
import {connect} from "react-redux";
import addField, {addGroup} from "../actions/addField";
import PropTypes from 'prop-types';
import _ from 'lodash';
import {bindActionCreators, dispatch} from "redux";
import {fetchGroups} from "../actions/newForm";

class FormDetails extends Component {
    /*
"formElementGroups": [
{"name":
"displayOrder":
"display":
"formElements": [
{"name":
"uuid":
"isMandatory":
"keyValues":
"conceptName":
"dateType":
"displayOrder",
"answers":
}, {
..
}
]
},
]
    [
        {groupId: '', groupName: '', groupDisplayName: '', fieldMetadata: [{id: '', name: '', type: '', icon: ''}]},
        {groupId: '', groupName: '', groupDisplayName: '', fieldMetadata: []}
    ]
     */
    constructor(props) {
        super(props);
        if (this.props.formGroups.length === 0) {
            const firstGroup = createGroup('group_1');
            this.props.formGroups.push(firstGroup);
            this.state = {formGroups: this.props.formGroups, currentGroup: firstGroup, showFields: true};
        } else if (this.props.formGroups.length === 1) {
            this.state = {formGroups: this.props.formGroups, currentGroup: this.props.formGroups[0], showFields: true};
        }
        else {
            this.state = {formGroups: this.props.formGroups, showFields: false, currentGroup: {}};
        }

        this.onSelectField = this.onSelectField.bind(this);
        this.addGroupField = this.addGroupField.bind(this);
    }

    renderForm() {
        return (
            <div className="col-9">
                <form>
                    {this.renderGroups()}
                    <button type="button" className="btn btn-success pull-right"
                            onClick={() =>{
                                const completeForm = {
                                    ...this.props.form,
                                    formElementGroups: this.state.formGroups
                                };
                                this.saveForm(completeForm);
                                this.props.history.push("/forms");
                            }}>
                        <i className={`glyphicon glyphicon-save`} />
                        Save your form
                    </button>
                </form>
            </div>);
    }

    saveForm(form) {
        console.log(JSON.stringify(form))
        fetch("http://localhost:8021/saveForm",{
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            });
    }

    onSelectField(field, groupId) {
        let currentGroup;
        let showFields;
        if (field.type === 'Group') {
            const groupId = "group_" + (this.props.formGroups.length + 1);
            currentGroup = createGroup(groupId);
            addGroup(currentGroup);
            this.props.formGroups.push(currentGroup);
            showFields = true;
        } else {
            currentGroup = _.find(this.props.formGroups, (group) => {
                return group.groupId === groupId;
            });
            const groupFields = currentGroup.formElements;
            const id = groupId + field.id + currentGroup.formElements.length + 1;
            const groupField = {id, dateType: field.type, keyValues: field.keyValues, answers: field.answers,
            mandatory: field.mandatory, icon: field.icon};
            addField(groupField, currentGroup.groupId);
            groupFields.push(groupField);
            showFields = false;
        }
        this.setState({formGroups: this.props.formGroups, currentGroup, showFields});
        scrollDown();
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
        _.forEach(this.props.formGroups, (group) => {
            const groupId = group.groupId || group.name;
            const isCurrentGroup = (this.state.currentGroup && groupId === this.state.currentGroup.groupId) || false;
            formElements.push(
                <FormGroup id={groupId} name={group.name} displayName={group.displayName}
                           fields={group.formElements} key={groupId + group.formElements.length}
                           collapse={this.state.showFields || !isCurrentGroup}/>
            );
            if (this.state.showFields && isCurrentGroup) {
                formElements.push(this.showFields(group));
            } else {
                formElements.push(
                    <button type="button" className="btn btn-secondary btn-block"
                            onClick={() =>(this.addGroupField(group))} key={groupId}>
                        Add Fields
                    </button>);
            }
        });
        return formElements;
    }

    addGroupField(currentGroup) {
        this.setState({currentGroup, showFields: true});
        scrollDown();
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
    formGroups: [createGroup('group_1')]
};

FormDetails.propTypes = {
    formGroups: PropTypes.array,
    currentGroup: PropTypes.object,
    showFields: PropTypes.bool
};

function createGroup(id) {
    return {groupId: id, name: '', displayName: '', formElements: []}
}

function scrollDown(){
    $("html, body").animate({ scrollTop: $(document).height() }, "fast");
}

export default connect((state) => {
    return {form: state.currentForm, formGroups: state.formElementGroups}
}, {addField, addGroup})(FormDetails);