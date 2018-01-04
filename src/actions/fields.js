export const ADD_FIELD = "ADD_FIELD";
export const ADD_GROUP = "ADD_GROUP";
export const UPDATE_GROUP = "UPDATE_GROUP";
export const UPDATE_FIELD = "UPDATE_FIELD";
export const INIT_GROUPS = "INIT_GROUPS";

export default function addField(field, groupId) {
    return {type: ADD_FIELD, field, groupId}
}

export function addGroup(group) {
    return {type: ADD_GROUP, group}
}

export function updateGroup(groupId, groupField, value) {
    return {type: UPDATE_GROUP, groupId, groupField, value}
}

export function updateField(groupId, fieldId, fieldName, fieldType, fieldKeyValues, answers, mandatory) {
    return {type: UPDATE_FIELD, groupId, fieldId, fieldName, fieldType, fieldKeyValues, answers, mandatory}
}

export function initGroups(groups) {
    return {type: INIT_GROUPS, groups}
}