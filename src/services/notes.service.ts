import { Note } from '../controllers/storage.controller';

class NotesService {
    async save(note: Note): Promise<string> {
        return await window.backendApi.save(note)
    }

    async getOne(name?: string): Promise<Note> {
        return await window.backendApi.getOne(name)
    }

    async getAll(): Promise<Note[]> {
        return await window.backendApi.getAll()
    }
}

const notesService = new NotesService();

export default notesService;