import React from "react";

export function NewFormButton() {
    return <div className="row justify-content-end">
        <div className="col-1">
            <nav className="navbar float-right">
                <form className="form-inline">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#newFormModal" type="button">
                        New Form
                    </button>
                </form>
            </nav>
        </div>
    </div>;
};

export default function NewFormModal(props) {
    const addFields = (event) => {
        props.history.push("/forms/addFields", null);
    };

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
                            <label htmlFor="formName">Name</label>
                            <input type="text" className="form-control" id="formName" aria-describedby="formNameHelp"
                                   placeholder="Enter form name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formType">Form Type</label>
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
                        <button type="button" data-dismiss="modal" className="btn btn-primary btn-block"
                                onClick={addFields}>Add Fields
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
};