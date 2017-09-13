import React from "react";

export function NewFormButton() {
    return <div className="container">
        <nav className="navbar my-2 my-sm-0">
            <form className="form-inline">
                <button className="btn btn-primary" data-toggle="modal" data-target="#newFormModal" type="button">New
                    Form
                </button>
            </form>
        </nav>
    </div>
};

export default function NewFormModal() {
    return <div className="modal fade" id="newFormModal" role="dialog" aria-labelledby="newFormModalTitle"
                aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="newFormModalTitle">New Form</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div className="modal-body">
                        <div className="form-group">
                            <label for="formName">Name</label>
                            <input type="email" className="form-control" id="formName" aria-describedby="formNameHelp"
                                   placeholder="Enter form name"/>
                        </div>
                        <div className="form-group">
                            <label for="formType">Form Type</label>
                            <select className="form-control" id="formTypeSelect">
                                <option>IndividualProfile</option>
                                <option>Encounter</option>
                                <option>ProgramEncounter</option>
                                <option>ProgramEnrolment</option>
                                <option>ProgramExit</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary btn-block">Add Fields</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
};