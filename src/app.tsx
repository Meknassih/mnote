import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Editor from "./components/editor/Editor"
import NotesList from './components/notesList/NotesList';

function render() {
    ReactDOM.render(
        <div className="flex flex-row h-full">
            <div className="basis-1/3">
                <NotesList></NotesList>
            </div>
            <div className="basis-2/3">
                <Editor></Editor>
            </div>
        </div>
        , document.getElementById("root"));
}

render();