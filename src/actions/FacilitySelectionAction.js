import FacilitySelectionProcess from "../model/FacilitySelectionProcess";
import ReferenceDataService from "../service/ReferenceDataService";
import AssessmentService from "../service/AssessmentService";

export class FacilitySelectionAction {
    static empty() {
        return new FacilitySelectionProcess();
    }

    static onLoad(state) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.start(ReferenceDataService.getAllStates, ReferenceDataService.getFacilityTypes, ReferenceDataService.getAllAssessmentToolModes);
    }

    static assessmentToolModeSelected(state, assessmentToolModeName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.setSelectedAssessmentToolMode(assessmentToolModeName, (assessmentToolModeName) => ReferenceDataService.getAssessmentTools(assessmentToolModeName));
    }

    static assessmentToolSelected(state, assessmentToolName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        facilitySelectionProcess.setSelectedAssessmentTool(assessmentToolName);
        return facilitySelectionProcess;
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
        facilitySelectionProcess.setFacility(facilityName);
        return facilitySelectionProcess;
    }

    static facilityNameChanged(state, facilityName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        facilitySelectionProcess.setFreeTextFacilityName(facilityName);
        return facilitySelectionProcess;
    }

    static uploadFileSelected(state, file) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        facilitySelectionProcess.uploadFileSelected(file);
        return facilitySelectionProcess;
    }

    static submitAssessment(state) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.submitAssessment(AssessmentService.submit);
    }
}