import { IpcMainInvokeEvent } from 'electron';
import storageController from './storage.controller';

class NotesController {
    async save(event: IpcMainInvokeEvent, data: any) {
        storageController.db.data.notes.push(data)
        await storageController.db.write()
        console.log("saveAll database dump", storageController.db.data)
        return "done"
    }
}

const notesController = new NotesController();

export default notesController;