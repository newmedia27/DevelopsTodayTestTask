import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";

import Posts from "./container/Posts";
import  AddPost from "./container/AddPost";
import Post from "./container/Post";

function App() {

    return (
        <div className="App">
            <Switch>  <Route path={`/post/:id`} exact component={Post}/>
                <Route path={`/add-post`} exact component={AddPost}/>

                <Route path={`/`} exact component={Posts}/>
            </Switch>
        </div>
    );
}


export default withRouter(connect()(App));
