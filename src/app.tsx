import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Editor from "./components/editor/Editor"
import Home from './components/home/Home';
import NotesList from './components/notesList/NotesList';
import SaveButton from './components/notesList/SaveButton';

function render() {
    ReactDOM.render(
        <Home></Home>
        , document.getElementById("root"));
}

render();