import React, {useEffect} from 'react';
import styled from 'styled-components';
import {axiosClient} from "../tools/axiosClient";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setPosts} from "../store/actions/actions";

const Posts = props => {

    const PostsAPI = `https://simple-blog-api.crew.red/posts`;


    useEffect(() => {
        (async () => {
            const request = axiosClient();
            try {
                const response = await request.get(PostsAPI)
                if (response.status === 200) {
                    // console.log(response.data);
                    props.setPosts(response.data)
                }
            } catch (e) {

            }
        })()

    }, [])
    console.log(props);
    return (
        <PostsWrapper>
            <Div>
                <NavLink to="/add-post">Add a newPost</NavLink>
            </Div>
            <Content>
                {
                    props.posts && props.posts.map((item) => (
                        <PostElementWrapper
                            key={item.id}
                        >
                            <Title>{item.title}</Title>
                            <BodyText>{item.body}</BodyText>
                            <span><NavLink to={`post/${item.id}`}>learn more</NavLink></span>
                        </PostElementWrapper>
                    ))
                }
            </Content>
        </PostsWrapper>
    );

}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setPosts: e => dispatch(setPosts(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);


const PostsWrapper = styled.section`
  max-width: 1366px;
  min-width:50rem;
  margin: 0 auto;
  padding: 1rem;
  background: papayawhip;
  box-shadow:0 1px 4px black;
  border-radius:1rem;
  margin-top:2rem;
  display:flex;
  flex-direction:column;

`;

const Div = styled.div`
margin-left:auto;
margin-right:.5rem;
box-sizing:content-box;
margin-bottom:1rem;
`;
const Content = styled.div`

border:1px solid black;
display:block;
width:100%;

`
const PostElementWrapper = styled.div`

 display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;

`;
const Title = styled.h1`
font-size:2rem;
color:purple;
line-height:1;
    margin-bottom: .5rem;
text-align: center;
    text-transform: capitalize;

`;
const BodyText = styled.p`
font-size:2rem;
color:black;
line-height:1;
    margin-bottom: .5rem;
    text-align: left;

`;