import React from "react";
import notesService from '../../services/notes.service';

export default class SaveButton extends React.Component {
    async save() {
        const result = await notesService.saveAll()
    }

    render() {
        return <button onClick={this.save}>Save</button>
    }
}