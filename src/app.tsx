import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Editor from "./components/editor/Editor"
import NotesList from './components/notesList/NotesList';

function render() {
    ReactDOM.render(
        <div className="columns-2">
            <NotesList></NotesList>
            <Editor></Editor>
        </div>
        , document.body);
}

render();