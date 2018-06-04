import LoginProcess from "../model/LoginProcess";
import IAMService from "../service/IAMService";
import Action from "./Action";

export class HomeAction {
    static empty() {
        return new LoginProcess();
    }

    static onLoad(state) {
        let loginProcess = LoginProcess.clone(state);
        return Action.onLoad(loginProcess).then(() => state);
    }

    static setEmail(state, value) {
        let loginProcess = LoginProcess.clone(state);
        return loginProcess.setEmail(value);
    }

    static setPassword(state, value) {
        let loginProcess = LoginProcess.clone(state);
        return loginProcess.setPassword(value);
    }

    static login(state) {
        let loginProcess = LoginProcess.clone(state);
        return loginProcess.submit(IAMService.login, IAMService.getCurrentUser);
    }
}