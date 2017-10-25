import React from 'react';
import {FieldIcon} from "./FieldList";

const TextComponent = (props) => {
    const collapseId = "collapse" + props.id;
    const headerId = "heading_" + props.id;
    return (
        <div className="row">
            <div className="card col-12">
                <div className="card-header" role="tab" id={headerId}>
                    <a data-toggle="collapse" href={"#" + collapseId} aria-expanded="true" aria-controls={collapseId}>
                        Question
                    </a>
                </div>
                <div id={collapseId} className={props.collapse} role="tabpanel" aria-labelledby={headerId}
                     data-parent="#accordion">
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col-md-11">
                                <input type="text" className="form-control" id={props.id} placeholder="Question Title"/>
                            </div>
                            <div className="form-group col-md-1">
                                <FieldIcon field={props.field}/>{" " + props.field.label}
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"/> Required
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const fields = [{
    icon: "object-group",
    label: "Group",
    type: "Group"
}, {
    icon: "font",
    label: "Text",
    type: "Text",
    component: (id, collapse) => (<TextComponent field={fields[1]} id={id} key={id} collapse={collapse}/>)
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
    type: "Number"
}];
export default fields;