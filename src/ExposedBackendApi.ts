import { ipcRenderer } from 'electron'

export default {
    save: (data: any): Promise<string> => {
        return ipcRenderer.invoke('notes:save', data)
    }
}