import React from 'react';
import App from "./App";
import AssessmentImport from "./components/AssessmentImport";
import {Route, Switch} from 'react-router-dom';
import AdminHeader from "./components/AdminHeader";
import Home from "./components/Home";

const AssessmentImportApp = (props) => {
    return <App header={AdminHeader} content={AssessmentImport} {...props}/>
};

const HomeApp = (props) => {
    return <App header={AdminHeader} content={Home} {...props}/>
};

export default function Routes(props) {
    return <Switch>
        <Route exact path="/" component={HomeApp}/>
        <Route exact path="/facilityAssessment/import" component={AssessmentImportApp}/>
    </Switch>
};