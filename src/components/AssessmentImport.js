import React from 'react';
import {Col, Grid} from "react-bootstrap";
import BaseComponent from "./BaseComponent";
import {FacilitySelectionAction} from "../actions/FacilitySelectionAction";

export default class AssessmentImport extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = FacilitySelectionAction.empty();
    }

    componentDidMount() {
        FacilitySelectionAction.onLoad(this.state).then(this.setState);
    }

    assessmentToolModeSelected(event) {
        FacilitySelectionAction.assessmentToolModeSelected(this.state, event.target.value).then(this.setState);
    }

    assessmentToolSelected(event) {
        this.setState(FacilitySelectionAction.assessmentToolSelected(this.state, event.target.value));
    }

    stateSelected(event) {
        FacilitySelectionAction.stateSelected(this.state, event.target.value).then(this.setState);
    }

    districtSelected(event) {
        FacilitySelectionAction.districtSelected(this.state, event.target.value).then(this.setState);
    }

    facilityTypeSelected(event) {
        FacilitySelectionAction.facilityTypeSelected(this.state, event.target.value).then(this.setState);
    }

    assessmentTypeSelected(event) {
        FacilitySelectionAction.assessmentTypeSelected(this.state, event.target.value).then(this.setState);
    }

    facilitySelected(event) {
        this.setState(FacilitySelectionAction.facilitySelected(this.state, event.target.value));
    }

    facilityNameEntered(event) {
        this.setState(FacilitySelectionAction.facilityNameChanged(this.state, event.target.value));
    }

    fileChanged(event) {
        FacilitySelectionAction.uploadFileSelected(this.state, event.target.files[0]);
    }

    onFormSubmit(e) {
        e.preventDefault();
        FacilitySelectionAction.submitAssessment(this.state);
    }

    render() {
        if (!this.state.initialised) return <div/>;

        return <div>
            <Grid>
                <Col>
                    <div className="form-group">
                        <label htmlFor="sel1">Program</label>
                        <select className="form-control" id="program" onChange={this.assessmentToolModeSelected.bind(this)} value={this.state.selectedAssessmentToolMode.name}>
                            {this.state.assessmentToolModes.map((assessmentToolMode) => <option key={assessmentToolMode.name} value={assessmentToolMode.name}>{assessmentToolMode.name}</option>)}
                        </select>
                        <label htmlFor="sel1">Assessment Tool</label>
                        <select className="form-control" id="assessmentTool" onChange={this.assessmentToolSelected.bind(this)} value={this.state.selectedAssessmentTool.name}>
                            {this.state.assessmentTools.map((state) => <option key={state.name} value={state.name}>{state.name}</option>)}
                        </select>
                        <label htmlFor="sel1">State</label>
                        <select className="form-control" id="state" onChange={this.stateSelected.bind(this)} value={this.state.selectedState.name}>
                            {this.state.states.map((state) => <option key={state.name} value={state.name}>{state.name}</option>)}
                        </select>
                        <label htmlFor="sel1">District</label>
                        <select className="form-control" id="district" onChange={this.districtSelected.bind(this)} value={this.state.selectedDistrict.name}>
                            {this.state.districts.map((district) => <option key={district.name} value={district.name}>{district.name}</option>)}
                        </select>
                        <label htmlFor="sel1">Facility Type</label>
                        <select className="form-control" id="facilityType" onChange={this.facilityTypeSelected.bind(this)} value={this.state.selectedFacilityType.name}>
                            {this.state.facilityTypes.map((facilityType) => <option key={facilityType.name}  value={facilityType.name}>{facilityType.name}</option>)}
                        </select>
                        <label htmlFor="sel1">Facility</label>
                        <select className="form-control" id="facility" onChange={this.facilitySelected.bind(this)} value={this.state.selectedFacility.name}>
                            {this.state.facilities.map((facility) => <option key={facility.name}  value={facility.name}>{facility.name}</option>)}
                        </select>
                        <label htmlFor="sel1">Assessment Type</label>
                        <select className="form-control" id="assessmentType" onChange={this.assessmentTypeSelected.bind(this)} value={this.state.selectedAssessmentType.name}>
                            {this.state.assessmentTypes.map((assessmentType) => <option key={assessmentType.name}  value={assessmentType.name}>{assessmentType.name}</option>)}
                        </select>
                        <label htmlFor="sel1">Enter facility (if not present in the list)</label>
                        <input type="text" className="form-control" id="usr" onChange={this.facilityNameEntered.bind(this)} value={this.state.facilityName}/>
                        <label htmlFor="exampleFormControlFile1">Example file input (only .XLSX file supported)</label>
                        <input type="file" className="form-control-file" id="assessmentFile" accept='.xlsx' onChange={this.fileChanged.bind(this)}/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                    <h4>Re-upload (overwrites already uploaded assessment)</h4>
                    <div className="form-group">
                        <label htmlFor="sel1">System identifier</label>
                        <input type="text" className="form-control" id="usr"/>
                        <label htmlFor="exampleFormControlFile1">Example file input</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Col>
            </Grid>
        </div>;
    }
};