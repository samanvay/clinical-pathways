import React from 'react';
const TextComponent = (props)=> {
    return <input type="text" name={props.name}/>
};

const fields = new Map([
    ["object-group", {
        icon: "object-group",
        label: "Group"
    }],
    ["font", {
        icon: "font",
        label: "Text",
        component: (name)=>(<TextComponent name={name}/>)
    }],
    ["check-circle", {
        icon: "check-circle",
        label: "Checkbox"
    }],
    ["list", {
        icon: "list",
        label: "List"
    }],
    ["calendar", {
        icon: "calendar",
        label: "Date"
    }],
    ["align-left", {
        icon: "align-left",
        label: "Multiple choices"
    }]
]);
export default fields;