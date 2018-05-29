class LoginProcess {
    start(getCurrentUser) {
        return getCurrentUser().then((response) => {
            this.status = response.success;
            this.user = response.user;
            return this;
        }).catch((error) => {
            this.user = undefined;
            this.status = false;
            return this;
        });
    }

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
        return login(this.email, this.password).then(() => this.start(getCurrentUser))
            .catch((error) => {
                this.status = false;
                return this;
            });
    }
}

export default LoginProcess;