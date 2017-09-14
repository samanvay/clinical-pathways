import React from 'react';
import moment from 'moment';

export default function FormCard(props) {
    const form = props.form;
    const duration = moment(form.lastModifiedDateTime).fromNow(true);
    return <div className="col-md-3" key={form.uuid}>
        <div className="card h-100">
            <div className="card-body">
                <h4 className="card-title">
                    <a href="#">{form.name}</a>
                </h4>
                <h5>{form.formType}</h5>
                <a href="#" className="btn btn-primary">Open</a>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated {duration} ago</small>
            </div>
        </div>
    </div>
}