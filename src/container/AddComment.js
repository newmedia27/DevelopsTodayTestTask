import React, { useState } from 'react'
import styled from 'styled-components'
import { axiosClient } from '../tools/axiosClient'
import { getTimeNow } from '../tools/getTimeNow'


const AddComment = props => {
  const ADD_COMMENT_API = `https://simple-blog-api.crew.red/comments`

  const [inputValue, onChangeInputHandler] = useState('')
  const [textareaValue, onChangeTextareaHandler] = useState('')

  const { postId } = props


  const onChangeHandler = (e, item = null) => {
    if (item === 'inputValue') {
      onChangeInputHandler(e.target.value)
    } else {
      onChangeTextareaHandler(e.target.value)
    }
  }
  const sendCommentHandler = async () => {

    const data = {
      postId,
      author: inputValue,
      text: textareaValue,
      date: getTimeNow(),
    }

    const request = axiosClient()
    try {
      const response = await request.post(ADD_COMMENT_API, data)
      if(response.status === 201){
        const post = {...props.post}
        post.comments = [response.data,...props.post.comments]
        props.setOnePost(post)
        onChangeInputHandler('')
        onChangeTextareaHandler('')
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <Title>Add You Comments:</Title>
    <AddCommentWrapper>
      <Label>You name</Label>
      <Input
        type="text"
        value={inputValue}
        onChange={e => onChangeHandler(e, 'inputValue')}
      />
      <Label>You Comment</Label>
      <Textarea
        type="text"
        value={textareaValue}
        onChange={onChangeHandler}
      />
      <Button
        disabled={!inputValue || !textareaValue}
        onClick={sendCommentHandler}
      >SEND</Button>
    </AddCommentWrapper>
      </>
  )
}



export default AddComment


const AddCommentWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    margin: 1rem 0;

`
const Label = styled.h2`
max-width:50rem;
width:100%;
font-size:2rem;
color:purple;
line-height:1;
    margin-bottom: .5rem;

`
const Button = styled.button`
width:10rem;
font-size:2rem;
color:purple;
line-height:1;
    margin-bottom: .5rem;


`
const Input = styled.input`
max-width:50rem;
width:100%;
font-size:2rem;
color:purple;
line-height:1;
outline:none;
    margin-bottom: .5rem;

`
const Textarea = styled.textarea`
max-width:50rem;
width:100%;
font-size:2rem;
color:purple;
line-height:1;
outline:none;
    margin-bottom: .5rem;

`
const Title = styled.h1`
font-size:2rem;
color:purple;
line-height:1;
margin-bottom: 1.5rem;
text-align: center;
text-transform: capitalize;

`