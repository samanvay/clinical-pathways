import RestClient from "../framework/RestClient";

class ReferenceDataService {
    static _processListResources(promise, resourceName) {
        return promise.then((streamedResponse) => streamedResponse.json())
            .then((responseObj) => responseObj["_embedded"][resourceName]);
    }

    static _getAllResources(resourceName) {
        return ReferenceDataService._processListResources(RestClient.get(resourceName), resourceName);
    }

    static getAllStates() {
        return ReferenceDataService._getAllResources("state");
    }

    static getFacilityTypes() {
        return ReferenceDataService._getAllResources("facilityType");
    }

    static getDistricts(stateName) {
        return ReferenceDataService._processListResources(RestClient.get("district/search/byState/", {stateName: stateName}), "district");
    }

    static getFacilities(districtName, facilityTypeName) {
        if (_.isNil(facilityTypeName))
            return ReferenceDataService._processListResources(RestClient.get("facility/search/byDistrict/", {districtName: districtName}), "facility");
        else
            return ReferenceDataService._processListResources(RestClient.get("facility/search/byDistrictAndFacilityType/", {districtName: districtName, facilityTypeName: facilityTypeName}), "facility");
    }
}

export default ReferenceDataService;