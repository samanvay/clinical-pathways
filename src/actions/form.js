export const BASIC_FORM = "basicForm";
export const FETCH_GROUPS = "fetchGroups";
export const REQUEST_GROUPS = "requestGroups";
export default function updateBasicForm(name, formType, programName, uuid) {
    return {type: BASIC_FORM, name, formType, programName, uuid};
}
export function fetchGroups(formName, uuid, callback) {
    return (dispatch) => {
        dispatch(requestGroups(formName));
        return fetch(`/forms/export?formUUID=${uuid}`, {
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
                dispatch(receiveGroups(form));
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