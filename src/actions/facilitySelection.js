export class FacilitySelection {
    static districtsForState(state, action) {
    }

    static getInitialState() {
        return {};
    }
}

const FacilitySelectionActionsNames = {
    DISTRICTS_FOR_STATE: 'FacilitySelection.DISTRICTS_FOR_STATE',
    ON_LOAD: 'FacilitySelection.ON_LOAD'
};

export default new Map([
    [FacilitySelectionActionsNames.DISTRICTS_FOR_STATE, FacilitySelection.districtsForState]
]);

export {FacilitySelectionActionsNames as Actions};