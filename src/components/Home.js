import React from 'react';
import {Col, Grid} from "react-bootstrap";
import BaseComponent from "./BaseComponent";
import {FacilitySelectionAction} from "../actions/FacilitySelectionAction";
import {HomeAction} from "../actions/HomeAction";

export default class Home extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = HomeAction.empty();
    }

    componentDidMount() {
        this.setState(HomeAction.onLoad(this.state));
    }

    emailEntered(event) {
        this.setState(HomeAction.setEmail(this.state, event.target.value));
    }

    passwordEntered(event) {
        this.setState(HomeAction.setPassword(this.state, event.target.value));
    }

    onFormSubmit(e) {
        e.preventDefault();
        HomeAction.login(this.state);
    }

    render() {
        return <div>
            <Grid>
                <Col>
                    <div className="form-group">
                        <label htmlFor="sel1">Email</label>
                        <input type="text" className="form-control" id="email" onChange={this.emailEntered.bind(this)} value={this.state.email}/>
                        <label htmlFor="sel1">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.passwordEntered.bind(this)} value={this.state.password}/>
                        <button type="submit" className="btn btn-primary" onClick={this.onFormSubmit.bind(this)}>Login</button>
                    </div>
                </Col>
            </Grid>
        </div>;
    }
};