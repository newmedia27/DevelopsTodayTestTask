import React from 'react';
import {withRouter} from "react-router-dom";
import {axiosClient} from "../tools/axiosClient";

const Post = props => {
    console.log('PROPS', props);
    const {id} = props.match.params;
    const DELETE_API = `https://simple-blog-api.crew.red/posts/${id}`;
    const deletePostHandler = async () => {
        const request = axiosClient();
        try {
            const response = await request.delete(DELETE_API);
            if (response.status===200) {
                props.history.push(`/`)
            }
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div>
            <button
                onClick={deletePostHandler}
            >DELETE
            </button>
        </div>
    );
};


export default withRouter(Post);