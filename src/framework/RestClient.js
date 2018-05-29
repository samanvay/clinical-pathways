import _ from 'lodash';
import request from 'superagent';

class RestClient {
    static get(path, params) {
        let url = _.isNil(params) ? `${path}/` : `${path}?${RestClient._makeParams(params)}`;

        let headers = {Accept: 'application/json', 'Content-Type': 'application/json'};
        return request.get(`/api/${url}`).set({
            headers: headers
        });
    }

    static getJSON(path, params) {
        return RestClient.get(path, params).then((streamedResponse) => streamedResponse.body);
    }

    static _makeParams(obj) {
        return _.toPairs(obj).map((kv) => kv.join('=')).join("&");
    }

    static postMultipart(path, obj) {
        let data = new FormData();
        _.toPairs(obj).forEach((param) => data.append(param[0], param[1]));
        return fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: data
        }).then((streamedResponse) => streamedResponse.body);
    }

    static post(path, obj) {
        let encodedObj = _.keys(obj).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
        let formBody = encodedObj.join("&");

        return request.post(path).set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8').send(formBody);
    }
}

export default RestClient;