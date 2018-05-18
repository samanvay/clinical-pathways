import _ from "lodash";

const nullState = {name: "Select State"};
const nullDistrict = {name: "Select District"};
const nullFacilityType = {name: "Select Facility Type"};
const nullFacility = {name: "Select Facility"};

class FacilitySelectionProcess {
    static empty() {
        let facilitySelectionProcess = new FacilitySelectionProcess();
        facilitySelectionProcess.initialised = false;
        return facilitySelectionProcess;
    }

    start(getAllStates, getAllFacilityTypes) {
        this.initialised = true;
        return getAllStates()
            .then((states) => {
                this.states = FacilitySelectionProcess._getSortedList(states, nullState);
                this.selectedState = nullState;
            })
            .then(getAllFacilityTypes)
            .then((facilityTypes) => this.facilityTypes = FacilitySelectionProcess._getSortedList(facilityTypes, nullFacilityType)).then(() => {
                this.selectedState = nullState;

                this.districts = [nullDistrict];
                this.selectedDistrict = nullDistrict;

                this.selectedFacilityType = nullFacilityType;

                this.facilities = [nullFacility];
                this.selectedFacility = nullFacility;

                return this;
            });
    }

    static clone(facilitySelectionProcess) {
        return Object.assign(new FacilitySelectionProcess(), facilitySelectionProcess);
    }

    static _getSortedList(objects, nullObject) {
        let sortedObjects = _.sortBy(objects, (obj) => obj.name);
        sortedObjects.splice(0, 0, nullObject);
        return sortedObjects;
    }

    setSelectedState(stateName, getDistricts) {
        this.selectedDistrict = nullDistrict;
        this.selectedFacility = nullFacility;
        this.selectedState = _.find(this.states, (state) => state.name === stateName);

        if (this.selectedState.name === nullState.name) {
            this.districts = [nullDistrict];
            return new Promise(() => this);
        }
        return getDistricts(stateName).then((districts) => {
            this.districts = FacilitySelectionProcess._getSortedList(districts, nullDistrict);
        }).then(() => this);
    }

    setSelectedDistrict(districtName, getFacilities) {
        this.selectedDistrict = _.find(this.districts, (district) => district.name === districtName);
        this.selectedFacility = nullFacility;

        if (FacilitySelectionProcess.isNullDistrict(districtName)) {
            this.facilities = [nullFacility];
            return new Promise(() => this);
        } else
            return getFacilities(districtName, this.getFacilityTypeName()).then((facilities) => {
                this.facilities = FacilitySelectionProcess._getSortedList(facilities, nullFacility);
                this.selectedFacility = nullFacility;
                return this;
            });
    }

    setFacilityType(facilityTypeName, getFacilities) {
        this.selectedFacilityType = _.find(this.facilityTypes, (facilityType) => facilityType.name === facilityTypeName);
        if (facilityTypeName === nullFacilityType.name || this.selectedDistrict.name === nullDistrict.name) {
            return new Promise(() => this);
        } else {
            return getFacilities(this.selectedDistrict.name, facilityTypeName).then((facilities) => {
                this.facilities = FacilitySelectionProcess._getSortedList(facilities, nullFacility);
                this.selectedFacility = nullFacility;
                return this;
            });
        }
    }

    static isNullDistrict(districtName) {
        return nullDistrict.name === districtName;
    }

    getFacilityTypeName() {
        return this.selectedFacilityType === nullFacilityType ? null : this.selectedFacilityType.name;
    }

    setFacility(facilityName) {
        this.selectedFacility = _.find(this.facilities, (facility) => facility.name === facilityName);
    }
}

export default FacilitySelectionProcess;