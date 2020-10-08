import React from 'react';
import { MyEditor } from '../../Components/Editor/myEditor';
import './Editor.css'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Editor() {
  return (
    <div className="app">
      <MyEditor />
    </div>
  );
}

export default Editor;