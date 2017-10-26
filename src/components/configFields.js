import React from 'react';
import TextComponent from "./TextComponent";

const fieldsMetadata = [{
    id: "object-group",
    icon: "object-group",
    label: "Group",
    type: "Group"
}, {
    id: "font",
    icon: "font",
    label: "Text",
    type: "Text",
    component: (groupId, field, collapse) => (
        <TextComponent groupId={groupId} field={field} fieldMetadata={fieldsMetadata[1]} key={field.id}
                       collapse={collapse}/>)
}, {
    id: "check-circle",
    icon: "check-circle",
    label: "Checkbox",
    type: "Boolean"
}, {
    id: "calendar",
    icon: "calendar",
    label: "Date",
    type: "Date"
}, {
    id: "align-left",
    icon: "align-left",
    label: "Multiple choices",
    type: "Coded"
}, {
    id: "circle-o-",
    icon: "circle-o-#",
    isStack: true,
    iconWrapper: "circle-o",
    iconContent: "#",
    label: "Number",
    type: "Number",
    component: (groupId, field, collapse) => (
        <TextComponent groupId={groupId} field={field} fieldMetadata={fieldsMetadata[5]} key={field.id}
                       collapse={collapse}/>)
}];
export default fieldsMetadata;