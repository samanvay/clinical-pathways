import {BASIC_FORM} from "../actions/form";

export default function basicForm(state = {}, action) {
    switch (action.type) {
        case BASIC_FORM:
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