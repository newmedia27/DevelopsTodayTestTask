import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {axiosClient} from "../tools/axiosClient";

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
            const data = {'title':inputValue,'body':textareaValue}
            try {
                const response = await request.post(API,data)
                console.log(response.data);
            } catch (e) {
                console.log(e);
            }
        }

    }
    return (
        <Wrapper>
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
                onClick={onClickHandler}
            >SEND</Button>
        </Wrapper>
    );

}

AddPost.propTypes = {};

export default AddPost;

const Wrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 1rem;
  background: papayawhip;
  box-shadow:0 1px 4px black;
  border-radius:1rem;
  margin-top:2rem;
  display:flex;
  flex-direction:column;
   justify-content: center;
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