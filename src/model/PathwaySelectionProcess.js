class PathwaySelectionProcess {
    static createWithDefaults() {
        let pathwaySelectionProcess = new PathwaySelectionProcess();
        pathwaySelectionProcess.qualifications = ["MBBS", "BAMS", "ASHA", "Other"];
        pathwaySelectionProcess.setQualification("MBBS");
        pathwaySelectionProcess.ageGroups = ["<5 years", "5-10 years"];
        pathwaySelectionProcess.setAgeGroup("<5 years");
        pathwaySelectionProcess.sexes = ["Female", "Male", "Other"];
        pathwaySelectionProcess.setSex("Female");
        return pathwaySelectionProcess;
    }

    static clone(process) {
        return Object.assign(new PathwaySelectionProcess(), process);
    }

    setQualification(qualification) {
        this.qualification = qualification;
        return this;
    }

    setLocation(location) {
        this.location = location;
        return this;
    }

    setSex(sex) {
        this.sex = sex;
        return this;
    }

    setAgeGroup(ageGroup) {
        this.ageGroup = ageGroup;
        return this;
    }
}

export default PathwaySelectionProcess;