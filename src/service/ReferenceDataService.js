import _ from "lodash";

class ReferenceDataService {
    static getAllStates() {
        return fetch(`/api/state`, {Accept: 'application/json', 'Content-Type': 'application/json'})
            .then((streamedResponse) => streamedResponse.json())
            .then((responseObj) => responseObj["_embedded"]["state"]);
    }
}

export default ReferenceDataService;