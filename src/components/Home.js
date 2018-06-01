import React from 'react';
import {Col, Grid} from "react-bootstrap";
import BaseComponent from "./BaseComponent";
import {HomeAction} from "../actions/HomeAction";
import {Redirect} from 'react-router-dom';

export default class Home extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = HomeAction.empty();
    }

    componentDidMount() {
        HomeAction.onLoad(this.state).then(this.setState);
    }

    emailEntered(event) {
        this.setState(HomeAction.setEmail(this.state, event.target.value));
    }

    passwordEntered(event) {
        this.setState(HomeAction.setPassword(this.state, event.target.value));
    }

    onFormSubmit(e) {
        e.preventDefault();
        HomeAction.login(this.state).then(this.setState);
    }

    render() {
        if (this.state.status) {
            return <Redirect to={{pathname: '/facilityAssessment/import', state: {user: this.state.user}}}/>
        }

        return <div>
            <Grid>
                <Col>
                    <div className="form-group">
                        <br/>
                        <label htmlFor="sel1"><b>Email</b></label>
                        <input type="text" className="form-control" id="email" onChange={this.emailEntered.bind(this)} value={this.state.email}/>
                        <br/>

                        <label htmlFor="sel1"><b>Password</b></label>
                        <input type="password" className="form-control" id="password" onChange={this.passwordEntered.bind(this)} value={this.state.password}/>
                        <br/>

                        <button type="submit" className="btn btn-primary" onClick={this.onFormSubmit.bind(this)}>Login</button>
                    </div>
                </Col>
            </Grid>
        </div>;
    }
};