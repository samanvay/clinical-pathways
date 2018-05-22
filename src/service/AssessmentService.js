import _ from "lodash";
import RestClient from "../framework/RestClient";

class AssessmentService {
    static submit(assessmentInExcel) {
        return RestClient.postMultipart("facility-assessment/excel/", assessmentInExcel);
    }
}

export default AssessmentService;