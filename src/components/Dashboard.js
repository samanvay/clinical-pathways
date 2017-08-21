import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

const adminEntities = [{
    pathname: "forms",
    className: "fa-wpforms",
    label: "Forms"
},{
    pathname: "concepts",
    className: "fa-question-circle",
    label: "Concepts"
}];

const children = [];
_.forEach(adminEntities, (adminEntity) => {
    const className = `fa ${adminEntity.className} fa-5x`;
    children.push(
        <Link to={adminEntity.pathname}>
            <i className={className}></i>{adminEntity.label}
        </Link>);
});

const Dashboard = () =>
    <div>
        {children}
    </div>;

export default Dashboard;
