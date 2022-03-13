const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    saveAll: () => ipcRenderer.invoke('notes:saveAll')
})