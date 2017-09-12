import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import {createStore, combineReducers} from 'redux';
import Reducers from "./reducers/index";
import Dashboard from "./components/Dashboard";

import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Forms from "./components/Forms";
import AdminHeader from "./components/AdminHeader";
import Breadcrumb from "./components/Breadcrumb";

const history = createBrowserHistory();
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
            <div>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/forms" component={Forms}/>
                <Route path="/concepts" component={concepts}/>
            </div>
        </Router>
    </Provider>, document.getElementById('openchs-admin-client'));