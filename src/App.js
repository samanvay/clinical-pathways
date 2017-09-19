import React from 'react';
import AdminHeader from "./components/AdminHeader";
import {withRouter} from "react-router-dom";

const App = (props) => {
    const {history, location, breadcrumb: Breadcrumb, content: Content} = props;
    return <div>
        <AdminHeader/>
        {Breadcrumb && <Breadcrumb location={location}/>}
        <div className="container">
            <Content history={history}/>
        </div>
    </div>;
};
export default withRouter(App);