export const NEW_FORM = "newForm";
export default function addNewForm(name, formType, programName) {
    return {type: NEW_FORM, name, formType, programName};
}