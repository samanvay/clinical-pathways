import React, {Component} from 'react';
import Breadcrumb from "./Breadcrumb";
import AdminHeader from "./AdminHeader";

const sampleData = [
    {
        "name": "Diabetes Followup",
        "uuid": "0ff47dc0-b627-456c-86ed-e7ebb8008dc4",
        "formType": "ProgramEncounter",
        "programName": "Diabetes"
    },
    {
        "name": "Mother Enrolment",
        "uuid": "026e2f5c-8670-4e4b-9a54-cb03bbf3093d",
        "formType": "ProgramEnrolment",
        "programName": "Mother"
    },
    {
        "name": "Screening",
        "uuid": "a5e99c9e-5b3a-4730-b24b-80662e79689c",
        "formType": "Encounter",
    },
    {
        "name": "Outpatient",
        "uuid": "e1472f56-c057-4aea-9f46-0decd9d068fe",
        "formType": "Encounter"
    },
    {
        "name": "Abortion",
        "uuid": "32428a7e-d553-4172-b697-e8df3bbfb61d",
        "formType": "ProgramEncounter",
        "programName": "Mother"
    },
    {
        "name": "ANC",
        "uuid": "3a95e9b0-731a-4714-ae7c-10e1d03cebfe",
        "formType": "ProgramEncounter",
        "programName": "Mother"
    },
    {
        "name": "Delivery",
        "uuid": "cc6a3c6a-c3cc-488d-a46c-d9d538fcc9c2",
        "formType": "ProgramEncounter",
        "programName": "Mother"
    }
];

class Forms extends Component {
    //hardcoded data for now...
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
                <div className="row">
                    <div className="col-md-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">Diabetes Followup</a>
                                </h4>
                                <h5>ProgramEnrolment</h5>
                                <p className="card-text">Mother</p>
                                <a href="#" className="btn btn-primary">Open</a>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 9 days ago</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">Mother Enrolment</a>
                                </h4>
                                <h5>ProgramEncounter</h5>
                                <p className="card-text">Diabetes</p>
                                <a href="#" className="btn btn-primary">Open</a>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">Screening</a>
                                </h4>
                                <h5>Encounter</h5>
                                <p className="card-text"></p>
                                <a href="#" className="btn btn-primary">Open</a>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 4 hrs ago</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">Abortion</a>
                                </h4>
                                <h5>ProgramEncounter</h5>
                                <p className="card-text">Mother</p>
                                <a href="#" className="btn btn-primary">Open</a>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 1 min ago</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">ANC</a>
                                </h4>
                                <h5>ProgramEnrolment</h5>
                                <p className="card-text">Mother</p>
                                <a href="#" className="btn btn-primary">Open</a>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 10 days ago</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">Delivery</a>
                                </h4>
                                <h5>ProgramEncounter</h5>
                                <p className="card-text">Mother</p>
                                <a href="#" className="btn btn-primary">Open</a>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 1 month ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Forms;