import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumb = (props) => {
    const items = [];
    if (props.location !== undefined) {
        items.push(<li className="breadcrumb-item active" key={props.location.pathname}>{activePage(props.location.pathname)}</li>);
    }
    return (
        <div className="container">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                {items}
            </ol>
        </div>
    );
};

const activePage = (path)=>{
    switch (path) {
        case "/forms":
            return "Forms";
        case "/concepts":
            return "Concepts";
        default:
            return "";
    }
};
export default Breadcrumb;