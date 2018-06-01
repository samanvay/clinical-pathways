import React from 'react';
import {Alert, Button, Modal} from "react-bootstrap";
import BaseComponent from "./BaseComponent";
import FacilitySelectionProcess from "../model/FacilitySelectionProcess";
import PropTypes from 'prop-types';

export default class UploadStatusComponent extends BaseComponent {
    constructor(props) {
        super(props);
    }

    renderUploadView() {
        switch(this.props.state.uploadStatus) {
            case 'Uploading':
                return <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Uploading...</Modal.Title>
                    </Modal.Header>
                </Modal.Dialog>;
            case 'Completed':
                return <div>
                    <br/>
                    <Alert bsStyle="success" onDismiss={() => this.props.confirmUpload()}>
                        <strong>Assessment uploaded successfully</strong>
                        <p>{FacilitySelectionProcess.assessmentUploadMessage(this.props.state)}</p>
                        <p>
                            <Button bsStyle="success" bsSize="large" onClick={() => this.props.confirmUpload()}>Done</Button>
                        </p>
                    </Alert></div>;
        }
        return null;
    }

    render() {
        return FacilitySelectionProcess.uploadFailed(this.props.state) ?
            <Alert bsStyle="danger" onDismiss={() => this.props.confirmUpload()}>
                <strong>Error in uploading</strong>{FacilitySelectionProcess.uploadErrorMessage(this.props.state)}
            </Alert> : this.renderUploadView()
    }
};

UploadStatusComponent.propTypes = {
    state: PropTypes.object.isRequired,
    confirmUpload: PropTypes.func.isRequired
};
