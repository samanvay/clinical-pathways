import files from './files.json';
import _ from 'lodash';

class PathwaySelectionProcess {
    static createWithDefaults() {
        let pathwaySelectionProcess = new PathwaySelectionProcess();
        pathwaySelectionProcess.qualifications = ["MBBS", "BAMS", "ASHA", "Other"];
        pathwaySelectionProcess.qualification = "MBBS";
        pathwaySelectionProcess.ageGroups = ["<5 years", "5-10 years"];
        pathwaySelectionProcess.ageGroup = "<5 years";
        pathwaySelectionProcess.sexes = ["Female", "Male", "Other"];
        pathwaySelectionProcess.sex = "Female";
        pathwaySelectionProcess.chooseFile();
        return pathwaySelectionProcess;
    }

    chooseFile() {
        let file = _.find(files, (file) => file.qualification === this.qualification && file.sex === this.sex && file.ageGroup === this.ageGroup);
        this.file = file ? file.file : undefined;
        return this;
    }

    static clone(process) {
        return Object.assign(new PathwaySelectionProcess(), process);
    }

    setQualification(qualification) {
        this.qualification = qualification;
        return this.chooseFile();
    }

    setLocation(location) {
        this.location = location;
        return this.chooseFile();
    }

    setSex(sex) {
        this.sex = sex;
        return this.chooseFile();
    }

    setAgeGroup(ageGroup) {
        this.ageGroup = ageGroup;
        return this.chooseFile();
    }
}

export default PathwaySelectionProcess;