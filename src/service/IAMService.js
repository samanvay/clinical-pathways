import RestClient from "../framework/RestClient";

class IAMService {
    static login(email, password) {
        let obj = {email: email, password: password};
        return RestClient.post('/login', obj);
    }
}

export default IAMService;