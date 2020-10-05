import React from "react";
import Dante from 'Dante2';
import './Editor.css';

const Editor = () =>{
    return(
        <Dante
        className = "padd"
        onChange ={editor => { console.log('editor content: ', editor.emitSerializedOutput()) }}
        data_storage={{ url: '/save_path', method: 'POST', }}
        // xhr={{ before_handler: function() { alert('this is the before ajax handler') },
        //  failure_handler: function(error) { alert('this is the error ajax handler') }, }}
         key_commands={{ 'alt-shift': [{ key: 65, cmd: 'add-new-block' }], 'alt-cmd': [ { key: 49, cmd: 'toggle_block:header-one' }, { key: 50, cmd: 'toggle_block:header-two' }, { key: 53, cmd: 'toggle_block:blockquote' }, ], cmd: [ { key: 66, cmd: 'toggle_inline:BOLD' }, { key: 73, cmd: 'toggle_inline:ITALIC' }, { key: 75, cmd: 'insert:link' }, ], }}


        />

    )
}
export default Editor;