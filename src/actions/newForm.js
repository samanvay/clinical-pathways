export const NEW_FORM = "newForm";
export const FETCH_GROUPS = "fetchGroups";
export const REQUEST_GROUPS = "requestGroups";
export default function addNewForm(name, formType, programName, uuid) {
    return {type: NEW_FORM, name, formType, programName, uuid};
}
export function fetchGroups(formName, uuid, callback) {
    console.log("in fetchGroup action for " + uuid);
    return (dispatch, getState) => {
        dispatch(requestGroups(formName));
        return fetch(`http://localhost:8021/forms/export?formUUID=${uuid}`, {
            credentials: 'include',
            Accept: 'application/json'
        })
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else if (response.status === 401 || response.status === 403) {
                    window.location.pathname = '/';
                    return null;
                }
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            })
            .then((form) => {
                console.log(JSON.stringify(form));
                dispatch(receiveGroups(form));
                console.log("After fetch: " + JSON.stringify(getState()["formElementGroups"]));
                callback();
            })
            .catch((error) => {
                //todo need to notify
                console.log(error);
            });
    }
}
function receiveGroups(form) {
    return {
        type: FETCH_GROUPS,
        form,
        loading: false
    }
}
function requestGroups(formName) {
    return {
        type: REQUEST_GROUPS,
        form: formName,
        loading: true
    }
}