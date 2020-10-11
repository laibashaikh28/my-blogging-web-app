
import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import { PreviewModal } from './previewModal';
import Button from 'react-bootstrap/Button'
import {MyContextConsumer} from '../../Context';

const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()));

class MyEditor extends Component {

  render() {

    return (
      <MyContextConsumer>{(value)=>{
        return(
      <div>
        <Editor
          editorState={value.editorState}
          wrapperClassName="rich-editor demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={value.onEditorStateChange}
          placeholder="Write your blog here..."
        />
        <h4>Underlying HTML</h4>
        <div  className="html-view" >
          {getHtml(value.editorState)}
        </div>
        
        <PreviewModal output={getHtml(value.editorState)} />
      </div>
        )}}
      </MyContextConsumer>
    );
  }
}

export { MyEditor };