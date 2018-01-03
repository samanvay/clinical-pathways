import {FETCH_GROUPS, NEW_FORM} from "../actions/newForm";

export default function newForm(state = {}, action) {
    switch (action.type) {
        case NEW_FORM:
            const {name, formType, programName, uuid} = action;
            return {
                name,
                formType,
                programName,
                uuid
            };
        default:
            return state;
    }
}