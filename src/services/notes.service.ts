import { ElectronApi } from "../types"

declare namespace window {
    let electronAPI: ElectronApi
};

class NotesService {
    async saveAll(data: any): Promise<string> {
        return await window.electronAPI.saveAll(data)
    }
}

const notesService = new NotesService();

export default notesService;