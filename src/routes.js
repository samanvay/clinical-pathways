import React from 'react';
import App from "./App";
import Dashboard from "./components/Dashboard";
import Forms from "./components/Forms";
import Breadcrumb from "./components/Breadcrumb";
import {Route, Switch} from 'react-router-dom';
import FormGroup from "./components/FormGroup";

export default function Routes(props) {
    return <Switch>
        <Route exact path="/">
            <App content={Dashboard}/>
        </Route>
        <Route exact path="/forms">
            <App content={Forms} breadcrumb={Breadcrumb}/>
        </Route>
        <Route path="/forms/addFields">
            <App content={FormGroup} breadcrumb={Breadcrumb}/>
        </Route>
        <Route path="/concepts">
            <App content={() => (<h2>Concepts</h2>)} breadcrumb={Breadcrumb}/>
        </Route>
    </Switch>
};