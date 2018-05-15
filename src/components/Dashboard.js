import React from 'react';
import {Grid, Row, Col} from "react-bootstrap";

const Dashboard = () =>
    <div>
        <Grid>
            <Col>
                <div className="form-group">
                    <label htmlFor="sel1">State</label>
                    <select className="form-control" id="sel1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <label htmlFor="sel1">District</label>
                    <select className="form-control" id="sel1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <label htmlFor="sel1">Facility Type</label>
                    <select className="form-control" id="sel1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <label htmlFor="sel1">Facility</label>
                    <select className="form-control" id="sel1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <label htmlFor="sel1">Enter facility (if not present in the list)</label>
                    <input type="text" className="form-control" id="usr"/>
                    <label htmlFor="sel1">Tag (optional, to differentiate between assessments for the same facility)</label>
                    <input type="text" className="form-control" id="usr"/>
                    <label htmlFor="exampleFormControlFile1">Example file input</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
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

export default Dashboard;
