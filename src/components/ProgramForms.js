import React from 'react';
import _ from 'lodash';
import FormCard from "./FormCard";

function renderRow(cols, rowKey) {
    return (
        <div className="row" key={rowKey}>
            {cols}
        </div>
    );
}

export default function ProgramForms(props) {
    const programData = props.programData;
    const rows = [];
    let cols = [];
    let rowKey;
    _.forEach(programData.forms, (form) => {
        rowKey = form.uuid + "-" + rows.length;
        cols.push(<FormCard form={form} key={form.uuid}/>);
        if (cols.length === 4) {
            rows.push(renderRow(cols, rowKey));
            cols = [];
        }
    });
    rows.push(renderRow(cols, rowKey));
    return <div>
        {rows}
    </div>
}