import _ from "lodash";
import RestClient from "../framework/RestClient";

class AssessmentService {
    static submit(assessmentInExcel) {
        return RestClient.post("facility-assessment/excel/", assessmentInExcel);
    }
}

export default AssessmentService;