import React, {useState} from 'react';

import styled from "styled-components";
import {axiosClient} from "../tools/axiosClient";
import { withRouter } from 'react-router-dom'
import { getTimeNow } from '../tools/getTimeNow'

const AddPost = props => {
    const API = `https://simple-blog-api.crew.red/posts`;
    const [inputValue, onChangeInputHandler] = useState('');
    const [textareaValue, onChangeTextareaHandler] = useState('');

    const onChangeHandler = (e, name) => {

        if (name === 'inputValue') {
            onChangeInputHandler(e.target.value)
        } else {
            onChangeTextareaHandler(e.target.value)
        }
    }
    const onClickHandler = async () => {
        const request = axiosClient();
        if(inputValue&&textareaValue){
            const data = {'title':inputValue,'body':textareaValue,date: getTimeNow(),}
            try {
                const response = await request.post(API,data)
              if(response.status === 201){
                props.history.push(`/`)
              }
                console.log(response.data);
            } catch (e) {
                console.log(e);
            }
        }

    }
    return (
        <Wrapper>
          <Header>
            <Back
              onClick={() => props.history.push(`/`)}
            >To Posts</Back>
           </Header>
            <Label>Add Title</Label>
            <Input
                type="text"
                value={inputValue}
                onChange={e => onChangeHandler(e, 'inputValue')}
            />
            <Label>Add Post</Label>
            <Textarea
                type="text"
                value={textareaValue}
                onChange={e => onChangeHandler(e)}
            ></Textarea>
            <Button
              disabled={!inputValue || !textareaValue}
                onClick={onClickHandler}
            >SEND</Button>
        </Wrapper>
    );

}


export default withRouter(AddPost);

const Wrapper = styled.div`
 max-width: 960px;
  min-width:50rem;
  margin: 0 auto;
  padding: 1rem;
  background: papayawhip;
  box-shadow:0 1px 4px black;
  border-radius:1rem;
  display:flex;
  flex-direction:column;
  align-items: center;
`;

const Label = styled.h2`
max-width:50rem;
width:100%;
font-size:2rem;
color:purple;
line-height:1;
    margin-bottom: .5rem;

`;
const Button = styled.button`
width:10rem;
font-size:2rem;
color:purple;
line-height:1;
    margin-bottom: .5rem;


`;
const Input = styled.input`
max-width:50rem;
width:100%;
font-size:2rem;
color:purple;
line-height:1;
outline:none;
    margin-bottom: .5rem;

`;
const Textarea = styled.textarea`
max-width:50rem;
width:100%;
font-size:2rem;
color:purple;
line-height:1;
outline:none;
    margin-bottom: .5rem;

`;

const Header = styled.div`
display:flex;
max-width:50rem;
width:100%;
margin-bottom:1rem;
justify-content: space-between;
`
const Back = styled.span`
color:blue;
cursor:pointer;
text-transform:uppercase;
`