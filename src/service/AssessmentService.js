import _ from "lodash";
import RestClient from "../framework/RestClient";

class AssessmentService {
    static submit(assessmentToolUuid, assessmentTypeUuid, facilityUuid, facilityName, assessmentFile) {
        return RestClient.postMultipart("facility-assessment/excel/", {assessmentFile: assessmentFile}, {
            assessmentToolUuid: assessmentToolUuid,
            assessmentTypeUuid: assessmentTypeUuid,
            facilityUuid: facilityUuid,
            facilityName: facilityName
        });
    }
}

export default AssessmentService;