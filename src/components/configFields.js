import React from 'react';
import TextComponent from "./TextComponent";

const fieldsMetadata = [{
    icon: "object-group",
    label: "Group",
    type: "Group"
}, {
    icon: "font",
    label: "Text",
    type: "Text",
    component: (groupId, field, collapse) => (
        <TextComponent groupId={groupId} field={field} fieldMetadata={fieldsMetadata[1]} key={field.id}
                       collapse={collapse}/>)
}, {
    icon: "check-circle",
    label: "Checkbox",
    type: "Boolean"
}, {
    icon: "calendar",
    label: "Date",
    type: "Date"
}, {
    icon: "align-left",
    label: "Multiple choices",
    type: "Coded"
}, {
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