import React from "react"
import Editor from '../editor/Editor'
import NotesList from '../notesList/NotesList'
import SaveButton from '../notesList/SaveButton'
import notesService from '../../services/notes.service';
import EditorJS from "@editorjs/editorjs";
import { Note } from '../../controllers/storage.controller';
const Header = require('@editorjs/header');
const NestedList = require('@editorjs/nested-list');
const Marker = require('@editorjs/marker');
const CodeTool = require('@editorjs/code');
const Table = require('@editorjs/table');
const Checklist = require('@editorjs/checklist');

interface HomeState {
    editorInstance: EditorJS,
    activeNote: Note;
}

export default class Home extends React.Component<{}, HomeState> {
    constructor(props: {}) {
        super(props)
        this.state = { editorInstance: null, activeNote: null }
    }

    async save() {
        const noteContent = await this.state.editorInstance.save()
        const result = await notesService.save({
            name: "",
            data: noteContent,
            children: []
        })
        console.log("save result", result)
    }

    componentDidMount() {
        notesService.getOne().then(note => {
            this.setState({ activeNote: note })
            const editorInstance = new EditorJS({
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
                data: note.data
            })
            this.setState({ editorInstance })
        })
    }

    render() {
        return <>
            <div className="flex flex-row">
                <SaveButton onClick={() => this.save()}></SaveButton>
            </div>
            <div className="flex flex-row h-full">
                <div className="basis-1/3">
                    <NotesList></NotesList>
                </div>
                <div className="basis-2/3">
                    <Editor></Editor>
                </div>
            </div>
        </>
    }
}