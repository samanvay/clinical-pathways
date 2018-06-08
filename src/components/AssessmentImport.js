import React from 'react';
import {Col, Grid, Modal} from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import BaseComponent from "./BaseComponent";
import {AssessmentImportAction} from "../actions/AssessmentImportAction";
import UploadStatusComponent from "./UploadStatusComponent";
import FacilitySelectionProcess from "../model/FacilitySelectionProcess";
import GlobalState from "../model/GlobalState";

export default class AssessmentImport extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = AssessmentImportAction.empty();
    }

    componentDidMount() {
        AssessmentImportAction.onLoad(this.state).then(this.setState).catch(this.setState);
    }

    assessmentToolModeSelected(event) {
        AssessmentImportAction.assessmentToolModeSelected(this.state, event.target.value).then(this.setState);
    }

    assessmentToolSelected(event) {
        AssessmentImportAction.assessmentToolSelected(this.state, event.target.value).then(this.setState);
    }

    checklistSelected(event) {
        this.setState(AssessmentImportAction.checklistSelected(this.state, event.target.value));
    }

    stateSelected(event) {
        AssessmentImportAction.stateSelected(this.state, event.target.value).then(this.setState);
    }

    districtSelected(event) {
        AssessmentImportAction.districtSelected(this.state, event.target.value).then(this.setState);
    }

    facilityTypeSelected(event) {
        AssessmentImportAction.facilityTypeSelected(this.state, event.target.value).then(this.setState);
    }

    assessmentTypeSelected(event) {
        this.setState(AssessmentImportAction.assessmentTypeSelected(this.state, event.target.value));
    }

    facilitySelected(event) {
        this.setState(AssessmentImportAction.facilitySelected(this.state, event.target.value));
    }

    facilityNameEntered(event) {
        this.setState(AssessmentImportAction.facilityNameChanged(this.state, event.target.value));
    }

    fileChanged(event) {
        this.setState(AssessmentImportAction.uploadFileSelected(this.state, event.target.files[0]));
    }

    handleUploadConfirmed() {
        this.setState(AssessmentImportAction.uploadProcessConfirmed(this.props.state));
        this.newFileInput.value = this.updateFileInput.value = "";
    }

    onNewAssessmentSubmit(e) {
        e.preventDefault();
        this.setState(AssessmentImportAction.startAssessmentUpload(this.state));
        AssessmentImportAction.submitNewAssessment(this.state).then(this.setState);
    }

    onExistingAssessmentSubmit(e) {
        e.preventDefault();
        this.setState(AssessmentImportAction.startAssessmentUpload(this.state));
        AssessmentImportAction.submitExistingAssessment(this.state).then(this.setState);
    }

    facilityAssessmentChanged(event) {
        this.setState(AssessmentImportAction.facilityAssessmentEntered(this.state, event.target.value));
    }

    render() {
        if (!GlobalState.initialised) return <div/>;

        if (!GlobalState.isLoggedIn) {
            return <Redirect to={{pathname: '/'}}/>
        }

        return <div>
            {this.state.loading ?
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Loading....</Modal.Title>
                        </Modal.Header>
                    </Modal.Dialog>
                </div>
                :
                <div>
                    <UploadStatusComponent state={this.state} confirmUpload={this.handleUploadConfirmed.bind(this)}/>
                    <Grid>
                        <Col>
                            <div>
                                <div className="form-group">
                                    <br/>

                                    <label htmlFor="sel1"><b>Program</b></label>
                                    <select className="form-control" id="program" onChange={this.assessmentToolModeSelected.bind(this)}
                                            value={this.state.selectedAssessmentToolMode.name}>
                                        {this.state.assessmentToolModes.map((assessmentToolMode) => <option key={assessmentToolMode.name}
                                                                                                            value={assessmentToolMode.name}>{assessmentToolMode.name}</option>)}
                                    </select>
                                    <br/>

                                    <label htmlFor="sel1"><b>Assessment Tool</b></label>
                                    <select className="form-control" id="assessmentTool" onChange={this.assessmentToolSelected.bind(this)}
                                            value={this.state.selectedAssessmentTool.name}>
                                        {this.state.assessmentTools.map((assessmentTool) => <option key={assessmentTool.name} value={assessmentTool.name}>{assessmentTool.name}</option>)}
                                    </select>
                                    <br/>

                                    <label htmlFor="sel1"><b>Checklist</b></label>
                                    <select className="form-control" id="checklist" onChange={this.checklistSelected.bind(this)}
                                            value={this.state.selectedChecklist.name}>
                                        {this.state.checklists.map((checklist) => <option key={checklist.name} value={checklist.name}>{checklist.name}</option>)}
                                    </select>
                                    <br/>

                                    <label htmlFor="sel1"><b>State</b></label>
                                    <select className="form-control" id="state" onChange={this.stateSelected.bind(this)} value={this.state.selectedState.name}>
                                        {this.state.states.map((state) => <option key={state.name} value={state.name}>{state.name}</option>)}
                                    </select>
                                    <br/>

                                    <label htmlFor="sel1"><b>District</b></label>
                                    <select className="form-control" id="district" onChange={this.districtSelected.bind(this)} value={this.state.selectedDistrict.name}>
                                        {this.state.districts.map((district) => <option key={district.name} value={district.name}>{district.name}</option>)}
                                    </select>
                                    <br/>

                                    <label htmlFor="sel1"><b>Facility Type</b></label>
                                    <select className="form-control" id="facilityType" onChange={this.facilityTypeSelected.bind(this)}
                                            value={this.state.selectedFacilityType.name}>
                                        {this.state.facilityTypes.map((facilityType) => <option key={facilityType.name}
                                                                                                value={facilityType.name}>{facilityType.name}</option>)}
                                    </select>
                                    <br/>

                                    <label htmlFor="sel1"><b>Facility</b></label>
                                    <select className="form-control" id="facility" onChange={this.facilitySelected.bind(this)} value={this.state.selectedFacility.name}>
                                        {this.state.facilities.map((facility) => <option key={facility.name} value={facility.name}>{facility.name}</option>)}
                                    </select>
                                    <br/>

                                    <label htmlFor="sel1"><b>Enter facility (if not present in the list)</b></label>
                                    <input type="text" className="form-control" id="usr" onChange={this.facilityNameEntered.bind(this)} value={this.state.facilityName}/>
                                    <br/>

                                    <label htmlFor="sel1"><b>Assessment Type</b></label>
                                    <select className="form-control" id="assessmentType" onChange={this.assessmentTypeSelected.bind(this)}
                                            value={this.state.selectedAssessmentType.name}>
                                        {this.state.assessmentTypes.map((assessmentType) => <option key={assessmentType.name}
                                                                                                    value={assessmentType.name}>{assessmentType.name}</option>)}
                                    </select>
                                    <br/>

                                    <label htmlFor="exampleFormControlFile1"><b>Assessment file (only .XLSX file supported)</b></label>
                                    <input type="file" className="form-control-file" id="assessmentFile" accept='.xlsx' ref={ref => this.newFileInput = ref}
                                           onChange={this.fileChanged.bind(this)}/>
                                    <br/>

                                    <button type="submit" className="btn btn-primary" disabled={!FacilitySelectionProcess.isSubmittable(this.state)}
                                            onClick={this.onNewAssessmentSubmit.bind(this)}>Submit Assessment
                                    </button>
                                </div>

                                <br/>
                                <hr/>
                                <br/>

                                <h4>Re-upload (overwrites an already uploaded assessment)</h4>
                                <div className="form-group">
                                    <label htmlFor="sel1"><b>System identifier (provided by the system when you last uploaded the file)</b></label>
                                    <input type="text" className="form-control" id="usr" onChange={this.facilityAssessmentChanged.bind(this)}
                                           value={this.state.facilityAssessmentUuid}/>
                                    <br/>

                                    <label htmlFor="exampleFormControlFile1"><b>Assessment file (only .XLSX file supported)</b></label>
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" accept='.xlsx' ref={ref => this.updateFileInput = ref}
                                           onChange={this.fileChanged.bind(this)}/>
                                    <br/>

                                    <button type="submit" className="btn btn-primary" disabled={!FacilitySelectionProcess.isUpdatable(this.state)}
                                            onClick={this.onExistingAssessmentSubmit.bind(this)}>Update Assessment
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Grid>
                </div>
            }
        </div>
    };
}