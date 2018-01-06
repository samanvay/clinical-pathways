import {ADD_FIELD, UPDATE_FIELD, ADD_GROUP, UPDATE_GROUP, LOAD_GROUPS, INIT_GROUPS} from "../actions/fields";
import _ from 'lodash';
import {FETCH_GROUPS} from "../actions/form";

export default function addField(formGroups = [], action) {
    if (action.type === INIT_GROUPS) {
        return [];
    }
    if (action.type === FETCH_GROUPS) {
        return action.groups;
    }
    const clonedFormGroups = formGroups.slice(0);
    const groupId = action.groupId;
    const formGroup = _.find(clonedFormGroups, function (formGroup) {
        return formGroup.groupId === groupId;
    });

    switch (action.type) {
        case ADD_FIELD:
            formGroup.formElements.push(action.field);
            return clonedFormGroups;
        case ADD_GROUP:
            clonedFormGroups.push(action.group);
            return clonedFormGroups;
        case UPDATE_GROUP:
            formGroup[action.groupField] = action.value;
            return clonedFormGroups;
        case UPDATE_FIELD:
            const formElement = _.find(formGroup.formElements, function(field) {
                return field.id === action.fieldId;
            });
            formElement.name = action.fieldName;
            formElement.dataType = action.fieldType;
            formElement.mandatory = action.mandatory;
            formElement.keyValues = action.fieldKeyValues;
            formElement.answers = action.answers;
            return clonedFormGroups;
        default:
            return formGroups;
    }
}

const name = (fields, field) => (field.icon + (fields.length === 0 ? 1 : fields.length + 1));