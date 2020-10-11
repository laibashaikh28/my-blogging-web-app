import React, { Component, createContext } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { PreviewModal } from './Components/Editor/previewModal'
import { MyEditor } from './Components/Editor/myEditor'
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';


const MyContext = React.createContext();
const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()));

class MyProvider extends Component {
  
    constructor(props) {
    super(props)
    this.state = {
        editorState: EditorState.createEmpty(),
        type: 'Food & Health',

    };
    this.onBlogPost = this.onBlogPost.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.ongetHtml = this. ongetHtml.bind(this)

    }
    ongetHtml = () =>{
      getHtml(this.state.editorState)
    }
    onEditorStateChange = editorState => {
      this.setState({
        editorState 
      });

      console.log(editorState)
    };
        onChange=(e)=>{
            e.preventDefault();
            this.setState({ [e.target.name]: e.target.value })
        
        }

      onBlogPost=(event)=>{

        console.log("functionn called" + this.state.type + getHtml(this.state.editorState))
          event.preventDefault();
          axios({
            method: 'post',
            url: '/done',
            data: {
                content: getHtml(this.state.editorState),
                type: this.state.type
            },
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
      
    }
    render() {
      let editorState = this.editorState;
      /* render something based on the value of MyContext */
      
      return (
        <MyContext.Provider value={
            {
                ...this.state,
            
                onBlogPost:this.onBlogPost,
                onChange:this.onChange,
                onRegister:this.onRegister,
                onEditorStateChange: this.onEditorStateChange,
                ongetHtml: this.ongetHtml
  
            }
        }>
        {this.props.children}
        </MyContext.Provider>    
      )      
    }
  }


  export const MyContextConsumer = MyContext.Consumer;

  export  default withRouter(MyProvider);