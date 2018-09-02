import React from 'react';
import {Col, Grid, Row, Image} from "react-bootstrap";
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
        console.log(event.target);
        this.setState(HomeAction.setQualification(this.state, event.target.value));
    }

    sexSelected(event) {
        console.log(event.target);
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

        console.log(this.state);
        let file = `/images/${this.state.file}`;

        return <div>
            <br/>
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
                            <label className="radio-inline radioLabel" key={"Q" + qualification}><input className="radioInput" type="radio" name="qualification"
                                                                                                        value={qualification}
                                                                                                        checked={qualification === this.state.qualification}
                                                                                                        onChange={this.qualificationSelected.bind(this)}/>{qualification}
                            </label>)}
                    </Col>
                    <Col md={4}>
                        {this.state.sexes.map((sex) =>
                            <label className="radio-inline radioLabel" key={"Q" + sex}><input className="radioInput" type="radio" name="sex" value={sex}
                                                                                              checked={sex === this.state.sex}
                                                                                              onChange={this.sexSelected.bind(this)}/>{sex}</label>)}
                    </Col>
                    <Col md={2}>
                        <select className="form-control" id="patientAge" onChange={this.ageGroupSelected.bind(this)}
                                value={this.state.ageGroup}>
                            {this.state.ageGroups.map((ageGroup) => <option key={ageGroup} value={ageGroup}>{ageGroup}</option>)}
                        </select>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Grid>
            <hr/>
            <Grid>
                <Row>
                    <Col md={8}>
                        <img src={file} height={350} width={700}/>
                    </Col>
                    <Col md={4}>
                        <div className="verticalLine">
                            <fieldset style={{"margin-left": "10px"}}>
                                <legend>References</legend>
                                <p>1. Integrated management of newborn</p>
                                <p>2. Essential Pediatrics 9th Edition- O.P. Ghai</p>
                            </fieldset>
                            <br/>
                            <br/>
                            <fieldset style={{"margin-left": "10px"}}>
                                <legend>User Comments</legend>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor semper velit, in maximus arcu imperdiet id. Duis magna nibh,
                                    porttitor ut dignissim id, bibendum in quam.</p>
                                <p>Integer ut metus placerat, dictum dolor eu, maximus lorem. Sed vehicula quis dolor non pretium. Fusce sagittis felis quis varius
                                    vulputate. Mauris molestie iaculis fringilla.</p>
                            </fieldset>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>;
    }
};