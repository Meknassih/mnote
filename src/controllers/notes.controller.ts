import { IpcMainInvokeEvent } from 'electron';

class NotesController {
    async saveAll(event: IpcMainInvokeEvent, data: any) {
        console.log("saveAll ", data)
        return "done"
    }
}

const notesController = new NotesController();

export default notesController;