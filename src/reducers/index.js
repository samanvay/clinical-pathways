import newForm from "./newForm";

export default class Reducers {
    static createReducers() {
        const reducerMap = {};
        reducerMap['currentForm'] = newForm;
        return reducerMap;
    }
}