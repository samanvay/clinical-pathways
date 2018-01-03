import React, {Component} from 'react';
import moment from 'moment';
import addNewForm, {fetchGroups} from "../actions/newForm";
import {initGroups} from "../actions/addField";
import {connect} from "react-redux";

class FormCard extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        const form = this.props.form;
        const duration = moment(form.lastModifiedDateTime).fromNow(true);
        return <div className="col-md-3" key={form.uuid}>
            <div className="card h-100">
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{form.name}</a>
                    </h4>
                    <h5>{form.formType}</h5>
                    <a href="#" className="btn btn-primary" onClick={() => {
                        console.log("onClick");
                        this.props.addNewForm(form.name, form.formType, form.programName, form.uuid);
                        this.props.fetchGroups(form.name, form.uuid, ()=>{this.props.history.push("/forms/addFields")});
                    }}>Open</a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated {duration} ago</small>
                </div>
            </div>
        </div>;
    }
}
export default connect((state) => {
    return {}
}, {addNewForm, fetchGroups})(FormCard);