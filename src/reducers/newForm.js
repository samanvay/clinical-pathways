import {NEW_FORM} from "../actions/newForm";

export default function newForm(state = {}, action) {
    switch (action.type) {
        case NEW_FORM:
            const { formName, formType } = action;
            return {
                ...state,
                formName,
                formType
            };
        default:
            return state;
    }
}