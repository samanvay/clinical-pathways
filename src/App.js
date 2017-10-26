import React from 'react';
import AdminHeader from "./components/AdminHeader";
import {withRouter} from "react-router-dom";

const App = (props) => {
    const {header: Header, history, location, breadcrumb: Breadcrumb, content: Content} = props;
    return <div>
        {Header && <Header/>}
        {Breadcrumb && <Breadcrumb location={location}/>}
        <div className="container">
            <Content history={history}/>
        </div>
    </div>;
};
export default withRouter(App);