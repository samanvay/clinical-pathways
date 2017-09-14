import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createHashHistory} from 'history';
import {createStore, combineReducers} from 'redux';
import Reducers from "./reducers/index";
import Dashboard from "./components/Dashboard";

import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Forms from "./components/Forms";
import AdminHeader from "./components/AdminHeader";
import Breadcrumb from "./components/Breadcrumb";
import App from "./App";
import Routes from "./routes";

const history = createHashHistory({queryKey: false})
const store = createStore(combineReducers(Reducers.createReducers()))
const concepts = () => (
    <div>
        <AdminHeader/>
        <Breadcrumb name="concepts"/>
        <h2>Concepts</h2>
    </div>
);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Routes/>
        </Router>
    </Provider>, document.getElementById('openchs-admin-client'));