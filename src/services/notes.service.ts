import { ElectronApi } from "../types"

declare namespace window {
    let electronAPI: ElectronApi
};

class NotesService {
    async save(data: any): Promise<string> {
        return await window.electronAPI.save(data)
    }
}

const notesService = new NotesService();

export default notesService;