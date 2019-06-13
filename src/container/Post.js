import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { axiosClient } from '../tools/axiosClient'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AddComment from './AddComment'
import { setOnePost } from '../store/creator/setOnePost'
import { setPost } from '../store/actions/actions'

const Post = props => {
  const { post, setPost } = props
  const { id } = props.match.params

  useEffect(() => {
    setPost(id)
  }, [id, setPost])

  const deletePostHandler = async () => {
    const request = axiosClient()
    try {
      const response = await request.delete(`https://simple-blog-api.crew.red/posts/${id}`)
      if (response.status === 200) {
        props.history.push(`/`)
      }
    } catch (e) {
      // console.log(e);
    }
  }

  return (

    <WrapperPost>
      <Header>
        <Back
          onClick={() => props.history.push(`/`)}
        >To Posts</Back>
        <DeletePost
          onClick={deletePostHandler}
        >DELETE
        </DeletePost></Header>

      <PostContent>
        <Title>{post.title}</Title>
        <BodyText>{post.body}</BodyText>
      </PostContent>
      {
        post.comments && post.comments.length > 0
          ? <>
            <Title>Comments:</Title>
            <CommentWrapper>
              {post.comments.map(e => (
                <CommentElement key={e.id}>
                  <Author>{e.author && e.author}</Author>
                  <Date>{e.date && e.date}</Date>
                  <CommentText>{e.text && e.text}</CommentText>
                </CommentElement>
              ))
              }
            </CommentWrapper>
          </>
          : null
      }

      <AddComment
        postId={post.id}
        setOnePost={props.setOnePost}
        post={post}
      />
    </WrapperPost>

  )
}

function mapStateToProps(state) {
  return {
    post: state.post.post,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPost: e => dispatch(setOnePost(e)),
    setOnePost:e=>dispatch(setPost(e))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))


const WrapperPost = styled.section`
  max-width: 960px;
  min-width:50rem;
  min-height:100vh;
  margin: 0 auto;
  padding: 1rem;
  background: papayawhip;
  box-shadow:0 1px 4px black;
  border-radius:1rem;
  display:flex;
  flex-direction:column;
`
const PostContent = styled.div`
 border-bottom:1px solid black;
display:block;
width:100%;
margin-bottom:1.5rem;
padding:2rem 0;

`
const Title = styled.h1`
font-size:2rem;
color:purple;
line-height:1;
margin-bottom: 1.5rem;
text-align: center;
text-transform: capitalize;

`
const BodyText = styled.p`
font-size:2rem;
color:black;
line-height:1;
margin-bottom: .5rem;
text-align: left;
max-width:720px;
width:100%;
margin:0 auto;

`

const DeletePost = styled.span`
color:blue;
cursor:pointer;
margin-left:auto;
`
const Back = styled.span`
color:blue;
cursor:pointer;
text-transform:uppercase;
`

const Header = styled.div`
display:flex;
margin-bottom:1rem;
`
const CommentWrapper = styled.ul`
padding:1rem .5rem;
margin:0 auto;
margin-bottom: 1rem;
max-width:720px;
width:100%;
background-color: lightgray;
border-radius:5px;

`
const CommentElement = styled.li`
display:flex;
flex-direction:column;
margin-bottom: 1rem;
`
const Author = styled.span`
font-size:2rem;
margin:bottom:.5rem;
text-transform:capitalize;
`
const Date = styled.span`
font-size:1.2rem;
margin:bottom:.5rem;

`
const CommentText = styled.p`

font-size:1.6rem;
font-style:italic;
margin:bottom:.5rem;

`