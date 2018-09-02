import PathwaySelectionProcess from "../model/PathwaySelectionProcess";

export class HomeAction {
    static onLoad(state) {
        return PathwaySelectionProcess.createWithDefaults();
    }

    static setQualification(state, value) {
        let process = PathwaySelectionProcess.clone(state);
        return process.setQualification(value);
    }

    static setLocation(state, value) {
        let process = PathwaySelectionProcess.clone(state);
        return process.setLocation(value);
    }

    static setSex(state, value) {
        let process = PathwaySelectionProcess.clone(state);
        return process.setSex(value);
    }

    static setAgeGroup(state, value) {
        let process = PathwaySelectionProcess.clone(state);
        return process.setAgeGroup(value);
    }
}