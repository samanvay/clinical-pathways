import React, {Component} from 'react';
import Breadcrumb from "./Breadcrumb";
import AdminHeader from "./AdminHeader";

class Forms extends Component {
    render() {
        return <div>
            <AdminHeader/>
            <Breadcrumb name="forms"/>
            <h3>Form list</h3>
        </div>
    }
}

export default Forms;