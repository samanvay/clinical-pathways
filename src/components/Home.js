import React from 'react';
import {Col, Grid, Alert} from "react-bootstrap";
import BaseComponent from "./BaseComponent";
import {HomeAction} from "../actions/HomeAction";
import {Redirect} from 'react-router-dom';
import GlobalState from "../model/GlobalState";

export default class Home extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = HomeAction.empty();
    }

    componentDidMount() {
        HomeAction.onLoad(this.state).then(this.setState).catch(this.setState);
    }

    emailEntered(event) {
        this.setState(HomeAction.setEmail(this.state, event.target.value));
    }

    passwordEntered(event) {
        this.setState(HomeAction.setPassword(this.state, event.target.value));
    }

    onFormSubmit(e) {
        e.preventDefault();
        HomeAction.login(this.state).then(this.setState).catch(this.setState);
    }

    render() {
        if (!GlobalState.initialised) return <div/>;

        if (GlobalState.isLoggedIn) {
            return <Redirect to={{pathname: '/facilityAssessment/import', state: {user: this.state.user}}}/>;
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
                        <br/>
                        <br/>
                        {_.isNil(GlobalState.loginError) ? null :
                            <Alert bsStyle="danger">
                                <h4>Login failed</h4>
                            </Alert>
                        }
                    </div>
                </Col>
            </Grid>
        </div>;
    }
};