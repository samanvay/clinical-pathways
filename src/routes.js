import React from 'react';
import App from "./App";
import FacilitySelection from "./components/FacilitySelection";
import {Route, Switch} from 'react-router-dom';
import AdminHeader from "./components/AdminHeader";

const Default = (props) => {
    return <App header={AdminHeader} content={FacilitySelection} {...props}/>
};

export default function Routes(props) {
    return <Switch>
        <Route exact path="/" component={Default}/>
    </Switch>
};