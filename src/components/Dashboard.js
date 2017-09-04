import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Grid, Row} from "react-bootstrap";
import AdminHeader from "./AdminHeader";

const Dashboard = () =>
    <div>
        <AdminHeader/>
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
