export const NEW_FORM = "newForm";
export default function addNewForm(name, type) {
    return {type: NEW_FORM, formName: name, formType: type};
}