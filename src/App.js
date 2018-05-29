import React from 'react';
import {withRouter} from "react-router-dom";

const App = (props) => {
    const {header: Header, history, location, content: Content} = props;
    return <div>
        {<Header location={location}/>}
        <div className="container">
            <Content history={history}/>
        </div>
    </div>;
};
export default withRouter(App);