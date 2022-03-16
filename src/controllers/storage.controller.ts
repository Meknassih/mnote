import { app } from 'electron';
import { join } from 'path'
import { Low, JSONFile, Adapter } from 'lowdb'
import { OutputData } from '@editorjs/editorjs';
import lodash from 'lodash'

export type Note = {
    name: string;
    data: OutputData;
    children: Note[]
}

type DatabaseSchema = {
    notes: Note[]
}

// Extend Low class with a new `chain` field
class LowWithLodash<T> extends Low<T> {
    /* constructor(adapter: Adapter<T>) {
        super(adapter)
    } */
    chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data')
}

class StorageController {
    db: LowWithLodash<DatabaseSchema>;
    isReady: boolean;

    constructor() {
        this.isReady = false;
        // Use JSON file for storage
        const dbPath = join(app.getPath("userData"), "mnote_database.json")
        console.log("StorageController database path", dbPath)
        const adapter = new JSONFile<DatabaseSchema>(dbPath)
        this.db = new LowWithLodash<DatabaseSchema>(adapter)
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