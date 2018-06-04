import GlobalState from "../model/GlobalState";
import IAMService from "../service/IAMService";

class Action {
    static onLoad(state) {
        return GlobalState.loadCurrentUser(IAMService.getCurrentUser).then(() => GlobalState.isLoggedIn).catch(() => {
            throw state;
        });
    }
}

export default Action;