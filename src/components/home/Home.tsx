import React from "react"
import Editor from '../editor/Editor'
import NotesList from '../notesList/NotesList'
import SaveButton from '../notesList/SaveButton'
import notesService from '../../services/notes.service';


export default class Home extends React.Component {
    editor: Editor;

    async save() {
        const result = await notesService.saveAll({ data: "yes" })
        console.log("save result", result)
    }

    render() {
        return <div className="flex flex-row h-full">
            <div className="basis-1/3">
                <SaveButton onSave={this.save}></SaveButton>
                <NotesList></NotesList>
            </div>
            <div className="basis-2/3">
                <Editor ref={instance => { this.editor = instance }}></Editor>
            </div>
        </div>
    }
}