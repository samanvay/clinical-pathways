import _ from "lodash";

class FacilitySelectionProcess {
    static start() {
        let facilitySelectionProcess = new FacilitySelectionProcess();
        facilitySelectionProcess.states = [];
        facilitySelectionProcess.selectedState = {};

        facilitySelectionProcess.districts = [];
        facilitySelectionProcess.selectedDistrict = {};

        facilitySelectionProcess.facilityTypes = [];
        facilitySelectionProcess.selectedFacilityType = {};
        return facilitySelectionProcess;
    }

    clone() {
        return Object.assign(new FacilitySelectionProcess(), this);
    }

    gotStatesList(states) {
        let sortedStates = _.sortBy(states, (state) => state.name);
        let nullState = {name: "Select State"};
        sortedStates.splice(0, 0, nullState);
        this.states = sortedStates;
        this.selectedState = nullState;
    }

    stateSelected(stateName) {
        this.selectedState = _.find(this.states, (state) => state.name === stateName);
    }
}

export default FacilitySelectionProcess;