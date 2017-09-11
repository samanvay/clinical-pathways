import React, {Component} from 'react';
import 'whatwg-fetch';
import _ from 'lodash';
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

    renderRow(cols) {
        return (
            <div className="row">
                {cols}
            </div>
        );
    }

    renderForm(form) {
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
                    <small className="text-muted">Last updated 9 days ago</small>
                </div>
            </div>
        </div>
    }

    renderRows1(data) {
        let cols = [], rows = [];
        _.forEach(data, (programData, programDataIndex) => {
            rows.push(
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{programData.program.name}</h3></div>
                </div>);
            rows.push(<div className="panel-body">{this.renderProgramForms()}</div>);
            _.forEach(programData.forms, (form, formIndex) => {
                cols.push(this.renderForm(form));
                if (cols.length === 4) {
                    rows.push(this.renderRow(cols));
                    cols = [];
                }
            });
        });
        rows.push(this.renderRow(cols));
        return rows;
    }

    renderRows(data) {
        const rows = [];
        _.forEach(data, (programData, programDataIndex) => {
            rows.push(
            <div className="card">
                <div className="card-heading">
                    <h3 className="card-title" style={{'background-color': programData.program.colour}}>{programData.program.name}</h3>
                </div>
            </div>);
           rows.push(<div className="card-body">{this.renderProgramForms(programData)}</div>);});
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
                {this.renderRows(this.state.data)}
            </div>
        </div>
    }

    renderProgramForms(programData) {
        const rows = [];
        let cols = [];
        _.forEach(programData.forms, (form, formIndex) => {
            cols.push(this.renderForm(form));
            if (cols.length === 4) {
                rows.push(this.renderRow(cols));
                cols = [];
            }
        });
        rows.push(this.renderRow(cols));
        return rows;
    }
}

export default Forms;