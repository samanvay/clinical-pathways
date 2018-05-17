import FacilitySelectionProcess from "../model/FacilitySelectionProcess";

export class FacilitySelectionAction {
    static start() {
        return FacilitySelectionProcess.start();
    }

    static onLoad(state, states) {
        let newState = state.clone();
        newState.gotStatesList(states);
        return newState;
    }

    static stateSelected(state, stateName) {
        let newState = state.clone();
        newState.stateSelected(stateName);
        return newState;
    }
}