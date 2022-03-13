import { ElectronApi } from "../types"

declare namespace window {
    let electronAPI: ElectronApi
};

class NotesService {
    async saveAll(): Promise<any> {
        await window.electronAPI.saveAll({})
    }
}

const notesService = new NotesService();

export default notesService;