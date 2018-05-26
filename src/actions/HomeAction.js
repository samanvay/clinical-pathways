import LoginProcess from "../model/LoginProcess";
import IAMService from "../service/IAMService";

export class HomeAction {
    static empty() {
        return new LoginProcess();
    }

    static onLoad(state) {
        let loginProcess = LoginProcess.clone(state);
        return loginProcess.start();
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
        return loginProcess.submit(IAMService.login).then((response) => {
            console.log(JSON.stringify(response));
        });
    }
}