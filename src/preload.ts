const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    saveAll: (data: any) => ipcRenderer.invoke('notes:saveAll', data)
})