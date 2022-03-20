import { IpcMainInvokeEvent } from 'electron';
import storageController, { Note } from './storage.controller';

class NotesController {
    async save(event: IpcMainInvokeEvent, { name, data, children }: Note): Promise<string> {
        storageController.db.data.notes.push({
            name,
            data,
            children
        })
        await storageController.db.write()
        console.log("saveAll database dump", storageController.db.data)
        return "done"
    }

    getOne(event: IpcMainInvokeEvent, name?: string): Note {
        console.log("getOne storage ready?", storageController.isReady)
        let note;
        if (name) note = storageController.db.chain
            .get("notes").find({ name }).value()
        else note = storageController.db.chain
            .get("notes").first().value()
        console.log("getOne", note)
        return note;
    }

    getAll(event: IpcMainInvokeEvent): Note[] {
        console.log("getAll storage ready?", storageController.isReady)
        const notes = storageController.db.chain
            .get("notes").value()
        console.log("getAll notes", notes);
        return notes;
    }
}

const notesController = new NotesController();

export default notesController;