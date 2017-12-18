import {ADD_FIELD, UPDATE_FIELD, ADD_GROUP, UPDATE_GROUP} from "../actions/addField";
import _ from 'lodash';
/*
[
    {groupId: '', groupName: '', groupDisplayName: '', fields: [{id: '', name: '', type: ''}]},
    {groupId: '', groupName: '', groupDisplayName: '', fields: []}
]
 */
export default function addField(formGroups = [], action) {
    const clonedFormGroups = formGroups.slice(0);
    const groupId = action.groupId;
    const formGroup = _.find(clonedFormGroups, function (formGroup) {
        return formGroup.groupId === groupId;
    });

    switch (action.type) {
        case ADD_FIELD:
            formGroup.fields.push(action.field);
            return clonedFormGroups;
        case ADD_GROUP:
            clonedFormGroups.push(action.group);
            return clonedFormGroups;
        case UPDATE_GROUP:
            formGroup[action.groupField] = action.value;
            return clonedFormGroups;
        case UPDATE_FIELD:
            const field = _.find(formGroup.fields, function(field) {
                return field.id === action.fieldId;
            });
            field.name = action.fieldName;
            field.type = action.fieldType;
            field.keyValues = action.fieldKeyValues;
            return clonedFormGroups;
        default:
            return formGroups;
    }
}

const name = (fields, field) => (field.icon + (fields.length === 0 ? 1 : fields.length + 1));