import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Grid, Jumbotron, Row} from "react-bootstrap";

const Dashboard = () =>
    <div>
        <div className="jumbotron">
            <div className="container">
                <h1>Open Community Health System Admin</h1>
                <p>Configure Modules. Add Catchment data. Manage Forms/Metadata/Users. </p>
            </div>
        </div>
        <Grid>
            <Row>
                <Col sm={4}>
                    <Link to="forms">
                        <h3><i className="fa fa-wpforms fa-3x"></i> Forms</h3>
                    </Link>
                    <p>Build your own forms</p>
                </Col>
                <Col sm={4}>
                    <Link to="concepts">
                        <h3><i className="fa fa-question-circle fa-3x"></i> Concepts</h3>
                    </Link>
                    <p>Create new concepts</p>
                </Col>
            </Row>
        </Grid>
    </div>;

export default Dashboard;
