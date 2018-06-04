import _ from "lodash";

class GlobalState {
    _setLoginDetails(success, user, error) {
        this.user = user;
        this.loginError = error;
        this._initialised = true;
    }

    loadCurrentUser(getCurrentUser) {
        if (!_.isNil(this.user)) return new Promise(resolve => resolve());

        return getCurrentUser().then((response) => {
            this._setLoginDetails(response.success, response.user);
        }).catch((error) => {
            this._setLoginDetails(false, undefined, undefined);
            throw error;
        });
    }

    get isLoggedIn() {
        return !_.isNil(this.user);
    }

    get initialised() {
        return this._initialised;
    }

    get userName() {
        return `${this.user.firstName} ${this.user.lastName}`;
    }
}

export default new GlobalState();