import {NEW_FORM} from "../actions/newForm";

export default function newForm(state = {}, action) {
    switch (action.type) {
        case NEW_FORM:
            const {name, formType, programName} = action;
            return {
                name,
                formType,
                programName
            };
        default:
            return state;
    }
}