import FacilitySelectionProcess from "../model/FacilitySelectionProcess";
import ReferenceDataService from "../service/ReferenceDataService";

export class FacilitySelectionAction {
    static empty() {
        return new FacilitySelectionProcess();
    }

    static onLoad(state) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.start(ReferenceDataService.getAllStates, ReferenceDataService.getFacilityTypes);
    }

    static stateSelected(state, stateName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.setSelectedState(stateName, (stateName) => ReferenceDataService.getDistricts(stateName));
    }

    static districtSelected(state, districtName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.setSelectedDistrict(districtName, ReferenceDataService.getFacilities);
    }

    static facilityTypeSelected(state, facilityTypeName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.setFacilityType(facilityTypeName, ReferenceDataService.getFacilities);
    }

    static facilitySelected(state, facilityName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.setFacility(facilityName);
    }
}