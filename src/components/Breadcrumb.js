import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumb = (props) => {
    const items = [];
    if (props.name === 'forms') {
        items.push(<li className="active">Forms</li>);
    } else if (props.name === 'concepts') {
        items.push(<li className="active">Concepts</li>);
    }
    return (<div className="container">
        <ol className="breadcrumb">
            <li><Link to="/">Dashboard</Link></li>
            {items}
        </ol>
    </div>);
};
export default Breadcrumb;
