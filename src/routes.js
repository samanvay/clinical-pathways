import React from 'react';
import App from "./App";
import Dashboard from "./components/Dashboard";
import {Route, Switch} from 'react-router-dom';
import AdminHeader from "./components/AdminHeader";

const Default = (props) => {
    return <App header={AdminHeader} content={Dashboard} {...props}/>
};

const FormList = (props) => {
    return <App header={AdminHeader} content={Forms} breadcrumb={Breadcrumb} {...props}/>
};

export default function Routes(props) {
    return <Switch>
        <Route exact path="/" component={Default}/>
        <Route exact path="/forms" component={FormList}/>
    </Switch>
};