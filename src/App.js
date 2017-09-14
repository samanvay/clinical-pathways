import React from 'react';
import AdminHeader from "./components/AdminHeader";
import {withRouter} from "react-router-dom";
const App = (props) =>{
    console.log(Object.getOwnPropertyNames(props));
    const {location, breadcrumb: Breadcrumb, content: Content} = props;
    if (Breadcrumb) {
        return <div>
            <AdminHeader/>
            <Breadcrumb location={location}/>
            <Content/>
        </div>;
    }
    return <div>
        <AdminHeader/>
        <Content/>
    </div>;
};
export default withRouter(App);