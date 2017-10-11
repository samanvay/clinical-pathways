import {ADD_FIELD} from "../actions/addField";
export default function addField(fields = [], action) {
    switch (action.type) {
        case ADD_FIELD:
            const clonedFields = fields.slice(0);
            clonedFields.push(action.field.component(name(clonedFields, action.field)))
            return clonedFields;
        default:
            return fields;
    }
}

const name = (fields, field) => (field.icon + (fields.length === 0 ? 1 : fields.length + 1));