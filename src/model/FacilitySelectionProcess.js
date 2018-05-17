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
}

export default FacilitySelectionProcess;