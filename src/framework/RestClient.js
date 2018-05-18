import _ from 'lodash';

class RestClient {
    static get(path, params) {
        let url = _.isNil(params) ? `${path}/` : `${path}?${RestClient._makeParams(params)}`;
        return fetch(`/api/${url}`, {Accept: 'application/json', 'Content-Type': 'application/json'});
    }

    static _makeParams(obj) {
        return _.toPairs(obj).map((kv) => kv.join('=')).join("&");
    }
}

export default RestClient;