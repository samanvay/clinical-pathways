import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Grid, Jumbotron, Row} from "react-bootstrap";

const Dashboard = () =>
    <Grid bsClass="text-center">
        <Jumbotron>
            <Row>
                <Col sm={4}>
                    <Link to="forms">
                        <i className="fa fa-wpforms fa-5x"></i>
                    </Link>
                    <h4>Forms</h4>
                </Col>
                <Col sm={4}>
                    <Link to="concepts">
                        <i className="fa fa-question-circle fa-5x"></i>
                    </Link>
                    <h4>Concepts</h4>
                </Col>
            </Row>
        </Jumbotron>
    </Grid>;

export default Dashboard;
