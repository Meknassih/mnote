import React from "react";
import EditorJS from "@editorjs/editorjs";

export default class Editor extends React.Component {
    editor: EditorJS;

    componentDidMount() {
        this.editor = new EditorJS({
            holder: "editor",
            placeholder: 'Start typing your note...'
        })
    }

    render() {
        return <>
            <div id="editor" className='rounded border border-slate-300 p-4 pl-14'></div>
        </>;
    }
}