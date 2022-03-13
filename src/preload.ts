import ExposedBackendApi from './ExposedBackendApi'
import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('backendApi', ExposedBackendApi)