import React from "react";
import EditorJS from "@editorjs/editorjs";
const Header = require('@editorjs/header');
const NestedList = require('@editorjs/nested-list');
const Marker = require('@editorjs/marker');
const CodeTool = require('@editorjs/code');
const Table = require('@editorjs/table');
const Checklist = require('@editorjs/checklist');

export default class Editor extends React.Component {
    editor: EditorJS;

    componentDidMount() {
        this.editor = new EditorJS({
            onReady: () => {
            },
            holder: "editor",
            placeholder: 'Start typing your note...',
            tools: {
                header: {
                    class: Header,
                    shortcut: 'CMD+SHIFT+H',
                    config: {
                        placeholder: 'Header',
                        levels: [1, 2, 3, 4, 5, 6],
                        defaultLevel: 1
                    }
                },
                list: {
                    class: NestedList,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                marker: {
                    class: Marker,
                    shortcut: 'CMD+SHIFT+M',
                },
                code: CodeTool,
                table: Table,
                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
            },
        })
    }

    render() {
        return <>
            <div id="editor" className='rounded border border-slate-300 p-4 pl-14'></div>
        </>;
    }
}