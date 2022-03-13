import { ipcRenderer } from 'electron'
import { Note } from './controllers/storage.controller'

export default {
    save: (data: Note): Promise<string> => {
        return ipcRenderer.invoke('notes:save', data)
    },
    getOne: (name?: string): Promise<Note> => {
        return ipcRenderer.invoke('notes:getOne', name)
    }
}