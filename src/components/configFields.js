import React from 'react';
import TextComponent from "./TextComponent";
import DateComponent from "./DateComponent";
import MultiCodeComponent from "./MultiCodeComponent";

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
    type: "Date",
    component: (groupId, field, collapse) => (
        <DateComponent groupId={groupId} field={field} fieldMetadata={fieldsMetadata[3]} key={field.id}
                       collapse={collapse}/>)
}, {
    id: "align-left",
    icon: "align-left",
    label: "Multiple choices",
    type: "Coded",
    component: (groupId, field, collapse) => (
        <MultiCodeComponent groupId={groupId} field={field} fieldMetadata={fieldsMetadata[4]} key={field.id}
                            collapse={collapse}/>)
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