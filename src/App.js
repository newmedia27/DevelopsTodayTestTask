import React from 'react';
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

function App() {

    return (
        <div className="App">
            <h1>APP</h1>
        </div>
    );
}


export default withRouter(connect()(App));
