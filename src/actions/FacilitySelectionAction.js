import FacilitySelectionProcess from "../model/FacilitySelectionProcess";
import ReferenceDataService from "../service/ReferenceDataService";
import AssessmentService from "../service/AssessmentService";

export class FacilitySelectionAction {
    static empty() {
        return new FacilitySelectionProcess();
    }

    static __selectItemsForDev(promise) {
        return promise.then((deleteMe) => deleteMe.setSelectedState('Bihar', ReferenceDataService.getDistricts))
            .then((deleteMe) => deleteMe.setSelectedDistrict("Araria", ReferenceDataService.getFacilities))
            .then((deleteMe) => deleteMe.setFacilityType('Primary Health Center', ReferenceDataService.getFacilities))
            .then((deleteMe) => deleteMe.setSelectedAssessmentToolMode('LAQSHYA', ReferenceDataService.getAssessmentTools))
            .then((deleteMe) => {
                deleteMe.setSelectedAssessmentTool('NQAS');
                deleteMe.setFacility('Bardaha');
                deleteMe.setAssessmentType('External');
                return deleteMe;
            });
    }

    static onLoad(state) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        let promise = facilitySelectionProcess.start(ReferenceDataService.getAllStates, ReferenceDataService.getFacilityTypes, ReferenceDataService.getAllAssessmentToolModes, ReferenceDataService.getAllAssessmentTypes);
        promise = FacilitySelectionAction.__selectItemsForDev(promise);
        return promise;

    }

    static assessmentToolModeSelected(state, assessmentToolModeName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.setSelectedAssessmentToolMode(assessmentToolModeName, (assessmentToolModeName) => ReferenceDataService.getAssessmentTools(assessmentToolModeName));
    }

    static assessmentToolSelected(state, assessmentToolName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.setSelectedAssessmentTool(assessmentToolName);
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

    static assessmentTypeSelected(state, assessmentTypeName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.setAssessmentType(assessmentTypeName);
    }

    static facilitySelected(state, facilityName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        facilitySelectionProcess.setFacility(facilityName);
    }

    static facilityNameChanged(state, facilityName) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.setFreeTextFacilityName(facilityName);
    }

    static startAssessmentUpload(state) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.startUpload();
    }

    static uploadFileSelected(state, file) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.uploadFileSelected(file);
    }

    static submitNewAssessment(state) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.submitNewAssessment(AssessmentService.submitNew);
    }

    static submitExistingAssessment(state) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.submitExistingAssessment(AssessmentService.submitExisting);
    }

    static uploadProcessConfirmed(state) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.uploadProcessCompleted();
    }

    static facilityAssessmentEntered(state, value) {
        let facilitySelectionProcess = FacilitySelectionProcess.clone(state);
        return facilitySelectionProcess.setFacilityAssessmentUuid(value);
    }
}