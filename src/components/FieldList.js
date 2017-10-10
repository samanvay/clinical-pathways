import React, {Component} from 'react';
import _ from "lodash";

const fields = [
    {
        icon: "object-group",
        label: "Group"
    },
    {
        icon: "font",
        label: "Text"
    },
    {
        icon: "check-circle",
        label: "Checkbox"
    },
    {
        icon: "list",
        label: "List"
    },
    {
        icon: "calendar",
        label: "Date"
    },
    {
        icon: "align-left",
        label: "Multiple choices"
    }
];

export default class FieldList extends Component {
    constructor(props) {
        super(props);
    }

    static addFieldsRow(fields) {
        return (
            <div className="row list-group-horizontal">
                {fields}
            </div>
        );
    }

    renderFields() {
        let rows = [];
        let cols = [];
        _.forEach(fields, (field, fieldIndex) => {
            cols.push(
                <div className="col-4 list-group-item" key={fieldIndex}>
                    <i className={`fa fa-${field.icon}`}>{" " + field.label}</i>
                </div>);
            if (cols === 3) {
                rows.push(FieldList.addFieldsRow(cols));
                cols = [];
            }
        });
        if (cols.length > 0) {
            rows.push(FieldList.addFieldsRow(cols));
        }
        return rows;
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <strong>Select Field</strong>
                </div>
                <div className="card-body">
                    {this.renderFields()}
                </div>
            </div>
        );
    }
}