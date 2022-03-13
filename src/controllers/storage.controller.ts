import { app } from 'electron';
import { join } from 'path'
import { Low, JSONFile } from 'lowdb'

type Note = {
    time: number;
    blocks: any[];
    version: string;
}

type DatabaseSchema = {
    notes: Note[]
}

class StorageController {
    db: Low<DatabaseSchema>;
    isReady: boolean;

    constructor() {
        this.isReady = false;
        // Use JSON file for storage
        const dbPath = join(app.getPath("userData"), "mnote_database.json")
        console.log("StorageController database path", dbPath)
        const adapter = new JSONFile<DatabaseSchema>(dbPath)
        this.db = new Low(adapter)
        this.init()
    }

    async init() {
        // Read data from JSON file, this will set db.data content
        await this.db.read()

        // If file.json doesn't exist, db.data will be null
        // Set default data
        // db.data = db.data || { posts: [] } // Node < v15.x
        this.db.data ||= { notes: [] }

        this.isReady = true;
    }
}

const storageController = new StorageController();

export default storageController;