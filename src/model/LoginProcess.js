import GlobalState from "./GlobalState";

class LoginProcess {
    static clone(loginProcess) {
        return Object.assign(new LoginProcess(), loginProcess);
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    setPassword(password) {
        this.password = password;
        return this;
    }

    submit(login, getCurrentUser) {
        return login(this.email, this.password).then(() => GlobalState.loadCurrentUser(getCurrentUser))
            .catch((error) => {
                GlobalState._setLoginDetails(false, undefined, error);
                throw this;
            });
    }
}

export default LoginProcess;