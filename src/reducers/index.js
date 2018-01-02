import newForm from "./newForm";
import addField from "./addField";

export default class Reducers {
    static createReducers() {
        const reducerMap = {};
        reducerMap['currentForm'] = newForm;
        reducerMap['formElementGroups'] = addField;
        return reducerMap;
    }
}