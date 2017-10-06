import React, {Component} from 'react';
import FormGroup from "./FormGroup";
import UpdateForm from "./UpdateForm";

class FormDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="row">
            <div className="col-8">
                <FormGroup/>
            </div>
            <div className="col-4">
                <UpdateForm/>
            </div>
        </div>;
    }
}
export default FormDetails;