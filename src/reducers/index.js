import Reducer from "./Reducer";
import FacilitySelectionActionsMap, {FacilitySelection} from '../actions/FacilitySelection';

export default class Reducers {
    static get reducerKeys() {
        return {districtsForState: "districtsForState"};
    };

    static createReducers() {
        const reducerMap = {};
        reducerMap[Reducers.reducerKeys.districtsForState] = Reducers._add(FacilitySelectionActionsMap, FacilitySelection);
        return reducerMap;
    };

    static onPossibleExternalStateChange(state, action, context) {
        const newState = Object.assign({}, state);
        newState.possibleExternalStateChange = true;
        return newState;
    }

    static get STATE_CHANGE_POSSIBLE_EXTERNALLY() {
        return 'STATE_CHANGE_POSSIBLE_EXTERNALLY'
    };

    static _add(actions, actionClass, prefix) {
        if (!actions.has('RESET'))
            actions.set('RESET', () => actionClass.getInitialState());
        if (!_.isNil(prefix)) {
            actions.set(`${prefix}.${Reducers.STATE_CHANGE_POSSIBLE_EXTERNALLY}`, Reducers.onPossibleExternalStateChange);
        }
        return Reducer.factory(actions, actionClass.getInitialState(), prefix);
    };
}