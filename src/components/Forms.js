import React, {Component} from 'react';
import 'whatwg-fetch';
import _ from 'lodash';
import moment from 'moment';
import Breadcrumb from "./Breadcrumb";
import AdminHeader from "./AdminHeader";

class Forms extends Component {
    constructor() {
        super();
        this.state = {data: [], loading: true};
        this.setState = this.setState.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8021/forms", {credentials: 'include', Accept: 'application/json'})
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else if (response.status === 401 || response.status === 403) {
                    window.location.pathname = '/';
                    return null;
                }
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            })
            .then((data) => {
                this.setState({data: data, loading: false});
            })
            .catch((error) => {
                this.setState({loading: false});
            });

    }

    static renderRow(cols) {
        return (
            <div className="row">
                {cols}
            </div>
        );
    }

    static renderForm(form) {
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

    renderRows(data) {
        const rows = [];
        _.forEach(data, (programData, programDataIndex) => {
            const style = {
                backgroundColor: programData.program.colour
            };
            const collapseId = "collapse" + programDataIndex;
            const headingId = "heading" + programDataIndex;
            rows.push(
                <div className="card">
                    <div className="card-heading" role="tab" id={headingId}>
                        <h2 className="card-title text-center" style={style}>
                            <a data-toggle="collapse" href={"#" + collapseId} aria-expanded="true"
                               aria-controls={collapseId} style={{color: 'white'}}>
                                {programData.program.name}
                            </a>
                        </h2>
                    </div>
                    <div className="card-body">
                        <div id={collapseId} className="collapse show" role="tabpanel" aria-labelledby={headingId}
                             data-parent="#accordion">
                            {this.renderProgramForms(programData)}
                        </div>
                    </div>
                </div>);
        });
        return rows;
    }

    render() {
        return <div>
            <AdminHeader/>
            <Breadcrumb name="forms"/>
            <div className="container">
                <nav className="navbar my-2 my-sm-0">
                    <form className="form-inline">
                        <button className="btn btn-outline-success" type="button">New Form</button>
                    </form>
                </nav>
            </div>
            <div className="container">
                <div id="accordion" role="tablist">
                    {this.renderRows(this.state.data)}
                </div>
            </div>
        </div>
    }

    renderProgramForms(programData) {
        const rows = [];
        let cols = [];
        _.forEach(programData.forms, (form, formIndex) => {
            cols.push(Forms.renderForm(form));
            if (cols.length === 4) {
                rows.push(Forms.renderRow(cols));
                cols = [];
            }
        });
        rows.push(Forms.renderRow(cols));
        return rows;
    }
}

export default Forms;