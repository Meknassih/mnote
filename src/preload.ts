const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    save: (data: any) => ipcRenderer.invoke('notes:save', data)
})