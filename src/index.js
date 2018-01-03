import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createHashHistory} from 'history';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import Reducers from "./reducers/index";
import thunkMiddleware from 'redux-thunk'

import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Routes from "./routes";

const history = createHashHistory({queryKey: false});
const store = createStore(combineReducers(Reducers.createReducers()), applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Routes/>
        </Router>
    </Provider>, document.getElementById('openchs-admin-client'));