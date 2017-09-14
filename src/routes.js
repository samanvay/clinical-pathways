import React from 'react';
import App from "./App";
import Dashboard from "./components/Dashboard";
import Forms from "./components/Forms";
import Breadcrumb from "./components/Breadcrumb";
import {Route, Switch} from 'react-router-dom';

export default function Routes() {
    return <Switch>
        <Route exact path="/">
            <App content={Dashboard}/>
        </Route>
        <Route path="/forms">
            <App content={Forms} breadcrumb={Breadcrumb}/>
        </Route>
        <Route path="/concepts">
            <App content={() => (<h2>Concepts</h2>)} breadcrumb={Breadcrumb}/>
        </Route>
    </Switch>
};