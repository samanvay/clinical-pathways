import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import {createStore, combineReducers} from 'redux';
import Reducers from "./reducers/index";
import Dashboard from "./components/Dashboard";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const history = createBrowserHistory();
const store = createStore(combineReducers(Reducers.createReducers()))
const forms = () => (
    <div>
        <h2>Forms</h2>
    </div>
);
const concepts = () => (
    <div>
        <h2>Concepts</h2>
    </div>
);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/forms" component={forms}/>
                <Route path="/concepts" component={concepts}/>
            </div>
        </Router>
    </Provider>, document.getElementById('openchs-admin-client'));