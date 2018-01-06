import {
    ADD_FIELD, UPDATE_FIELD, ADD_GROUP, UPDATE_GROUP, LOAD_GROUPS, INIT_GROUPS,
    UPDATE_TEXT_FIELD, UPDATE_CODED_FIELD
} from "../actions/fields";
import _ from 'lodash';
import {FETCH_GROUPS} from "../actions/form";

export default function addField(formGroups = [], action) {
    console.log("add field " + action.type);
    if (action.type === INIT_GROUPS) {
        return [];
    }
    if (action.type === FETCH_GROUPS) {
        return action.groups;
    }
    const clonedFormGroups = formGroups.slice(0);
    const groupId = action.groupId;
    console.log("Find group " + groupId);
    const formGroup = _.find(clonedFormGroups, function (formGroup) {
        console.log("Find " + formGroup.groupId);
        return formGroup.groupId === groupId;
    });
    if (!formGroup) {
        console.log("no form group found for " + groupId);
    }

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
            console.log(JSON.stringify(formElement));
            formElement.name = action.fieldName;
            formElement.dataType = action.fieldType;
            formElement.mandatory = action.mandatory;
            formElement.keyValues = action.fieldKeyValues;
            formElement.answers = action.answers;
            return clonedFormGroups;
        case UPDATE_CODED_FIELD:
            const fieldIndex = _.findIndex(formGroup.formElements, function(field) {
                return field.id === action.fieldId;
            });
            const fieldElement = formGroup.formElements[fieldIndex];
            const concept = fieldElement.concept;
            const answers = action.answers;
            console.log("update coded " + answers);
            formGroup.formElements[fieldIndex] =
                {
                    ...fieldElement,
                    name: action.fieldName,
                    type: action.fieldType,
                    concept: {...concept, name: action.fieldName, dataType: "Coded", answers},
                    mandatory: action.mandatory
                };
            console.log("state: " + JSON.stringify(formGroup.formElements[fieldIndex]));
            return clonedFormGroups;
        default:
            return formGroups;
    }
}

const name = (fields, field) => (field.icon + (fields.length === 0 ? 1 : fields.length + 1));