class LoginProcess {
    start() {
        return this;
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

    submit(login) {
        return login(this.email, this.password);
    }
}

export default LoginProcess;