import React, {Component} from 'react';
import 'whatwg-fetch';
import ProgramCard from './ProgramCard';
import NewFormModal, {NewFormButton} from "./NewFormModal";

class Forms extends Component {
    constructor() {
        super();
        this.state = {data: [], loading: true};
        this.setState = this.setState.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8021/forms", {credentials: 'include', Accept: 'application/json'})
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else if (response.status === 401 || response.status === 403) {
                    window.location.pathname = '/';
                    return null;
                }
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            })
            .then((data) => {
                this.setState({data: data, loading: false});
            })
            .catch((error) => {
                this.setState({loading: false});
            });

    }

    render() {
        return <div>
            <NewFormButton/>
            <NewFormModal/>
            <ProgramCard data={this.state.data}/>
        </div>
    }
}

export default Forms;