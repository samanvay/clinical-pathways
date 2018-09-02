import React from 'react';
import App from "./App";
import {Route, Switch} from 'react-router-dom';
import AdminHeader from "./components/AdminHeader";
import Home from "./components/Home";

const HomeApp = (props) => {
    return <App header={AdminHeader} content={Home} {...props}/>
};

export default function Routes(props) {
    return <Switch>
        <Route exact path="/" component={HomeApp}/>
    </Switch>
};