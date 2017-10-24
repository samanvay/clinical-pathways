import React from 'react';

const TextComponent = (props) => {
    return (
        <div className="form-group row">
            <label htmlFor={props.id} className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id={props.id}/>
            </div>
        </div>
    );
};

const fields = [{
        icon: "object-group",
        label: "Group",
        type: "Group"
    },{
        icon: "font",
        label: "Text",
        type: "Text",
        component: (id) => (<TextComponent id={id} key={id}/>)
    },{
        icon: "check-circle",
        label: "Checkbox",
        type: "Boolean"
    },{
        icon: "calendar",
        label: "Date",
        type: "Date"
    },{
        icon: "align-left",
        label: "Multiple choices",
        type: "Coded"
    },{
        icon: "circle-o-#",
        isStack: true,
        iconWrapper: "circle-o",
        iconContent: "#",
        label: "Number",
        type: "Number"
    }];
export default fields;