import React, { useEffect } from 'react'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPosts } from '../store/creator/getPosts'

const Posts = props => {

  const { getPosts } = props

  useEffect(() => {

    getPosts()

  }, [getPosts])

  return (
    <PostsWrapper>
      {
        !props.posts.length
          ?<NotPosts><CreateLink
          onClick={()=>props.history.push(`/add-post`)}
          >Add a newPost</CreateLink></NotPosts>
          :<>
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
                    <PostElementFooterWrapper>
                      <Date>{item.date && item.date}</Date>
                      <LearnMore

                        onClick={() => props.history.push(`/post/${item.id}`)}

                      >learn more </LearnMore>
                    </PostElementFooterWrapper>
                  </PostElementWrapper>
                ))
              }
            </Content>
          </>
      }

    </PostsWrapper>
  )

}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: e => dispatch(getPosts(e)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))

const NotPosts=styled.h1`
text-align:center;

`;const CreateLink = styled.span`
color:blue;
cursor:pointer;
font-size:1.2rem;
`
const PostsWrapper = styled.section`
  max-width: 960px;
  min-width:50rem;
  margin: 0 auto;
  padding: 1rem;
  background: papayawhip;
  box-shadow:0 1px 4px black;
  border-radius:1rem;
  display:flex;
  flex-direction:column;
`

const Div = styled.div`
margin-left:auto;
margin-right:.5rem;
box-sizing:content-box;
margin-bottom:1rem;
`
const Content = styled.div`

display:block;
width:100%;

`
const PostElementWrapper = styled.div`
border-bottom:1px solid black;
padding:.5rem;
 display: flex;
 flex-direction: column;

`
const Title = styled.h1`
font-size:2rem;
color:purple;
line-height:1;
margin-bottom: 1.5rem;
text-align: center;
text-transform: capitalize;
max-width:720px;
align-self:center;
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

const LearnMore = styled.span`
color:blue;
cursor:pointer;
margin-left:auto;
font-size:1.2rem;
`
const PostElementFooterWrapper = styled.div`
padding:.2rem 0;
display:flex;
`
const Date = styled.span``
