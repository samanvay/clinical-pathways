import React from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import BaseComponent from "./BaseComponent";
import {HomeAction} from "../actions/HomeAction";

export default class Home extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState(HomeAction.onLoad());
    }

    qualificationSelected(event) {
        this.setState(HomeAction.setQualification(this.state, event.target.value));
    }

    sexSelected(event) {
        this.setState(HomeAction.setSex(this.state, event.target.value));
    }

    ageGroupSelected(event) {
        this.setState(HomeAction.setAgeGroup(this.state, event.target.value));
    }

    onFormSubmit(e) {
        e.preventDefault();
        HomeAction.login(this.state).then(this.setState).catch(this.setState);
    }

    render() {
        if (_.isNil(this.state)) return null;

        return <div>
            <Grid>
                <Row>
                    <Col md={4}>
                        <label htmlFor="sel1"><b>Qualification</b></label>
                    </Col>
                    <Col md={4}>
                        <label htmlFor="sel1"><b>Sex</b></label>
                    </Col>
                    <Col md={4}>
                        <label htmlFor="sel1"><b>Patient age</b></label>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        {this.state.qualifications.map((qualification) =>
                            <label className="radio-inline radioLabel"><input className="radioInput" type="radio" name="qualification"
                                                                   checked={qualification === this.state.qualification}/>{qualification}</label>)}
                    </Col>
                    <Col md={4}>
                        {this.state.sexes.map((sex) =>
                            <label className="radio-inline radioLabel"><input className="radioInput" type="radio" name="qualification"
                                                                   checked={sex === this.state.sex}/>{sex}</label>)}
                    </Col>
                    <Col md={2}>
                        <select className="form-control" id="patientAge" onChange={this.ageGroupSelected.bind(this)}
                                value={this.state.ageGroup}>
                            {this.state.ageGroups.map((ageGroup) => <option key={ageGroup} value={ageGroup}>{ageGroup}</option>)}
                        </select>
                    </Col>
                </Row>
            </Grid>
        </div>;
    }
};